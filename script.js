
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
    price: 30000,
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
    id: 'c4',
    name: 'conjunto de Argentina',
    price: 45000,
    category: 'Camperas',
    description: 'Campera deportiva.',
    image: './imgs/campera4.jpg',
    sizes: ['4'],
    colors: [
      { name: 'Negro', hex: '#ffffff' }
    ]
  },
  {
    id: 'c5',
    name: 'conjunto de Argentina',
    price: 45000,
    category: 'Camperas',
    description: 'Campera deportiva.',
    image: './imgs/campera5.jpg',
    sizes: ['5'],
    colors: [
      { name: 'azul', hex: '#0f0063' }
    ]
  },


  {
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
    id: 'b4',
    name: 'Buzo 4XL ',
    price: 15000,
    category: 'Buzos',
    description: 'Buzo talle 4xl',
    image: './imgs/buso4.jpg',
    sizes: [ '4XL'],
    colors: [
      
   
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
   {
    id: 'b5',
    name: 'Buzo  ',
    price: 10000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder. Corte XL con hombros caídos. Estética minimalista con detalles en contraste.',
    image: './imgs/buso5.jpg',
    sizes: [ 'M'],
    colors: [
   
      { name: 'negro ', hex: '#000000' },
    
    ]
  },
   {
    id: 'b6',
    name: 'Buzo ',
    price: 20000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder. Corte XL con hombros caídos. Estética minimalista con detalles en contraste.',
    image: './imgs/buso6.jpg',
    sizes: [ 'M'],
    colors: [
  
      { name: 'Verde ', hex: '#169106' },
    
    ]
  },
  {
    id: 'b7',
    name: 'Sueter Negro',
    price: 30000,
    category: 'Buzos',
    description: 'Sueter negro de algodón, corte clásico y cómodo.',
    image: './imgs/buzo8.jpg',
    sizes: [ '2XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'b8',
    name: 'Sueter Beige',
    price: 30000,
    category: 'Buzos',
    description: 'Sueter beige de algodón, corte clásico y cómodo.',
    image: './imgs/buzo7.jpg',
    sizes: ['2XL'],
    colors: [
      { name: 'Beige', hex: '#e8d5b7' }
    ],
    badge: 'NUEVO'
  },


 //remeras
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
   {
    id: 'r6',
    name: 'Chaleco deportivo ',
    price: 18000,
    category: 'Remeras',
    description: 'chaleco',
    image: './imgs/remera6.jpg',
    sizes: ['Xl'],
    colors: [
    
      { name: 'Negro', hex: '#050303' }
    ]
  },
{
    id: 'r7',
    name: 'chomba manga larga',
    price: 15000,
    category: 'Remeras',
    description: 'Remera manga larga con microrayas tejidas en la tela. Cuello camisero pequeño. Fit slim.',
    image: './imgs/remera7.jpg',
    sizes: ['l'],
    colors: [
    
      { name: 'marron', hex: '#a8953f' }
    ]
  },
  {
    id: 'r8',
    name: 'Remera  manga larga',
    price: 15000,
    category: 'Remeras',
    description: 'Remera manga larga con microrayas tejidas en la tela. Cuello camisero pequeño. Fit slim.',
    image: './imgs/remera8.jpg',
    sizes: ['Xl'],
    colors: [
    
      { name: 'blanca', hex: '#ffffff' }
    ]
  },
  /* ── JEANS ── */
  {
    id: 'j1',
    name: 'Jean Baggy oxido',
    price: 35000,
    category: 'Jeans',
    description: 'jean baggy oxido ',
    image: './imgs/jean1.jpg',
    sizes: [ '44', '46'],
    colors: [
      { name: 'Celeste Lavado', hex: '#7aa0be' },
     
    ]
  },
  {
    id: 'j2',
    name: 'Jean Baggy celeste',
    price: 35000,
    category: 'Jeans',
    description: 'Jean baggy estilo escolar',
    image: './imgs/jean2.jpg',
    sizes: [ '44'],
    colors: [
  
      { name: 'celeste', hex: '#3a5a8a' }
    ]
  },
  {
    id: 'j3',
    name: 'Jean baggy negro',
    price: 35000,
    category: 'Jeans',
    description: 'Jean .',
    image: './imgs/jean3.jpg',
    sizes: [ '46'],
    colors: [
      { name: 'negro', hex: '#030303' },
     
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j5',
    name: 'Jean cargo beige',
    price: 18000,
    category: 'Jeans',
    description: 'Jean cargo beige',
    image: './imgs/jean5.jpg',
    sizes: [ '4'],
    colors: [
      { name: 'Beige Oscuro', hex: '#8a7a5a' },
     
    ],
    badge: 'NUEVO'
  },
   {
    id: 'j6',
    name: 'Jean baggy musgo',
    price: 35000,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.  rígido premium.',
    image: './imgs/jean6.jpg',
    sizes: [ '46'],
    colors: [
      { name: 'verde musgo', hex: '#2f5a29' },
     
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j7',
    name: 'Jean talle 52',
    price: 45000,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.  rígido premium.',
    image: './imgs/jean7.jpg',
    sizes: [ '52'],
    colors: [
      { name: 'negro', hex: '#000000' },
     
    ],
    badge: 'NUEVO'
  },
   {
    id: 'j8',
    name: 'Jean baggy talle 50 ',
    price: 40000,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.  rígido premium.',
    image: './imgs/jean8.jpg',
    sizes: [ '50'],
    colors: [
      { name: 'negro', hex: '#000000' },
     
    ],
    badge: 'NUEVO'
  },
  
   {
    id: 'j10',
    name: 'Jean talle 54',
    price: 45000,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.  rígido premium.',
    image: './imgs/jean10.jpg',
    sizes: [ '54'],
    colors: [
      { name: 'celeste', hex: '#003261' },
     
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j5b',
    name: 'Jean Cargo Negro',
    price: 50000,
    category: 'Jeans',
    description: 'Jean estilo carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.  rígido premium.',
    image: './imgs/jean4.jpg',
    sizes: [ '44'],
    colors: [
      { name: 'negro', hex: '#000000' },
     
    ],
    badge: 'NUEVO'
  },


  {
    id: 'j11',
    name: 'Jean gris talle 42',
    price: 30000,
    category: 'Jeans',
    description: 'Jean .',
    image: './imgs/jean11.jpg',
    sizes: ['42', ],
    colors: [
      { name: 'gris', hex: '#7aa0be' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'j12',
    name: 'Bermuda Jean',
    price: 30000,
    category: 'Jeans',
    description: 'Bermuda de jean cómoda y resistente.',
    image: './imgs/jean12.jpg',
    sizes: ['48'],
    colors: [
      { name: 'Celeste Lavado', hex: '#7aa0be' }
    ]
  },

  /* ── JOGGING ── */
{
    id: 'jo2',
    name: 'Jogging',
    price: 18000,
    category: 'Jogging',
    description: 'Pantalón wide leg en punto de algodón pesado. Pierna ancha relajada. Ideal para looks casuales.',
    image: './imgs/joggin.jpg',
    sizes: ['5'],
    colors: [

      { name: 'azul', hex: '#000397' }
    ]
  },

{
    id: 'jo1',
    name: 'Jogging ',
    price: 18000,
    category: 'Jogging',
    description: 'Pantalón wide leg en punto de algodón pesado. Pierna ancha relajada. Ideal para looks casuales.',
    image: './imgs/joggin2.jpg',
    sizes: ['7'],
    colors: [

      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },

  {
    id: 'jo3',
    name: 'Conjunto de Argentina',
    price: 45000,
    category: 'Jogging',
    description: 'Pantalón jogging cómodo y deportivo.',
    image: './imgs/campera4.jpg',
    sizes: ['4'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
   {
    id: 'jo4',
    name: 'Conjunto de Argentina',
    price: 45000,
    category: 'Jogging',
    description: 'Pantalón jogging cómodo y deportivo.',
    image: './imgs/campera5.jpg',
    sizes: ['5'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'jo5',
    name: 'Jogging',
    price: 30000,
    category: 'Jogging',
    description: 'Pantalón jogging cómodo y deportivo.',
    image: './imgs/joggin4.jpg',
    sizes: ['8','9'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },

  /* ── ACCESORIOS ── */
  {
    id: 'a1',
    name: 'Gorra lisa',
    price: 15000,
    category: 'Accesorios',
    description: 'Gorra lisa ',
    image: './imgs/gorra1.jpg',
    sizes: ['Única'],
    colors: [
     
      { name: 'Verde ', hex: '#537950' }
    ]
  },
  {
    id: 'a2',
    name: 'gorra lisa',
    price: 15000,
    category: 'Accesorios',
    description: ' gorra lisa gris',
    image: './imgs/gorra4.jpg',
    sizes: ['Única'],
    colors: [
      
      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },
   {
    id: 'a3',
    name: 'gorra estampada  brooklin',
    price: 15000,
    category: 'Accesorios',
    description: 'gorra estampada beige brooklin',
    image: './imgs/gorra3.jpg',
    sizes: ['Única'],
    colors: [
     
      { name: 'Gris', hex: '#7a7a7a' }
    ]
  },
  {
    id: 'a4',
    name: 'gorra beige brooklin',
    price: 15000,
    category: 'Accesorios',
    description: 'gorra estampada beige brooklin',
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
    price: 12500,
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
    name: 'Riñonera',
    price: 20000,
    category: 'Accesorios',
    description: 'Riñonera de uso cruzado o cintura.',
    image: './imgs/riñonera.jpg',
    sizes: ['unico'],
    colors: [
      { name: 'verde', hex: '#46643c' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO'
  },
  {
    id: 'a7',
    name: 'Gorro de Lana',
    price: 10000,
    category: 'Accesorios',
    description: 'Gorro de lana tejido, abrigado y cómodo para el invierno.',
    image: './imgs/gorros1.jpg',
    sizes: ['Única'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
        { name: 'Gris Claro', hex: '#b0b0b0' },
      { name: 'beige', hex: '#f5a36d' },
      { name: 'azul', hex: '#003cff' }
      , { name: 'marron', hex: '#ad4500' },
    ],
    badge: 'NUEVO'
  },

  /* ── MEDIAS ── */
  {
    id: 'm1',
    name: 'Medias  Alta ',
    price: 3000,
    category: 'Medias',
    description: 'Pack x3 medias caña alta con logo bordado. 78% algodón, elástico suave. Unisex.',
    image: './imgs/medias1.jpg',
    sizes: [ '44'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    badge: 'PACK x3 7000'
  },
  
  {
    id: 'm2',
    name: 'Medias altas',
    price: 3000,
    category: 'Medias',
    description: 'Medias altas blancas',
    image: './imgs/medias2.jpg',
    sizes: ['unico'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Gris', hex: '#7a7a7a' },
      { name: 'Negro', hex: '#1a1a1a' }
      
    ]
  },
  
  {
    id: 'm3',
    name: 'altas negras',
    price: 2000,
    category: 'Medias',
    description: 'Medias tobilleras con tejido acanalado. Borde vuelto con detalle de línea de color. Pack x2.',
    image: './imgs/medias4.jpg',
    sizes: ['44'],
    colors: [
      
      { name: 'Negro/Blanco', hex: '#2a2a2a' }
    ],
    badge: 'PACK x2 3000 x3 3500'
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
    image: './imgs/joggin.jpg'
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
   ─────────────────────────────────────────────────
   FIX INSTAGRAM: El WebView de Instagram (y algunos
   otros en-app browsers) intercepta el primer popstate
   para cerrar el webview. La solución es:
   1. Al iniciar, hacer pushState (no replaceState) con
      la pantalla home para que ya haya una entrada
      "de relleno" antes de la primera navegación real.
   2. Usar un flag `_navDepth` para saber cuántas
      entradas reales hay en el stack del navegador.
   3. En popstate, si la profundidad es 0, volver a
      pushear un estado dummy para mantener la app
      abierta.
───────────────────────────────────────────────── */

let _navDepth = 0; // cuántas pantallas hemos apilado en history del browser

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

  // Registrar en el historial del navegador
  _navDepth++;
  history.pushState({ screen: to, depth: _navDepth }, '', '');

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
  history.back();
}

/** Ejecuta la transición de retroceso en la UI */
function performGoBack() {
  if (state.history.length === 0) return;
  const prev = state.history.pop();

  const fromId = `screen-${state.currentScreen}`;
  const toId   = `screen-${prev}`;

  const fromEl = document.getElementById(fromId);
  const toEl   = document.getElementById(toId);

  // Transición invertida
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
}

/**
 * Maneja el botón "atrás" del navegador/celular.
 *
 * FIX INSTAGRAM WEBVIEW:
 * Cuando estamos en la pantalla home y el usuario presiona
 * atrás, el WebView de Instagram querría cerrar la vista.
 * Para evitarlo, si no hay más historial interno, volvemos
 * a insertar un estado dummy en el stack del browser, lo
 * que cancela efectivamente el cierre. Si hay historial,
 * hacemos la navegación normal hacia atrás.
 */
window.addEventListener('popstate', (e) => {
  const depth = (e.state && e.state.depth) ? e.state.depth : 0;

  if (state.history.length === 0) {
    // No hay adónde ir: reinsertamos un estado para
    // evitar que el WebView de Instagram cierre la app.
    history.pushState({ screen: 'home', depth: 0 }, '', '');
    return;
  }

  _navDepth = Math.max(0, _navDepth - 1);
  performGoBack();
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
  /*
   * FIX INSTAGRAM WEBVIEW — historia inicial:
   * Usamos pushState (NO replaceState) para agregar DOS entradas
   * al stack desde el inicio:
   *   [entry-dummy] → [home]
   * Esto garantiza que cuando el usuario presione atrás desde home,
   * el popstate se dispare con `state.history.length === 0` y
   * nosotros volvamos a pushear un estado, evitando que Instagram
   * cierre el WebView.
   *
   * Si usáramos replaceState, el stack empieza vacío y el primer
   * popstate cierra el WebView directamente en Instagram.
   */
  history.replaceState({ screen: 'home', depth: 0 }, '', '');
  // Push extra para dar "colchón" contra el cierre del WebView
  history.pushState({ screen: 'home', depth: 0 }, '', '');

  renderHome();
  console.log(
    '%cKODE Catálogo v1.1',
    'font-family:monospace; font-size:14px; color:#c6f135; background:#0a0a0a; padding:6px 12px; border-radius:4px;'
  );
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
