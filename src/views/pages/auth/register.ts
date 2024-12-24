import { html } from "hono/html"

const PageRegister = () => {
  return html`
  <div class="card card-md"
    x-data="{
      accountType: 'user'
    }"
  >
    <div class="card-body" :class="accountType === 'eo' ? '' : 'pb-0'">
      <h2 class="h2 text-center mb-4">Buat Akun</h2>
      <form action="./" method="post" autocomplete="off" novalidate>
        <div class="mb-3">
          <div class="btn-group w-100" role="group">
            <input type="radio" class="btn-check" name="account-type" id="account-type-1" autocomplete="off" checked="" value="user" x-model="accountType">
            <label for="account-type-1" type="button" class="btn">Pengguna</label>
            <input type="radio" class="btn-check" name="account-type" id="account-type-2" autocomplete="off" value="eo" x-model="accountType">
            <label for="account-type-2" type="button" class="btn">Event Organizer</label>
          </div>
        </div>

        <template x-if="accountType === 'eo'">
          <div class="mb-3">
            <label class="form-label">Nama EO</label>
            <input type="email" class="form-control" placeholder="Westjava Festival" autocomplete="off">
          </div>
        </template>

        <div class="mb-3">
          <label class="form-label">Nama Pengguna</label>
          <input type="email" class="form-control" placeholder="Kang Asep" autocomplete="off">
        </div>
        <div class="mb-3">
          <label class="form-label">Alamat Email</label>
          <input type="email" class="form-control" placeholder="asep.kasep@email.com" autocomplete="off">
        </div>
        <div class="mb-2">
          <label class="form-label">
            Password
          </label>
          <div class="input-group input-group-flat">
            <input type="password" class="form-control"  placeholder="Password anda"  autocomplete="off">
            <span class="input-group-text">
              <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
              </a>
            </span>
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </div>
      </form>
    </div>
    
    <template x-if="accountType === 'user'">
      <div>
        <div class="hr-text">atau</div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <a href="#" class="btn w-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon text-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                Login with Github
              </a>
            </div>
            <div class="col">
              <a href="#" class="btn w-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon text-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                Login with X
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div class="text-center text-secondary mt-3">
    Sudah punya akun? <a href="/auth/login" tabindex="-1">Login di sini</a>
  </div>
  `
}

export default PageRegister;