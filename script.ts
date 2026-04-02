// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement;
const navMenu = document.querySelector('.nav-menu') as HTMLUListElement;

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#fff';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
}

interface HomepageCarouselItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface HomepageGalleryItem {
    id: string;
    title: string;
    description: string;
    category: 'workshop' | 'service' | 'result';
    image: string;
}

interface HomepageServiceItem {
    id: string;
    title: string;
    description: string;
    features: string[];
    price: string;
    featured: boolean;
}

interface HomepageContactInfo {
    address: string;
    phone1: string;
    phone2: string;
    whatsapp: string;
    email: string;
    hours: string;
}

interface HomepageAdminData {
    carousel?: HomepageCarouselItem[];
    gallery?: HomepageGalleryItem[];
    services?: HomepageServiceItem[];
    contact?: HomepageContactInfo;
}

const ADMIN_STORAGE_KEY = 'gepeng_admin_data';

const escapeHtml = (value: string): string =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

const loadHomepageAdminData = (): HomepageAdminData | null => {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as HomepageAdminData;
    } catch {
        return null;
    }
};

const getWhatsappNumberFromAdmin = (): string => {
    const data = loadHomepageAdminData();
    const wa = data?.contact?.whatsapp?.trim();
    return wa && wa.length > 0 ? wa : '6285894330641';
};

const renderCarouselFromAdmin = (data: HomepageAdminData): void => {
    if (!data.carousel || data.carousel.length === 0) return;
    const wrapper = document.getElementById('carouselWrapper');
    const dots = document.getElementById('carouselDots');
    if (!wrapper || !dots) return;

    wrapper.innerHTML = data.carousel.map((item, index) => {
        const title = escapeHtml(item.title || 'Banner');
        const description = escapeHtml(item.description || '');
        const image = item.image?.trim();

        const media = image
            ? `<img src="${escapeHtml(image)}" alt="${title}">
               <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.7),rgba(0,0,0,.2));display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:1rem;">
                    <h3 style="font-size:2rem;margin-bottom:.5rem;">${title}</h3>
                    <p>${description}</p>
               </div>`
            : `<svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="grad-admin-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:0.9" />
                            <stop offset="100%" style="stop-color:#004E89;stop-opacity:0.9" />
                        </linearGradient>
                    </defs>
                    <rect width="1200" height="500" fill="url(#grad-admin-${index})" />
                    <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="48" font-weight="bold">${title}</text>
                    <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="24">${description}</text>
               </svg>`;

        return `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <div class="slide-content">${media}</div>
            </div>
        `;
    }).join('');

    dots.innerHTML = data.carousel.map((_, index) =>
        `<button class="carousel-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>`
    ).join('');
};

const galleryEmojiByCategory = (category: string): string => {
    if (category === 'workshop') return '🏍️';
    if (category === 'service') return '🔧';
    return '✨';
};

