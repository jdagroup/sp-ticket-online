import { Hono } from "hono";

import AuthLayout from '../views/layout/auth';
import PageLogin from "../views/pages/auth/login";

const app = new Hono();

app.get("/login", (c) => {
  return c.html(
    AuthLayout({
      title: "Login",
      bodyContent: PageLogin()
    })
  )
})

export default app;
