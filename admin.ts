// Admin Panel TypeScript
// Data storage key
const STORAGE_KEY = 'gepeng_admin_data';

// Default admin credentials
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'admin123';

// Data interfaces
interface CarouselItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface GalleryItem {
    id: string;
    title: string;
    description: string;
    category: 'workshop' | 'service' | 'result';
    image: string;
}

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    price: string;
    featured: boolean;
}

interface ContactInfo {
    address: string;
    phone1: string;
    phone2: string;
    whatsapp: string;
    email: string;
    hours: string;
}

interface Settings {
    businessName: string;
    tagline: string;
    password: string;
}

interface AdminData {
    carousel: CarouselItem[];
    gallery: GalleryItem[];
    services: ServiceItem[];
    contact: ContactInfo;
    settings: Settings;
}

// Initialize default data
const initializeDefaultData = (): AdminData => {
    return {
        carousel: [
            { id: '1', title: 'Workshop Modern', description: 'Fasilitas Lengkap & Nyaman', image: '' },
            { id: '2', title: 'Teknisi Berpengalaman', description: 'Tim Ahli & Terlatih', image: '' },
            { id: '3', title: 'Peralatan Canggih', description: 'Teknologi Terkini', image: '' },
            { id: '4', title: 'Hasil Maksimal', description: 'Motor Seperti Baru', image: '' },
            { id: '5', title: 'Terpercaya', description: '5000+ Motor Ditangani', image: '' }
        ],
        gallery: [
            { id: '1', title: 'Area Workshop', description: 'Ruang kerja yang luas', category: 'workshop', image: '' },
            { id: '2', title: 'Teknisi Profesional', description: 'Ahli semua motor', category: 'service', image: '' },
            { id: '3', title: 'Peralatan Lengkap', description: 'Tools terkini', category: 'workshop', image: '' },
            { id: '4', title: 'Motor Bersih', description: 'Hasil pembersihan', category: 'result', image: '' },
            { id: '5', title: 'Motor Terawat', description: 'Kondisi prima', category: 'result', image: '' },
            { id: '6', title: 'Tune Up Engine', description: 'Optimasi mesin', category: 'service', image: '' },
            { id: '7', title: 'Ruang Tunggu', description: 'AC, WiFi gratis', category: 'workshop', image: '' },
            { id: '8', title: 'Inspeksi Detail', description: 'Pengecekan menyeluruh', category: 'service', image: '' },
            { id: '9', title: 'Detailing Premium', description: 'Motor mengkilap', category: 'result', image: '' },
            { id: '10', title: 'Suku Cadang', description: 'Stok lengkap', category: 'workshop', image: '' },
            { id: '11', title: 'Service CVT', description: 'Spesialis matic', category: 'service', image: '' },
            { id: '12', title: 'Siap Dikendarai', description: 'Performa optimal', category: 'result', image: '' }
        ],
        services: [
            {
                id: '1',
                title: 'Service Berkala',
                description: 'Perawatan rutin motor Anda',
                features: ['Ganti oli mesin', 'Tune up engine', 'Pembersihan karburator', 'Cek sistem kelistrikan'],
                price: 'Mulai Rp 75.000',
                featured: false
            },
            {
                id: '2',
                title: 'Service Premium',
                description: 'Paket layanan terlengkap',
                features: ['Semua layanan berkala', 'Ganti suku cadang premium', 'Detailing motor', 'Free konsultasi'],
                price: 'Mulai Rp 150.000',
                featured: true
            },
            {
                id: '3',
                title: 'Perbaikan Khusus',
                description: 'Service untuk masalah spesifik',
                features: ['Engine overhaul', 'Perbaikan CVT', 'Ganti bearing', 'Custom & modifikasi'],
                price: 'Hubungi Kami',
                featured: false
            }
        ],
        contact: {
            address: 'Jl. Raya Motor No. 123\nJakarta Selatan, 12345',
            phone1: '+62 858-9433-0641',
            phone2: '+62 21-1234-5678',
            whatsapp: '6285894330641',
            email: 'info@gepengmotor.com',
            hours: 'Senin - Sabtu: 08.00 - 18.00\nMinggu: 08.00 - 14.00'
        },
        settings: {
            businessName: 'GePeng Motor Service',
            tagline: 'Service Motor Profesional & Terpercaya',
            password: DEFAULT_PASSWORD
        }
    };
};

// Storage functions
const saveData = (data: AdminData): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const loadData = (): AdminData => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    const defaultData = initializeDefaultData();
    saveData(defaultData);
    return defaultData;
};

