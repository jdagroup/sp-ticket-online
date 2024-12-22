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

import eventRouting from "./routing/event";
app.route("/event", eventRouting);


import orderRouting from "./routing/event";
app.route("/order", orderRouting);

import authRouting from "./routing/auth";
app.route("/auth", authRouting);

export default app;
