import { html } from 'hono/html';
import { HtmlEscapedString } from 'hono/utils/html';

const Layout = ({
  title,
  headContent,
  bodyContent,
}: {
  title: string;
  headContent?: HtmlEscapedString | Promise<HtmlEscapedString>;
  bodyContent: HtmlEscapedString | Promise<HtmlEscapedString>;
}) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        ${headContent}
      </head>
      <body>
        ${bodyContent}
      </body>
    </html>`;
};

export default Layout;
