import { Hono } from "hono";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";

import { signInFormSchema } from "../schemas/sign-in-schema";
import { signUpFormSchema } from "../schemas/sign-up-schema";
import { zValidator } from "@hono/zod-validator";
import { createAdminClient } from "@/lib/appwrite";
import { AUTH_COOKIE_NAME } from "../auth.constants";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  .get("current", sessionMiddleware, async (c) => {
    const user = c.get("user");

    return c.json({ data: user });
  })
  .post("/sign-in", zValidator("json", signInFormSchema), async (c) => {
    const { emaiL, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(emaiL, password);

    setCookie(c, AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ success: true });
  })
  .post("/sign-up", zValidator("json", signUpFormSchema), async (c) => {
    const { name, emaiL, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    await account.create(ID.unique(), emaiL, password, name);

    const session = await account.createEmailPasswordSession(emaiL, password);

    setCookie(c, AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ success: true });
  })
  .post("/sign-out", sessionMiddleware, async (c) => {
    const account = c.get("account");

    deleteCookie(c, AUTH_COOKIE_NAME);
    await account.deleteSession("current");

    return c.json({ success: true });
  });

export default app;
