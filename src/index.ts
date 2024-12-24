import { Hono } from 'hono';
import { serveStatic } from "hono/bun";
import PublicLayout from './views/layout/public';

import { getEvents } from './utils/event';
import { EventProps } from './types/event';


import PageIndex from './views/pages/index';

const app = new Hono();

app.use("/css/*", serveStatic({root: "./public"}));
app.use("/js/*", serveStatic({root: "./public"}));
app.use("/icons/*", serveStatic({root: "./public"}));

app.get('/', (c) => {
  const events: EventProps[] = getEvents();
  return c.html(
    PublicLayout({
      title: 'TixTix | Simple Online Ticket Reservation',
      bodyContent: PageIndex({events})
    })
  );
});

import eventRouting from "./router/event";
app.route("/event", eventRouting);

import orderRouting from "./router/event";
app.route("/order", orderRouting);

import authRouting from "./router/auth";
app.route("/auth", authRouting);

import routing from "./router/router";
app.route("/", routing);

export default app;
