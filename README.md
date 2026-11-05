# AbdUmar Simulasi — Virtual Computing Lab

Website laboratorium virtual Informatika dengan desain cerah, ilustrasi 3D CSS, katalog 50 topik, serta modul demo interaktif. Frontend statis dapat di-host di GitHub Pages; Firebase Authentication + Firestore bersifat opsional setelah konfigurasi.

## Fitur pada Tahap 1
- Landing page responsif, tipografi besar, kartu warna-warni, efek 3D CSS.
- 50 topik simulasi dari lima kelompok bidang yang ditentukan.
- Pencarian dan filter kategori.
- Demo interaktif: IPv4 subnetting, CPU scheduling FCFS/SJF/Round Robin, pathfinding grid BFS, antrean M/M/1, DHCP DORA, token bucket, page replacement, TLS handshake, FSM NPC, inventory ROP, chatbot decision tree.
- Login/registrasi email-password Firebase dan penyimpanan eksperimen Firestore.
- Penyimpanan lokal sebagai fallback jika Firebase belum dikonfigurasi.

## Jalankan lokal
Karena menggunakan JavaScript ES Modules, jalankan melalui server lokal (jangan membuka `index.html` langsung sebagai `file://`).
```bash
python -m http.server 8000
```
Buka `http://localhost:8000`.

## Konfigurasi Firebase
1. Buat project di https://console.firebase.google.com/
2. Tambahkan aplikasi Web.
3. Aktifkan Authentication → Sign-in method → Email/Password.
4. Buat Cloud Firestore Database.
5. Salin konfigurasi Web App ke `js/firebase.js`, mengganti semua nilai `GANTI_...`.
6. Terapkan aturan `firestore.rules` melalui Firebase Console → Firestore → Rules (atau Firebase CLI).
7. Tambahkan domain GitHub Pages dan custom domain ke Authentication → Settings → Authorized domains.

Firebase Web API key bukan password admin. Jangan pernah menaruh service account key atau kredensial server di frontend. Terapkan App Check dan pantau kuota sebelum produksi.

## Deploy GitHub Pages
1. Buat repository baru, misalnya `abdumar-simulasi`.
2. Upload seluruh isi folder ini ke root repository.
3. Buka Settings → Pages.
4. Pilih Deploy from a branch → `main` → `/ (root)` → Save.
5. Tunggu GitHub menerbitkan situs. URL default: `https://USERNAME.github.io/abdumar-simulasi/`.

## Custom domain
1. Siapkan domain, misalnya `lab.abdumar.id`.
2. Di repository → Settings → Pages → Custom domain, masukkan domain.
3. Tambahkan file bernama `CNAME` di root dengan isi nama domain (contoh ada di `CNAME.example`, rename menjadi `CNAME` dan sesuaikan).
4. Atur DNS pada penyedia domain. Untuk subdomain `lab`, umumnya buat CNAME ke `USERNAME.github.io`. Untuk apex domain, gunakan A/AAAA records resmi GitHub Pages.
5. Tunggu propagasi DNS, lalu aktifkan Enforce HTTPS jika tersedia.

## Struktur
```text
abdumar-simulasi/
├── index.html
├── css/style.css
├── js/app.js
├── js/catalog.js
├── js/firebase.js
├── js/simulations.js
├── firestore.rules
├── firebase.json
├── .nojekyll
└── README.md
```

## Catatan pengembangan
Katalog berisi 50 rancangan topik. Modul demo yang telah dapat dijalankan ditandai dengan mesin interaktif pada `js/simulations.js`; topik lainnya saat ini berupa katalog/placeholder, bukan simulasi penuh. Tahap berikutnya sebaiknya mengimplementasikan modul per kelompok, menambah instrumen asesmen/LKPD, validasi akses, dashboard guru-siswa, dan pengujian keamanan. Simulasi keamanan (DDoS, malware, buffer overflow, IDS) perlu tetap berupa sandbox edukatif lokal dengan paket dan data sintetis; jangan mengirim trafik serangan ke jaringan nyata.
