# 🔐 Panduan Admin Panel - GePeng Motor Service

## 🚀 Akses Admin Panel

### URL Admin:
```
admin.html
```

### Login Credentials Default:
- **Username:** `admin`
- **Password:** `admin123`

⚠️ **PENTING:** Segera ganti password setelah login pertama kali!

---

## 📋 Fitur Admin Panel

### 1. 📊 Dashboard
- Lihat statistik konten (jumlah banner, foto, layanan)
- Overview sistem
- Quick access ke semua menu

### 2. 🎠 Banner Carousel
**Kelola slide banner di homepage:**
- ➕ Tambah banner baru
- ✏️ Edit judul dan deskripsi
- 🖼️ Upload/ganti gambar (URL)
- 🗑️ Hapus banner
- 📱 Otomatis sync ke homepage

**Cara menambah banner:**
1. Klik "Tambah Banner"
2. Isi judul (contoh: "Workshop Modern")
3. Isi deskripsi (contoh: "Fasilitas Lengkap & Nyaman")
4. Masukkan URL gambar (opsional)
5. Klik "Simpan"

### 3. 🖼️ Galeri Foto
**Kelola foto-foto di website:**
- Filter per kategori (Workshop, Service, Hasil)
- ➕ Tambah foto baru
- ✏️ Edit informasi foto
- 🏷️ Ubah kategori
- 🗑️ Hapus foto

**Kategori:**
- **Workshop:** Foto area workshop, peralatan, ruang tunggu
- **Service:** Foto proses service, teknisi bekerja
- **Hasil:** Foto motor setelah service, hasil detailing

**Cara menambah foto:**
1. Klik "Tambah Foto"
2. Isi judul foto
3. Isi deskripsi
4. Pilih kategori
5. Masukkan URL gambar
6. Klik "Simpan"

### 4. 🔧 Layanan Kami
**Kelola paket service:**
- ➕ Tambah paket layanan baru
- ✏️ Edit detail layanan
- 💰 Update harga
- ⭐ Tandai sebagai unggulan
- 📝 Edit fitur-fitur layanan

**Cara menambah layanan:**
1. Klik "Tambah Layanan"
2. Isi nama layanan
3. Isi deskripsi
4. Isi harga (contoh: "Mulai Rp 75.000")
5. Isi fitur (satu fitur per baris)
6. Centang "unggulan" jika perlu
7. Klik "Simpan"

### 5. 📞 Kontak Kami
**Update informasi kontak bisnis:**
- 📍 Alamat lengkap
- ☎️ Nomor telepon (2 line)
- 💬 WhatsApp
- ✉️ Email
- 🕐 Jam operasional

**Update WhatsApp:**
Format: `6285894330641` (tanpa +, tanpa 0 di depan)

### 6. ⚙️ Pengaturan
**Kelola setting website:**
- Nama bisnis
- Tagline/slogan
- 🔒 Ganti password admin

---

## 💾 Cara Kerja Data

### Local Storage
- Data disimpan di browser (localStorage)
- Otomatis tersimpan setiap perubahan
- Data tetap ada meskipun refresh page

### Backup Data
1. Buka Developer Tools (F12)
2. Tab "Application" → "Local Storage"
3. Copy value `gepeng_admin_data`
4. Simpan ke file text sebagai backup

### Restore Data
1. Buka Developer Tools (F12)
2. Tab "Application" → "Local Storage"
3. Paste backup data
4. Refresh halaman

---

## 🖼️ Upload Gambar

### Opsi 1: Upload ke Hosting
1. Upload gambar ke image hosting:
   - **ImgBB.com** (gratis)
   - **Imgur.com** (gratis)
   - **Cloudinary.com** (gratis tier)
2. Copy URL gambar
3. Paste di field "URL Gambar"

### Opsi 2: Local Images
1. Buat folder `images/` di project
2. Simpan gambar di folder tersebut
3. Gunakan relative path: `images/workshop-1.jpg`

### Tips Upload:
- **Format:** JPG atau PNG
- **Ukuran:** Max 500KB untuk performa optimal
- **Dimensi Banner:** 1200 x 500 pixels
- **Dimensi Gallery:** 800 x 600 pixels
- Compress gambar: TinyPNG.com

---

## 🔒 Keamanan

### Ganti Password:
1. Buka menu "Pengaturan"
2. Masukkan password lama
3. Masukkan password baru
4. Konfirmasi password baru
5. Klik "Simpan Pengaturan"

### Best Practices:
- ✅ Ganti password default
- ✅ Gunakan password kuat (min 8 karakter)
- ✅ Jangan share credentials
- ✅ Logout setelah selesai
- ✅ Backup data secara berkala

---

## 🎯 Workflow Umum

### Update Content:
1. Login ke admin panel
2. Pilih menu yang ingin diedit
3. Edit/tambah/hapus konten
4. Preview perubahan di website
5. Logout saat selesai

### Preview Changes:
1. Klik tombol "👁️ Preview Website" di header
2. Website akan dibuka di tab baru
3. Refresh page untuk lihat perubahan terbaru

---

## ❓ Troubleshooting

### Data tidak tersimpan?
- Cek browser localStorage enabled
- Coba clear cache browser
- Pastikan tidak menggunakan incognito mode

### Gambar tidak muncul?
- Cek URL gambar valid
- Pastikan gambar bisa diakses public
- Coba relative path jika local images

### Lupa password?
1. Buka Developer Tools (F12)
2. Console tab
3. Ketik: `localStorage.clear()`
4. Refresh page
5. Password kembali ke default: `admin123`

---

## 📱 Mobile Access

Admin panel responsive dan bisa diakses dari:
- 💻 Desktop
- 📱 Tablet
- 📱 Smartphone

**Tips mobile:**
- Gunakan landscape mode untuk tablet
- Sidebar auto-collapse di mobile
- Touch-friendly buttons

---

## 🚀 Cara Menjalankan Admin

### Opsi 1: Buka langsung
Buka file `admin.html` di browser

### Opsi 2: Live Server
```bash
npm run admin
```
Akan membuka di http://localhost:3001

---

## 📊 Tips & Trik

### Mengelola Carousel:
- Maksimal 5-7 slide untuk UX terbaik
- Gunakan gambar dengan pesan jelas
- Update berkala dengan promo/event

### Mengelola Gallery:
- Pisahkan foto per kategori
- Upload foto berkualitas tinggi
- Update dengan foto project terbaru
- Minimal 12 foto untuk best display

### Mengelola Layanan:
- Highlight value proposition
- Update harga secara berkala
- Tandai paket terlaris sebagai "unggulan"
- Jelaskan fitur dengan detail

### Mengelola Kontak:
- Pastikan nomor WhatsApp aktif
- Update jam operasional jika berubah
- Test link WhatsApp secara berkala

---

## ✅ Checklist Awal

Setup pertama kali:
- [ ] Login dengan credentials default
- [ ] Ganti password admin
- [ ] Update informasi kontak
- [ ] Update WhatsApp number
- [ ] Upload minimal 5 foto gallery
- [ ] Review dan edit paket layanan
- [ ] Test preview website
- [ ] Backup data

---

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Cek dokumentasi ini dulu
2. Cek troubleshooting section
3. Review console untuk error messages

---

**Happy Managing! 🎉**

Kelola website Anda dengan mudah melalui Admin Panel!
