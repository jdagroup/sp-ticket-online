import { Hono } from 'hono';
import { serveStatic } from "hono/bun";

import route from "./routes";
import { CookieStore, sessionMiddleware } from 'hono-sessions';
import { HonoApp } from './types/hono';

const app = new Hono<HonoApp>();

app.use("/css/*", serveStatic({root: "./public"}));
app.use("/js/*", serveStatic({root: "./public"}));
app.use("/icons/*", serveStatic({root: "./public"}));

const store = new CookieStore();

app.use('*', sessionMiddleware({
  store,
  encryptionKey: 'password_at_least_32_characters_long', // Required for CookieStore, recommended for others
  expireAfterSeconds: 900, // Expire session after 15 minutes of inactivity
  cookieOptions: {
    sameSite: 'Lax', // Recommended for basic CSRF protection in modern browsers
    path: '/', // Required for this library to work properly
    httpOnly: true, // Recommended to avoid XSS attacks,
    maxAge: 2 * 60,
  },
}))

app.route("/", route);

export default app;
