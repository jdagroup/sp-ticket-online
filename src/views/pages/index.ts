import { html } from 'hono/html';

import eventCard from "../../components/card/event";
import { EventProps } from '../../types/event';

const PageIndex = ({events}: {events: EventProps[]}) => {
  return html`
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <h2 class="page-title">
              Event Terbaru
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
            ${
              events.map(item => html`
                <div class="col-sm-6 col-lg-3">
                  ${eventCard(item)}
                </div>
              `)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default PageIndex;
