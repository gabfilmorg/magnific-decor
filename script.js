// Sistema de categorías en español - NOMES CORRETOS DAS PASTAS
const categories = {
    'velas': {
        folder: 'VELAS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
    },
    'iluminacion': {
        folder: 'ILUMINACIÓN',
        images: [] // Pasta vazia - mostrar estado vazio
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
        folder: 'MESA PUESTA', // Usando MESA PUESTA que tem 14 imagens
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']
    },
    'cajas': {
        folder: 'CAJAS',
        images: [] // Pasta vazia - mostrar estado vazio
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
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'cintas': {
        folder: 'CINTAS',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'acabados': {
        folder: 'ACABADOS',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'ositos': {
        folder: 'OSITOS Y MUNECOS',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'papa-noel': {
        folder: 'PAPA NOEL',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'colgantes': {
        folder: 'DECORACION',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'pesebres': {
        folder: 'PESEBRES Y ANGELES',
        images: [] // Pasta vazia - mostrar estado vazio
    },
    'flores': {
        folder: 'FLORES',
        images: [] // Pasta vazia - mostrar estado vazio
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

// Carregar imagens da categoria - VERSÃO SIMPLIFICADA
function loadCategoryImages(category) {
    const categoryData = categories[category];
    if (!categoryData) {
        console.error(`❌ Categoria não encontrada: ${category}`);
        return;
    }
    
    const gallery = document.getElementById(`${category}-gallery`);
    if (!gallery) {
        console.error(`❌ Gallery não encontrada: ${category}-gallery`);
        return;
    }
    
    gallery.innerHTML = '';
    
    if (categoryData.images.length === 0) {
        showEmptyState(gallery, category);
        return;
    }
    
    // Carregamento direto e simples
    for (let i = 0; i < categoryData.images.length; i++) {
        const imageName = categoryData.images[i];
        const imagePath = `imagens/${categoryData.folder}/${imageName}`;
        createImageItem(gallery, imagePath, i + 1, category, categoryData);
    }
}

// Criar item de imagem SIMPLIFICADO para mobile
function createImageItem(gallery, imagePath, number, category, categoryData) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    
    const img = document.createElement('img');
    img.alt = `${category} - Imagem ${number}`;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    
    // Extrair nome do arquivo do caminho
    const imageName = imagePath.split('/').pop();
    
    // Tratar erro de carregamento - SIMPLES
    img.onerror = function() {
        imageItem.innerHTML = `
            <div class="image-placeholder error" style="padding: 20px; text-align: center; background: #f8d7da; color: #721c24; border-radius: 10px;">
                <p>❌ Error: ${imageName}</p>
            </div>
        `;
    };
    
    // Tratar sucesso - SIMPLES
    img.onload = function() {
        imageItem.classList.add('loaded');
    };
    
    // Definir src - DIRETO
    img.src = imagePath;
    
    imageItem.appendChild(img);
    gallery.appendChild(imageItem);
}

// Função simplificada para mobile - sem Promise complexa
function testImageExists(imagePath, callback) {
    const testImg = new Image();
    testImg.onload = function() { callback(true); };
    testImg.onerror = function() { callback(false); };
    testImg.src = imagePath;
}

// Criar item de erro quando imagem não existe
function createErrorItem(gallery, imagePath, number, category, errorMessage) {
    const errorItem = document.createElement('div');
    errorItem.className = 'image-item error';
    errorItem.innerHTML = `
        <div class="image-placeholder error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error: Imagen ${number} no encontrada</p>
            <small>${errorMessage}</small>
            <small>Ruta: ${imagePath}</small>
        </div>
    `;
    gallery.appendChild(errorItem);
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
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const bodyScrollTop = document.body.scrollTop || 0;
        const maxScrollTop = Math.max(scrollTop, bodyScrollTop);
        
        // Verifica se estamos em uma seção que não seja home
        const currentSection = document.querySelector('.section.active');
        const isHomeSection = currentSection && currentSection.id === 'home';
        
        // Se não estamos na home OU se o scroll é maior que 50px, minimiza
        if (!isHomeSection || maxScrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    // Adiciona listeners para diferentes tipos de scroll
    window.addEventListener('scroll', requestTick, { passive: true });
    document.addEventListener('scroll', requestTick, { passive: true });
    
    // Também verifica quando muda de seção
    const navButtons = document.querySelectorAll('.nav-btn, .category-card');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(updateHeader, 100); // Pequeno delay para garantir que a seção mudou
        });
    });
    
    console.log('✅ Efeito de scroll configurado com detecção aprimorada!');
}
