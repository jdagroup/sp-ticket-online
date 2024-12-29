import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";

const alertBase = ({
  type,
  icon,
  title,
  content,
}: {
  type: 'success' | 'warning' | 'info' | 'danger';
  icon: HtmlEscapedString | Promise<HtmlEscapedString>;
  title: string;
  content: string | HtmlEscapedString | Promise<HtmlEscapedString>;
}) => {
  return html`
    <div class="alert alert-${type}" role="alert">
      <div class="d-flex">
        <div>${icon}</div>
        <div>
          <h4 class="alert-title">${title}</h4>
          <div class="text-secondary">${content}</div>
        </div>
      </div>
    </div>
  `;
};

export default alertBase;