// CATEGORIAS COM FALLBACK AUTOMÁTICO PARA GITHUB PAGES
const categories = {
    'velas': {
        folder: 'VELAS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
    },
    'iluminacion': {
        folder: 'ILUMINACIÓN',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png']
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
        images: ['176.png', '177.png', '178.png', '179.png', '180.png', '181.png', '182.png', '183.png']
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
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png']
    },
    'cintas': {
        folder: 'CINTAS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png']
    },
    'acabados': {
        folder: 'ACABADOS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png']
    },
    'ositos': {
        folder: 'OSITOS Y MUNECOS',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png']
    },
    'papa-noel': {
        folder: 'PAPA NOEL',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
    },
    'colgantes': {
        folder: 'DECORACION',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png']
    },
    'pesebres': {
        folder: 'PESEBRES Y ANGELES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png']
    },
    'flores': {
        folder: 'FLORES',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png']
    }
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

// CARREGAMENTO DE IMAGENS COM FALLBACK PARA GITHUB PAGES
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
    
    // Criar apenas as imagens existentes
    for (let i = 0; i < categoryData.images.length; i++) {
        const imageName = categoryData.images[i];
        createImageItemWithFallback(gallery, categoryData.folder, imageName, i + 1);
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

// CRIAR IMAGEM COM FALLBACK PARA GITHUB PAGES
function createImageItemWithFallback(gallery, folderName, imageName, number) {
    const div = document.createElement('div');
    div.className = 'image-item';
    
    const img = document.createElement('img');
    img.alt = 'Imagen ' + number;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    
    // Lista de possíveis formatos de URL para testar
    const possiblePaths = [
        'imagens/' + folderName + '/' + imageName, // Formato original
        'imagens/' + encodeURIComponent(folderName) + '/' + imageName, // URL encoded
        'imagens/' + folderName.replace(/\s+/g, '%20') + '/' + imageName, // Espaços como %20
        'imagens/' + folderName.replace(/\s+/g, '_') + '/' + imageName, // Espaços como underscore
        'imagens/' + folderName.replace(/\s+/g, '-') + '/' + imageName, // Espaços como hífen
        'imagens/' + folderName.replace(/Ñ/g, 'N').replace(/ñ/g, 'n') + '/' + imageName // Sem ñ
    ];
    
    let currentPathIndex = 0;
    
    function tryNextPath() {
        if (currentPathIndex >= possiblePaths.length) {
            // Se todos os caminhos falharam, mostrar erro
            div.innerHTML = '<div style="padding:20px;text-align:center;background:#f8d7da;color:#721c24;border-radius:10px;">❌ Error: ' + imageName + '</div>';
            return;
        }
        
        img.src = possiblePaths[currentPathIndex];
        currentPathIndex++;
    }
    
    img.onerror = function() {
        tryNextPath();
    };
    
    img.onload = function() {
        // Sucesso! Imagem carregada
    };
    
    div.appendChild(img);
    gallery.appendChild(div);
    
    // Começar tentando o primeiro caminho
    tryNextPath();
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
