import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { PlusIcon } from "lucide-react"
import { db } from "@/db"
import { DashboardPage } from "@/components/dashboard-page"
import { DashboardPageContent } from "./dashboard-page-content"
import { CreateEventCategoryModal } from "@/components/create-event-category-modal"
import { Button } from "@/components/ui/button"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/welcome")
  }

  return (
    <>
      <DashboardPage
        title="Dashboard"
        cta={
          <CreateEventCategoryModal>
            <Button className="w-full sm:w-fit">
              <PlusIcon className="size-4" />
              Add Category
            </Button>
          </CreateEventCategoryModal>
        }
      >
        <DashboardPageContent />
      </DashboardPage>
    </>
  )
}

export default Page
