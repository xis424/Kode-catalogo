'use strict';

/* ═══════════════════════════════════════════════════════
   KODE — Catálogo v2.0
   ───────────────────────────────────────────────────────
   CONFIGURACIÓN RÁPIDA:
   1. Cambiá WHATSAPP_NUMBER con tu número (549 + nro sin 0 ni 15)
   2. Cambiá INSTAGRAM_USER con tu usuario de Instagram
   3. Editá PRODUCTS para agregar/quitar productos
   4. Editá CATEGORIES para agregar/quitar categorías
═══════════════════════════════════════════════════════ */

const WHATSAPP_NUMBER  = '5493804382452';
const INSTAGRAM_USER   = 'kode.lr';   // ← tu usuario de IG sin @

/* ──────────────────────────────────────────────────────
   PRODUCTOS
   Campos:
     id          → string único (requerido)
     name        → nombre del producto
     price       → precio en pesos (número)
     category    → debe coincidir con algún name de CATEGORIES
     description → descripción corta
     image       → ruta relativa o URL
     sizes       → array de talles disponibles (puede ser vacío [])
     colors      → array de { name, hex }  (puede ser vacío [])
     badge       → etiqueta opcional: 'NUEVO' | 'MÁS VENDIDO' | lo que quieras
     isNew       → true/false → aparece en "Nuevos Ingresos"
     isBestSeller→ true/false → aparece en "Más Vendidos"
────────────────────────────────────────────────────── */
const PRODUCTS = [

  /* ── CAMPERAS ── */
  {
    id: 'c1',
    name: 'Campera Oversize Negra',
    price: 35000,
    category: 'Camperas',
    description: 'Campera oversize de gabardina con cierre metálico. Corte amplio y caída perfecta. Ideal para looks urbanos.',
    image: './imgs/campera1.jpg',
    sizes: ['XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'c2',
    name: 'Campera Puma',
    price: 30000,
    category: 'Camperas',
    description: 'Campera Puma negra. Estilo deportivo clásico.',
    image: './imgs/campera2.jpg',
    sizes: ['M', 'L'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }],
    isBestSeller: true
  },
  {
    id: 'c3',
    name: 'Campera Adidas',
    price: 30000,
    category: 'Camperas',
    description: 'Campera deportiva Adidas.',
    image: './imgs/campera3.jpg',
    sizes: ['M'],
    colors: [{ name: 'Rojo y Azul', hex: '#ff0000' }]
  },
  {
    id: 'c4',
    name: 'Conjunto Argentina',
    price: 45000,
    category: 'Camperas',
    description: 'Conjunto deportivo de la selección argentina.',
    image: './imgs/campera4.jpg',
    sizes: ['4'],
    colors: [{ name: 'Blanco/Celeste', hex: '#74b9df' }],
    isBestSeller: true
  },
  {
    id: 'c5',
    name: 'Conjunto Argentina',
    price: 45000,
    category: 'Camperas',
    description: 'Conjunto deportivo de la selección argentina. Talle 5.',
    image: './imgs/campera5.jpg',
    sizes: ['5'],
    colors: [{ name: 'Azul', hex: '#0f0063' }]
  },
  {
    id: 'c9',
    name: 'Campera Cuero Sintético',
    price: 55000,
    category: 'Camperas',
    description: 'Campera de cuero ecológico. Corte ajustado, cierre asimétrico. Ideal para look rockero.',
    image: './imgs/campera_cuero.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Marrón', hex: '#5c3a21' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'c10',
    name: 'Campera Táctil Militar',
    price: 48000,
    category: 'Camperas',
    description: 'Campera estilo militar con parches táctiles. Múltiples bolsillos y cremalleras.',
    image: './imgs/campera_militar.jpg',
    sizes: ['M', 'L', 'XL', '2XL'],
    colors: [{ name: 'Verde Oliva', hex: '#4b5320' }, { name: 'Negro', hex: '#1a1a1a' }],
    isBestSeller: true
  },
  {
    id: 'c11',
    name: 'Campera Bomber Satinada',
    price: 39000,
    category: 'Camperas',
    description: 'Campera bomber de satén. Corte clásico, mangas acanaladas. Ligera y elegante.',
    image: './imgs/campera_bomber.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Borgoña', hex: '#6e2121' }, { name: 'Negro', hex: '#1a1a1a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'c12',
    name: 'Campera Rompevientos Reflectante',
    price: 32000,
    category: 'Camperas',
    description: 'Campera ultraligera con detalles reflectantes. Ideal para correr o andar en bici.',
    image: './imgs/campera_reflect.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Gris Plateado', hex: '#b0b0b0' }, { name: 'Amarillo Neon', hex: '#eaff00' }],
    isNew: true
  },
  {
    id: 'c13',
    name: 'Campera Denim Con Bordados',
    price: 46000,
    category: 'Camperas',
    description: 'Campera de jean oversize con bordados florales en espalda. Lavado ácido.',
    image: './imgs/campera_bordada.jpg',
    sizes: ['M', 'L', 'XL'],
    colors: [{ name: 'Azul Claro', hex: '#6c8eb2' }],
    badge: 'MÁS VENDIDO',
    isBestSeller: true
  },


  /* ── BUZOS ── */
  {
    id: 'b1',
    name: 'Buzo Capucha Lisa',
    price: 35000,
    category: 'Buzos',
    description: 'Buzo con capucha y bolsillo canguro. Tela algodón frizado 320g. El básico indispensable del armario.',
    image: './imgs/buso1.jpg',
    sizes: ['XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }],
    badge: 'MÁS VENDIDO',
    isBestSeller: true
  },
  {
    id: 'b2',
    name: 'Suéter Wafle',
    price: 20000,
    category: 'Buzos',
    description: 'Suéter textura wafle. Algodón compacto premium.',
    image: './imgs/buso2.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco Roto', hex: '#e8e0d4' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'b3',
    name: 'Buzo Drop Shoulder',
    price: 35000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder. Corte XL con hombros caídos. Estética minimalista.',
    image: './imgs/buso3.jpg',
    sizes: ['XL'],
    colors: [
      { name: 'Gris Claro', hex: '#b0b0b0' },
      { name: 'Verde Lima', hex: '#c6f135' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'b4',
    name: 'Buzo 4XL',
    price: 15000,
    category: 'Buzos',
    description: 'Buzo talle 4XL.',
    image: './imgs/buso4.jpg',
    sizes: ['4XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }]
  },
  {
    id: 'b5',
    name: 'Buzo',
    price: 10000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder. Estética minimalista.',
    image: './imgs/buso5.jpg',
    sizes: ['M'],
    colors: [{ name: 'Negro', hex: '#000000' }]
  },
  {
    id: 'b6',
    name: 'Buzo Verde',
    price: 20000,
    category: 'Buzos',
    description: 'Buzo manga drop shoulder, tono verde.',
    image: './imgs/buso6.jpg',
    sizes: ['M'],
    colors: [{ name: 'Verde', hex: '#169106' }],
    isNew: true
  },
  {
    id: 'b7',
    name: 'Suéter Negro',
    price: 30000,
    category: 'Buzos',
    description: 'Suéter negro de algodón, corte clásico y cómodo.',
    image: './imgs/buzo8.jpg',
    sizes: ['2XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'b8',
    name: 'Suéter Beige',
    price: 30000,
    category: 'Buzos',
    description: 'Suéter beige de algodón, corte clásico y cómodo.',
    image: './imgs/buzo7.jpg',
    sizes: ['2XL'],
    colors: [{ name: 'Beige', hex: '#e8d5b7' }],
    badge: 'NUEVO',
    isNew: true
  },

  /* ── REMERAS ── */
  {
    id: 'r1',
    name: 'Remera Palm Angels',
    price: 15000,
    category: 'Remeras',
    description: 'Remera estilo Palm Angels.',
    image: './imgs/REMERA1.jpg',
    sizes: ['L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Beige', hex: '#ffe8db' }
    ],
    badge: 'BÁSICO',
    isBestSeller: true
  },
  {
    id: 'r2',
    name: 'Remera Wafle',
    price: 18000,
    category: 'Remeras',
    description: 'Remera textura wafle.',
    image: './imgs/REMERA2.png',
    sizes: ['L'],
    colors: [{ name: 'Verde', hex: '#adffb1' }],
    isNew: true
  },
  {
    id: 'r3',
    name: 'Remera Hollister',
    price: 15000,
    category: 'Remeras',
    description: 'Remera Hollister con estampa reverse.',
    image: './imgs/REMERA3.png',
    sizes: ['XL'],
    colors: [{ name: 'Bordo', hex: '#6e2121' }]
  },
  {
    id: 'r4',
    name: 'Remera Hollister',
    price: 15000,
    category: 'Remeras',
    description: 'Remera Hollister con estampa reverse.',
    image: './imgs/REMERA4.png',
    sizes: ['XL'],
    colors: [{ name: 'Beige', hex: '#ffeaa4' }]
  },
  {
    id: 'r5',
    name: 'Remera Hollister Negra',
    price: 15000,
    category: 'Remeras',
    description: 'Remera Hollister manga larga. Fit slim.',
    image: './imgs/REMERA5.png',
    sizes: ['XL'],
    colors: [{ name: 'Negro', hex: '#050303' }]
  },
  {
    id: 'r6',
    name: 'Chaleco Deportivo',
    price: 18000,
    category: 'Remeras',
    description: 'Chaleco deportivo sin mangas.',
    image: './imgs/remera6.jpg',
    sizes: ['XL'],
    colors: [{ name: 'Negro', hex: '#050303' }]
  },
  {
    id: 'r7',
    name: 'Chomba Manga Larga',
    price: 15000,
    category: 'Remeras',
    description: 'Chomba manga larga con cuello camisero. Fit slim.',
    image: './imgs/remera7.jpg',
    sizes: ['L'],
    colors: [{ name: 'Marrón', hex: '#a8953f' }]
  },
  {
    id: 'r8',
    name: 'Remera Manga Larga',
    price: 15000,
    category: 'Remeras',
    description: 'Remera manga larga básica. Fit slim.',
    image: './imgs/remera8.jpg',
    sizes: ['XL'],
    colors: [{ name: 'Blanca', hex: '#ffffff' }]
  },
  {
    id: 'r13',
    name: 'Remera Estampa Gótica',
    price: 19000,
    category: 'Remeras',
    description: 'Remera 100% algodón. Estampa de tipografía gótica en el pecho. Fit oversize.',
    image: './imgs/remera_gotica.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Blanco', hex: '#ffffff' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'r14',
    name: 'Remera Tie Dye',
    price: 21000,
    category: 'Remeras',
    description: 'Remera teñida con técnica tie dye. Cada pieza es única. Algodón suave.',
    image: './imgs/remera_tiedye.jpg',
    sizes: ['M', 'L', 'XL'],
    colors: [{ name: 'Arcoíris', hex: '#ff00cc' }], // color representativo
    isNew: true
  },
  {
    id: 'r15',
    name: 'Remera Cuello Mao',
    price: 23000,
    category: 'Remeras',
    description: 'Remera de manga corta con cuello mao. Tela jersey premium. Look minimalista.',
    image: './imgs/remera_mao.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Beige', hex: '#e8d5b7' }],
    isBestSeller: true
  },


  /* ── JEANS ── */
  {
    id: 'j1',
    name: 'Jean Baggy Óxido',
    price: 35000,
    category: 'Jeans',
    description: 'Jean baggy color óxido lavado.',
    image: './imgs/jean1.jpg',
    sizes: ['44', '46'],
    colors: [{ name: 'Celeste Lavado', hex: '#7aa0be' }],
    isBestSeller: true
  },
  {
    id: 'j2',
    name: 'Jean Baggy Celeste',
    price: 35000,
    category: 'Jeans',
    description: 'Jean baggy estilo escolar.',
    image: './imgs/jean2.jpg',
    sizes: ['44'],
    colors: [{ name: 'Celeste', hex: '#3a5a8a' }]
  },
  {
    id: 'j3',
    name: 'Jean Baggy Negro',
    price: 35000,
    category: 'Jeans',
    description: 'Jean baggy negro clásico.',
    image: './imgs/jean3.jpg',
    sizes: ['46'],
    colors: [{ name: 'Negro', hex: '#030303' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j5',
    name: 'Jean Cargo Beige',
    price: 18000,
    category: 'Jeans',
    description: 'Jean cargo beige con bolsillos laterales.',
    image: './imgs/jean5.jpg',
    sizes: ['4'],
    colors: [{ name: 'Beige Oscuro', hex: '#8a7a5a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j6',
    name: 'Jean Baggy Musgo',
    price: 35000,
    category: 'Jeans',
    description: 'Jean carpenter con bolsillo lateral derecho. Múltiples bolsillos funcionales.',
    image: './imgs/jean6.jpg',
    sizes: ['46'],
    colors: [{ name: 'Verde Musgo', hex: '#2f5a29' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j7',
    name: 'Jean Talle 52',
    price: 45000,
    category: 'Jeans',
    description: 'Jean carpenter con bolsillo lateral. Rígido premium.',
    image: './imgs/jean7.jpg',
    sizes: ['52'],
    colors: [{ name: 'Negro', hex: '#000000' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j8',
    name: 'Jean Baggy Talle 50',
    price: 40000,
    category: 'Jeans',
    description: 'Jean carpenter estilo relaxed. Rígido premium.',
    image: './imgs/jean8.jpg',
    sizes: ['50'],
    colors: [{ name: 'Negro', hex: '#000000' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j10',
    name: 'Jean Talle 54',
    price: 45000,
    category: 'Jeans',
    description: 'Jean carpenter con bolsillo lateral. Rígido premium.',
    image: './imgs/jean10.jpg',
    sizes: ['54'],
    colors: [{ name: 'Celeste', hex: '#003261' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j5b',
    name: 'Jean Cargo Negro',
    price: 50000,
    category: 'Jeans',
    description: 'Jean cargo negro con múltiples bolsillos funcionales.',
    image: './imgs/jean4.jpg',
    sizes: ['44'],
    colors: [{ name: 'Negro', hex: '#000000' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j11',
    name: 'Jean Gris Talle 42',
    price: 30000,
    category: 'Jeans',
    description: 'Jean gris talle 42.',
    image: './imgs/jean11.jpg',
    sizes: ['42'],
    colors: [{ name: 'Gris', hex: '#7aa0be' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'j12',
    name: 'Bermuda Jean',
    price: 30000,
    category: 'Jeans',
    description: 'Bermuda de jean cómoda y resistente.',
    image: './imgs/jean12.jpg',
    sizes: ['48'],
    colors: [{ name: 'Celeste Lavado', hex: '#7aa0be' }]
  },

  /* ── JOGGING ── */
  {
    id: 'jo1',
    name: 'Jogging Gris',
    price: 18000,
    category: 'Jogging',
    description: 'Pantalón wide leg en punto de algodón pesado. Pierna ancha relajada.',
    image: './imgs/joggin2.jpg',
    sizes: ['7'],
    colors: [{ name: 'Gris', hex: '#7a7a7a' }],
    isBestSeller: true
  },
  {
    id: 'jo2',
    name: 'Jogging Azul',
    price: 18000,
    category: 'Jogging',
    description: 'Pantalón wide leg en punto de algodón pesado.',
    image: './imgs/joggin.jpg',
    sizes: ['5'],
    colors: [{ name: 'Azul', hex: '#000397' }]
  },
  {
    id: 'jo3',
    name: 'Conjunto Argentina',
    price: 45000,
    category: 'Jogging',
    description: 'Pantalón jogging cómodo y deportivo.',
    image: './imgs/campera4.jpg',
    sizes: ['4'],
    colors: [{ name: 'Blanco/Celeste', hex: '#74b9df' }]
  },
  {
    id: 'jo4',
    name: 'Conjunto Argentina',
    price: 45000,
    category: 'Jogging',
    description: 'Pantalón jogging cómodo y deportivo.',
    image: './imgs/campera5.jpg',
    sizes: ['5'],
    colors: [{ name: 'Azul', hex: '#0f0063' }]
  },
  {
    id: 'jo5',
    name: 'Jogging Negro',
    price: 30000,
    category: 'Jogging',
    description: 'Pantalón jogging negro cómodo y deportivo.',
    image: './imgs/joggin4.jpg',
    sizes: ['8', '9'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }]
  },
  
{
    id: 'jo8',
    name: 'Jogging Cargo Bolsillos',
    price: 27000,
    category: 'Jogging',
    description: 'Jogging estilo cargo con 4 bolsillos grandes. Puños elastizados. Algodón felpa.',
    image: './imgs/jogging_cargo.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Verde Oliva', hex: '#4b5320' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'jo9',
    name: 'Jogging Pierna Ancha',
    price: 24000,
    category: 'Jogging',
    description: 'Pantalón jogging de corte wide leg. Cintura elástica con cordón. Ideal para looks holgados.',
    image: './imgs/jogging_wide.jpg',
    sizes: ['M', 'L', 'XL', '2XL'],
    colors: [{ name: 'Gris Melange', hex: '#8e8e8e' }, { name: 'Negro', hex: '#1a1a1a' }],
    isNew: true
  },
  {
    id: 'jo10',
    name: 'Jogging Térmico',
    price: 22000,
    category: 'Jogging',
    description: 'Pantalón térmico para frío. Interior cepillado. Ajuste slim pero cómodo.',
    image: './imgs/jogging_termico.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Azul Marino', hex: '#1a2b4c' }, { name: 'Negro', hex: '#1a1a1a' }],
    isBestSeller: true
  },
  
  
  /* ── ACCESORIOS ── */
  {
    id: 'a1',
    name: 'Gorra Lisa Verde',
    price: 15000,
    category: 'Accesorios',
    description: 'Gorra lisa talla única.',
    image: './imgs/gorra1.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Verde', hex: '#537950' }]
  },
  {
    id: 'a2',
    name: 'Gorra Lisa Gris',
    price: 15000,
    category: 'Accesorios',
    description: 'Gorra lisa gris talla única.',
    image: './imgs/gorra4.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Gris', hex: '#7a7a7a' }]
  },
  {
    id: 'a3',
    name: 'Gorra Brooklyn',
    price: 15000,
    category: 'Accesorios',
    description: 'Gorra estampada Brooklyn.',
    image: './imgs/gorra3.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Gris', hex: '#7a7a7a' }]
  },
  {
    id: 'a4',
    name: 'Gorra Beige Brooklyn',
    price: 15000,
    category: 'Accesorios',
    description: 'Gorra estampada beige Brooklyn.',
    image: './imgs/gorra2.jpg',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO',
    isNew: true
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
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'a6',
    name: 'Riñonera',
    price: 20000,
    category: 'Accesorios',
    description: 'Riñonera de uso cruzado o cintura.',
    image: './imgs/riñonera.jpg',
    sizes: ['Único'],
    colors: [
      { name: 'Verde', hex: '#46643c' },
      { name: 'Marrón', hex: '#5a3a20' }
    ],
    badge: 'NUEVO',
    isNew: true
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
      { name: 'Beige', hex: '#f5a36d' },
      { name: 'Azul', hex: '#003cff' },
      { name: 'Marrón', hex: '#ad4500' }
    ],
    badge: 'NUEVO',
    isNew: true
  },
 {
    id: 'a10',
    name: 'Gorra Trucker',
    price: 14000,
    category: 'Accesorios',
    description: 'Gorra estilo trucker con malla trasera. Ajuste clip.',
    image: './imgs/gorra_trucker.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Negro/Rojo', hex: '#1a1a1a' }, { name: 'Azul/Blanco', hex: '#003cff' }],
    isNew: true
  },
  {
    id: 'a11',
    name: 'Gorra Pana',
    price: 16000,
    category: 'Accesorios',
    description: 'Gorra de pana con visera plana. Look vintage.',
    image: './imgs/gorra_pana.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Marrón', hex: '#5a3a20' }, { name: 'Beige', hex: '#e8d5b7' }],
    isNew: true
  },
  {
    id: 'a12',
    name: 'Mochila Escolar Negra',
    price: 32000,
    category: 'Accesorios',
    description: 'Mochila resistente con compartimento para laptop de 15".',
    image: './imgs/mochila_negra.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'a13',
    name: 'Bandolera Crossbody',
    price: 18000,
    category: 'Accesorios',
    description: 'Bandolera pequeña de lona. Ideal para llevar lo esencial.',
    image: './imgs/bandolera.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Caqui', hex: '#8a9a5b' }, { name: 'Negro', hex: '#1a1a1a' }],
    isNew: true
  },
  {
    id: 'a14',
    name: 'Pulsera Acero Inoxidable',
    price: 7000,
    category: 'Accesorios',
    description: 'Pulsera de eslabones gruesos. Acabado pulido.',
    image: './imgs/pulsera_acero.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Plateado', hex: '#c0c0c0' }, { name: 'Oro Rosa', hex: '#e0bfb8' }],
    isNew: true
  },
  {
    id: 'a15',
    name: 'Anillo Ajustable Dragón',
    price: 5000,
    category: 'Accesorios',
    description: 'Anillo de aleación con diseño de dragón. Ajustable.',
    image: './imgs/anillo_dragon.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Plateado', hex: '#c0c0c0' }, { name: 'Oro', hex: '#d4af37' }],
    isNew: true
  },
  {
    id: 'a16',
    name: 'Cadena con Dije Cruz',
    price: 9000,
    category: 'Accesorios',
    description: 'Collar de acero con dije de cruz. Largo 50cm.',
    image: './imgs/cadena_cruz.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Plateado', hex: '#c0c0c0' }],
    isBestSeller: true
  },
  {
    id: 'a17',
    name: 'Lentes de Sol Vintage',
    price: 25000,
    category: 'Accesorios',
    description: 'Lentes de sol estilo vintage. Protección UV400.',
    image: './imgs/lentes_vintage.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Negro/Verde', hex: '#1a1a1a' }, { name: 'Carena/Café', hex: '#8b5a2b' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'a18',
    name: 'Pañuelo Bandana',
    price: 4000,
    category: 'Accesorios',
    description: 'Pañuelo bandana 100% algodón. Estampado de lunares o pisa.',
    image: './imgs/bandana.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Rojo/Blanco', hex: '#cc0000' }, { name: 'Negro/Blanco', hex: '#1a1a1a' }],
    isNew: true
  },
  {
    id: 'a19',
    name: 'Cartera Billetera Trifold',
    price: 12000,
    category: 'Accesorios',
    description: 'Billetera de cuero sintético con múltiples divisiones.',
    image: './imgs/billetera.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Marrón', hex: '#5a3a20' }],
    isNew: true
  },
  {
    id: 'a20',
    name: 'Llavero Metálico',
    price: 3000,
    category: 'Accesorios',
    description: 'Llavero de aleación de zinc. Diseño de calavera o rosa.',
    image: './imgs/llavero.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Plateado', hex: '#c0c0c0' }, { name: 'Negro', hex: '#1a1a1a' }],
    isNew: true
  },
  {
    id: 'a21',
    name: 'Tote Bag Algodón',
    price: 8000,
    category: 'Accesorios',
    description: 'Bolsa ecológica de algodón. Estampado minimalista.',
    image: './imgs/totebag.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Natural', hex: '#e8e0d4' }, { name: 'Negro', hex: '#1a1a1a' }],
    badge: 'NUEVO',
    isNew: true
  },
  {
    id: 'a22',
    name: 'Pins Set x3',
    price: 5000,
    category: 'Accesorios',
    description: 'Set de 3 pins esmaltados. Temática urbana.',
    image: './imgs/pins.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Mix', hex: '#ff00cc' }],
    isNew: true
  },
  {
    id: 'a23',
    name: 'Cinturón Tachas',
    price: 15000,
    category: 'Accesorios',
    description: 'Cinturón de cuero con tachas metálicas. Estilo punk.',
    image: './imgs/cinturon_tachas.jpg',
    sizes: ['S/M', 'L/XL'],
    colors: [{ name: 'Negro', hex: '#1a1a1a' }, { name: 'Marrón', hex: '#5a3a20' }],
    isBestSeller: true
  },
  {
    id: 'a24',
    name: 'Riñonera Neon',
    price: 19000,
    category: 'Accesorios',
    description: 'Riñonera de poliéster con colores fluorescentes. Ideal para festivales.',
    image: './imgs/rinonera_neon.jpg',
    sizes: ['Única'],
    colors: [{ name: 'Amarillo', hex: '#eaff00' }, { name: 'Rosa', hex: '#ff66cc' }],
    isNew: true
  },

  /* ── MEDIAS ── */
  {
    id: 'm1',
    name: 'Medias Caña Alta',
    price: 3000,
    category: 'Medias',
    description: 'Medias caña alta. 78% algodón, elástico suave.',
    image: './imgs/medias1.jpg',
    sizes: ['44'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Negro', hex: '#1a1a1a' }
    ],
    badge: 'PACK x3 $7000',
    isBestSeller: true
  },
  {
    id: 'm2',
    name: 'Medias Altas',
    price: 3000,
    category: 'Medias',
    description: 'Medias altas disponibles en varios colores.',
    image: './imgs/medias2.jpg',
    sizes: ['Único'],
    colors: [
      { name: 'Blanco', hex: '#f5f5f5' },
      { name: 'Gris', hex: '#7a7a7a' },
      { name: 'Negro', hex: '#1a1a1a' }
    ]
  },
  {
    id: 'm3',
    name: 'Medias Negras',
    price: 2000,
    category: 'Medias',
    description: 'Medias negras con borde en contraste.',
    image: './imgs/medias4.jpg',
    sizes: ['44'],
    colors: [{ name: 'Negro/Blanco', hex: '#2a2a2a' }],
    badge: 'PACK x2 $3000'
  },
   {
    id: 'm5',
    name: 'Medias Deportivas Tobilleras',
    price: 2500,
    category: 'Medias',
    description: 'Medias tobilleras con refuerzo en talón. Algodón y elastano.',
    image: './imgs/medias_tobilleras.jpg',
    sizes: ['39/42', '43/46'],
    colors: [{ name: 'Blanco', hex: '#ffffff' }, { name: 'Negro', hex: '#1a1a1a' }],
    badge: 'PACK x2',
    isBestSeller: true
  },
  {
    id: 'm6',
    name: 'Medias Canilleras',
    price: 3500,
    category: 'Medias',
    description: 'Medias hasta la pantorrilla. Ideales para usar con botas.',
    image: './imgs/medias_canilleras.jpg',
    sizes: ['Único'],
    colors: [{ name: 'Gris Antracita', hex: '#4a4a4a' }, { name: 'Borgoña', hex: '#6e2121' }],
    isNew: true
  },
  {
    id: 'm7',
    name: 'Medias Estampadas Pack x3',
    price: 6000,
    category: 'Medias',
    description: 'Pack con 3 diseños distintos: lunares, rayas y cuadros.',
    image: './imgs/medias_estampadas.jpg',
    sizes: ['39/42'],
    colors: [{ name: 'Multicolor', hex: '#ff00cc' }],
    badge: 'PACK x3',
    isNew: true
  },
  {
    id: 'm8',
    name: 'Medias de Lana',
    price: 4500,
    category: 'Medias',
    description: 'Medias térmicas de mezcla de lana. Para invierno.',
    image: './imgs/medias_lana.jpg',
    sizes: ['Único'],
    colors: [{ name: 'Gris Oscuro', hex: '#3a3a3a' }, { name: 'Verde Bosque', hex: '#2f5a29' }],
    isNew: true
  }

]; // fin PRODUCTS


