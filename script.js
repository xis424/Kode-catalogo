'use strict';

// ========== CONFIGURACIÓN ==========
const WHATSAPP_NUMBER = '5493804382452';
const INSTAGRAM_USER = 'kode.lr';

// ========== FIREBASE ==========
// ⬇️⬇️⬇️ REEMPLAZA ESTOS DATOS CON LOS TUYOS (desde Firebase Console) ⬇️⬇️⬇️
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "kode-catalogo.firebaseapp.com",
  databaseURL: "https://kode-catalogo-default-rtdb.firebaseio.com",
  projectId: "kode-catalogo",
  storageBucket: "kode-catalogo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:..."
};
// ⬆️⬆️⬆️ COPIA TUS DATOS REALES AQUÍ ⬆️⬆️⬆️

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const productosRef = ref(db, 'productos');

let PRODUCTS = [];

// ========== FUNCIONES AUXILIARES ==========
function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

function getByCategory(catName) {
  return PRODUCTS.filter(p => p.category === catName);
}

function countByCategory(catName) {
  return getByCategory(catName).length;
}

function getNewProducts() {
  return PRODUCTS.filter(p => p.isNew === true);
}

function getBestSellers() {
  return PRODUCTS.filter(p => p.isBestSeller === true);
}

function buildWhatsAppMessage() {
  const p = state.activeProduct;
  if (!p) return '';
  let msg = `Hola KODE! 👋 Quiero consultar por *${p.name}*`;
  if (state.selectedSize) msg += `, talle *${state.selectedSize}*`;
  if (state.selectedColor) msg += `, color *${state.selectedColor}*`;
  msg += `. ¿Tienen disponibilidad? 💬`;
  return encodeURIComponent(msg);
}

// ========== ESTADO GLOBAL ==========
const state = {
  currentScreen: 'home',
  history: [],
  activeCategory: null,
  activeProduct: null,
  selectedSize: null,
  selectedColor: null
};
let _navDepth = 0;

// ========== CARGA DESDE FIREBASE ==========
function loadProductsFromFirebase() {
  onValue(productosRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      PRODUCTS = Object.values(data);
      console.log(`✅ Productos cargados desde Firebase: ${PRODUCTS.length}`);
    } else {
      PRODUCTS = [];
      console.log("No hay productos en Firebase. Agrega algunos desde /admin.html");
    }
    // Renderizar todo el catálogo
    renderTopNav();
    renderHome();
  });
}

// ========== FUNCIONES DE RENDER ==========
function renderTopNav() {
  const desktopNav = document.getElementById('top-cats-nav');
  const mobileMenu = document.getElementById('mobile-menu-inner');
  if (!desktopNav || !mobileMenu) return;
  const CATEGORIES = ['Camperas', 'Buzos', 'Remeras', 'Jeans', 'Jogging', 'Accesorios', 'Medias'];
  desktopNav.innerHTML = '';
  mobileMenu.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'top-cat-btn';
    btn.textContent = cat;
    btn.addEventListener('click', () => openCategory(cat));
    desktopNav.appendChild(btn);
    const mBtn = document.createElement('button');
    mBtn.className = 'mobile-cat-btn';
    mBtn.textContent = cat;
    mBtn.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.remove('open');
      openCategory(cat);
    });
    mobileMenu.appendChild(mBtn);
  });
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.toggle('open');
    });
  }
}

function renderMiniCards(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  if (products.length === 0) {
    const section = container.closest('.home-section');
    if (section) section.style.display = 'none';
    return;
  }
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'mini-card';
    card.setAttribute('role', 'button');
    card.innerHTML = `
      <div class="mini-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="mini-card-badge">${product.badge}</span>` : ''}
      </div>
      <div class="mini-card-info">
        <div class="mini-card-name">${product.name}</div>
        <div class="mini-card-price">${formatPrice(product.price)}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      navigateTo('category');
      setTimeout(() => openProduct(product), 50);
    });
    container.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll(`#${containerId} .mini-card`).forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 60);
    });
  }, 200);
}

