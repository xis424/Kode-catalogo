
'use strict';
const WHATSAPP_NUMBER = '5493804382452';
const PRODUCTS = [
  {
    id: 'c1',
    name: 'Campera Oversize Negra',
    price: 35000,
    category: 'Camperas',
    description: 'Campera oversize de gabardina con cierre metálico. Corte amplio y caída perfecta. Ideal para looks urbanos.',
    image: './imgs/campera1.jpg',
    sizes: [ 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
   
    ],
    badge: 'NUEVO'
  },
  {
    id: 'c2',
    name: 'Campera Puma ',
    price: 35000,
    category: 'Camperas',
    description: 'Campera puma negra',
    image: './imgs/campera2.jpg',
    sizes: [ 'M', 'L'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      
    ]
  },
  {
    id: 'c3',
    name: 'Campera adidas',
    price: 30000,
    category: 'Camperas',
    description: 'campera deportiva adidas ',
    image: './imgs/campera3.jpg',
    sizes: ['M', ],
    colors: [
      { name: 'rojo y azul', hex: '#ff0000' },
     
    ]
  },


  {
    id: 'b1',
    name: 'Buzo capucha lisa ',
    price: 35000,
    category: 'Buzos',
    description: 'Buzo con capucha y bolsillo canguro. Tela algodón frizado 320g. El básico indispensable del armario.',
    image: './imgs/buso1.jpg',
    sizes: ['XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
    ],
    badge: 'MÁS VENDIDO'
  },
  {
    id: 'b2',
    name: 'sueter wafle',
    price: 20000,
    category: 'Buzos',
    description: 'Buzo cuello redondo con estampado frontal de logo KODE en relieve. Algodón compacto premium.',
    image: './imgs/buso2.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco Roto', hex: '#e8e0d4' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'b3',
    name: 'Buzo capucha lisa ',
    price: 35000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder. Corte XL con hombros caídos. Estética minimalista con detalles en contraste.',
    image: './imgs/buso3.jpg',
    sizes: [ 'XL'],
    colors: [
      { name: 'Gris Claro', hex: '#b0b0b0' },
      { name: 'Verde Lima', hex: '#c6f135' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },

 
  {
    id: 'r1',
    name: 'Remera Palm Angel',
    price: 15000,
    category: 'Remeras',
    description: 'ooooo',
    image: './imgs/REMERA1.jpg',
    sizes: [ 'L', 'XL', ],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'beige', hex: '#ffe8db' },
      
    ],
    badge: 'BÁSICO'
  },
  {
    id: 'r2',
    name: 'Remera estilo wafle',
    price: 18000,
    category: 'Remeras',
    description: 'Remera textura wafle',
    image: './imgs/REMERA2.png',
    sizes: ['L', ],
    colors: [
      { name: 'verde', hex: '#adffb1' },
    
    ]
  },
  {
    id: 'r3',
    name: 'Remera hollster ',
    price: 15000,
    category: 'Remeras',
    description: 'Remera hollster con estampa reverse ',
    image: './imgs/REMERA3.png',
    sizes: [ 'XL'],
    colors: [
      { name: 'bordo', hex: '#6e2121' },
     
    ]
  },
  {
    id: 'r4',
    name: 'Remera hollster',
    price: 15000,
    category: 'Remeras',
    description: 'Remera hollster con estampa reverse',
    image: './imgs/REMERA4.png',
    sizes: ['Xl'],
    colors: [
      { name: 'Beige', hex: '#ffeaa4' }
    ]
  },
  {
    id: 'r5',
    name: 'Remera hollster',
    price: 15000,
    category: 'Remeras',
    description: 'Remera manga larga con microrayas tejidas en la tela. Cuello camisero pequeño. Fit slim.',
    image: './imgs/REMERA5.png',
    sizes: ['Xl'],
    colors: [
    
      { name: 'Negro', hex: '#050303' }
    ]
  },

  /* ── JEANS ── */
  {
    id: 'j1',
    name: 'Jean Baggy 90s',
    price: 64990,
    category: 'Jeans',
    description: 'Jean de corte baggy inspirado en los 90s. Tiro alto y pierna ancha. Denim 12oz de alta calidad.',
    image: './imgs/jean1.jpg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Celeste Lavado', hex: '#7aa0be' },
      { name: 'Azul Oscuro', hex: '#1e3a5a' }
    ]
  },
  {
    id: 'j2',
    name: 'Jean Skinny Elástico',
    price: 54990,
    category: 'Jeans',
    description: 'Jean skinny con 2% elastano para máxima comodidad. Fit ceñido en todo el largo. Tiro medio.',
    image: './imgs/jean2.jpg',
    sizes: ['26', '28', '30', '32', '34'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Azul Medio', hex: '#3a5a8a' }
    ]
  },
  {
    id: 'j3',
    name: 'Jean Carpenter Utility',
    price: 71500,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales. Denim rígido premium.',
    image: './imgs/jean3.jpg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Beige Oscuro', hex: '#8a7a5a' },
      { name: 'Azul Trabajo', hex: '#2a3a5a' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j4',
    name: 'Jean Carpenter Utility',
    price: 71500,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales. Denim rígido premium.',
    image: './imgs/jean4.jpg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Beige Oscuro', hex: '#8a7a5a' },
      { name: 'Azul Trabajo', hex: '#2a3a5a' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j5',
    name: 'Jean Carpenter Utility',
    price: 71500,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales. Denim rígido premium.',
    image: './imgs/jean5.jpg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Beige Oscuro', hex: '#8a7a5a' },
      { name: 'Azul Trabajo', hex: '#2a3a5a' }
    ],
    badge: 'NUEVO'
  },


  /* ── JOGGING ── */
  {
    id: 'jo1',
    name: 'Jogging Fleece Premium',
    price: 42990,
    category: 'Jogging',
    description: 'Pantalón jogger en tela fleece suave 280g. Cintura elástica con cordón y puños canalé. Bolsillos con cierre.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4cbe?w=600&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Gris Melange', hex: '#8a8a8a' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Bordo', hex: '#6b1a1a' }
    ]
  },
  {
    id: 'jo2',
    name: 'Jogging Cargo Técnico',
    price: 54990,
    category: 'Jogging',
    description: 'Jogger cargo en tela técnica ripstop. Bolsillos laterales tipo cargo con velcro. Corte moderno amplio.',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Verde Oliva', hex: '#4a5240' }
    ],
    badge: 'DROP'
  },
  {
    id: 'jo3',
    name: 'Jogging Wide Leg',
    price: 46500,
    category: 'Jogging',
    description: 'Pantalón wide leg en punto de algodón pesado. Pierna ancha relajada. Ideal para looks casuales.',
    image: 'https://images.unsplash.com/photo-1580906853135-44f42ee22d55?w=600&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Beige', hex: '#c8b89a' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },

  /* ── ACCESORIOS ── */
  {
    id: 'a1',
    name: 'Gorra Snapback KODE',
    price: 22990,
    category: 'Accesorios',
    description: 'Gorra 6 paneles con bordado frontal. Cierre snapback ajustable. 100% algodón canvas.',
    image: './imgs/gorra1.jpg',
    sizes: ['Única'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Verde Lima', hex: '#c6f135' }
    ]
  },
  {
    id: 'a2',
    name: 'Riñonera Urban',
    price: 29990,
    category: 'Accesorios',
    description: 'Riñonera de uso cruzado o cintura. Dos compartimentos con cierre YKK. Material polyester resistente.',
    image: './imgs/gorra4.jpg',
    sizes: ['Única'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },
   {
    id: 'a3',
    name: 'Riñonera Urban',
    price: 29990,
    category: 'Accesorios',
    description: 'Riñonera de uso cruzado o cintura. Dos compartimentos con cierre YKK. Material polyester resistente.',
    image: './imgs/gorra3.jpg',
    sizes: ['Única'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },
  {
    id: 'a4',
    name: 'Cinturón Hebilla Box',
    price: 18500,
    category: 'Accesorios',
    description: 'Cinturón con hebilla cuadrada metálica estilo Y2K. Cuero sintético de alta calidad. Regulable.',
    image: './imgs/gorra2.jpg',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'a5',
    name: 'Cinturón Hebilla Box',
    price: 18500,
    category: 'Accesorios',
    description: 'Cinturón con hebilla cuadrada metálica estilo Y2K. Cuero sintético de alta calidad. Regulable.',
    image: './imgs/cintos.jpg',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'a6',
    name: 'Cinturón Hebilla Box',
    price: 18500,
    category: 'Accesorios',
    description: 'Cinturón con hebilla cuadrada metálica estilo Y2K. Cuero sintético de alta calidad. Regulable.',
    image: './imgs/riñonera.jpg',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO'
  },

  /* ── MEDIAS ── */
  {
    id: 'm1',
    name: 'Medias Caña Alta Logo',
    price: 8990,
    category: 'Medias',
    description: 'Pack x3 medias caña alta con logo bordado. 78% algodón, elástico suave. Unisex.',
    image: './imgs/medias1.jpg',
    sizes: ['35-38', '39-42', '43-46'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    badge: 'PACK x3'
  },
  {
    id: 'm2',
    name: 'Medias Sport Cushion',
    price: 7490,
    category: 'Medias',
    description: 'Medias deportivas con suela acolchada y arco reforzado. Ideal para uso diario y entrenamiento.',
    image: './imgs/medias2.jpg',
    sizes: ['35-38', '39-42', '43-46'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Gris', hex: '#7a7a7a' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'm3',
    name: 'Medias Tobilleras Ribbed',
    price: 6990,
    category: 'Medias',
    description: 'Medias tobilleras con tejido acanalado. Borde vuelto con detalle de línea de color. Pack x2.',
    image: './imgs/medias3.jpg',
    sizes: ['35-38', '39-42', '43-46'],
    colors: [
      { name: 'Blanco/Verde', hex: '#e8f8a0' },
      { name: 'Negro/Blanco', hex: '#2a2a2a' }
    ],
    badge: 'PACK x2'
  }

]; // fin PRODUCTS

/* ─────────────────────────────────────────────────
   CATEGORÍAS — orden, iconos e imagen de portada
───────────────────────────────────────────────── */
const CATEGORIES = [
  {
    name: 'Camperas',
    image: './imgs/campera2.jpg'
  },
  {
    name: 'Buzos',
    image: './imgs/buso1.jpg'
  },
  {
    name: 'Remeras',
    image: './imgs/REMERA1.jpg'
  },
  {
    name: 'Jeans',
    image: './imgs/jean1.jpg'
  },
  {
    name: 'Jogging',
    image: './imgs/REMERA3.png'
  },
  {
    name: 'Accesorios',
    image: './imgs/gorra2.jpg'
  },
  {
    name: 'Medias',
    image: './imgs/medias1.jpg'
  }
];


/* ─────────────────────────────────────────────────
   ESTADO DE LA APP
───────────────────────────────────────────────── */
const state = {
  currentScreen: 'home',   // 'home' | 'category' | 'detail'
  history: [],              // historial para btn "atrás"
  activeCategory: null,     // nombre de categoría activa
  activeProduct: null,      // objeto producto activo
  selectedSize: null,
  selectedColor: null
};


/* ─────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────── */

/** Formatea precio en pesos argentinos */
function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

/** Cuenta productos de una categoría */
function countByCategory(catName) {
  return PRODUCTS.filter(p => p.category === catName).length;
}

/** Retorna productos de una categoría */
function getByCategory(catName) {
  return PRODUCTS.filter(p => p.category === catName);
}

/** Construye el mensaje de WhatsApp */
function buildWhatsAppMessage() {
  const p = state.activeProduct;
  if (!p) return '';

  let msg = `Hola, quiero consultar por *${p.name}*`;
  if (state.selectedSize)  msg += `, talle *${state.selectedSize}*`;
  if (state.selectedColor) msg += `, color *${state.selectedColor}*`;
  msg += `. ¿Tienen disponibilidad?`;
  return encodeURIComponent(msg);
}


/* ─────────────────────────────────────────────────
   ANIMACIONES DE ENTRADA
───────────────────────────────────────────────── */

/** Anima tarjetas con delay escalonado */
function animateCards(selector, delay = 60) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * delay);
  });
}


