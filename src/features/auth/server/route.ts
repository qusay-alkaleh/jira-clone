import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInFormSchema } from "../schemas/sign-in-schema";
import { signUpFormSchema } from "../schemas/sign-up-schema";

const app = new Hono()
  .post("/sign-in", zValidator("json", signInFormSchema), async (c) => {
    return c.json({ succes: "ok" });
  })
  .post("/sign-up", zValidator("json", signUpFormSchema), async (c) => {
    const { name, emaiL, password } = c.req.valid("json");
    return c.json({ success: "ok", data: { name, emaiL, password } });
  });

export default app;
