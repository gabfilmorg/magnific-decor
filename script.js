// Sistema de categorías en español - NOMES CORRETOS DAS PASTAS
const categories = {
    'velas': {
        folder: 'VELAS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
    },
    'iluminacion': {
        folder: 'ILUMINACIÓN',
        images: [] // Agregar imágenes cuando estén disponibles
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
    'cajas': {
        folder: 'CAJAS',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'arboles': {
        folder: 'ARBOLES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png']
    },
    'fundas': {
        folder: 'FUNDAS PARA ALMOHADONES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png']
    },
    'bolas': {
        folder: 'BOLAS',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'cintas': {
        folder: 'CINTAS',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'acabados': {
        folder: 'ACABADOS',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'ositos': {
        folder: 'OSITOS Y MUNECOS',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'papa-noel': {
        folder: 'PAPA NOEL',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'colgantes': {
        folder: 'DECORACION',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'pesebres': {
        folder: 'PESEBRES Y ANGELES',
        images: [] // Agregar imágenes cuando estén disponibles
    },
    'flores': {
        folder: 'FLORES',
        images: [] // Agregar imágenes cuando estén disponibles
    }
};

let currentCategory = 'home';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎄 Magnific Decor iniciado!');
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

// Carregar imagens da categoria
function loadCategoryImages(category) {
    const categoryData = categories[category];
    if (!categoryData) {
        console.log(`❌ Categoria não encontrada: ${category}`);
        return;
    }
    
    const gallery = document.getElementById(`${category}-gallery`);
    if (!gallery) {
        console.log(`❌ Gallery não encontrada: ${category}-gallery`);
        return;
    }
    
    gallery.innerHTML = '';
    
    if (categoryData.images.length === 0) {
        showEmptyState(gallery, category);
        return;
    }
    
    // Carregar imagens com caminho correto
    categoryData.images.forEach((imageName, index) => {
        // Caminho otimizado para deploy
        const imagePath = `imagens/${categoryData.folder}/${imageName}`;
        
        createImageItem(gallery, imagePath, index + 1, category);
    });
    
    console.log(`✅ ${categoryData.images.length} imagens carregadas para ${category}`);
}

// Criar item de imagem
function createImageItem(gallery, imagePath, number, category) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    
    const img = document.createElement('img');
    img.alt = `${category} - Imagem ${number}`;
    img.loading = 'lazy';
    
    // Caminho otimizado para deploy
    img.src = imagePath;
    
    // Tratar erro de carregamento
    img.onerror = function() {
        console.log(`❌ Erro ao carregar: ${imagePath}`);
        // Mostrar placeholder en caso de error
        imageItem.innerHTML = `
            <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <p>Imagen ${number}</p>
                <small>Cargando...</small>
            </div>
        `;
    };
    
    // Tratar sucesso no carregamento
    img.onload = function() {
        console.log(`✅ Imagem carregada: ${imagePath}`);
    };
    
    imageItem.appendChild(img);
    gallery.appendChild(imageItem);
}

// Mostrar estado vacío
function showEmptyState(gallery, category) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
        <i class="fas fa-image"></i>
        <h3>Próximamente...</h3>
        <p>¡Nuevos productos de la categoría ${category} serán agregados pronto!</p>
    `;
    gallery.appendChild(emptyState);
}

// Configurar efeito de scroll para minimizar header
function setupScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    console.log('✅ Efeito de scroll configurado!');
}