const renderGalleryFromAdmin = (data: HomepageAdminData): void => {
    if (!data.gallery || data.gallery.length === 0) return;
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = data.gallery.map((item) => {
        const title = escapeHtml(item.title || 'Foto');
        const description = escapeHtml(item.description || '');
        const category = escapeHtml(item.category || 'workshop');
        const image = item.image?.trim();
        const visual = image
            ? `<img src="${escapeHtml(image)}" alt="${title}">`
            : `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#004E89"/>
                    <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="60">${galleryEmojiByCategory(category)}</text>
                    <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="18">${title}</text>
               </svg>`;

        return `
            <div class="gallery-item" data-category="${category}">
                <div class="gallery-image">
                    ${visual}
                    <div class="gallery-overlay">
                        <div class="gallery-info">
                            <h3>${title}</h3>
                            <p>${description}</p>
                        </div>
                        <button class="gallery-zoom">🔍</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

const renderServicesFromAdmin = (data: HomepageAdminData): void => {
    if (!data.services || data.services.length === 0) return;
    const serviceGrid = document.getElementById('serviceGrid');
    if (!serviceGrid) return;

    serviceGrid.innerHTML = data.services.map((service, index) => {
        const title = escapeHtml(service.title || 'Layanan');
        const features = (service.features || []).map(feature => `<li>${escapeHtml(feature)}</li>`).join('');
        const price = escapeHtml(service.price || 'Hubungi Kami');
        const featured = Boolean(service.featured);
        const indexText = String(index + 1).padStart(2, '0');
        return `
            <div class="service-card ${featured ? 'featured' : ''}">
                ${featured ? '<div class="badge">Populer</div>' : ''}
                <div class="service-number">${indexText}</div>
                <h3>${title}</h3>
                <ul>${features}</ul>
                <button class="btn ${featured ? 'btn-primary' : 'btn-outline'}">${price}</button>
            </div>
        `;
    }).join('');
};

const nlToBr = (value: string): string => escapeHtml(value).replace(/\n/g, '<br>');

const renderContactFromAdmin = (data: HomepageAdminData): void => {
    if (!data.contact) return;

    const address = document.getElementById('contactAddress');
    const phones = document.getElementById('contactPhones');
    const hours = document.getElementById('contactHours');
    const email = document.getElementById('contactEmail');
    const wa = document.getElementById('whatsappFloat') as HTMLAnchorElement | null;

    if (address) address.innerHTML = nlToBr(data.contact.address || '');
    if (phones) phones.innerHTML = `${escapeHtml(data.contact.phone1 || '')}<br>${escapeHtml(data.contact.phone2 || '')}`;
    if (hours) hours.innerHTML = nlToBr(data.contact.hours || '');
    if (email) email.textContent = data.contact.email || '';
    if (wa && data.contact.whatsapp) {
        const message = encodeURIComponent('Halo GePeng Motor, saya mau tanya tentang service motor');
        wa.href = `https://wa.me/${data.contact.whatsapp}?text=${message}`;
    }
};

const syncHomepageFromAdmin = (): void => {
    const data = loadHomepageAdminData();
    if (!data) return;
    renderCarouselFromAdmin(data);
    renderGalleryFromAdmin(data);
    renderServicesFromAdmin(data);
    renderContactFromAdmin(data);
};

// ========== CAROUSEL FUNCTIONALITY ==========
class Carousel {
    private currentSlide: number = 0;
    private slides: NodeListOf<Element>;
    private dots: NodeListOf<Element>;
    private wrapper: HTMLElement | null;
    private autoPlayInterval: number | null = null;
    private readonly autoPlayDelay: number = 5000; // 5 seconds

    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.wrapper = document.querySelector('.carousel-wrapper');
        
        if (this.slides.length > 0) {
            this.init();
        }
    }

    private init(): void {
        // Next button
        const nextBtn = document.querySelector('.carousel-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Previous button
        const prevBtn = document.querySelector('.carousel-prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }

        // Dots navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Touch/Swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('touchstart', (e) => {
                touchStartX = (e as TouchEvent).changedTouches[0].screenX;
            });

            carouselContainer.addEventListener('touchend', (e) => {
                touchEndX = (e as TouchEvent).changedTouches[0].screenX;
                this.handleSwipe();
            });
        }

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) this.nextSlide();
            if (touchEndX > touchStartX + 50) this.prevSlide();
        };

        this.handleSwipe = handleSwipe;

        // Start autoplay
        this.startAutoPlay();

        // Pause on hover
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
            carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Show first slide
        this.updateSlides();
    }

    private handleSwipe!: () => void;

    private goToSlide(index: number): void {
        this.currentSlide = index;
        this.updateSlides();
        this.resetAutoPlay();
    }

    private nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
        this.resetAutoPlay();
    }

    private prevSlide(): void {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
        this.resetAutoPlay();
    }

    private updateSlides(): void {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Transform wrapper
        if (this.wrapper) {
            this.wrapper.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
    }

    private startAutoPlay(): void {
        this.autoPlayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    private stopAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    private resetAutoPlay(): void {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// ========== END CAROUSEL ==========

// ========== PHOTO GALLERY FUNCTIONALITY ==========
class PhotoGallery {
    private filterBtns: NodeListOf<Element>;
    private galleryItems: NodeListOf<Element>;
    private lightbox: HTMLElement | null;
    private lightboxImg: HTMLImageElement | null;
    private lightboxTitle: HTMLElement | null;
    private lightboxDescription: HTMLElement | null;
    private currentImageIndex: number = 0;
    private filteredImages: Element[] = [];

    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
        this.lightboxTitle = document.getElementById('lightbox-title');
        this.lightboxDescription = document.getElementById('lightbox-description');

        if (this.galleryItems.length > 0) {
            this.init();
        }
    }

    private init(): void {
        // Filter functionality
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterGallery(filter || 'all');
                
                // Update active button
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Zoom functionality
        this.galleryItems.forEach((item, index) => {
            const zoomBtn = item.querySelector('.gallery-zoom');
            if (zoomBtn) {
                zoomBtn.addEventListener('click', () => {
                    this.openLightbox(index);
                });
            }

            // Click on image also opens lightbox
            const galleryImage = item.querySelector('.gallery-image');
            if (galleryImage) {
                galleryImage.addEventListener('click', () => {
                    this.openLightbox(index);
                });
            }
        });

        // Lightbox controls
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.showPrevImage());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.showNextImage());
        }

        // Close on background click
        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.closeLightbox();
                }
            });
        }

        // Keyboard navigation in lightbox
        document.addEventListener('keydown', (e) => {
            if (this.lightbox?.classList.contains('active')) {
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.showPrevImage();
                if (e.key === 'ArrowRight') this.showNextImage();
            }
        });

        // Initialize filtered images
        this.updateFilteredImages();
    }

    private filterGallery(category: string): void {
        this.galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        this.updateFilteredImages();
    }

    private updateFilteredImages(): void {
        this.filteredImages = Array.from(this.galleryItems).filter(
            item => !item.classList.contains('hidden')
        );
    }

    private openLightbox(index: number): void {
        this.updateFilteredImages();
        this.currentImageIndex = index;
        
        const item = this.galleryItems[index];
        const svg = item.querySelector('svg');
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-info h3')?.textContent || '';
        const description = item.querySelector('.gallery-info p')?.textContent || '';

        if (this.lightboxImg) {
            if (img) {
                this.lightboxImg.src = img.getAttribute('src') || '';
            } else if (svg) {
                // Convert SVG to data URL
                const svgData = new XMLSerializer().serializeToString(svg);
                const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(svgBlob);
                this.lightboxImg.src = url;
            }
        }

        if (this.lightboxTitle) this.lightboxTitle.textContent = title;
        if (this.lightboxDescription) this.lightboxDescription.textContent = description;

        if (this.lightbox) {
            this.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    private closeLightbox(): void {
        if (this.lightbox) {
            this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    private showNextImage(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryItems.length;
        this.openLightbox(this.currentImageIndex);
    }

    private showPrevImage(): void {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
        this.openLightbox(this.currentImageIndex);
    }
}

// ========== END PHOTO GALLERY ==========

const initializeHomepage = (): void => {
    syncHomepageFromAdmin();
    new Carousel();
    new PhotoGallery();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomepage);
} else {
    initializeHomepage();
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navMenu) {
                    navMenu.style.display = 'none';
                }
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar') as HTMLElement;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler
const contactForm = document.getElementById('contactForm') as HTMLFormElement;

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('contactName') as HTMLInputElement | null)?.value.trim() || '';
        const phone = (document.getElementById('contactPhone') as HTMLInputElement | null)?.value.trim() || '';
        const email = (document.getElementById('contactUserEmail') as HTMLInputElement | null)?.value.trim() || '';
        const service = (document.getElementById('contactService') as HTMLSelectElement | null)?.value.trim() || '';
        const message = (document.getElementById('contactMessage') as HTMLTextAreaElement | null)?.value.trim() || '';

        const waNumber = getWhatsappNumberFromAdmin();
        const waText =
            `Halo GePeng Motor,%0A` +
            `Saya ingin booking service.%0A%0A` +
            `Nama: ${encodeURIComponent(name)}%0A` +
            `No HP: ${encodeURIComponent(phone)}%0A` +
            `Email: ${encodeURIComponent(email)}%0A` +
            `Layanan: ${encodeURIComponent(service)}%0A` +
            `Pesan: ${encodeURIComponent(message)}`;

        window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');
        contactForm.reset();
    });
}

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .service-card, .contact-item');
animateElements.forEach(el => observer.observe(el));

// Add fade-in animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Stats counter animation
interface StatElement extends HTMLElement {
    dataset: {
        target?: string;
    };
}

const animateCounter = (element: StatElement) => {
    const target = parseInt(element.dataset.target || element.textContent || '0');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toString() + (element.textContent?.includes('+') ? '+' : '') + (element.textContent?.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toString();
        }
    }, 16);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target as StatElement;
            if (!statNumber.dataset.target) {
                statNumber.dataset.target = statNumber.textContent || '0';
                animateCounter(statNumber);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => statsObserver.observe(stat));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (window.innerWidth <= 768 && navMenu && !navMenu.contains(target) && !mobileMenuToggle?.contains(target)) {
        navMenu.style.display = 'none';
    }
});

console.log('GePeng Motor Service - Website loaded successfully! 🏍️');
