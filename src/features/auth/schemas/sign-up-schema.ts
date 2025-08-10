import z from "zod";

export const signUpFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  emaiL: z.email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(32, "Password must not exceed 32 characters"),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