function renderHome() {
  const CATEGORIES = [
    { name: 'Camperas', image: './imgs/campera2.jpg' },
    { name: 'Buzos', image: './imgs/buso1.jpg' },
    { name: 'Remeras', image: './imgs/REMERA1.jpg' },
    { name: 'Jeans', image: './imgs/jean1.jpg' },
    { name: 'Jogging', image: './imgs/joggin.jpg' },
    { name: 'Accesorios', image: './imgs/gorra2.jpg' },
    { name: 'Medias', image: './imgs/medias1.jpg' }
  ];
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = countByCategory(cat.name);
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
      <img class="cat-card-img" src="${cat.image}" alt="${cat.name}" loading="lazy" />
      <div class="cat-card-gradient"></div>
      <div class="cat-card-body">
        <div class="cat-card-name">${cat.name.toUpperCase()}</div>
        <div class="cat-card-count">${count} productos</div>
      </div>
      <div class="cat-card-arrow">→</div>
    `;
    card.addEventListener('click', () => openCategory(cat.name));
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.cat-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 70);
    });
  }, 100);
  renderMiniCards('new-products-scroll', getNewProducts());
  renderMiniCards('bestseller-scroll', getBestSellers());
}

// ========== NAVEGACIÓN ==========
function navigateTo(to) {
  const fromEl = document.getElementById(`screen-${state.currentScreen}`);
  const toEl = document.getElementById(`screen-${to}`);
  state.history.push(state.currentScreen);
  _navDepth++;
  history.pushState({ screen: to, depth: _navDepth }, '', '');
  fromEl.classList.remove('active');
  fromEl.classList.add('slide-out');
  toEl.scrollTop = 0;
  requestAnimationFrame(() => {
    toEl.classList.add('active');
    state.currentScreen = to;
    setTimeout(() => fromEl.classList.remove('slide-out'), 350);
  });
  document.body.classList.toggle('screen-detail-active', to === 'detail');
}

function goBack() {
  history.back();
}

function performGoBack() {
  if (state.history.length === 0) return;
  const prev = state.history.pop();
  const fromEl = document.getElementById(`screen-${state.currentScreen}`);
  const toEl = document.getElementById(`screen-${prev}`);
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
  document.body.classList.toggle('screen-detail-active', prev === 'detail');
}

window.addEventListener('popstate', (e) => {
  if (state.history.length === 0) {
    history.pushState({ screen: 'home', depth: 0 }, '', '');
    return;
  }
  _navDepth = Math.max(0, _navDepth - 1);
  performGoBack();
});

function openCategory(catName) {
  state.activeCategory = catName;
  document.getElementById('category-title').textContent = catName.toUpperCase();
  const catHeroImg = document.getElementById('cat-hero-img');
  // Imagen genérica para la categoría (puedes personalizar)
  const catImages = {
    'Camperas': './imgs/campera2.jpg',
    'Buzos': './imgs/buso1.jpg',
    'Remeras': './imgs/REMERA1.jpg',
    'Jeans': './imgs/jean1.jpg',
    'Jogging': './imgs/joggin.jpg',
    'Accesorios': './imgs/gorra2.jpg',
    'Medias': './imgs/medias1.jpg'
  };
  catHeroImg.src = catImages[catName] || './imgs/banner.jpg';
  document.getElementById('cat-hero-name').textContent = catName.toUpperCase();
  const products = getByCategory(catName);
  document.getElementById('products-count').textContent = `${products.length} productos`;
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
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
  navigateTo('category');
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 55);
    });
  }, 100);
}

function openProduct(product) {
  state.activeProduct = product;
  state.selectedSize = null;
  state.selectedColor = null;
  document.getElementById('detail-img').src = product.image;
  document.getElementById('detail-name').textContent = product.name;
  document.getElementById('detail-price').textContent = formatPrice(product.price);
  document.getElementById('detail-category-label').textContent = product.category.toUpperCase();
  document.getElementById('detail-cat-chip').textContent = product.category;
  document.getElementById('detail-desc').textContent = product.description;
  renderSizes(product.sizes);
  renderColors(product.colors);
  navigateTo('detail');
}

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
      container.querySelectorAll('.btn-size').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedSize = size;
    });
    container.appendChild(btn);
  });
}

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
    btn.innerHTML = `<span class="color-dot" style="background-color:${color.hex}"></span> ${color.name}`;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.btn-color').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedColor = color.name;
    });
    container.appendChild(btn);
  });
}

function openWhatsApp() {
  const p = state.activeProduct;
  if (!p) return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
  window.open(url, '_blank');
}

function openInstagram() {
  window.open(`https://www.instagram.com/${INSTAGRAM_USER}/`, '_blank');
}

function scrollToCats() {
  document.getElementById('section-categorias')?.scrollIntoView({ behavior: 'smooth' });
}

// ========== INICIO ==========
document.addEventListener('DOMContentLoaded', () => {
  history.replaceState({ screen: 'home', depth: 0 }, '', '');
  history.pushState({ screen: 'home', depth: 0 }, '', '');
  loadProductsFromFirebase();
  const homeScreen = document.getElementById('screen-home');
  const topBar = document.getElementById('top-bar');
  if (homeScreen && topBar) {
    homeScreen.addEventListener('scroll', () => {
      topBar.style.background = homeScreen.scrollTop > 20 ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.92)';
    });
  }
});

// Exponer funciones globales
window.goBack = goBack;
window.openWhatsApp = openWhatsApp;
window.openInstagram = openInstagram;
window.scrollToCats = scrollToCats;