"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
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
          placeholder="輸入你的 Discord ID"
        />
      </div>

      <p className="mt-2 text-sm/6 text-gray-600">
        不知道如何找到你的 Discord ID？
        <a
          href="https://support.discord.com/hc/zh-tw/articles/206346498-%E6%88%91%E5%9C%A8%E5%93%AA%E8%A3%A1%E5%8F%AF%E4%BB%A5%E6%89%BE%E5%88%B0%E6%88%91%E7%9A%84%E4%BD%BF%E7%94%A8%E8%80%85-%E4%BC%BA%E6%9C%8D%E5%99%A8-%E8%A8%8A%E6%81%AF-ID"
          className="text-brand-600 hover:text-brand-500"
          target="_blank"
        >
          在這裡了解如何獲取它。
        </a>
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
