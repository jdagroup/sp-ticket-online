import { html } from "hono/html"

type Props = {
  isEo: boolean;
};

const ProfilePage = (props: Props) => {
  return html`
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col-span-12 col-md-4 offset-md-4">
            <!-- Page pre-title -->
            <h2 class="page-title">Pengaturan Akun</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Page body -->
    <div class="page-body" x-data="{isEo: ${props.isEo ? 'true' : 'false'}}">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-span-12 col-md-4 offset-md-4">
            <div class="row row-cards">
              <div class="card">
                <div class="card-body">
                  <div class="mb-3" x-if="isEo">
                    <label class="form-label">Nama EO</label>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder">
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Nama</label>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder">
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" disabled>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" >
                  </div>

                  <button type="submit" class="btn btn-primary w-100">Simpan Pengaturan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default ProfilePage;