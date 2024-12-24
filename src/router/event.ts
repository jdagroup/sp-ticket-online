import { Hono } from "hono";
import { html } from "hono/html";

import { getEventById, getEvents } from '../utils/event';
import PageEventDetail from "../views/pages/event/detail"
import PageEventOrder from "../views/pages/event/order"
import { EventProps } from '../types/event';

import PublicLayout from '../views/layout/public';

const app = new Hono();

app.get("/:id", (c) => {
  const event: EventProps | undefined = getEventById(c.req.param("id"));
  let content = event ? PageEventDetail(event) : html`Event tidak ditemukan`;

  return c.html(
    PublicLayout({
      title: 'Detail Event A | ',
      bodyContent: content,
    })
  )
})

app.get("/:id/order", (c) => {
  const event: EventProps | undefined = getEventById(c.req.param("id"));
  let content = event ? PageEventOrder(event) : html`Event tidak ditemukan`;

  return c.html(
    PublicLayout({
      title: 'Detail Event A | ',
      bodyContent: content,
    })
  )
})

export default app;
