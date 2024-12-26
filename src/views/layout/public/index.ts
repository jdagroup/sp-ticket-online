import { html } from 'hono/html';
import { HtmlEscapedString } from 'hono/utils/html';

import header from "./header";
import footer from "./footer";

const Layout = ({
  title,
  headContent,
  bodyContent,
  titleSuffix = ' | TixTix - Mudah dan Murah'
}: {
  title: string;
  headContent?: HtmlEscapedString | Promise<HtmlEscapedString>;
  bodyContent: HtmlEscapedString | Promise<HtmlEscapedString>;
  titleSuffix?: string;
}) => {
  return html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>${title} ${titleSuffix}</title>
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

      <link href="/css/tabler.min.css?1692870487" rel="stylesheet"/>
      <link href="/css/tabler-vendors.min.css?1692870487" rel="stylesheet"/>
      <link href="/css/demo.min.css?1692870487" rel="stylesheet"/>
      <style>
        @import url('https://rsms.me/inter/inter.css');
        :root {
          --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        }
        body {
          font-feature-settings: "cv03", "cv04", "cv11";
        }
      </style>

      ${headContent}
    </head>
    <body>
      <script src="/js/demo-theme.min.js?1692870487"></script>
      <div class="page">
        ${header()}
        <div class="page">
          <div class="page-wrapper">
            ${bodyContent}
            ${footer()}
          </div>
        </div>
      </div>
      <!-- Tabler Core -->
      <script src="/js/tabler.min.js?1692870487" defer></script>
      <script src="/js/demo.min.js?1692870487" defer></script>
    </body>
  </html>`;
};

export default Layout;
