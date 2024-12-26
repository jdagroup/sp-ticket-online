import { OrderProps } from '~/types/order';
import { html } from "hono/html";

export default function(props: Partial<OrderProps>) {
  return html`
    <a href="/order/${props.orderId}" class="card card-sm" style="cursor: pointer">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="bg-primary text-white avatar">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-ticket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 5l0 2" /><path d="M15 11l0 2" /><path d="M15 17l0 2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
            </span>
          </div>
          <div class="col">
            <div class="font-weight-medium">
              ${props.event?.name}
            </div>
            <div class="text-secondary">
              Rp ${props.totalPrice}
            </div>
            <div class="text-secondary">
              ${props.status}
            </div>
          </div>
        </div>
      </div>
    </a>
  `
}