/* ─────────────────────────────────────────────────
   NAVEGACIÓN ENTRE PANTALLAS
───────────────────────────────────────────────── */

/**
 * Navega a la pantalla indicada.
 * @param {string} to - 'home' | 'category' | 'detail'
 */
function navigateTo(to) {
  const fromId = `screen-${state.currentScreen}`;
  const toId   = `screen-${to}`;

  const fromEl = document.getElementById(fromId);
  const toEl   = document.getElementById(toId);

  // Guardar en historial interno
  state.history.push(state.currentScreen);

  // Registrar en el historial del navegador para que el botón "atrás" del celular funcione
  history.pushState({ screen: to }, '', '');

  // Slide-out de la pantalla actual
  fromEl.classList.remove('active');
  fromEl.classList.add('slide-out');

  // Scroll al top en la nueva pantalla
  toEl.scrollTop = 0;

  // Breve delay para que el CSS transite
  requestAnimationFrame(() => {
    toEl.classList.add('active');
    state.currentScreen = to;

    // Limpiar slide-out después de la transición
    setTimeout(() => fromEl.classList.remove('slide-out'), 350);
  });
}

/** Vuelve a la pantalla anterior (usado por el botón interno de la app) */
function goBack() {
  // Usar el historial del navegador para que también actualice la URL stack
  history.back();
}

