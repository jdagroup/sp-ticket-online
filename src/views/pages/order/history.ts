import { OrderProps } from '~/types/order';
import { html } from "hono/html"

import orderCard from "~/components/card/order";

const PageOrderHistory = ({items}: {
  items: OrderProps[]
}) => {
  return html`
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col-span-12 col-md-4 offset-md-4">
            <!-- Page pre-title -->
            <h2 class="page-title">Riwayat Pembelian</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Page body -->
    <div class="page-body" x-data="{}">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-span-12 col-md-4 offset-md-4">
            <div class="row row-cards">
            ${
              items.map(item => html`
                ${orderCard(item)}
              `)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default PageOrderHistory;