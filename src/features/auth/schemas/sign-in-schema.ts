import z from "zod";

export const signInFormSchema = z.object({
  emaiL: z.email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(32, "Password must not exceed 32 characters"),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;