// Global state
let adminData: AdminData = loadData();
let currentFilter = 'all';

// Login functionality
const loginForm = document.getElementById('login-form') as HTMLFormElement;
const loginScreen = document.getElementById('login-screen') as HTMLElement;
const adminDashboard = document.getElementById('admin-dashboard') as HTMLElement;

if (loginForm) {
    loginForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (username === DEFAULT_USERNAME && password === adminData.settings.password) {
            loginScreen.style.display = 'none';
            adminDashboard.style.display = 'flex';
            renderDashboard();
        } else {
            alert('Username atau password salah!');
        }
    });
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Yakin ingin logout?')) {
            loginScreen.style.display = 'flex';
            adminDashboard.style.display = 'none';
            (document.getElementById('username') as HTMLInputElement).value = '';
            (document.getElementById('password') as HTMLInputElement).value = '';
        }
    });
}

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const pageContents = document.querySelectorAll('.page-content');
const pageTitle = document.getElementById('page-title');

navItems.forEach(item => {
    item.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = (e.currentTarget as HTMLElement).dataset.page;
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        pageContents.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`${target}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        const titles: Record<string, string> = {
            dashboard: 'Dashboard',
            carousel: 'Banner Carousel',
            gallery: 'Galeri Foto',
            services: 'Layanan Kami',
            contact: 'Kontak Kami',
            settings: 'Pengaturan'
        };
        
        if (pageTitle && target) {
            pageTitle.textContent = titles[target];
        }
        
        // Render content based on page
        if (target === 'carousel') renderCarousel();
        if (target === 'gallery') renderGallery();
        if (target === 'services') renderServices();
        if (target === 'contact') renderContact();
        if (target === 'settings') renderSettings();
    });
});

// Preview website
const previewBtn = document.getElementById('preview-btn');
if (previewBtn) {
    previewBtn.addEventListener('click', () => {
        window.open('index.html', '_blank');
    });
}

// Dashboard render
const renderDashboard = (): void => {
    const carouselCount = document.getElementById('carousel-count');
    const galleryCount = document.getElementById('gallery-count');
    const servicesCount = document.getElementById('services-count');
    
    if (carouselCount) carouselCount.textContent = adminData.carousel.length.toString();
    if (galleryCount) galleryCount.textContent = adminData.gallery.length.toString();
    if (servicesCount) servicesCount.textContent = adminData.services.length.toString();
};

// Carousel management
const renderCarousel = (): void => {
    const list = document.getElementById('carousel-list');
    if (!list) return;
    
    list.innerHTML = adminData.carousel.map((item, index) => `
        <div class="list-item">
            <div class="list-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn btn-secondary btn-small" onclick="editCarousel('${item.id}')">✏️ Edit</button>
                <button class="btn btn-danger btn-small" onclick="deleteCarousel('${item.id}')">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
};

const addCarouselBtn = document.getElementById('add-carousel-btn');
if (addCarouselBtn) {
    addCarouselBtn.addEventListener('click', () => showCarouselModal());
}

(window as any).editCarousel = (id: string): void => {
    const item = adminData.carousel.find(c => c.id === id);
    if (item) showCarouselModal(item);
};

(window as any).deleteCarousel = (id: string): void => {
    if (confirm('Hapus banner ini?')) {
        adminData.carousel = adminData.carousel.filter(c => c.id !== id);
        saveData(adminData);
        renderCarousel();
        renderDashboard();
    }
};

// Gallery management
const renderGallery = (): void => {
    const list = document.getElementById('gallery-list');
    if (!list) return;
    
    const filtered = currentFilter === 'all' 
        ? adminData.gallery 
        : adminData.gallery.filter(g => g.category === currentFilter);
    
    list.innerHTML = filtered.map(item => `
        <div class="gallery-card">
            <div class="gallery-card-image">${item.image || '🖼️'}</div>
            <div class="gallery-card-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <span class="gallery-card-category">${item.category}</span>
            </div>
            <div class="gallery-card-actions">
                <button class="btn btn-secondary btn-small" onclick="editGallery('${item.id}')">✏️</button>
                <button class="btn btn-danger btn-small" onclick="deleteGallery('${item.id}')">🗑️</button>
            </div>
        </div>
    `).join('');
};

const addGalleryBtn = document.getElementById('add-gallery-btn');
if (addGalleryBtn) {
    addGalleryBtn.addEventListener('click', () => showGalleryModal());
}

// Gallery filter
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        currentFilter = target.dataset.filter || 'all';
        
        tabBtns.forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        
        renderGallery();
    });
});

