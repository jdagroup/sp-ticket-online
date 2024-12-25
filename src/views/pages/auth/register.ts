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
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" /><path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" /><path d="M16 4l-4 4l-4 -4" /><path d="M4 6.5l8 7.5l8 -7.5" /></svg>
                Daftar Dengan Gmail
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