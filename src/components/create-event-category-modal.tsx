"use client"

import { PropsWithChildren, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"
import { Modal } from "./ui/modal"

const EVENT_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  color: z
    .string()
    .min(1, "Color is required")
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format."),
  emoji: z.string().emoji("Invalid emoji").optional(),
})

type EventCategoryForm = z.infer<typeof EVENT_CATEGORY_VALIDATOR>

export const CreateEventCategoryModal = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()

  const { register, handleSubmit } = useForm<EventCategoryForm>({
    resolver: zodResolver(EVENT_CATEGORY_VALIDATOR),
  })

  const onSubmit = (data: EventCategoryForm) => {
    console.log(data)
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      <Modal
        className="max-w-xl p-8"
        showModal={isOpen}
        setShowModal={setIsOpen}
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="text-lg/7 font-medium tracking-tight text-gray-950">
              New Event Category
            </h2>
            <p className="text-sm/6 text-gray-600">
              Crate a new category to organize your events.
            </p>
          </div>

          <div className="space-y-5">
            <div></div>
          </div>
        </form>
      </Modal>
    </>
  )
}