/** Maneja el botón "atrás" del navegador/celular */
window.addEventListener('popstate', () => {
  if (state.history.length === 0) return;
  const prev = state.history.pop();

  const fromId = `screen-${state.currentScreen}`;
  const toId   = `screen-${prev}`;

  const fromEl = document.getElementById(fromId);
  const toEl   = document.getElementById(toId);

  // Transición invertida (slide de derecha a izquierda)
  fromEl.classList.remove('active');
  fromEl.style.transform = 'translateX(30px)';
  fromEl.style.opacity = '0';

  toEl.scrollTop = 0;

  requestAnimationFrame(() => {
    toEl.classList.add('active');
    state.currentScreen = prev;

    setTimeout(() => {
      fromEl.style.transform = '';
      fromEl.style.opacity = '';
    }, 350);
  });
});


/* ─────────────────────────────────────────────────
   PANTALLA HOME — render categorías
───────────────────────────────────────────────── */
function renderHome() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const count = countByCategory(cat.name);
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${cat.name}`);

    card.innerHTML = `
      <img class="cat-card-img" src="${cat.image}" alt="${cat.name}" loading="lazy" />
      <div class="cat-card-body">
        <div class="cat-card-name">${cat.name.toUpperCase()}</div>
        <div class="cat-card-count">${count} productos</div>
      </div>
    `;

    card.addEventListener('click', () => openCategory(cat.name));
    grid.appendChild(card);
  });

  // Animar con delay
  setTimeout(() => animateCards('.cat-card', 70), 100);
}


/* ─────────────────────────────────────────────────
   PANTALLA CATEGORÍA — render productos
───────────────────────────────────────────────── */
function openCategory(catName) {
  state.activeCategory = catName;

  // Actualizar título nav
  document.getElementById('category-title').textContent = catName.toUpperCase();

  // Obtener y renderizar productos
  const products = getByCategory(catName);
  const grid = document.getElementById('products-grid');
  const meta = document.getElementById('products-count');

  meta.textContent = `${products.length} ${products.length === 1 ? 'producto' : 'productos'}`;
  grid.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${product.name}`);

    card.innerHTML = `
      <div class="product-card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>
      <div class="product-card-info">
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-price">${formatPrice(product.price)}</div>
      </div>
    `;

    card.addEventListener('click', () => openProduct(product));
    grid.appendChild(card);
  });

  // Navegar a la pantalla de categoría
  navigateTo('category');

  // Animar tarjetas
  setTimeout(() => animateCards('.product-card', 60), 100);
}