(window as any).editGallery = (id: string): void => {
    const item = adminData.gallery.find(g => g.id === id);
    if (item) showGalleryModal(item);
};

(window as any).deleteGallery = (id: string): void => {
    if (confirm('Hapus foto ini?')) {
        adminData.gallery = adminData.gallery.filter(g => g.id !== id);
        saveData(adminData);
        renderGallery();
        renderDashboard();
    }
};

// Services management
const renderServices = (): void => {
    const list = document.getElementById('services-list');
    if (!list) return;
    
    list.innerHTML = adminData.services.map(item => `
        <div class="list-item">
            <div class="list-item-info">
                <h3>${item.title} ${item.featured ? '⭐' : ''}</h3>
                <p>${item.description} - ${item.price}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn btn-secondary btn-small" onclick="editService('${item.id}')">✏️ Edit</button>
                <button class="btn btn-danger btn-small" onclick="deleteService('${item.id}')">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
};

const addServiceBtn = document.getElementById('add-service-btn');
if (addServiceBtn) {
    addServiceBtn.addEventListener('click', () => showServiceModal());
}

(window as any).editService = (id: string): void => {
    const item = adminData.services.find(s => s.id === id);
    if (item) showServiceModal(item);
};

(window as any).deleteService = (id: string): void => {
    if (confirm('Hapus layanan ini?')) {
        adminData.services = adminData.services.filter(s => s.id !== id);
        saveData(adminData);
        renderServices();
        renderDashboard();
    }
};

// Contact management
const renderContact = (): void => {
    (document.getElementById('contact-address') as HTMLTextAreaElement).value = adminData.contact.address;
    (document.getElementById('contact-phone1') as HTMLInputElement).value = adminData.contact.phone1;
    (document.getElementById('contact-phone2') as HTMLInputElement).value = adminData.contact.phone2;
    (document.getElementById('contact-whatsapp') as HTMLInputElement).value = adminData.contact.whatsapp;
    (document.getElementById('contact-email') as HTMLInputElement).value = adminData.contact.email;
    (document.getElementById('contact-hours') as HTMLTextAreaElement).value = adminData.contact.hours;
};

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        adminData.contact = {
            address: (document.getElementById('contact-address') as HTMLTextAreaElement).value,
            phone1: (document.getElementById('contact-phone1') as HTMLInputElement).value,
            phone2: (document.getElementById('contact-phone2') as HTMLInputElement).value,
            whatsapp: (document.getElementById('contact-whatsapp') as HTMLInputElement).value,
            email: (document.getElementById('contact-email') as HTMLInputElement).value,
            hours: (document.getElementById('contact-hours') as HTMLTextAreaElement).value
        };
        
        saveData(adminData);
        alert('✅ Informasi kontak berhasil disimpan!');
    });
}

// Settings management
const renderSettings = (): void => {
    (document.getElementById('settings-business-name') as HTMLInputElement).value = adminData.settings.businessName;
    (document.getElementById('settings-tagline') as HTMLInputElement).value = adminData.settings.tagline;
};

const settingsForm = document.getElementById('settings-form');
if (settingsForm) {
    settingsForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        const oldPassword = (document.getElementById('settings-old-password') as HTMLInputElement).value;
        const newPassword = (document.getElementById('settings-new-password') as HTMLInputElement).value;
        const confirmPassword = (document.getElementById('settings-confirm-password') as HTMLInputElement).value;
        
        adminData.settings.businessName = (document.getElementById('settings-business-name') as HTMLInputElement).value;
        adminData.settings.tagline = (document.getElementById('settings-tagline') as HTMLInputElement).value;
        
        if (newPassword) {
            if (oldPassword !== adminData.settings.password) {
                alert('❌ Password lama salah!');
                return;
            }
            if (newPassword !== confirmPassword) {
                alert('❌ Konfirmasi password tidak cocok!');
                return;
            }
            adminData.settings.password = newPassword;
        }
        
        saveData(adminData);
        alert('✅ Pengaturan berhasil disimpan!');
        
        // Clear password fields
        (document.getElementById('settings-old-password') as HTMLInputElement).value = '';
        (document.getElementById('settings-new-password') as HTMLInputElement).value = '';
        (document.getElementById('settings-confirm-password') as HTMLInputElement).value = '';
    });
}

// Modal functions
const modal = document.getElementById('modal') as HTMLElement;
const modalTitle = document.getElementById('modal-title') as HTMLElement;
const modalBody = document.getElementById('modal-body') as HTMLElement;
const modalClose = document.querySelector('.modal-close') as HTMLElement;

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (modal) {
    modal.addEventListener('click', (e: Event) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

const showCarouselModal = (item?: CarouselItem): void => {
    modalTitle.textContent = item ? 'Edit Banner' : 'Tambah Banner';
    modalBody.innerHTML = `
        <form id="carousel-modal-form">
            <div class="form-group">
                <label>Judul</label>
                <input type="text" id="modal-carousel-title" value="${item?.title || ''}" required>
            </div>
            <div class="form-group">
                <label>Deskripsi</label>
                <input type="text" id="modal-carousel-description" value="${item?.description || ''}" required>
            </div>
            <div class="form-group">
                <label>Upload Gambar</label>
                <input type="file" id="modal-carousel-file" accept="image/*" class="file-input">
                <small style="color: #666; display: block; margin-top: 0.25rem;">
                    Atau masukkan URL gambar di bawah
                </small>
            </div>
            <div class="form-group">
                <label>URL Gambar (alternatif)</label>
                <input type="text" id="modal-carousel-image" value="${item?.image || ''}" placeholder="https://...">
            </div>
            <div id="image-preview-container" style="margin-bottom: 1rem;">
                ${item?.image ? `<img src="${item.image}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px;">` : ''}
            </div>
            <button type="submit" class="btn btn-primary btn-block">💾 Simpan</button>
        </form>
    `;
    
    // Handle file upload
    const fileInput = document.getElementById('modal-carousel-file') as HTMLInputElement;
    const imageUrlInput = document.getElementById('modal-carousel-image') as HTMLInputElement;
    const previewContainer = document.getElementById('image-preview-container') as HTMLElement;
    
    fileInput.addEventListener('change', (e: Event) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('⚠️ Ukuran gambar terlalu besar! Maksimal 2MB.');
                fileInput.value = '';
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                const base64 = event.target?.result as string;
                imageUrlInput.value = base64;
                previewContainer.innerHTML = `<img src="${base64}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Handle URL input change
    imageUrlInput.addEventListener('input', (e: Event) => {
        const url = (e.target as HTMLInputElement).value;
        if (url && !url.startsWith('data:')) {
            previewContainer.innerHTML = `<img src="${url}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">`;
        }
    });
    
    const form = document.getElementById('carousel-modal-form') as HTMLFormElement;
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        const newItem: CarouselItem = {
            id: item?.id || Date.now().toString(),
            title: (document.getElementById('modal-carousel-title') as HTMLInputElement).value,
            description: (document.getElementById('modal-carousel-description') as HTMLInputElement).value,
            image: (document.getElementById('modal-carousel-image') as HTMLInputElement).value
        };
        
        if (item) {
            const index = adminData.carousel.findIndex(c => c.id === item.id);
            adminData.carousel[index] = newItem;
        } else {
            adminData.carousel.push(newItem);
        }
        
        saveData(adminData);
        renderCarousel();
        renderDashboard();
        modal.classList.remove('active');
    });
    
    modal.classList.add('active');
};

