"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon, ClipboardIcon } from "lucide-react"
import { useState } from "react"

export const ApiKeySettings = ({ apiKey }: { apiKey: string }) => {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <Card className="w-full max-w-xl">
      <div>
        <Label>你的 API Key</Label>
        <div className="relative mt-1">
          <Input type="password" value={apiKey} readOnly />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-0.5">
            <Button
              variant="ghost"
              onClick={copyApiKey}
              className="w-10 p-1 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {copySuccess ? (
                <CheckIcon className="size-4 text-brand-900" />
              ) : (
                <ClipboardIcon className="size-4 text-brand-900" />
              )}
            </Button>
          </div>
        </div>

        <p className="mt-2 text-sm/6 text-gray-600">
          請保密你的金鑰，不要與任何人分享。
        </p>
      </div>
    </Card>
  )
}
