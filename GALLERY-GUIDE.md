# Panduan Photo Gallery

## 📸 Fitur Gallery

Website ini memiliki section **Photo Gallery** yang menampilkan 12 foto dalam grid layout (4 kolom x 3 baris).

### Kategori Foto:
- **Workshop** - Foto area workshop, ruang tunggu, peralatan
- **Service** - Foto proses service, teknisi bekerja, inspeksi
- **Hasil** - Foto motor setelah service, detailing, hasil akhir

### Fitur Interaktif:
1. **Filter Kategori** - Klik tombol filter untuk melihat foto per kategori
2. **Hover Effect** - Informasi foto muncul saat hover
3. **Lightbox** - Klik foto untuk melihat full screen
4. **Navigation** - Tombol prev/next dalam lightbox
5. **Keyboard** - Arrow keys untuk navigasi, ESC untuk close

---

## 🔄 Cara Mengganti Foto

### Langkah 1: Siapkan Foto Anda

Siapkan 12 foto dengan kategori:
- 4 foto Workshop
- 4 foto Service
- 4 foto Hasil

**Spesifikasi:**
- Format: JPG atau PNG
- Ukuran: Minimal 800 x 600 pixels
- Aspek ratio: 4:3 (recommended)
- Nama file: Beri nama yang jelas (contoh: `workshop-area.jpg`, `teknisi-kerja.jpg`)

### Langkah 2: Buat Folder Images

```
gepeng/
├── images/
│   ├── gallery/
│   │   ├── workshop-1.jpg
│   │   ├── workshop-2.jpg
│   │   ├── service-1.jpg
│   │   ├── service-2.jpg
│   │   └── ...
```

### Langkah 3: Edit HTML

Cari section `<section id="gallery" class="photo-gallery">` di `index.html` (sekitar baris 184).

**SEBELUM (SVG Placeholder):**
```html
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG code -->
        </svg>
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Area Workshop</h3>
                <p>Ruang kerja yang luas dan nyaman</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>
```

**SESUDAH (Foto Asli):**
```html
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/workshop-1.jpg" alt="Area Workshop GePeng Motor">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Area Workshop</h3>
                <p>Ruang kerja yang luas dan nyaman</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>
```

### Langkah 4: Ulangi untuk Semua 12 Foto

Ganti setiap `<svg>` dengan `<img src="...">` untuk ke-12 foto.

---

## 📋 Template Lengkap

### Workshop Photos (4 foto):

```html
<!-- Workshop 1 -->
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/workshop-1.jpg" alt="Area Workshop">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Area Workshop</h3>
                <p>Ruang kerja yang luas dan nyaman</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>

<!-- Workshop 2 -->
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/workshop-2.jpg" alt="Peralatan Modern">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Peralatan Lengkap</h3>
                <p>Tools dan equipment terkini</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>

<!-- Workshop 3 -->
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/workshop-3.jpg" alt="Ruang Tunggu">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Ruang Tunggu Nyaman</h3>
                <p>AC, WiFi, dan refreshment gratis</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>

<!-- Workshop 4 -->
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/workshop-4.jpg" alt="Spare Parts">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Suku Cadang Original</h3>
                <p>Stok lengkap berbagai merek</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>
```

### Service Photos (4 foto):

```html
<!-- Service 1 -->
<div class="gallery-item" data-category="service">
    <div class="gallery-image">
        <img src="images/gallery/service-1.jpg" alt="Teknisi Bekerja">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Teknisi Profesional</h3>
                <p>Ahli dalam menangani semua jenis motor</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>

<!-- Service 2 - 4: Similar structure -->
```

### Result Photos (4 foto):

```html
<!-- Result 1 -->
<div class="gallery-item" data-category="result">
    <div class="gallery-image">
        <img src="images/gallery/result-1.jpg" alt="Motor Setelah Service">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Motor Bersih</h3>
                <p>Hasil pembersihan menyeluruh</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>

<!-- Result 2 - 4: Similar structure -->
```

---

## 🎨 Customization Tips

### 1. Menambah/Mengurangi Foto

Untuk menambah foto, copy-paste block `<div class="gallery-item">`:

```html
<div class="gallery-item" data-category="workshop">
    <div class="gallery-image">
        <img src="images/gallery/new-photo.jpg" alt="New Photo">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Judul Foto</h3>
                <p>Deskripsi foto</p>
            </div>
            <button class="gallery-zoom">🔍</button>
        </div>
    </div>
</div>
```

### 2. Menambah Kategori Baru

Edit file `index.html`, tambahkan button filter baru:

```html
<div class="gallery-filters">
    <button class="filter-btn active" data-filter="all">Semua</button>
    <button class="filter-btn" data-filter="workshop">Workshop</button>
    <button class="filter-btn" data-filter="service">Service</button>
    <button class="filter-btn" data-filter="result">Hasil</button>
    <button class="filter-btn" data-filter="customer">Customer</button> <!-- BARU -->
</div>
```

Lalu tambahkan foto dengan kategori baru:

```html
<div class="gallery-item" data-category="customer">
    <!-- ... -->
</div>
```

### 3. Mengubah Layout Grid

Edit `styles.css`, cari `.gallery-grid`:

```css
/* Default: 4 kolom */
.gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Ubah jadi 3 kolom */
.gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

/* Ubah jadi 5 kolom */
.gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
```

---

## 🖼️ Optimasi Foto

Untuk performa website yang baik:

1. **Kompres foto** sebelum upload
   - Online tools: TinyPNG.com, Compressor.io
   - Target: < 200KB per foto

2. **Resize foto** ke ukuran yang sesuai
   - Recommended: 800 x 600 pixels
   - Tidak perlu resolusi super tinggi

3. **Format yang tepat**
   - JPG untuk foto biasa
   - PNG untuk gambar dengan transparency
   - WebP untuk ukuran lebih kecil (modern browsers)

4. **Lazy loading** (optional)
   Tambahkan `loading="lazy"` ke tag img:
   ```html
   <img src="..." alt="..." loading="lazy">
   ```

---

## ✅ Checklist

- [ ] Siapkan 12 foto (4 workshop, 4 service, 4 hasil)
- [ ] Buat folder `images/gallery/`
- [ ] Kompres dan resize foto
- [ ] Upload foto ke folder
- [ ] Edit HTML, ganti SVG dengan `<img>` tag
- [ ] Update judul dan deskripsi setiap foto
- [ ] Test filter kategori
- [ ] Test lightbox dan navigation
- [ ] Test di mobile

---

Selamat! Gallery foto Anda sudah siap! 🎉
