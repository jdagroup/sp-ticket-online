import { Hono } from "hono";

import AuthLayout from '../views/layout/auth';
import PublicLayout from '../views/layout/public';

import PageRegister from "../views/pages/auth/register";
import PageProfile from "../views/pages/profile";

const app = new Hono();

app.get("/register", (c) => {
  return c.html(
    AuthLayout({
      title: "Register",
      bodyContent: PageRegister()
    })
  )
})

app.get("/profile", (c) => {
  return c.html(
    PublicLayout({
      title: "Pengaturan Akun",
      bodyContent: PageProfile({
        isEo: true,
      })
    })
  );
})

export default app;