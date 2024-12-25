import { Hono } from "hono";
import { html } from "hono/html";
import authMiddleware from "~/middlewares/auth-middleware";

const app = new Hono()
  .use(authMiddleware)
  .get("/", (c) => {
    return c.html(html`Dashboard EO`);
  });

export default app;