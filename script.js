// VERSÃO ULTRA-SIMPLIFICADA PARA iOS
const categories = {
    'velas': {
        folder: 'VELAS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
    },
    'soldaditos': {
        folder: 'SOLDADITOS Y CASCANUECES',
        images: ['1.png', '2.png', '3.png']
    },
    'farolitos': {
        folder: 'FAROLITOS Y BOLAS DE NIEVE',
        images: ['1.png', '2.png', '3.png', '4.png']
    },
    'mesa-puesta': {
        folder: 'MESA PUESTA',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']
    },
    'arboles': {
        folder: 'ARBOLES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png']
    },
    'fundas': {
        folder: 'FUNDAS PARA ALMOHADONES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png']
    },
    'iluminacion': { folder: 'ILUMINACIÓN', images: [] },
    'cajas': { folder: 'CAJAS', images: [] },
    'bolas': { folder: 'BOLAS', images: [] },
    'cintas': { folder: 'CINTAS', images: [] },
    'acabados': { folder: 'ACABADOS', images: [] },
    'ositos': { folder: 'OSITOS Y MUNECOS', images: [] },
    'papa-noel': { folder: 'PAPA NOEL', images: [] },
    'colgantes': { folder: 'DECORACION', images: [] },
    'pesebres': { folder: 'PESEBRES Y ANGELES', images: [] },
    'flores': { folder: 'FLORES', images: [] }
};

let currentCategory = 'home';

// Inicialização SIMPLES
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupHomeCards();
    setupScrollEffect();
});

// Configurar navegação
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
}

// Configurar cards da home
function setupHomeCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
}

// Navegar para categoria
function navigateToCategory(category) {
    console.log(`🎯 Navegando para: ${category}`);
    currentCategory = category;
    updateActiveNavigation(category);
    showSection(category);
    
    if (category !== 'home') {
        loadCategoryImages(category);
    }
}

// Atualizar navegação ativa
function updateActiveNavigation(activeCategory) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        if (category === activeCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Mostrar seção
function showSection(category) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(category);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// CARREGAMENTO DE IMAGENS ULTRA-SIMPLES
function loadCategoryImages(category) {
    const categoryData = categories[category];
    if (!categoryData) return;
    
    const gallery = document.getElementById(category + '-gallery');
    if (!gallery) return;
    
    gallery.innerHTML = '';
    
    if (categoryData.images.length === 0) {
        showEmptyState(gallery, category);
        return;
    }
    
    // Criar todas as imagens de uma vez - SEM DELAYS
    for (let i = 0; i < categoryData.images.length; i++) {
        const imageName = categoryData.images[i];
        const imagePath = 'imagens/' + categoryData.folder + '/' + imageName;
        createImageItem(gallery, imagePath, i + 1, imageName);
    }
}

// CRIAÇÃO DE IMAGEM ULTRA-SIMPLES
function createImageItem(gallery, imagePath, number, imageName) {
    const div = document.createElement('div');
    div.className = 'image-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Imagen ' + number;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    
    // SEM TIMEOUTS - só handlers básicos
    img.onerror = function() {
        div.innerHTML = '<div style="padding:20px;text-align:center;background:#f8d7da;color:#721c24;border-radius:10px;">❌ Error: ' + imageName + '</div>';
    };
    
    div.appendChild(img);
    gallery.appendChild(div);
}

function showEmptyState(gallery, category) {
    const div = document.createElement('div');
    div.className = 'empty-state';
    div.innerHTML = '<i class="fas fa-image"></i><h3>Próximamente...</h3><p>¡Nuevos productos de la categoría ' + category + ' serán agregados pronto!</p>';
    gallery.appendChild(div);
}

// Scroll effect SIMPLES
function setupScrollEffect() {
    const header = document.querySelector('.header');
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const currentSection = document.querySelector('.section.active');
        const isHomeSection = currentSection && currentSection.id === 'home';
        
        if (!isHomeSection || scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    
    const navButtons = document.querySelectorAll('.nav-btn, .category-card');
    navButtons.forEach(button => {
        button.addEventListener('click', updateHeader);
    });
}
