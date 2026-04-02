# Cara Mengganti Foto di Carousel Banner

## Langkah-langkah:

### 1. Siapkan Foto Anda
- Siapkan 5 foto berkualitas tinggi dari workshop/bengkel Anda
- Ukuran rekomendasi: 1200 x 500 pixels
- Format: JPG atau PNG
- Nama file contoh: 
  - `workshop-1.jpg` (workshop tampak depan)
  - `workshop-2.jpg` (ruang tunggu)
  - `workshop-3.jpg` (teknisi sedang bekerja)
  - `workshop-4.jpg` (peralatan)
  - `workshop-5.jpg` (motor hasil service)

### 2. Buat Folder Images
```
gepeng/
├── images/
│   ├── workshop-1.jpg
│   ├── workshop-2.jpg
│   ├── workshop-3.jpg
│   ├── workshop-4.jpg
│   └── workshop-5.jpg
```

### 3. Edit index.html

Cari bagian carousel (sekitar baris 70-140) dan ganti SVG placeholder dengan img tag:

**SEBELUM:**
```html
<div class="carousel-slide active">
    <div class="slide-content">
        <svg width="100%" height="100%" viewBox="0 0 1200 500">
            <!-- SVG content -->
        </svg>
    </div>
</div>
```

**SESUDAH:**
```html
<div class="carousel-slide active">
    <div class="slide-content">
        <img src="images/workshop-1.jpg" alt="Workshop Modern GePeng Motor">
        <div class="slide-overlay">
            <h3>Workshop Modern</h3>
            <p>Fasilitas Lengkap & Nyaman</p>
        </div>
    </div>
</div>
```

### 4. Tambahkan CSS untuk Overlay (opsional)

Jika ingin menambahkan teks di atas foto, tambahkan di `styles.css`:

```css
.slide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    color: white;
    padding: 3rem 2rem;
    text-align: center;
}

.slide-overlay h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.slide-overlay p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.slide-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 5. Contoh Lengkap untuk 5 Slide:

```html
<!-- Slide 1 -->
<div class="carousel-slide active">
    <div class="slide-content">
        <img src="images/workshop-1.jpg" alt="Workshop GePeng Motor">
        <div class="slide-overlay">
            <h3>Workshop Modern</h3>
            <p>Fasilitas Lengkap & Nyaman</p>
        </div>
    </div>
</div>

<!-- Slide 2 -->
<div class="carousel-slide">
    <div class="slide-content">
        <img src="images/workshop-2.jpg" alt="Ruang Tunggu">
        <div class="slide-overlay">
            <h3>Ruang Tunggu Nyaman</h3>
            <p>AC, WiFi, dan Refreshment Gratis</p>
        </div>
    </div>
</div>

<!-- Slide 3 -->
<div class="carousel-slide">
    <div class="slide-content">
        <img src="images/workshop-3.jpg" alt="Teknisi Ahli">
        <div class="slide-overlay">
            <h3>Teknisi Berpengalaman</h3>
            <p>Tim Ahli & Bersertifikat</p>
        </div>
    </div>
</div>

<!-- Slide 4 -->
<div class="carousel-slide">
    <div class="slide-content">
        <img src="images/workshop-4.jpg" alt="Peralatan Modern">
        <div class="slide-overlay">
            <h3>Peralatan Canggih</h3>
            <p>Teknologi Terkini</p>
        </div>
    </div>
</div>

<!-- Slide 5 -->
<div class="carousel-slide">
    <div class="slide-content">
        <img src="images/workshop-5.jpg" alt="Motor Hasil Service">
        <div class="slide-overlay">
            <h3>Hasil Maksimal</h3>
            <p>Motor Seperti Baru Lagi</p>
        </div>
    </div>
</div>
```

## Tips Fotografi:

1. **Pencahayaan bagus** - Foto di siang hari atau dengan lighting yang baik
2. **Bersihkan area** - Pastikan workshop terlihat rapi
3. **Highlight keunggulan** - Tunjukkan peralatan modern, teknisi bekerja, dll
4. **Konsisten** - Gunakan orientasi landscape untuk semua foto
5. **Kompresi** - Optimasi ukuran file agar website loading cepat (gunakan tools seperti TinyPNG.com)

## Alternatif: Gunakan Stock Photos Sementara

Jika belum punya foto:
1. Download foto gratis dari Unsplash.com atau Pexels.com
2. Cari keyword: "motorcycle workshop", "mechanic", "bike repair"
3. Gunakan sebagai placeholder sampai punya foto asli
