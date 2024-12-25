import { html } from 'hono/html';

const LoginBody = () => {
  return html`<button hx-get="/auth/google">Login with Google</button>`;
};

export default LoginBody;