/* ──────────────────────────────────────────────────────
   CATEGORÍAS
   Campos:
     name  → nombre (debe coincidir con product.category)
     image → imagen de portada de la categoría
     emoji → emoji opcional para mostrar en la nav
────────────────────────────────────────────────────── */
const CATEGORIES = [
  { name: 'Camperas', image: './imgs/campera2.jpg',  emoji: '🧥' },
  { name: 'Buzos',    image: './imgs/buso1.jpg',     emoji: '👕' },
  { name: 'Remeras',  image: './imgs/REMERA1.jpg',   emoji: '👔' },
  { name: 'Jeans',    image: './imgs/jean1.jpg',     emoji: '👖' },
  { name: 'Jogging',  image: './imgs/joggin.jpg',    emoji: '🩳' },
  { name: 'Accesorios', image: './imgs/gorra2.jpg',  emoji: '🎒' },
  { name: 'Medias',   image: './imgs/medias1.jpg',   emoji: '🧦' }
];


/* ══════════════════════════════════════════════════════
   ESTADO DE LA APP
══════════════════════════════════════════════════════ */
const state = {
  currentScreen: 'home',
  history:       [],
  activeCategory: null,
  activeProduct:  null,
  selectedSize:   null,
  selectedColor:  null
};

let _navDepth = 0;


