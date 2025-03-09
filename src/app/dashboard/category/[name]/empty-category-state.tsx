"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { client } from "@/lib/client"
import { Card } from "@/components/ui/card"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const EmptyCategoryState = ({
  categoryName,
}: {
  categoryName: string
}) => {
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ["category", categoryName, "hasEvents"],
    queryFn: async () => {
      const res = await client.category.pollCategory.$get({
        name: categoryName,
      })

      return await res.json()
    },
    refetchInterval: (query) => {
      return query.state.data?.hasEvents ? false : 1000
    },
  })

  const hasEvents = data?.hasEvents

  useEffect(() => {
    if (hasEvents) {
      router.refresh()
    }
  }, [hasEvents, router])

  const codeSnippet = `await fetch('https://pingpanda-six.vercel.app/api/v1/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    category: '${categoryName}',
    fields: {
      field1: 'value1', // for example: user id
      field2: 'value2' // for example: user email
    }
  })
})`

  return (
    <Card
      contentClassName="max-w-2xl w-full flex flex-col items-center"
      className="flex flex-1 items-center justify-center"
    >
      <h2 className="to-gray-950 text-center text-xl/8 font-medium tracking-tight">
        建立你的第一個 {categoryName} 事件
      </h2>
      <p className="mb-8 max-w-md text-pretty text-center text-sm/6 text-gray-600">
        通過向我們的追蹤 API 發送請求來開始使用：
      </p>

      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
          <div className="flex space-x-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>

          <span className="text-sm text-gray-400">your-first-event.js</span>
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={{
            borderRadius: "0px",
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: 1.5,
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>

      <div className="mt-8 flex items-center space-x-2">
        <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
        <span className="text-sm text-gray-600">正在監聽傳入事件...</span>
      </div>
    </Card>
  )
}
