import { Hono } from "hono";
import { html } from "hono/html";

import googleRoute from "./google";

import AuthLayout from '~/views/layout/auth';
import PageLogin from "~/views/pages/auth/login";
import { HonoApp } from "~/types/hono";
import alertWarning from "~/components/alert/warning";

const app = new Hono<HonoApp>()
  .get("/", (c) => {
    return c.html(html`Auth Routing`)
  })
  .get("/login", (c) => {

    const session = c.get("session");
    const alertSession = session.get("alert");

    let alert = html``;
    if(alertSession) {
      alert = alertWarning({
        title: alertSession?.title,
        content: alertSession?.content
      });
    }

    return c.html(
      AuthLayout({
        title: "Login",
        bodyContent: PageLogin({
          _alert: alert
        })
      })
    )
  })
  .route("/google", googleRoute)

export default app;