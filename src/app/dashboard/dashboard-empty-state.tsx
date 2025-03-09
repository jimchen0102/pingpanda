import Image from "next/image"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Card } from "@/components/ui/card"
import { client } from "@/lib/client"
import { Button } from "@/components/ui/button"
import { CreateEventCategoryModal } from "@/components/create-event-category-modal"

export const DashboardEmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickstartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickstartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
    },
  })

  return (
    <Card className="flex flex-1 flex-col items-center justify-center rounded-2xl p-6 text-center">
      <div className="flex w-full justify-center">
        <Image
          src="/brand-asset-wave.png"
          alt="No categories"
          width={192}
          height={192}
          className="-mt-24 size-48"
        />
      </div>

      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        還沒有任何事件類別
      </h1>

      <p className="mb-8 mt-2 max-w-prose text-sm/6 text-gray-600">
        通過創建您的第一個類別來開始跟蹤事件。
      </p>

      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button
          variant="outline"
          className="w-full space-x-2 sm:w-fit"
          disabled={isPending}
          onClick={() => insertQuickstartCategories()}
        >
          <span className="size-5">🚀</span>
          <span>{isPending ? "建立中" : "快速開始"}</span>
        </Button>

        <CreateEventCategoryModal containerClassName="w-full sm:w-auto">
          <Button className="w-full">新建類別</Button>
        </CreateEventCategoryModal>
      </div>
    </Card>
  )
}
