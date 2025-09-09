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
    console.log('📁 Verificando estrutura de pastas...');
    
    // Log da estrutura esperada
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        console.log(`📂 ${key}: pasta="${cat.folder}", imagens=${cat.images.length}`);
    });
    
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

// Carregar imagens da categoria com carregamento progressivo
function loadCategoryImages(category) {
    console.log(`🎯 Iniciando carregamento para categoria: ${category}`);
    
    const categoryData = categories[category];
    if (!categoryData) {
        console.error(`❌ Categoria não encontrada: ${category}`);
        console.error(`📋 Categorias disponíveis:`, Object.keys(categories));
        return;
    }
    
    console.log(`📁 Pasta da categoria: ${categoryData.folder}`);
    console.log(`🖼️ Número de imagens: ${categoryData.images.length}`);
    
    const gallery = document.getElementById(`${category}-gallery`);
    if (!gallery) {
        console.error(`❌ Gallery não encontrada: ${category}-gallery`);
        return;
    }
    
    gallery.innerHTML = '';
    
    if (categoryData.images.length === 0) {
        console.log(`⚠️ Categoria ${category} não tem imagens - mostrando estado vazio`);
        showEmptyState(gallery, category);
        return;
    }
    
    console.log(`🚀 Iniciando carregamento de ${categoryData.images.length} imagens para ${category}`);
    
    // Carregamento progressivo para melhor performance no mobile
    const isMobile = window.innerWidth <= 768;
    const batchSize = isMobile ? 3 : 5; // Carregar menos imagens por vez no mobile
    
    function loadImageBatch(startIndex) {
        const endIndex = Math.min(startIndex + batchSize, categoryData.images.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const imageName = categoryData.images[i];
            const imagePath = `imagens/${categoryData.folder}/${imageName}`;
            console.log(`🔄 Carregando imagem ${i + 1}/${categoryData.images.length}: ${imagePath}`);
            
            // Testar se a imagem existe antes de criar o item
            testImageExists(imagePath).then(exists => {
                if (exists) {
                    console.log(`✅ Imagem encontrada: ${imagePath}`);
                    createImageItem(gallery, imagePath, i + 1, category, categoryData);
                } else {
                    console.warn(`⚠️ Imagem não encontrada: ${imagePath}`);
                    createErrorItem(gallery, imagePath, i + 1, category, `Archivo no encontrado: ${imageName}`);
                }
            });
        }
        
        // Se ainda há imagens para carregar, carrega o próximo lote após um delay
        if (endIndex < categoryData.images.length) {
            setTimeout(() => {
                loadImageBatch(endIndex);
            }, isMobile ? 500 : 200); // Delay maior no mobile
        } else {
            console.log(`✅ ${categoryData.images.length} imagens carregadas para ${category}`);
        }
    }
    
    // Iniciar carregamento do primeiro lote
    loadImageBatch(0);
}

// Criar item de imagem com otimização para mobile
function createImageItem(gallery, imagePath, number, category, categoryData) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item loading';
    
    // Criar placeholder de carregamento
    const loadingPlaceholder = document.createElement('div');
    loadingPlaceholder.className = 'image-loading-placeholder';
    loadingPlaceholder.innerHTML = `
        <div class="loading-spinner"></div>
        <p>Cargando imagen ${number}...</p>
    `;
    imageItem.appendChild(loadingPlaceholder);
    
    const img = document.createElement('img');
    img.alt = `${category} - Imagem ${number}`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.style.display = 'none';
    
    // Otimização para mobile: adicionar sizes para responsive images
    img.sizes = '(max-width: 480px) 100vw, (max-width: 768px) 90vw, 700px';
    
    // Extrair nome do arquivo do caminho
    const imageName = imagePath.split('/').pop();
    
    // Timeout para evitar carregamento infinito
    const loadingTimeout = setTimeout(() => {
        if (imageItem.classList.contains('loading')) {
            console.warn(`⏰ Timeout ao carregar imagem: ${imagePath}`);
            imageItem.classList.remove('loading');
            imageItem.classList.add('error');
            imageItem.innerHTML = `
                <div class="image-placeholder error">
                    <i class="fas fa-clock"></i>
                    <p>Timeout al cargar imagen ${number}</p>
                    <small>La imagen tardó demasiado en cargar</small>
                    <button onclick="location.reload()" style="margin-top: 10px; padding: 5px 10px; background: var(--deep-red); color: white; border: none; border-radius: 5px; cursor: pointer;">Recargar página</button>
                </div>
            `;
        }
    }, 10000); // 10 segundos de timeout
    
    // Tratar erro de carregamento
    img.onerror = function() {
        clearTimeout(loadingTimeout);
        console.error(`❌ Erro ao carregar imagem: ${imagePath}`);
        console.error(`🔍 Categoria: ${category}, Pasta: ${categoryData.folder}, Arquivo: ${imageName}`);
        console.error(`📁 Caminho completo: ${window.location.origin}/${imagePath}`);
        
        imageItem.classList.remove('loading');
        imageItem.classList.add('error');
        imageItem.innerHTML = `
            <div class="image-placeholder error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error al cargar imagen ${number}</p>
                <small>Archivo: ${imageName}</small>
                <small>Ruta: ${imagePath}</small>
                <button onclick="location.reload()" style="margin-top: 10px; padding: 5px 10px; background: var(--deep-red); color: white; border: none; border-radius: 5px; cursor: pointer;">Recargar página</button>
            </div>
        `;
    };
    
    // Tratar sucesso no carregamento
    img.onload = function() {
        clearTimeout(loadingTimeout);
        console.log(`✅ Imagem carregada com sucesso: ${imagePath}`);
        imageItem.classList.remove('loading');
        imageItem.classList.add('loaded');
        loadingPlaceholder.remove();
        img.style.display = 'block';
        
        // Adicionar fade-in suave
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            img.style.opacity = '1';
        }, 50);
    };
    
    // Definir src depois de configurar os handlers
    console.log(`🔄 Tentando carregar: ${imagePath}`);
    img.src = imagePath;
    
    imageItem.appendChild(img);
    gallery.appendChild(imageItem);
}

// Função para testar se uma imagem existe
function testImageExists(imagePath) {
    return new Promise((resolve) => {
        const testImg = new Image();
        testImg.onload = () => resolve(true);
        testImg.onerror = () => resolve(false);
        testImg.src = imagePath;
    });
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
