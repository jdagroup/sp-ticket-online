import { HtmlEscapedString } from 'hono/utils/html';
import { html } from "hono/html"

type Props = {
  title: string;
  bodyContent?: HtmlEscapedString | Promise<HtmlEscapedString>;
}

const AuthLayout = ({ bodyContent, title }: Props) => {
  return html`
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>${title} - TixTix - Lebih Mudah Lebih Murah.</title>
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      <link rel="icon" href="./favicon.ico" type="image/x-icon"/>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
      <!-- CSS files -->
      <link href="/css/tabler.min.css?1733768793" rel="stylesheet"/>
      <link href="/css/demo.min.css?1733768793" rel="stylesheet"/>
      <style>
        @import url('https://rsms.me/inter/inter.css');
        :root {
          --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        }
        body {
          font-feature-settings: "cv03", "cv04", "cv11";
        }
      </style>
    </head>
    <body  class=" d-flex flex-column">
      <script src="/js/demo-theme.min.js?1733768793"></script>
      <div class="page page-center">
        <div class="container container-tight py-4">
          <div class="text-center mb-4">
            <a href="/" class="navbar-brand navbar-brand-autodark" style="font-size: 3em">
              TixTix
            </a>
          </div>
          ${bodyContent}
        </div>
      </div>
      <!-- Libs JS -->
      <!-- Tabler Core -->
      <script src="/js/tabler.min.js?1733768793" defer></script>
      <script src="/js/demo.min.js?1733768793" defer></script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"8f70fa53effafd81","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2024.10.5","token":"84cae67e72b342399609db8f32d1c3ff"}' crossorigin="anonymous"></script>
  </body>
  </html>
  `
}

export default AuthLayout;