/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
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
  return PRODUCTS.filter(p => p.isNew);
}

function getBestSellers() {
  return PRODUCTS.filter(p => p.isBestSeller);
}

function buildWhatsAppMessage() {
  const p = state.activeProduct;
  if (!p) return '';
  let msg = `Hola KODE! 👋 Quiero consultar por *${p.name}*`;
  if (state.selectedSize)  msg += `, talle *${state.selectedSize}*`;
  if (state.selectedColor) msg += `, color *${state.selectedColor}*`;
  msg += `. ¿Tienen disponibilidad? 💬`;
  return encodeURIComponent(msg);
}

function buildInstagramCaption() {
  const p = state.activeProduct;
  if (!p) return '';
  let msg = `Hola! Me interesa el producto: ${p.name}`;
  if (state.selectedSize)  msg += ` - Talle: ${state.selectedSize}`;
  if (state.selectedColor) msg += ` - Color: ${state.selectedColor}`;
  msg += `. ¿Tienen disponibilidad?`;
  return encodeURIComponent(msg);
}


/* ══════════════════════════════════════════════════════
   ANIMACIONES
══════════════════════════════════════════════════════ */
function animateCards(selector, delay = 60) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * delay);
  });
}


/* ══════════════════════════════════════════════════════
   NAVEGACIÓN
══════════════════════════════════════════════════════ */
function navigateTo(to) {
  const fromEl = document.getElementById(`screen-${state.currentScreen}`);
  const toEl   = document.getElementById(`screen-${to}`);

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

  // Ocultar FAB en detail
  document.body.classList.toggle('screen-detail-active', to === 'detail');
}

