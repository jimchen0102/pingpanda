"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useState } from "react"

export const AccountSettings = ({
  discordId: initialDiscordId,
}: {
  discordId: string
}) => {
  const [discordId, setDiscordId] = useState(initialDiscordId)

  const { mutate, isPending } = useMutation({
    mutationFn: async (discordId: string) => {
      const res = await client.project.setDiscordID.$post({ discordId })
      return await res.json()
    },
  })

  return (
    <Card className="w-full max-w-xl space-y-4">
      <div className="pt-2">
        <Label>Discord ID</Label>
        <Input
          className="mt-1"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
          placeholder="Enter your Discord ID"
        />
      </div>

      <p className="mt-2 text-sm/6 text-gray-600">
        不知道如何找到你的 Discord ID？
        <Link href="#" className="text-brand-600 hover:text-brand-500">
          在這裡了解如何獲取它。
        </Link>
        .
      </p>

      <div className="pt-4">
        <Button onClick={() => mutate(discordId)} disabled={isPending}>
          {isPending ? "儲存中..." : "儲存變更"}
        </Button>
      </div>
    </Card>
  )
}
