import authMiddleware from '~/middlewares/auth-middleware';
import { Hono } from "hono";

import { getEvents } from '~/utils/event';
import { EventProps } from '~/types/event';

import authRoute from "./auth";
import eventRoute from "./event";
import eoRoute from "./eo";

import AuthLayout from '~/views/layout/auth';
import PublicLayout from '~/views/layout/public';
import PageRegister from "~/views/pages/auth/register";
import PageProfile from "~/views/pages/profile";
import PageIndex from '~/views/pages/index';

const app = new Hono()
  .get('/', authMiddleware, (c) => {
    const events: EventProps[] = getEvents();
    return c.html(
      PublicLayout({
        title: 'TixTix | Simple Online Ticket Reservation',
        bodyContent: PageIndex({ events }),
      })
    );
  })
  .get('/register', (c) => {
    return c.html(
      AuthLayout({
        title: 'Register',
        bodyContent: PageRegister(),
      })
    );
  })
  .get('/profile', authMiddleware, (c) => {
    return c.html(
      PublicLayout({
        title: 'Pengaturan Akun',
        bodyContent: PageProfile({
          isEo: true,
        }),
      })
    );
  })
  .route('/auth', authRoute)
  .route('/event', eventRoute)
  .route('/eo', eoRoute);

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