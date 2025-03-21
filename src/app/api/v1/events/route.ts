import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"
import { DiscordClient } from "@/lib/discord-client"
import { db } from "@/db"

const REQUEST_VALIDATOR = z
  .object({
    category: CATEGORY_NAME_VALIDATOR,
    fields: z.record(z.string().or(z.number()).or(z.boolean())).optional(),
    description: z.string().optional(),
  })
  .strict()

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // 允許所有來源
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "*", // 允許所有標頭
  "Access-Control-Allow-Credentials": "true",
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export const POST = async (req: NextRequest) => {
  try {
    const authHeader = req.headers.get("Authorization")

    if (!authHeader) {
      return NextResponse.json(
        { message: "Unauthorized" },
        {
          status: 401,
          headers: corsHeaders,
        }
      )
    }

    if (!authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          message: "Invalid auth header format. Expected: 'Bearer <API_KEY>'",
        },
        {
          status: 401,
          headers: corsHeaders,
        }
      )
    }

    const apiKey = authHeader.split(" ")[1]
    if (!apiKey || apiKey.trim() === "") {
      return NextResponse.json(
        { message: "Invalid API key" },
        {
          status: 401,
          headers: corsHeaders,
        }
      )
    }

    const user = await db.user.findUnique({
      where: { apiKey },
      include: { eventCategories: true },
    })
    if (!user) {
      return NextResponse.json(
        { message: "Invalid API key" },
        {
          status: 401,
          headers: corsHeaders,
        }
      )
    }

    if (!user.discordId) {
      return NextResponse.json(
        {
          message: "Please enter your discord ID in your account settings",
        },
        {
          status: 403,
          headers: corsHeaders,
        }
      )
    }

    const discord = new DiscordClient(process.env.DISCORD_BOT_TOKEN)

    const dmChannel = await discord.createDM(user.discordId)

    let requestData: unknown

    try {
      requestData = await req.json()
    } catch (err) {
      return NextResponse.json(
        {
          message: "Invalid JSON request body",
        },
        {
          status: 400,
          headers: corsHeaders,
        }
      )
    }

    const validationResult = REQUEST_VALIDATOR.parse(requestData)

    const category = user.eventCategories.find(
      (cat) => cat.name === validationResult.category
    )

    if (!category) {
      return NextResponse.json(
        {
          message: `You dont have a category named "${validationResult.category}"`,
        },
        {
          status: 404,
          headers: corsHeaders,
        }
      )
    }

    const eventData = {
      title: `${category.emoji || "🔔"} ${
        category.name.charAt(0).toUpperCase() + category.name.slice(1)
      }`,
      description:
        validationResult.description ||
        `A new ${category.name} event has occurred!`,
      color: category.color,
      timestamp: new Date().toISOString(),
      fields: Object.entries(validationResult.fields || {}).map(
        ([key, value]) => {
          return {
            name: key,
            value: String(value),
            inline: true,
          }
        }
      ),
    }

    const event = await db.event.create({
      data: {
        name: category.name,
        formattedMessage: `${eventData.title}\n\n${eventData.description}`,
        userId: user.id,
        fields: validationResult.fields || {},
        eventCategoryId: category.id,
      },
    })

    try {
      await discord.sendEmbed(dmChannel.id, eventData)

      await db.event.update({
        where: { id: event.id },
        data: { deliveryStatus: "DELIVERED" },
      })
    } catch (err) {
      await db.event.update({
        where: { id: event.id },
        data: { deliveryStatus: "FAILED" },
      })

      console.log(err)

      return NextResponse.json(
        {
          message: "Error processing event",
          eventId: event.id,
        },
        {
          status: 500,
          headers: corsHeaders,
        }
      )
    }

    return NextResponse.json({
      message: "Event processed successfully",
      eventId: event.id,
    })
  } catch (err) {
    console.error(err)

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.message,
        },
        {
          status: 422,
          headers: corsHeaders,
        }
      )
    }

    return NextResponse.json(
      { message: "Internal server error" },
      {
        status: 500,
        headers: corsHeaders,
      }
    )
  }
}
