# P2-Challenge-1 (Server Side)

- Tema Aplikasi: ...

Struktur Folder:

- server (PORT: 3000)

## **W1D1**

Target:

### **REST API**

- [x] Membuat entitas utama (Create / POST)
  - [x] Endpoint ini akan menerima request body berdasar field-field di entitas utama sesuai [tema aplikasi](https://docs.google.com/document/d/1GZwh8OJGZZQVUuWE0Cr13iMA2lLNE9mMoHfrbmETEBs/edit#heading=h.mcqrsbt2auhv).
  - [x] Jika request  berhasil, kembalikan response dengan 201 status code dan response body berupa object yang berisikan data baru yang berhasil di-input.
  - [x] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [x] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [x] Mengambil semua data entitas utama (Read / GET)
  - [x] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data entitas utama include User sebagai pemilik data (tanpa menampilkan passwordnya).
  - [x] Jika request gagal, kembalikan response dengan 500 status code.

- [x]  Mengambil detail entitas utama berdasar id (Read / GET)
  - [x] Id dikirimkan via request params
  - [x] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data todo.
  - [x] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.

- [x] Mengupdate entitas utama (Update/ PUT)
  - [x] Endpoint ini akan menerima request body berdasar field-field di entitas utama.
  - [x] Id dikirimkan via request params
  - [x] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data yang diupdate.
  - [x] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.
  - [x] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [x] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [x] Menghapus entitas utama (Delete / DELETE)
  - [x] Id dikirimkan via request params
  - [x] Jika request berhasil, kembalikan response dengan 200 status code dan response berupa object yang berisikan data yang berhasil di-delete atau bisa juga mengembalikan data message saja message: '[entity name] success to delete'
  - [x] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found
  - [x] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [x] Membuat entitas kedua genres/categories/types (Create / POST)
  - [x] Endpoint ini akan menerima request body berdasar field-field di entitas kedua sesuai [tema aplikasi](https://docs.google.com/document/d/1GZwh8OJGZZQVUuWE0Cr13iMA2lLNE9mMoHfrbmETEBs/edit#heading=h.mcqrsbt2auhv).
  - [x] Jika request  berhasil, kembalikan response dengan 201 status code dan response body berupa object yang berisikan data baru yang berhasil di-input.
  - [x] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [x] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Mengambil semua data genres/categories/types (Read / GET)
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data genres/categories/types.
  - [ ] Jika request gagal, kembalikan response dengan 500 status code.

- [ ] Mengupdate kedua genres/categories/types (Update/ PUT)
  - [ ] Endpoint ini akan menerima request body berdasar field-field di entitas kedua genres/categories/types.
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data yang diupdate.
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.
  - [ ] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan 400 status code dan response body berupa object yang berisikan validation errors.
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Menghapus entitas kedua genres/categories/types (Delete / DELETE)
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response berupa object yang berisikan data yang berhasil di-delete atau bisa juga mengembalikan data message saja message: '[entity name] success to delete'
  - [ ] Jika request gagal karena todo tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found
  - [ ] Jika request gagal karena kesalahan server, kembalikan response dengan 500 status code.

- [ ] Mengambil semua data entitas utama (Read / GET) untuk public site
  - [ ] Tambahkan prefix /pub pada endpoint ini
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa array of objects yang berisikan semua data entitas utama.
  - [ ] Jika request gagal, kembalikan response dengan 500 status code.

- [ ] Mengambil detail entitas utama berdasar id (Read / GET) untuk public site
  - [ ] Tambahkan prefix /pub pada endpoint kalian
  - [ ] Id dikirimkan via request params
  - [ ] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object yang berisikan data.
  - [ ] Jika request gagal karena data tidak ditemukan, kembalikan response dengan 404 status code dan response body berupa object yang berisikan error not found.

### **API Documentation**

- [ ] Route /path yang digunakan di aplikasi yang kamu buat
- [ ] Informasi yang diperlukan oleh user saat ingin menggunakan route/path API (seperti body, header, parameter, dll)
- [ ] Response serta status code yang akan didapatkan oleh pengguna (info, error, warning, dsb)

Lebih lanjut untuk contoh, bisa dilihat di:

- [Example API Documentation](https://gist.github.com/ziterz/56d2cd8b2d5f5d52101265c0182c2aff)

## **W1D2**

Target:

### **Authentication + Authorization**

- [x] POST /add-user (khusus untuk staff, dilakukan oleh admin)
  - [x] Request Headers: { Authorization: "Bearer [your access token]" }
  - [x] Request body: { email, password }
  - [x] Response:
    - [x] 201: { id, email }
    - [x] 400: { errors }

  Note: Pastikan password telah terhash sebelum data user masuk ke dalam database.

- [x] POST /login (semua role, baik admin atau staff)
  - [x] Request body: { email, password }
  - [x] Response:
    - [x] 200: { access_token, email/username, role }
    - [x] 401: { error invalid username or email or password }

- [x] Menambahkan Authentication dan Authorization

| Role  | Create | Read  | Update                             | Delete                             |
| ----- | ------ | ----- | ---------------------------------- | ---------------------------------- |
| Admin | [ ] ✅  | [ ] ✅ | [ ] ✅                              | [ ] ✅                              |
| Staff | [ ]  ✅ | [ ] ✅ | [ ] Hanya bisa menghapus miliknya. | [ ] Hanya bisa menghapus miliknya. |

- [x] Error status code 401, apabila user yang belum login, atau yang mempunyai token yang salah mencoba mengakses endpoint CRD.
- [x] Error status code 403, apabila staff mengakses delete pada entitas yang bukan miliknya.

  Note: Untuk mengirim access_token, gunakan request header (diterima sebagai req.headers di Express).

### **Error Handler**

- [x] 401 - Error login user not found atau password not matched
- [x] 401 - Error authentication
- [x] 403 - Forbidden error di authorization
- [x] 400 - Error validation saat create.
- [x] 404 - Data not found.
- [x] 500 - Internal error server, dsb

### **Upload File**

- [x] Meng-update data imgUrl entitas utama (Update / PATCH)
  - [x] Endpoint ini akan menerima request body berupa ("multipart/form-data") untuk meng-update data imgUrl.
  - [x] Id dikirimkan via request params.
  - [x] Membuat fitur upload menggunakan [multer](https://www.npmjs.com/package/multer) dan [imageKit](https://imagekit.io/)/[Cloudinary](https://cloudinary.com) untuk menyimpan file tersebut.
  - [x] Jika request berhasil, kembalikan response dengan 200 status code dan response body berupa object message: 'Image [entity name] success to update'
  - [x] Jika request gagal karena data tidak ditemukan, kembalikan response dengan status code 404 dan response body berupa object yang berisikan error not found.
  - [x] Jika request gagal karena validasi tidak terpenuhi, kembalikan response dengan status code 400 dan response body berupa object yang berisikan validation errors.
  - [x] Jika request gagal karena kesalahan server, kembalikan response dengan status code 500.

## **W1D3**

Target:

### **TDD**

Mengimplementasikan testing terhadap endpoint yang sudah dibuat

- [ ] Login (Admin), perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Email tidak diberikan / tidak diinput
  - [ ] Password tidak diberikan / tidak diinput
  - [ ] Email diberikan invalid / tidak terdaftar
  - [ ] Password diberikan salah / tidak match
  - Pastikan untuk testing ini sediakan dulu data Admin

- [ ] Add Staff, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil register
  - [ ] Email tidak diberikan / tidak diinput
  - [ ] Password tidak diberikan / tidak diinput
  - [ ] Email diberikan string kosong
  - [ ] Password diberikan string kosong
  - [ ] Email sudah terdaftar
  - [ ] Format Email salah / invalid
  - [ ] Gagal register staff karena admin belum login
  - [ ] Gagal register staff karena token yang diberikan tidak valid (random string)

- [ ] Create, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil membuat entitas utama
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid  
  - [ ] Gagal ketika request body tidak sesuai (validation required)
  - Buatlah testing untuk masing-masing fitur

- [ ] Read, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan data Entitas Utama
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid

- [ ] Read Detail, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan 1  Entitas Utama sesuai dengan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal mendapatkan Entitas Utama karena params id yang diberikan tidak ada di database / invalid

- [ ] Update PUT, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mengupdate data Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff mengolah data entity yang bukan miliknya
  - [ ] Gagal ketika request body yang diberikan tidak sesuai

- [ ] Delete, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil menghapus data Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gagal karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff menghapus entity yang bukan miliknya

- [ ] Update PATCH, perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mengupdate imgUrl Entitas Utama berdasarkan params id yang diberikan
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid
  - [ ] Gaga menjalankan fiturl karena id entity yang dikirim tidak terdapat di database
  - [ ] Gagal menjalankan fitur ketika Staff mengolah data entity yang bukan miliknya
  - [ ] Gagal ketika request body yang diberikan tidak sesuai

- [ ] Read  Entitas kedua data genres/categories/types  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan data entitas kedua
  - [ ] Gagal menjalankan fitur karena belum login
  - [ ] Gagal menjalankan fitur karena token yang diberikan tidak valid

- [ ] Endpoint  List pada public site,  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan Entitas Utama tanpa menggunakan query filter parameter
  - [ ] Berhasil mendapatkan Entitas Utama dengan 1 query filter parameter
  - [ ] Berhasil mendapatkan  Entitas Utama serta panjang yang sesuai ketika memberikan page tertentu (cek pagination-nya)
  - Pastikan untuk testing ini sediakan dulu sekitar 20 data untuk diinput di beforeAll, sehingga kita bisa melakukan ekspektasi pada data dan jumlahnya yang kita dapat ketika filter dan pagination

- [ ] Endpoint  Detail pada public site,  perlu melakukan pengecekan pada status dan response ketika:
  - [ ] Berhasil mendapatkan 1  Entitas Utama sesuai dengan params id yang diberikan
  - [ ] Gagal mendapatkan Entitas Utama karena params id yang diberikan tidak ada di database / invalid

### **Sorting and Pagination, Filter**

Mengimplementasikan sorting, pagination dan filter pada aplikasi server yang sudah dibuat

- [ ] Get list entitas utama pada Public Site
  - [ ] Search menggunakan title/name Entitas Utama
  - [ ] Sorting berdasarkan data terbaru/terlama (ASC/DESC)
  - [ ] Filter Entitas Utama berdasarkan Entitas Kedua (genres/categories/types)
  - [ ] Pagination dengan limit data per page berjumlah 10

## **W1D4 & W1D6**

Target: Melakukan deployment menggunakan AWS EC2/GCP/Cloud Deployment lainnya untuk server yang telah dibuat
