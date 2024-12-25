import authMiddleware from '~/middlewares/auth-middleware';
import { Hono } from "hono";
import { deleteCookie, getCookie } from 'hono/cookie';

import { getEvents } from '~/utils/event';
import { EventProps } from '~/types/event';
import { deleteToken } from '~/services/auth-service';

import authRoute from "./auth";
import eventRoute from "./event";
import eoRoute from "./eo";

import AuthLayout from '~/views/layout/auth';
import PublicLayout from '~/views/layout/public';
import PageRegister from "~/views/pages/auth/register";
import PageProfile from "~/views/pages/profile";
import PageIndex from '~/views/pages/index';

const app = new Hono()
  .get('/', (c) => {
    const events: EventProps[] = getEvents();
    return c.html(
      PublicLayout({
        title: 'TixTix | Simple Online Ticket Reservation',
        bodyContent: PageIndex({events})
      })
    )
  })
  .get("/register", (c) => {
    return c.html(
      AuthLayout({
        title: "Register",
        bodyContent: PageRegister()
      })
    )
  })
  .get("/profile", (c) => {
    return c.html(
      PublicLayout({
        title: "Pengaturan Akun",
        bodyContent: PageProfile({
          isEo: true,
        })
      })
    );
  })
  .get("/logout", async (c) => {
    const accessToken = getCookie(c, 'access_token');
    const refreshToken = getCookie(c, 'refresh_token');
  
    if (accessToken) {
      deleteCookie(c, 'access_token');
    }
  
    if (refreshToken) {
      try {
        await deleteToken({ token: refreshToken });
        deleteCookie(c, 'refresh_token');
      } catch (error: unknown) {
        deleteCookie(c, 'refresh_token');
      }
    }
  
    // Using 'HX-Redirect' so that HTMX 'hx-get' can redirect into another page
    c.header('HX-Redirect', '/login');
    return c.body(null);
  })
  .route("/auth", authRoute)
  .route("/event", eventRoute)
  .route("/eo", eoRoute);

export default app;


/**
 * /eo
 * /admin
 * /profile
 * /ticket
 * /order
 * /event/{id}/order
 * /logout
 */