function goBack() {
  history.back();
}

function performGoBack() {
  if (state.history.length === 0) return;
  const prev   = state.history.pop();
  const fromEl = document.getElementById(`screen-${state.currentScreen}`);
  const toEl   = document.getElementById(`screen-${prev}`);

  fromEl.classList.remove('active');
  fromEl.style.transform = 'translateX(30px)';
  fromEl.style.opacity   = '0';

  toEl.scrollTop = 0;

  requestAnimationFrame(() => {
    toEl.classList.add('active');
    state.currentScreen = prev;
    setTimeout(() => {
      fromEl.style.transform = '';
      fromEl.style.opacity   = '';
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


/* ══════════════════════════════════════════════════════
   HOME — RENDER TOP NAV CATEGORIES
══════════════════════════════════════════════════════ */
function renderTopNav() {
  const desktopNav = document.getElementById('top-cats-nav');
  const mobileMenu = document.getElementById('mobile-menu-inner');

  desktopNav.innerHTML = '';
  mobileMenu.innerHTML = '';

  CATEGORIES.forEach(cat => {
    // Desktop pill
    const btn = document.createElement('button');
    btn.className = 'top-cat-btn';
    btn.textContent = cat.name;
    btn.addEventListener('click', () => openCategory(cat.name));
    desktopNav.appendChild(btn);

    // Mobile item
    const mBtn = document.createElement('button');
    mBtn.className = 'mobile-cat-btn';
    mBtn.textContent = `${cat.emoji || ''} ${cat.name}`.trim();
    mBtn.addEventListener('click', () => {
      closeMobileMenu();
      openCategory(cat.name);
    });
    mobileMenu.appendChild(mBtn);
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenuEl = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenuEl.classList.toggle('open');
  });
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}


/* ══════════════════════════════════════════════════════
   HOME — RENDER SECCIONES
══════════════════════════════════════════════════════ */
function renderMiniCards(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  if (products.length === 0) {
    container.closest('.home-section').style.display = 'none';
    return;
  }

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'mini-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${product.name}`);

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
      // Pequeño delay para que la transición se vea
      setTimeout(() => openProductDirect(product), 50);
    });

    container.appendChild(card);
  });

  setTimeout(() => animateCards(`#${containerId} .mini-card`, 80), 200);
}

// Abre un producto directamente sin pasar por openCategory
function openProductDirect(product) {
  openProduct(product);
}

function renderHome() {
  // Categorías
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

  setTimeout(() => animateCards('.cat-card', 70), 100);

  // Nuevos ingresos
  renderMiniCards('new-products-scroll', getNewProducts());

  // Más vendidos
  renderMiniCards('bestseller-scroll', getBestSellers());
}

/* Scroll suave hasta las categorías */
function scrollToCats() {
  document.getElementById('section-categorias')
    .scrollIntoView({ behavior: 'smooth' });
}


/* ══════════════════════════════════════════════════════
   CATEGORY SCREEN
══════════════════════════════════════════════════════ */
function openCategory(catName) {
  state.activeCategory = catName;

  // Nav title
  document.getElementById('category-title').textContent = catName.toUpperCase();

  // Cat hero
  const catData = CATEGORIES.find(c => c.name === catName);
  const heroImg = document.getElementById('cat-hero-img');
  if (catData) heroImg.src = catData.image;
  heroImg.alt = catName;
  document.getElementById('cat-hero-name').textContent = catName.toUpperCase();

  const products = getByCategory(catName);
  document.getElementById('products-count').textContent =
    `${products.length} ${products.length === 1 ? 'producto' : 'productos'}`;

  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver ${product.name}`);

    let badgeClass = '';
    if (product.badge === 'MÁS VENDIDO') badgeClass = 'badge-vendido';
    if (product.badge === 'BÁSICO') badgeClass = 'badge-basico';

    card.innerHTML = `
      <div class="product-card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
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
  setTimeout(() => animateCards('.product-card', 55), 100);
}


/* ══════════════════════════════════════════════════════
   DETAIL SCREEN
══════════════════════════════════════════════════════ */
function openProduct(product) {
  state.activeProduct = product;
  state.selectedSize  = null;
  state.selectedColor = null;

  document.getElementById('detail-img').src        = product.image;
  document.getElementById('detail-img').alt        = product.name;
  document.getElementById('detail-name').textContent    = product.name;
  document.getElementById('detail-price').textContent   = formatPrice(product.price);
  document.getElementById('detail-category-label').textContent = product.category.toUpperCase();
  document.getElementById('detail-cat-chip').textContent       = product.category;
  document.getElementById('detail-desc').textContent    = product.description;

  renderSizes(product.sizes);
  renderColors(product.colors);

  navigateTo('detail');
}

function renderSizes(sizes) {
  const container = document.getElementById('size-options');
  const block     = document.getElementById('size-block');

  if (!sizes || sizes.length === 0) { block.style.display = 'none'; return; }
  block.style.display = '';
  container.innerHTML = '';

  sizes.forEach(size => {
    const btn = document.createElement('button');
    btn.className   = 'btn-size';
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
  const block     = document.getElementById('color-block');

  if (!colors || colors.length === 0) { block.style.display = 'none'; return; }
  block.style.display = '';
  container.innerHTML = '';

  colors.forEach(color => {
    const btn = document.createElement('button');
    btn.className = 'btn-color';
    btn.innerHTML = `
      <span class="color-dot" style="background-color:${color.hex}"></span>
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


/* ══════════════════════════════════════════════════════
   CONTACTO
══════════════════════════════════════════════════════ */
function openWhatsApp() {
  const p = state.activeProduct;
  if (!p) return;

  // Resaltar talles si no seleccionó
  if (p.sizes && p.sizes.length > 1 && !state.selectedSize) {
    const sb = document.getElementById('size-block');
    sb.style.outline      = '2px solid var(--accent)';
    sb.style.borderRadius = '10px';
    sb.style.padding      = '10px';
    sb.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => { sb.style.outline = ''; sb.style.padding = ''; }, 2000);
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
  window.open(url, '_blank');
}

function openInstagram() {
  const url = `https://www.instagram.com/${INSTAGRAM_USER}/`;
  window.open(url, '_blank');
}


/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Fix Instagram WebView history
  history.replaceState({ screen: 'home', depth: 0 }, '', '');
  history.pushState({ screen: 'home', depth: 0 }, '', '');

  renderTopNav();
  renderHome();

  // Scroll top-bar opacity on home scroll
  const homeScreen = document.getElementById('screen-home');
  const topBar     = document.getElementById('top-bar');
  homeScreen.addEventListener('scroll', () => {
    const scrolled = homeScreen.scrollTop > 20;
    topBar.style.background = scrolled
      ? 'rgba(10,10,10,0.97)'
      : 'rgba(10,10,10,0.92)';
  });

  console.log(
    '%cKODE Catálogo v2.0',
    'font-family:monospace; font-size:14px; color:#c6f135; background:#0a0a0a; padding:6px 12px; border-radius:4px;'
  );
});


/* ══════════════════════════════════════════════════════
   CÓMO USAR ESTE CATÁLOGO
   ──────────────────────────────────────────────────────
   1. WHATSAPP → cambiá WHATSAPP_NUMBER al inicio
      Formato: 549 + código de área + número (sin 0 ni 15)
      Ej: '5491155667788'

   2. INSTAGRAM → cambiá INSTAGRAM_USER con tu usuario sin @

   3. PRODUCTOS → cada producto en PRODUCTS tiene:
      {
        id, name, price, category, description,
        image, sizes, colors, badge,
        isNew: true/false,          ← aparece en "Nuevos"
        isBestSeller: true/false    ← aparece en "Más Vendidos"
      }

   4. CATEGORÍAS → en CATEGORIES: { name, image, emoji }
      El name debe coincidir exactamente con product.category

   5. IMÁGENES → usá rutas relativas: './imgs/foto.jpg'
      Creá una carpeta /imgs/ junto al index.html

   6. DEPLOY → subí los 3 archivos (index.html, style.css, script.js)
      + la carpeta /imgs/ a cualquier hosting estático
══════════════════════════════════════════════════════ */