const showGalleryModal = (item?: GalleryItem): void => {
    modalTitle.textContent = item ? 'Edit Foto' : 'Tambah Foto';
    modalBody.innerHTML = `
        <form id="gallery-modal-form">
            <div class="form-group">
                <label>Judul</label>
                <input type="text" id="modal-gallery-title" value="${item?.title || ''}" required>
            </div>
            <div class="form-group">
                <label>Deskripsi</label>
                <input type="text" id="modal-gallery-description" value="${item?.description || ''}" required>
            </div>
            <div class="form-group">
                <label>Kategori</label>
                <select id="modal-gallery-category" required>
                    <option value="workshop" ${item?.category === 'workshop' ? 'selected' : ''}>Workshop</option>
                    <option value="service" ${item?.category === 'service' ? 'selected' : ''}>Service</option>
                    <option value="result" ${item?.category === 'result' ? 'selected' : ''}>Hasil</option>
                </select>
            </div>
            <div class="form-group">
                <label>Upload Gambar</label>
                <input type="file" id="modal-gallery-file" accept="image/*" class="file-input">
                <small style="color: #666; display: block; margin-top: 0.25rem;">
                    Atau masukkan URL gambar di bawah
                </small>
            </div>
            <div class="form-group">
                <label>URL Gambar (alternatif)</label>
                <input type="text" id="modal-gallery-image" value="${item?.image || ''}" placeholder="https://...">
            </div>
            <div id="image-preview-container" style="margin-bottom: 1rem;">
                ${item?.image ? `<img src="${item.image}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px;">` : ''}
            </div>
            <button type="submit" class="btn btn-primary btn-block">💾 Simpan</button>
        </form>
    `;
    
    // Handle file upload
    const fileInput = document.getElementById('modal-gallery-file') as HTMLInputElement;
    const imageUrlInput = document.getElementById('modal-gallery-image') as HTMLInputElement;
    const previewContainer = document.getElementById('image-preview-container') as HTMLElement;
    
    fileInput.addEventListener('change', (e: Event) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('⚠️ Ukuran gambar terlalu besar! Maksimal 2MB.');
                fileInput.value = '';
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                const base64 = event.target?.result as string;
                imageUrlInput.value = base64;
                previewContainer.innerHTML = `<img src="${base64}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Handle URL input change
    imageUrlInput.addEventListener('input', (e: Event) => {
        const url = (e.target as HTMLInputElement).value;
        if (url && !url.startsWith('data:')) {
            previewContainer.innerHTML = `<img src="${url}" alt="Preview" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">`;
        }
    });
    
    const form = document.getElementById('gallery-modal-form') as HTMLFormElement;
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        const newItem: GalleryItem = {
            id: item?.id || Date.now().toString(),
            title: (document.getElementById('modal-gallery-title') as HTMLInputElement).value,
            description: (document.getElementById('modal-gallery-description') as HTMLInputElement).value,
            category: (document.getElementById('modal-gallery-category') as HTMLSelectElement).value as any,
            image: (document.getElementById('modal-gallery-image') as HTMLInputElement).value
        };
        
        if (item) {
            const index = adminData.gallery.findIndex(g => g.id === item.id);
            adminData.gallery[index] = newItem;
        } else {
            adminData.gallery.push(newItem);
        }
        
        saveData(adminData);
        renderGallery();
        renderDashboard();
        modal.classList.remove('active');
    });
    
    modal.classList.add('active');
};

