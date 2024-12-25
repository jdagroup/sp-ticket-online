import { Hono } from "hono";
import { html } from "hono/html";

import { getEventById } from '~/utils/event';
import PageEventOrder from "~/views/pages/event/order"
import { EventProps } from '~/types/event';

import PublicLayout from '~/views/layout/public';
import authMiddleware from "~/middlewares/auth-middleware";

const app = new Hono()
.use(authMiddleware)
.get("/", (c) => {
  const event: EventProps | undefined = getEventById(c.req.param("id") as string);

  let content = event ? PageEventOrder(event) : html`Event tidak ditemukan`;

  return c.html(
    PublicLayout({
      title: 'Detail Event A | ',
      bodyContent: content,
    })
  )
})
.post("/", (c) => {
  return c.html(html`POST ORDER TICKET`)
})

export default app;