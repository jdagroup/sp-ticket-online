import { html } from 'hono/html';
import { EventProps } from '../../../types/event';

const PageDetail = ({id, title, date, location, description, price, ticketLeft, eventOrganizier}: EventProps) => {
  return html`
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <h2 class="page-pretitle">By ${eventOrganizier ? eventOrganizier.name : ''}</h2>
            <h2 class="page-title">
              ${title}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="row row-cards">
              <div class="card">
                <div class="card-stamp">
                  <div class="card-stamp-icon bg-yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                  </div>
                </div>
                <div class="card-body">
                  <h3 class="card-title">${date}</h3>
                  <h4 class="card-title">${location}</h4>
                  <p class="text-secondary">
                    ${description}
                  </p>
                  <div class="row row-deck">
                    <div class="col-md-1">Harga Tiket</div>
                    <div class="col-md-11">: Rp ${price}</div>

                    <div class="col-md-1">Sisa Tiket</div>
                    <div class="col-md-11">: ${ticketLeft}</div>

                    <div class="col-12">
                      <a href="/event/${id}/order" class="btn btn-success btn-md mt-5">Beli Tiket</a>
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

export default PageDetail;
