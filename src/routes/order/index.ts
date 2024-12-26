import { Hono } from "hono";
import authMiddleware from "~/middlewares/auth-middleware";
import { getOrders } from "~/utils/order";
import PublicLayout from '~/views/layout/public';
import PageOrderHistory from "~/views/pages/order/history";


const app = new Hono()
  // .use(authMiddleware)
  .get('/', /*authMiddleware,*/ (c) => {
    const items = getOrders();

    return c.html(
      PublicLayout({
        title: 'Riwayat Pembelian',
        bodyContent: PageOrderHistory({items})
      })
    );
  });

export default app;