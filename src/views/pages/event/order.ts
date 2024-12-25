import { html } from 'hono/html';
import { EventProps } from '../../../types/event';

const PageOrder = ({eventId, name, dateStart, dateEnd, location, description, ticketPrice, ticketAmount, organizier}: EventProps) => {
  return html`
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col-span-12 col-md-4 offset-md-4">
            <!-- Page pre-title -->
            <h2 class="page-title">Pesan Tiket</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-span-12 col-md-4 offset-md-4">
            <div class="row row-cards">
              <div class="card">
                <div class="card-stamp">
                  <div class="card-stamp-icon bg-yellow">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>

                  <h3 class="card-title">${dateStart} s/d ${dateEnd}</h3>
                  <h5 class="card-title">${location}</h5>

                  <div class="row row-deck">
                    <div class="col-md-4">Harga Tiket</div>
                    <div class="col-md-8">: Rp ${ticketPrice}</div>

                    <div class="col-md-4">Sisa Tiket</div>
                    <div class="col-md-8">: ${ticketAmount}</div>

                    <div class="col-12">
                      <form class="w-full">
                        <br/>
                        <input type="number" class="form-control" placeholder="max: ${ticketAmount}" class="mb-4" required>
                        <br/>
                        <div class="flex" style="font-weight: bold; font-size: 1.2rem;">
                          Harga Total: Rp 0
                        </div>
                        <br/>
                        <button type="submit" href="/event/${eventId}/order" class="btn btn-success btn-md w-full">Beli Tiket</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default PageOrder;
