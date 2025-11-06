// Translation Data
const translations = {
    id: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'Tentang Kami',
        'nav.profile': 'Profil Perusahaan',
        'nav.vismis': 'Visi dan Misi',
        'nav.more': 'Lainnya',
        'nav.projects': 'Produk & Layanan',
        'nav.gallery': 'Galeri',
        'nav.legal': 'Legalitas',
        'nav.news': 'Berita',
        'nav.contact': 'Kontak',
        
        // Hero
        'hero.headline': 'MEMBERIKAN IDE, INOVASI, DAN SOLUSI IT UNTUK PERKEMBANGAN PERUSAHAAN ANDA',
        'hero.tagline': 'YOUR PARTNER IT SOLUTION',
        'hero.cta': 'Pelajari Lebih Lanjut',
        'hero.contact': 'Hubungi Kami',
        
        // About
        'about.title': 'Tentang Kami',
        'about.p1': 'PT Netcom Solusi Informatika adalah Perusahaan Profesional yang memberikan jasa layanan Solusi IT untuk Perkantoran maupun Perorangan. Pengguna layanan kami tersebar di berbagai industri seperti Manufaktur, Otomotif, Logistik, Perbankan, Perhotelan, Farmasi, Kontruksi, Rumah Sakit, Pendidikan dan Industri lainnya.',
        'about.p2': 'Perusahaan kami melayani infrastruktur jaringan intranet Perusahaan seperti Jaringan LAN, Router, Switch, Acces Point, PABX, Setting Mikrotik dan menangani jasa pusat data perusahaan seperti pembangunan server, perapihan server dan maintenance server, serta penjualan PC/Laptop untuk kebutuhan perkantoran maupun kebutuhan Security CCTV. Internet Service Provider (ISP).',
        
        // Profile
        'profile.title': 'Profil Perusahaan',
        'profile.company': 'Nama Perusahaan',
        'profile.companyName': 'PT Netcom Solusi Informatika',
        'profile.motto': 'Moto',
        'profile.mottoText': 'YOUR PARTNER IT SOLUTION',
        'profile.industry': 'Industri',
        'profile.industryText': 'Teknologi Informasi & Solusi IT',
        'profile.clients': 'Klien',
        'profile.clientsText': 'Berbagai industri: Manufaktur, Otomotif, Logistik, Perbankan, Perhotelan, Farmasi, Konstruksi, Rumah Sakit, Pendidikan',
        
        // Vision & Mission
        'vismis.title': 'Visi dan Misi',
        'vismis.vision': 'Visi',
        'vismis.visionText': 'Menjadi perusahaan solusi IT terdepan yang memberikan inovasi dan layanan berkualitas tinggi untuk mendukung perkembangan bisnis klien kami.',
        'vismis.mission': 'Misi',
        'vismis.missionText': '• Memberikan solusi IT yang inovatif dan terpercaya\n• Melayani dengan profesionalisme dan integritas tinggi\n• Membangun kemitraan jangka panjang dengan klien\n• Terus berinovasi dalam teknologi dan layanan',
        
        // Projects
        'projects.title': 'Produk & Layanan',
        'projects.subtitle': 'Solusi IT Lengkap untuk Kebutuhan Bisnis Anda',
        'projects.service1.title': 'Pengadaan dan Jasa Service Perangkat IT',
        'projects.service1.desc': 'Hardware and Software untuk kebutuhan perkantoran dan industri',
        'projects.service2.title': 'Pengadaan dan Instalasi CCTV',
        'projects.service2.desc': 'Closed Circuit Television untuk keamanan dan monitoring',
        'projects.service3.title': 'Pengadaan dan Instalasi PABX',
        'projects.service3.desc': 'Private Automatic Branch Exchange untuk komunikasi internal',
        'projects.service4.title': 'Internet Service Provider (ISP)',
        'projects.service4.desc': 'Pengadaan dan Instalasi Internet untuk kebutuhan bisnis',
        'projects.service5.title': 'Instalasi Jaringan LAN',
        'projects.service5.desc': 'Local Area Network dengan Router, Switch, Access Point, dan Mikrotik',
        'projects.service6.title': 'IPTV & VSAT STARLINK',
        'projects.service6.desc': 'IPTV PREMIUM-HOMETV dan VSAT STARLINK-BKU untuk solusi komunikasi',
        
        // Gallery
        'gallery.title': 'Galeri',
        
        // Legal
        'legal.title': 'Legalitas',
        'legal.doc1.title': 'Akta Pendirian Perusahaan',
        'legal.doc1.number': 'NOMOR AHU-0055352.AH.02.01 TAHUN 2023',
        'legal.doc2.title': 'Izin Usaha (NIB) / NPWP',
        'legal.doc2.number': '39.801.195.7-404.000 (KPP PRATAMA BOGOR)',
        
        // News
        'news.title': 'Berita Terbaru',
        'news.subtitle': 'Ikuti perkembangan terbaru seputar teknologi dan solusi IT',
        'news.item1.date': '15 Maret 2024',
        'news.item1.title': 'Inovasi Terbaru dalam Jaringan Perusahaan',
        'news.item1.excerpt': 'Temukan solusi jaringan terbaru yang dapat meningkatkan efisiensi dan keamanan sistem IT perusahaan Anda.',
        'news.item2.date': '10 Maret 2024',
        'news.item2.title': 'Pentingnya Keamanan Data di Era Digital',
        'news.item2.excerpt': 'Pelajari strategi terbaik untuk melindungi data perusahaan dari ancaman siber yang semakin canggih.',
        'news.item3.date': '5 Maret 2024',
        'news.item3.title': 'Solusi Cloud untuk Bisnis Modern',
        'news.item3.excerpt': 'Manfaatkan teknologi cloud computing untuk meningkatkan fleksibilitas dan skalabilitas operasional bisnis.',
        'news.readmore': 'Baca Selengkapnya',
        
        // Contact
        'contact.title': 'Kontak Kami',
        'contact.info.title': 'Informasi Kontak',
        'contact.info.address': 'Alamat',
        'contact.info.addressText': 'JL. KH SHOLEH ISKANDAR, PERUM BOGOR RAYA PERMAI, BLOK FM4 NO.8',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Telepon',
        'contact.info.phoneText': '+62 XXX-XXXX-XXXX',
        'contact.info.hours': 'Jam Operasional',
        'contact.info.hoursText': 'Senin - Jumat: 09:00 - 17:00 WIB',
        'contact.form.title': 'Kirim Pesan',
        'contact.form.name': 'Nama Lengkap',
        'contact.form.email': 'Email',
        'contact.form.message': 'Pesan',
        'contact.form.submit': 'Kirim Pesan',
        'contact.form.translationTitle': 'Terjemahan Pesan:',
        
        // Footer
        'footer.tagline': 'YOUR PARTNER IT SOLUTION',
        'footer.description': 'Solusi IT profesional untuk perkembangan bisnis Anda',
        'footer.quickLinks': 'Tautan Cepat',
        'footer.moreLinks': 'Lainnya',
        'footer.home': 'Home',
        'footer.about': 'Tentang Kami',
        'footer.profile': 'Profil Perusahaan',
        'footer.vismis': 'Visi & Misi',
        'footer.projects': 'Produk & Layanan',
        'footer.gallery': 'Galeri',
        'footer.legal': 'Legalitas',
        'footer.news': 'Berita',
        'footer.contact': 'Kontak',
        'footer.phone': '+62 XXX-XXXX-XXXX',
        'footer.hours': 'Senin - Jumat: 09:00 - 17:00',
        'footer.address': 'JL. KH SHOLEH ISKANDAR, PERUM BOGOR RAYA PERMAI, BLOK FM4 NO.8',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.profile': 'Company Profile',
        'nav.vismis': 'Vision & Mission',
        'nav.more': 'More',
        'nav.projects': 'Products & Services',
        'nav.gallery': 'Gallery',
        'nav.legal': 'Legality',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.headline': 'PROVIDING IDEAS, INNOVATION, AND IT SOLUTIONS FOR YOUR COMPANY\'S DEVELOPMENT',
        'hero.tagline': 'YOUR PARTNER IT SOLUTION',
        'hero.cta': 'Learn More',
        'hero.contact': 'Contact Us',
        
        // About
        'about.title': 'About Us',
        'about.p1': 'PT Netcom Solusi Informatika is a Professional Company that provides IT Solution services for Offices and Individuals. Our service users are spread across various industries such as Manufacturing, Automotive, Logistics, Banking, Hospitality, Pharmaceuticals, Construction, Hospitals, Education and other industries.',
        'about.p2': 'Our company serves corporate intranet infrastructure such as LAN Networks, Routers, Switches, Access Points, PABX, Mikrotik Settings and handles corporate data center services such as server construction, server organization and server maintenance, as well as PC/Laptop sales for office needs and CCTV Security needs. Internet Service Provider (ISP).',
        
        // Profile
        'profile.title': 'Company Profile',
        'profile.company': 'Company Name',
        'profile.companyName': 'PT Netcom Solusi Informatika',
        'profile.motto': 'Motto',
        'profile.mottoText': 'YOUR PARTNER IT SOLUTION',
        'profile.industry': 'Industry',
        'profile.industryText': 'Information Technology & IT Solutions',
        'profile.clients': 'Clients',
        'profile.clientsText': 'Various industries: Manufacturing, Automotive, Logistics, Banking, Hospitality, Pharmaceuticals, Construction, Hospitals, Education',
        
        // Vision & Mission
        'vismis.title': 'Vision & Mission',
        'vismis.vision': 'Vision',
        'vismis.visionText': 'To become a leading IT solutions company that provides innovation and high-quality services to support the development of our clients\' businesses.',
        'vismis.mission': 'Mission',
        'vismis.missionText': '• Provide innovative and trusted IT solutions\n• Serve with high professionalism and integrity\n• Build long-term partnerships with clients\n• Continue to innovate in technology and services',
        
        // Projects
        'projects.title': 'Products & Services',
        'projects.subtitle': 'Complete IT Solutions for Your Business Needs',
        'projects.service1.title': 'Procurement and IT Equipment Service',
        'projects.service1.desc': 'Hardware and Software for office and industrial needs',
        'projects.service2.title': 'CCTV Procurement and Installation',
        'projects.service2.desc': 'Closed Circuit Television for security and monitoring',
        'projects.service3.title': 'PABX Procurement and Installation',
        'projects.service3.desc': 'Private Automatic Branch Exchange for internal communication',
        'projects.service4.title': 'Internet Service Provider (ISP)',
        'projects.service4.desc': 'Internet Procurement and Installation for business needs',
        'projects.service5.title': 'LAN Network Installation',
        'projects.service5.desc': 'Local Area Network with Router, Switch, Access Point, and Mikrotik',
        'projects.service6.title': 'IPTV & VSAT STARLINK',
        'projects.service6.desc': 'IPTV PREMIUM-HOMETV and VSAT STARLINK-BKU for communication solutions',
        
        // Gallery
        'gallery.title': 'Gallery',
        
        // Legal
        'legal.title': 'Legality',
        'legal.doc1.title': 'Company Establishment Deed',
        'legal.doc1.number': 'NUMBER AHU-0055352.AH.02.01 YEAR 2023',
        'legal.doc2.title': 'Business License (NIB) / NPWP',
        'legal.doc2.number': '39.801.195.7-404.000 (KPP PRATAMA BOGOR)',
        
        // News
        'news.title': 'Latest News',
        'news.subtitle': 'Follow the latest developments in technology and IT solutions',
        'news.item1.date': 'March 15, 2024',
        'news.item1.title': 'Latest Innovations in Corporate Networks',
        'news.item1.excerpt': 'Discover the latest network solutions that can improve the efficiency and security of your company\'s IT systems.',
        'news.item2.date': 'March 10, 2024',
        'news.item2.title': 'The Importance of Data Security in the Digital Era',
        'news.item2.excerpt': 'Learn the best strategies to protect company data from increasingly sophisticated cyber threats.',
        'news.item3.date': 'March 5, 2024',
        'news.item3.title': 'Cloud Solutions for Modern Business',
        'news.item3.excerpt': 'Leverage cloud computing technology to increase the flexibility and scalability of business operations.',
        'news.readmore': 'Read More',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.info.title': 'Contact Information',
        'contact.info.address': 'Address',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.info.phoneText': '+62 XXX-XXXX-XXXX',
        'contact.info.hours': 'Operating Hours',
        'contact.info.hoursText': 'Monday - Friday: 09:00 - 17:00 WIB',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.form.translationTitle': 'Message Translation:',
        
        // Footer
        'footer.tagline': 'YOUR PARTNER IT SOLUTION',
        'footer.description': 'Professional IT solutions for your business development',
        'footer.quickLinks': 'Quick Links',
        'footer.moreLinks': 'More',
        'footer.home': 'Home',
        'footer.about': 'About Us',
        'footer.profile': 'Company Profile',
        'footer.vismis': 'Vision & Mission',
        'footer.projects': 'Products & Services',
        'footer.gallery': 'Gallery',
        'footer.legal': 'Legality',
        'footer.news': 'News',
        'footer.contact': 'Contact',
        'footer.phone': '+62 XXX-XXXX-XXXX',
        'footer.hours': 'Monday - Friday: 09:00 - 17:00',
    }
};