/* ─────────────────────────────────────────────────
   PANTALLA DETALLE — render producto
───────────────────────────────────────────────── */
function openProduct(product) {
  state.activeProduct = product;
  state.selectedSize  = null;
  state.selectedColor = null;

  // Imagen
  const img = document.getElementById('detail-img');
  img.src = product.image;
  img.alt = product.name;

  // Info básica
  document.getElementById('detail-name').textContent  = product.name;
  document.getElementById('detail-price').textContent = formatPrice(product.price);
  document.getElementById('detail-category').textContent = product.category.toUpperCase();
  document.getElementById('detail-desc').textContent  = product.description;

  // Talles
  renderSizes(product.sizes);

  // Colores
  renderColors(product.colors);

  // Navegar
  navigateTo('detail');
}

/** Renderiza botones de talle */
function renderSizes(sizes) {
  const container = document.getElementById('size-options');
  const block = document.getElementById('size-block');

  if (!sizes || sizes.length === 0) {
    block.style.display = 'none';
    return;
  }
  block.style.display = '';
  container.innerHTML = '';

  sizes.forEach(size => {
    const btn = document.createElement('button');
    btn.className = 'btn-size';
    btn.textContent = size;

    btn.addEventListener('click', () => {
      // Deseleccionar todos
      container.querySelectorAll('.btn-size').forEach(b => b.classList.remove('selected'));
      // Seleccionar este
      btn.classList.add('selected');
      state.selectedSize = size;
    });

    container.appendChild(btn);
  });
}

