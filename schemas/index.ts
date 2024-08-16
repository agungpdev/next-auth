import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password:z.string().min(8)
})

export const RegisterSchema = z.object({
  name:z.string().min(4),
  email: z.string().email(),
  password:z.string().min(8)
})