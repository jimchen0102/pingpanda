import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Category name is required.")
  .regex(/^[a-zA-Z0-9-]+$/, "類別名稱只能包含字母、數字或連字符（-）。")