// Current Language
let currentLang = 'id';

// Translation Function
function translatePage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'LI') {
                // Handle list items with multiple lines
                const lines = translations[lang][key].split('\n');
                element.innerHTML = lines.map(line => line.replace(/^•\s*/, '')).join('<br>');
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language toggle button
    document.getElementById('langText').textContent = lang.toUpperCase();
    if (document.getElementById('langTextMobile')) {
        document.getElementById('langTextMobile').textContent = lang.toUpperCase();
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    translatePage(newLang);
});

if (document.getElementById('langToggleMobile')) {
    document.getElementById('langToggleMobile').addEventListener('click', () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        translatePage(newLang);
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Show the target section if it's hidden
            if (['gallery', 'legal', 'news'].includes(target.id)) {
                target.style.display = 'block';
            }
            
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const translationResult = document.getElementById('translationResult');
const translatedMessage = document.getElementById('translatedMessage');

// Simple translation function for demo (simulating API call)
function translateMessage(message, fromLang, toLang) {
    // This is a placeholder - in real implementation, this would call a translation API
    // For demo purposes, we'll return a simple translated version
    if (fromLang === 'id' && toLang === 'en') {
        // Simple keyword-based translation for demo
        const translations = {
            'halo': 'hello',
            'terima kasih': 'thank you',
            'saya': 'I',
            'ingin': 'want',
            'bertanya': 'ask',
            'tentang': 'about',
            'layanan': 'service',
            'harga': 'price',
            'informasi': 'information',
            'lebih lanjut': 'more information'
        };
        
        let translated = message.toLowerCase();
        Object.keys(translations).forEach(key => {
            translated = translated.replace(new RegExp(key, 'gi'), translations[key]);
        });
        
        return translated.charAt(0).toUpperCase() + translated.slice(1);
    } else if (fromLang === 'en' && toLang === 'id') {
        const translations = {
            'hello': 'halo',
            'thank you': 'terima kasih',
            'i': 'saya',
            'want': 'ingin',
            'ask': 'bertanya',
            'about': 'tentang',
            'service': 'layanan',
            'price': 'harga',
            'information': 'informasi',
            'more information': 'lebih lanjut'
        };
        
        let translated = message.toLowerCase();
        Object.keys(translations).forEach(key => {
            translated = translated.replace(new RegExp(key, 'gi'), translations[key]);
        });
        
        return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    
    return message; // Return original if translation not available
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Get target language (opposite of current)
        const targetLang = currentLang === 'id' ? 'en' : 'id';
        
        // Translate the message
        const translatedMsg = translateMessage(message, currentLang, targetLang);
        
        // Show translation result
        translatedMessage.textContent = translatedMsg;
        translationResult.classList.remove('hidden');
        
        // Scroll to translation result
        translationResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Prepare WhatsApp message
        const whatsappMessage = `Halo, saya ${name}.\nEmail: ${email}\n\nPesan: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number (placeholder - user requested to use placeholder number)
        const whatsappNumber = '6289506065865'; // Replace with actual number
        
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            translationResult.classList.add('hidden');
        }, 5000);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    translatePage('id'); // Set default language to Indonesian
    updateActiveNav();
});