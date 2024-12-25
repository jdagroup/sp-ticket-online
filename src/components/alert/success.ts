import { html } from "hono/html";
import alertBase from "./base";

const alertSuccess = ({title, content}: {title: string; content: string}) => {
  return alertBase({
    type: "success",
    icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>`,
    title,
    content,
  })
}

export default alertSuccess;