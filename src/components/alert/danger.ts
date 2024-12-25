import { html } from "hono/html";
import alertBase from "./base";

const alertDanger = ({title, content}: {title: string; content: string}) => {
  return alertBase({
    type: "danger",
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>`,
    title,
    content,
  })
}

export default alertDanger;