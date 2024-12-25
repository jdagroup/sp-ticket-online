import { html } from 'hono/html';
import type { JwtPayload } from '../../schemas/jwt-payload-schema';

const HomeBody = (jwtPayload: JwtPayload) => {
  return html`<h1>Welcome ${jwtPayload.name}</h1>
    <button hx-get="/logout">Logout</button>`;
};

export default HomeBody;