/** Renderiza botones de color */
function renderColors(colors) {
  const container = document.getElementById('color-options');
  const block = document.getElementById('color-block');

  if (!colors || colors.length === 0) {
    block.style.display = 'none';
    return;
  }
  block.style.display = '';
  container.innerHTML = '';

  colors.forEach(color => {
    const btn = document.createElement('button');
    btn.className = 'btn-color';
    btn.innerHTML = `
      <span class="color-dot" style="background-color: ${color.hex};"></span>
      ${color.name}
    `;

    btn.addEventListener('click', () => {
      container.querySelectorAll('.btn-color').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedColor = color.name;
    });

    container.appendChild(btn);
  });
}


/* ─────────────────────────────────────────────────
   WHATSAPP — abrir chat con mensaje prellenado
───────────────────────────────────────────────── */
function openWhatsApp() {
  const p = state.activeProduct;
  if (!p) return;

  // Validación amigable: si hay talles disponibles y no seleccionó
  if (p.sizes && p.sizes.length > 1 && !state.selectedSize) {
    // Resaltar la sección de talles
    const sizeBlock = document.getElementById('size-block');
    sizeBlock.style.outline = '1.5px solid var(--accent)';
    sizeBlock.style.borderRadius = '8px';
    sizeBlock.style.padding = '10px';
    sizeBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Quitar el outline después de 2s
    setTimeout(() => {
      sizeBlock.style.outline = '';
      sizeBlock.style.padding = '';
    }, 2000);

    // Igual permitir enviar para no bloquear al usuario
  }

  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, '_blank');
}


/* ─────────────────────────────────────────────────
   INICIALIZACIÓN
───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Registrar el estado inicial en el historial del navegador
  // para que el botón "atrás" del celular no cierre la app desde home
  history.replaceState({ screen: 'home' }, '', '');

  renderHome();
  console.log(
    '%cKODE Catálogo v1.0',
    'font-family:monospace; font-size:14px; color:#c6f135; background:#0a0a0a; padding:6px 12px; border-radius:4px;'
  );
  console.log('👉 Recordá cambiar WHATSAPP_NUMBER en script.js');
});

/*
  ══════════════════════════════════════════════════
  CÓMO USAR ESTE CATÁLOGO
  ══════════════════════════════════════════════════

  1. CAMBIAR NÚMERO DE WHATSAPP:
     Buscá `const WHATSAPP_NUMBER` al inicio del archivo
     y reemplazá con tu número en formato internacional:
     549 + código de área + número (sin 0 ni 15)
     Ej: '5491155667788'

  2. AGREGAR / EDITAR PRODUCTOS:
     Cada producto en el array PRODUCTS tiene esta estructura:
     {
       id:          'id-único',
       name:        'Nombre del producto',
       price:       99990,           // en pesos, sin puntos
       category:    'Buzos',         // debe coincidir con CATEGORIES
       description: 'Descripción...',
       image:       'https://...',   // URL de imagen
       sizes:       ['S','M','L'],
       colors:      [{ name: 'Negro', hex: '#1a1a1a' }],
       badge:       'NUEVO'          // opcional
     }

  3. AGREGAR CATEGORÍA:
     Agregala en el array CATEGORIES con nombre e imagen.
     Luego agrega productos con esa category en PRODUCTS.

  4. IMÁGENES PROPIAS:
     Podés usar rutas relativas: image: './imgs/campera.jpg'
     Creá una carpeta /imgs/ junto al index.html

  5. DESPLIEGUE:
     Basta con subir los 3 archivos (index.html, style.css, script.js)
     a cualquier hosting estático o GitHub Pages.
*/
