# GePeng Motor Service - Website + Admin Panel

Website homepage modern dan profesional untuk jasa service motor dengan **Admin Panel lengkap** untuk kelola konten.

## 🚀 Fitur

### Website Frontend:
- ✨ Desain modern dan profesional
- 📱 Responsive untuk semua perangkat (mobile, tablet, desktop)
- 🎨 Animasi smooth dan interaktif
- 🖼️ **Carousel foto banner** dengan auto-slide dan navigation
- 📸 **Photo gallery** dengan filter kategori dan lightbox
- 💬 **Floating WhatsApp button** - selalu terlihat di kanan bawah
- 🔧 Dibuat dengan HTML, CSS, dan TypeScript
- ⚡ Performa tinggi dan loading cepat

### Admin Panel (NEW! 🎉):
- 🔐 **Login system** dengan password
- 📊 **Dashboard** dengan statistik
- 🎠 **Kelola Banner Carousel** - tambah/edit/hapus slide
- 🖼️ **Kelola Galeri Foto** - upload/edit/hapus foto dengan kategori
- 🔧 **Kelola Layanan** - manage paket service dan harga
- 📞 **Update Kontak** - edit info kontak dan WhatsApp
- ⚙️ **Pengaturan** - ganti password dan info bisnis
- 💾 **Auto-save** - data tersimpan otomatis di localStorage

## 📋 Struktur File

```
gepeng/
├── index.html         # Halaman utama website
├── admin.html         # Admin panel (NEW!)
├── styles.css         # Styling website
├── admin-styles.css   # Styling admin panel (NEW!)
├── script.ts          # TypeScript source website
├── script.js          # JavaScript compiled website
├── admin.ts           # TypeScript source admin (NEW!)
├── admin.js           # JavaScript compiled admin (NEW!)
├── package.json       # Dependencies
├── README.md          # Dokumentasi utama
├── ADMIN-GUIDE.md     # Panduan admin panel (NEW!)
├── CAROUSEL-GUIDE.md  # Panduan carousel
└── GALLERY-GUIDE.md   # Panduan gallery
```

## 🎯 Cara Menjalankan

### Website Frontend:

#### Opsi 1: Buka langsung di browser
Buka file `index.html` langsung di browser Anda.

#### Opsi 2: Menggunakan Live Server (Recommended)
```bash
# Install live-server secara global (hanya sekali)
npm install -g live-server

# Jalankan website
npm run dev
```

Website akan terbuka otomatis di http://localhost:3000

### Admin Panel:

#### Akses Admin:
```bash
# Buka admin.html di browser, atau
npm run admin
```

**Login Default:**
- Username: `admin`
- Password: `admin123`

⚠️ **Segera ganti password setelah login pertama!**

📖 **Panduan lengkap:** Baca `ADMIN-GUIDE.md`

## 🛠️ Development

Jika Anda ingin memodifikasi TypeScript:

```bash
# Edit file script.ts
# Kemudian compile dengan:
npm run build
```

## 📱 Bagian Website

1. **Hero Section** - Banner utama dengan CTA buttons
2. **Features** - Keunggulan layanan (Service Cepat, Teknisi Ahli, dll)
3. **Gallery Carousel** - Slider foto banner dengan 5 gambar (auto-slide 5 detik)
   - Navigation: Tombol prev/next, dots indicator
   - Swipe support untuk mobile
   - Keyboard navigation (arrow keys)
   - Auto-pause saat hover
4. **Photo Gallery** - 🆕 Grid galeri foto dengan 12 foto (4x3 layout)
   - Filter kategori: Semua, Workshop, Service, Hasil
   - Lightbox untuk view foto full screen
   - Navigation prev/next dalam lightbox
   - Hover effect yang smooth
5. **Services** - Paket layanan (Berkala, Premium, Perbaikan Khusus)
6. **About** - Tentang bisnis dan statistik
7. **Contact** - Form kontak dan informasi kontak
8. **Footer** - Informasi tambahan dan social links

## 🎨 Kustomisasi

### Mengubah Warna
Edit variabel di `styles.css`:
```css
:root {
    --primary-color: #FF6B35;    /* Warna utama */
    --secondary-color: #004E89;   /* Warna sekunder */
    --accent-color: #F7931E;      /* Warna aksen */
}
```

### Mengubah Nomor WhatsApp
Edit `index.html`, cari bagian floating WhatsApp button:
```html
<a href="https://wa.me/6281234567890?text=...">
```
Ganti `6281234567890` dengan nomor WhatsApp Anda (format: 62 + nomor tanpa 0 di depan).

Contoh:
- Nomor: 0812-3456-7890
- Format WhatsApp: 6281234567890

### Mengubah Konten
Edit langsung di file `index.html`:
- Nama bisnis
- Alamat
- Nomor telepon
- Email
- Harga layanan
- Dan lainnya

## 📞 Informasi Kontak (Edit di index.html)

Ganti dengan informasi bisnis Anda:
- 📍 Alamat
- 📞 Telepon
- ✉️ Email
- 🕐 Jam operasional

## 🌟 Tips

1. **Ganti foto carousel:** Edit SVG placeholder di `index.html` dengan foto asli:
   ```html
   <div class="slide-content">
       <img src="images/workshop-1.jpg" alt="Workshop Modern">
   </div>
   ```
2. Tambahkan folder `images/` dan masukkan foto workshop Anda
3. Ganti placeholder image dengan foto workshop Anda
4. **Update nomor WhatsApp** di floating button (format: 62XXXXXXXXXX)
5. Tambahkan link social media yang benar
6. Sesuaikan harga dan paket layanan
7. Update informasi kontak dengan data yang benar
8. Tambahkan Google Maps embed untuk lokasi workshop

## 📄 License

Free to use untuk bisnis Anda!

---

Dibuat dengan ❤️ untuk GePeng Motor Service