const showServiceModal = (item?: ServiceItem): void => {
    modalTitle.textContent = item ? 'Edit Layanan' : 'Tambah Layanan';
    modalBody.innerHTML = `
        <form id="service-modal-form">
            <div class="form-group">
                <label>Nama Layanan</label>
                <input type="text" id="modal-service-title" value="${item?.title || ''}" required>
            </div>
            <div class="form-group">
                <label>Deskripsi</label>
                <input type="text" id="modal-service-description" value="${item?.description || ''}" required>
            </div>
            <div class="form-group">
                <label>Harga</label>
                <input type="text" id="modal-service-price" value="${item?.price || ''}" placeholder="Mulai Rp 100.000" required>
            </div>
            <div class="form-group">
                <label>Fitur (pisahkan dengan enter)</label>
                <textarea id="modal-service-features" rows="5" required>${item?.features.join('\n') || ''}</textarea>
            </div>
            <div class="form-group">
                <label>
                    <input type="checkbox" id="modal-service-featured" ${item?.featured ? 'checked' : ''}>
                    Tandai sebagai paket unggulan
                </label>
            </div>
            <button type="submit" class="btn btn-primary btn-block">💾 Simpan</button>
        </form>
    `;
    
    const form = document.getElementById('service-modal-form') as HTMLFormElement;
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        const features = (document.getElementById('modal-service-features') as HTMLTextAreaElement).value
            .split('\n')
            .filter(f => f.trim());
        
        const newItem: ServiceItem = {
            id: item?.id || Date.now().toString(),
            title: (document.getElementById('modal-service-title') as HTMLInputElement).value,
            description: (document.getElementById('modal-service-description') as HTMLInputElement).value,
            price: (document.getElementById('modal-service-price') as HTMLInputElement).value,
            features: features,
            featured: (document.getElementById('modal-service-featured') as HTMLInputElement).checked
        };
        
        if (item) {
            const index = adminData.services.findIndex(s => s.id === item.id);
            adminData.services[index] = newItem;
        } else {
            adminData.services.push(newItem);
        }
        
        saveData(adminData);
        renderServices();
        renderDashboard();
        modal.classList.remove('active');
    });
    
    modal.classList.add('active');
};

console.log('✅ Admin Panel loaded successfully!');
