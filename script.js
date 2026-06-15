/* ============================================================
   LogoCraft - script.js
   Vanilla JavaScript – 100% Client-side
   ============================================================ */

'use strict';

/* ============================================================
   1. DATA: SVG ICONS (30+ icons)
   ============================================================ */
const ICONS = [
  // TECH
  {
    id: 'rocket', category: 'tech', label: 'Rocket',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 7 6 7 13L5 15C4.4 15.6 4 16.8 4 18L6 20C7.2 20 8.4 19.6 9 19L11 17C11.3 17 11.7 17 12 17C15.9 17 19.2 14.6 20.5 11.2L21.5 8.5C21.9 7.4 21.4 6.1 20.3 5.7L17.5 4.7C16.1 4.2 14.5 4.1 13 4.4L12 2Z"/>
      <circle cx="15" cy="9" r="2" fill="white" opacity="0.5"/>
      <path d="M5 19L3 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'laptop', category: 'tech', label: 'Laptop',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <path d="M1 21h22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M8 21l2-4h4l2 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'code', category: 'tech', label: 'Code',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="16 18 22 12 16 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="8 6 2 12 8 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'cpu', category: 'tech', label: 'CPU',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.2"/>
      <path d="M9 7V3M12 7V3M15 7V3M9 21v-4M12 21v-4M15 21v-4M7 9H3M7 12H3M7 15H3M21 9h-4M21 12h-4M21 15h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'wifi', category: 'tech', label: 'WiFi',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 8.5C5 5 9.3 3 12 3s7 2 10.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M5 12c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M8.5 15.5C9.6 14.4 10.7 14 12 14s2.4.4 3.5 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
    </svg>`
  },
  // FOOD
  {
    id: 'pizza', category: 'food', label: 'Pizza',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.5 2 2 6.5 2 12L12 22L22 12C22 6.5 17.5 2 12 2Z" opacity="0.9"/>
      <circle cx="9" cy="10" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="13" cy="14" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="15" cy="9" r="1" fill="white" opacity="0.6"/>
    </svg>`
  },
  {
    id: 'coffee', category: 'food', label: 'Coffee',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8H18a4 4 0 010 8h-1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.2"/>
      <path d="M6 2v2M10 2v2M14 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'burger', category: 'food', label: 'Burger',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9C4 6.8 7.6 5 12 5s8 1.8 8 4H4z" opacity="0.9"/>
      <rect x="3" y="11" width="18" height="2" rx="1"/>
      <path d="M3 15h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <rect x="4" y="17" width="16" height="3" rx="1.5" opacity="0.8"/>
    </svg>`
  },
  {
    id: 'cake', category: 'food', label: 'Cake',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21H4V11h16v10z" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/>
      <path d="M4 11V9a8 8 0 0116 0v2" stroke="currentColor" stroke-width="2"/>
      <path d="M12 2v4M8 4l1 2M16 4l-1 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 16h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/>
    </svg>`
  },
  // SHOP
  {
    id: 'bag', category: 'shop', label: 'Bag',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/>
      <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'store', category: 'shop', label: 'Store',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18l-2 8H5L3 3z" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/>
      <path d="M5 11v9h14v-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 11v9M15 11v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="8" cy="3" r="0" fill="none"/>
    </svg>`
  },
  {
    id: 'tag', category: 'shop', label: 'Tag',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
    </svg>`
  },
  // CAMERA
  {
    id: 'camera', category: 'camera', label: 'Camera',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
    </svg>`
  },
  {
    id: 'film', category: 'camera', label: 'Film',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
      <line x1="7" y1="2" x2="7" y2="22" stroke="currentColor" stroke-width="2"/>
      <line x1="17" y1="2" x2="17" y2="22" stroke="currentColor" stroke-width="2"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/>
      <line x1="2" y1="7" x2="7" y2="7" stroke="currentColor" stroke-width="2"/>
      <line x1="17" y1="7" x2="22" y2="7" stroke="currentColor" stroke-width="2"/>
      <line x1="17" y1="17" x2="22" y2="17" stroke="currentColor" stroke-width="2"/>
      <line x1="2" y1="17" x2="7" y2="17" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  // GAMING
  {
    id: 'gamepad', category: 'gaming', label: 'Gamepad',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12h4M8 10v4M15 12h.01M18 12h.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M4 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
    </svg>`
  },
  {
    id: 'trophy', category: 'gaming', label: 'Trophy',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21h8M12 17v4M7 4H4a2 2 0 000 4c0 2.2 1.8 4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M17 4h3a2 2 0 010 4c0 2.2-1.8 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M7 4h10v9a5 5 0 01-10 0V4z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.2"/>
    </svg>`
  },
  {
    id: 'sword', category: 'gaming', label: 'Sword',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 19l6-6M17 23l4-4M5 9l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  // EDUCATION
  {
    id: 'book', category: 'education', label: 'Book',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <path d="M9 7h6M9 11h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'graduation', category: 'education', label: 'Graduation',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" opacity="0.9"/>
      <path d="M5 13.18V17.18L12 21l7-3.82V13.18L12 17l-7-3.82z" opacity="0.6"/>
    </svg>`
  },
  {
    id: 'pencil', category: 'education', label: 'Pencil',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
    </svg>`
  },
  // FITNESS
  {
    id: 'dumbbell', category: 'fitness', label: 'Dumbbell',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="10" width="4" height="4" rx="1"/>
      <rect x="19" y="10" width="4" height="4" rx="1"/>
      <rect x="4" y="8" width="3" height="8" rx="1"/>
      <rect x="17" y="8" width="3" height="8" rx="1"/>
      <rect x="7" y="11" width="10" height="2" rx="1"/>
    </svg>`
  },
  {
    id: 'heart', category: 'fitness', label: 'Heart',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>`
  },
  {
    id: 'run', category: 'fitness', label: 'Run',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="3" r="2"/>
      <path d="M13 7l-3 3-4 1-2 4h3l3-3 2 5 3-3 2 3h3l-4-7 2-5h-5l-1 1z"/>
    </svg>`
  },
  // MUSIC
  {
    id: 'music', category: 'music', label: 'Music',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
      <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
    </svg>`
  },
  {
    id: 'headphone', category: 'music', label: 'Headphone',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
      <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
    </svg>`
  },
  {
    id: 'mic', category: 'music', label: 'Mic',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.2"/>
      <path d="M5 10a7 7 0 0014 0M12 19v3M8 22h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  // TRAVEL
  {
    id: 'plane', category: 'travel', label: 'Plane',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>`
  },
  {
    id: 'map', category: 'travel', label: 'Map',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="currentColor" opacity="0.15"/>
      <line x1="9" y1="3" x2="9" y2="18" stroke="currentColor" stroke-width="2"/>
      <line x1="15" y1="6" x2="15" y2="21" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'compass', category: 'travel', label: 'Compass',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.4"/>
    </svg>`
  },
  // BUSINESS
  {
    id: 'crown', category: 'business', label: 'Crown',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 19h20v2H2zM2 7l5 5 5-7 5 7 5-5v10H2V7z"/>
    </svg>`
  },
  {
    id: 'star', category: 'business', label: 'Star',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`
  },
  {
    id: 'diamond', category: 'business', label: 'Diamond',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3h12l4 6-10 12L2 9z" opacity="0.8"/>
      <path d="M2 9h20M6 3l4 6M18 3l-4 6" stroke="currentColor" stroke-width="1" opacity="0.5" fill="none"/>
    </svg>`
  },
  {
    id: 'briefcase', category: 'business', label: 'Briefcase',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="2"/>
      <line x1="2" y1="14" x2="22" y2="14" stroke="currentColor" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'chart', category: 'business', label: 'Chart',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="2" y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'globe', category: 'business', label: 'Globe',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10A15.3 15.3 0 018 12a15.3 15.3 0 014-10z" stroke="currentColor" stroke-width="2"/>
    </svg>`
  }
];

/* ============================================================
   2. TEMPLATE PRESETS
   ============================================================ */
const TEMPLATES = [
  {
    name: 'Modern Tech',
    category: 'Tech',
    icon: 'rocket',
    font: 'Poppins',
    iconColor: '#4F46E5',
    textColor: '#0F172A',
    sloganColor: '#6366F1',
    bgColor: '#FFFFFF',
    bgColor2: '#EEF2FF',
    gradient: false,
    iconSize: 80, textSize: 32, sloganSize: 14,
    spacing: 10, borderRadius: 20, layout: 'column',
    brand: 'TechVision', slogan: 'Future is Now'
  },
  {
    name: 'Coffee Shop',
    category: 'Food',
    icon: 'coffee',
    font: 'Playfair Display',
    iconColor: '#92400E',
    textColor: '#1C1917',
    sloganColor: '#78350F',
    bgColor: '#FFFBEB',
    bgColor2: '#FEF3C7',
    gradient: true,
    iconSize: 72, textSize: 28, sloganSize: 13,
    spacing: 8, borderRadius: 16, layout: 'column',
    brand: 'BrewHouse', slogan: 'Sip. Savor. Smile.'
  },
  {
    name: 'Gaming Squad',
    category: 'Gaming',
    icon: 'gamepad',
    font: 'Bebas Neue',
    iconColor: '#10B981',
    textColor: '#ECFDF5',
    sloganColor: '#6EE7B7',
    bgColor: '#064E3B',
    bgColor2: '#065F46',
    gradient: true,
    iconSize: 88, textSize: 38, sloganSize: 14,
    spacing: 12, borderRadius: 12, layout: 'column',
    brand: 'NEXUS GG', slogan: 'Play. Win. Dominate.'
  },
  {
    name: 'Fashion Brand',
    category: 'Fashion',
    icon: 'crown',
    font: 'Montserrat',
    iconColor: '#BE185D',
    textColor: '#831843',
    sloganColor: '#BE185D',
    bgColor: '#FFF1F2',
    bgColor2: '#FFE4E6',
    gradient: false,
    iconSize: 70, textSize: 30, sloganSize: 12,
    spacing: 8, borderRadius: 0, layout: 'column',
    brand: 'LUMINA', slogan: 'Wear Your Story'
  },
  {
    name: 'Restaurant',
    category: 'Food',
    icon: 'pizza',
    font: 'Lobster',
    iconColor: '#DC2626',
    textColor: '#1C1917',
    sloganColor: '#B91C1C',
    bgColor: '#FFFBEB',
    bgColor2: '#FEF3C7',
    gradient: false,
    iconSize: 90, textSize: 36, sloganSize: 14,
    spacing: 6, borderRadius: 50, layout: 'column',
    brand: 'Bella Cucina', slogan: 'Taste of Italia'
  },
  {
    name: 'Podcast',
    category: 'Media',
    icon: 'mic',
    font: 'Anton',
    iconColor: '#7C3AED',
    textColor: '#F5F3FF',
    sloganColor: '#C4B5FD',
    bgColor: '#2E1065',
    bgColor2: '#3B0764',
    gradient: true,
    iconSize: 80, textSize: 34, sloganSize: 13,
    spacing: 10, borderRadius: 16, layout: 'column',
    brand: 'CASTIFY', slogan: 'Your Voice Matters'
  },
  {
    name: 'Fitness Gym',
    category: 'Fitness',
    icon: 'dumbbell',
    font: 'Oswald',
    iconColor: '#F59E0B',
    textColor: '#FFFBEB',
    sloganColor: '#FCD34D',
    bgColor: '#1C1917',
    bgColor2: '#292524',
    gradient: false,
    iconSize: 76, textSize: 36, sloganSize: 13,
    spacing: 8, borderRadius: 10, layout: 'column',
    brand: 'IRON PEAK', slogan: 'Train. Transform. Triumph.'
  },
  {
    name: 'Startup',
    category: 'Business',
    icon: 'diamond',
    font: 'Inter',
    iconColor: '#0EA5E9',
    textColor: '#0F172A',
    sloganColor: '#0EA5E9',
    bgColor: '#F0F9FF',
    bgColor2: '#E0F2FE',
    gradient: true,
    iconSize: 72, textSize: 30, sloganSize: 13,
    spacing: 10, borderRadius: 24, layout: 'row',
    brand: 'LaunchPad', slogan: 'Build. Scale. Lead.'
  }
];

/* ============================================================
   3. COLOR PALETTES
   ============================================================ */
const PALETTES = [
  { name: 'Ocean',    icon: '#0EA5E9', text: '#0C4A6E', bg: '#F0F9FF', slogan: '#0284C7' },
  { name: 'Violet',   icon: '#7C3AED', text: '#2E1065', bg: '#F5F3FF', slogan: '#6D28D9' },
  { name: 'Rose',     icon: '#E11D48', text: '#881337', bg: '#FFF1F2', slogan: '#BE123C' },
  { name: 'Emerald',  icon: '#059669', text: '#064E3B', bg: '#ECFDF5', slogan: '#047857' },
  { name: 'Amber',    icon: '#D97706', text: '#451A03', bg: '#FFFBEB', slogan: '#B45309' },
  { name: 'Indigo',   icon: '#4F46E5', text: '#0F172A', bg: '#FFFFFF', slogan: '#6366F1' },
  { name: 'Dark Pro', icon: '#10B981', text: '#F1F5F9', bg: '#0F172A', slogan: '#6EE7B7' },
  { name: 'Sunset',   icon: '#F97316', text: '#431407', bg: '#FFF7ED', slogan: '#EA580C' }
];

/* ============================================================
   4. STATE / DEFAULT SETTINGS
   ============================================================ */
const DEFAULT_STATE = {
  brand:        'LogoCraft',
  slogan:       'Design Your Vision',
  font:         'Poppins',
  icon:         'star',
  iconColor:    '#4F46E5',
  textColor:    '#0F172A',
  sloganColor:  '#6366F1',
  bgColor:      '#FFFFFF',
  bgColor2:     '#6366F1',
  gradient:     false,
  transparent:  false,
  iconSize:     80,
  textSize:     32,
  sloganSize:   14,
  spacing:      8,
  borderRadius: 20,
  padding:      40,
  iconRotation: 0,
  layout:       'column'
};

let state = { ...DEFAULT_STATE };

/* ============================================================
   5. HISTORY (Undo / Redo)
   ============================================================ */
let history    = [];
let historyIdx = -1;
const MAX_HIST = 50;

function saveHistory() {
  // Remove future states if we're mid-history
  history = history.slice(0, historyIdx + 1);
  history.push(JSON.stringify(state));
  if (history.length > MAX_HIST) history.shift();
  historyIdx = history.length - 1;
  updateUndoRedoButtons();
}

function undo() {
  if (historyIdx <= 0) return;
  historyIdx--;
  state = JSON.parse(history[historyIdx]);
  applyStateToUI();
  updatePreview();
  updateUndoRedoButtons();
}

function redo() {
  if (historyIdx >= history.length - 1) return;
  historyIdx++;
  state = JSON.parse(history[historyIdx]);
  applyStateToUI();
  updatePreview();
  updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  if (btnUndo) btnUndo.disabled = historyIdx <= 0;
  if (btnRedo) btnRedo.disabled = historyIdx >= history.length - 1;
}

/* ============================================================
   6. LOCALSTORAGE (Save / Load Draft)
   ============================================================ */
function saveDraft() {
  localStorage.setItem('logocraft_draft', JSON.stringify(state));
  // Show save indicator
  const ind = document.getElementById('saveIndicator');
  if (ind) {
    ind.style.color = 'var(--success)';
    setTimeout(() => { ind.style.color = ''; }, 1200);
  }
}

function loadDraft() {
  const saved = localStorage.getItem('logocraft_draft');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...DEFAULT_STATE, ...parsed };
      return true;
    } catch (e) { return false; }
  }
  return false;
}

/* ============================================================
   7. DARK MODE
   ============================================================ */
function initDarkMode() {
  const saved = localStorage.getItem('logocraft_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('logocraft_theme', next);
}

/* ============================================================
   8. ICON HELPERS
   ============================================================ */
function getIconById(id) {
  return ICONS.find(i => i.id === id) || ICONS[0];
}

function renderIconSvg(iconId, size, color, rotation) {
  const icon = getIconById(iconId);
  let svgStr = icon.svg;
  // Insert width/height/style into the outer <svg> tag
  svgStr = svgStr.replace(
    /<svg /,
    `<svg width="${size}" height="${size}" style="color:${color};transform:rotate(${rotation}deg);transition:transform .25s ease;" `
  );
  return svgStr;
}

/* ============================================================
   9. LIVE PREVIEW UPDATE
   ============================================================ */
function updatePreview() {
  const preview    = document.getElementById('logoPreview');
  const iconWrap   = document.getElementById('logoIconWrap');
  const textWrap   = document.getElementById('logoTextWrap');
  const brandEl    = document.getElementById('logoBrandName');
  const sloganEl   = document.getElementById('logoSlogan');
  const stage      = document.getElementById('previewStage');
  const transparentHint = document.getElementById('transparentHint');

  if (!preview || !stage) return;

  // --- Background ---
  if (state.transparent) {
    stage.style.background = 'transparent';
    stage.classList.add('transparent-mode');
    if (transparentHint) transparentHint.classList.remove('hidden');
  } else {
    stage.classList.remove('transparent-mode');
    if (transparentHint) transparentHint.classList.add('hidden');
    if (state.gradient) {
      stage.style.background = `linear-gradient(135deg, ${state.bgColor}, ${state.bgColor2})`;
    } else {
      stage.style.background = state.bgColor;
    }
  }

  // --- Border Radius ---
  stage.style.borderRadius = state.borderRadius + 'px';

  // --- Layout direction ---
  preview.style.flexDirection = state.layout;
  if (state.layout === 'row' || state.layout === 'row-reverse') {
    preview.style.alignItems = 'center';
    textWrap.style.alignItems = 'flex-start';
    textWrap.style.textAlign  = 'left';
  } else {
    preview.style.alignItems = 'center';
    textWrap.style.alignItems = 'center';
    textWrap.style.textAlign  = 'center';
  }

  // --- Gap / Spacing ---
  preview.style.gap = state.spacing + 'px';
  preview.style.padding = state.padding + 'px';

  // --- Icon ---
  iconWrap.innerHTML = renderIconSvg(state.icon, state.iconSize, state.iconColor, state.iconRotation);

  // --- Brand Name ---
  brandEl.style.fontFamily = `'${state.font}', sans-serif`;
  brandEl.style.fontSize   = state.textSize + 'px';
  brandEl.style.color      = state.textColor;
  brandEl.textContent      = state.brand || 'LogoCraft';

  // --- Slogan ---
  sloganEl.style.fontFamily = `'${state.font}', sans-serif`;
  sloganEl.style.fontSize   = state.sloganSize + 'px';
  sloganEl.style.color      = state.sloganColor;
  sloganEl.textContent      = state.slogan || '';
  sloganEl.style.display    = state.slogan ? 'block' : 'none';

  // --- Preview dimension label ---
  const dimEl = document.getElementById('previewDimension');
  if (dimEl) {
    dimEl.textContent = `${stage.offsetWidth} × ${stage.offsetHeight} px`;
  }
}

/* ============================================================
   10. APPLY STATE TO UI (for undo/redo/loadDraft)
   ============================================================ */
function applyStateToUI() {
  // Text
  setVal('brandName',  state.brand);
  setVal('brandSlogan', state.slogan);

  // Font
  setVal('fontFamily', state.font);

  // Colors
  setVal('iconColor',   state.iconColor);
  setVal('textColor',   state.textColor);
  setVal('sloganColor', state.sloganColor);
  setVal('bgColor',     state.bgColor);
  setVal('bgColor2',    state.bgColor2);
  updateHex('iconColor',   state.iconColor);
  updateHex('textColor',   state.textColor);
  updateHex('sloganColor', state.sloganColor);
  updateHex('bgColor',     state.bgColor);
  updateHex('bgColor2',    state.bgColor2);

  // Toggles
  setChecked('transparentBg', state.transparent);
  setChecked('gradientBg',    state.gradient);
  document.getElementById('gradientSecondWrap')?.classList.toggle('hidden', !state.gradient);

  // Sliders
  setVal('iconSize',      state.iconSize);
  setVal('textSize',      state.textSize);
  setVal('sloganSize',    state.sloganSize);
  setVal('spacing',       state.spacing);
  setVal('borderRadius',  state.borderRadius);
  setVal('canvasPadding', state.padding);
  setVal('iconRotation',  state.iconRotation);

  updateSliderLabel('iconSizeVal',     state.iconSize,     'px');
  updateSliderLabel('textSizeVal',     state.textSize,     'px');
  updateSliderLabel('sloganSizeVal',   state.sloganSize,   'px');
  updateSliderLabel('spacingVal',      state.spacing,      'px');
  updateSliderLabel('borderRadiusVal', state.borderRadius, 'px');
  updateSliderLabel('paddingVal',      state.padding,      'px');
  updateSliderLabel('iconRotationVal', state.iconRotation, '°');

  // Layout buttons
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layout === state.layout);
  });

  // Icon selection
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.icon === state.icon);
  });
}

// Helpers
function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}
function setChecked(id, val) {
  const el = document.getElementById(id);
  if (el) el.checked = val;
}
function updateHex(inputId, val) {
  const hexEl = document.getElementById(inputId + 'Hex');
  if (hexEl) hexEl.textContent = val.toUpperCase();
}
function updateSliderLabel(labelId, val, unit) {
  const el = document.getElementById(labelId);
  if (el) el.textContent = val + unit;
}

/* ============================================================
   11. BUILD ICON GRID
   ============================================================ */
const CATEGORIES = ['all', 'tech', 'food', 'shop', 'camera', 'gaming', 'education', 'fitness', 'music', 'travel', 'business'];
let activeCategory = 'all';

function buildIconCategories() {
  const container = document.getElementById('iconCategories');
  if (!container) return;
  container.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === activeCategory ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.cat = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildIconGrid();
    });
    container.appendChild(btn);
  });
}

function buildIconGrid() {
  const container = document.getElementById('iconGrid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = activeCategory === 'all'
    ? ICONS
    : ICONS.filter(ic => ic.category === activeCategory);

  filtered.forEach(ic => {
    const btn = document.createElement('button');
    btn.className = 'icon-btn' + (ic.id === state.icon ? ' selected' : '');
    btn.dataset.icon = ic.id;
    btn.title = ic.label;
    btn.setAttribute('aria-label', ic.label);

    // Render small preview
    let smallSvg = ic.svg.replace(
      /<svg /,
      `<svg width="22" height="22" style="color:var(--text-secondary)" `
    );
    btn.innerHTML = smallSvg;

    btn.addEventListener('click', () => {
      state.icon = ic.id;
      document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      updatePreview();
      saveHistory();
      saveDraft();
    });

    container.appendChild(btn);
  });
}

/* ============================================================
   12. BUILD TEMPLATES
   ============================================================ */
function buildTemplates() {
  const grid = document.getElementById('templatesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  TEMPLATES.forEach(tpl => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.title = `Klik untuk pakai template ${tpl.name}`;

    // Small logo preview inside card
    const previewLogo = document.createElement('div');
    previewLogo.className = 'template-preview-logo';
    if (tpl.gradient) {
      previewLogo.style.background = `linear-gradient(135deg, ${tpl.bgColor}, ${tpl.bgColor2})`;
    } else {
      previewLogo.style.background = tpl.bgColor;
    }
    previewLogo.style.borderRadius = Math.min(tpl.borderRadius, 16) + 'px';

    const iconData = getIconById(tpl.icon);
    let miniSvg = iconData.svg.replace(
      /<svg /,
      `<svg width="28" height="28" style="color:${tpl.iconColor}" `
    );
    previewLogo.innerHTML = miniSvg;

    const nameSpan = document.createElement('span');
    nameSpan.style.fontFamily = `'${tpl.font}', sans-serif`;
    nameSpan.style.fontSize   = '9px';
    nameSpan.style.fontWeight = '700';
    nameSpan.style.color      = tpl.textColor;
    nameSpan.style.lineHeight = '1';
    nameSpan.textContent      = tpl.brand;
    previewLogo.appendChild(nameSpan);

    card.appendChild(previewLogo);

    const tplName = document.createElement('span');
    tplName.className   = 'template-name';
    tplName.textContent = tpl.name;
    card.appendChild(tplName);

    const tplCat = document.createElement('span');
    tplCat.className   = 'template-cat';
    tplCat.textContent = tpl.category;
    card.appendChild(tplCat);

    card.addEventListener('click', () => applyTemplate(tpl));
    grid.appendChild(card);
  });
}

function applyTemplate(tpl) {
  state = {
    ...state,
    brand:        tpl.brand,
    slogan:       tpl.slogan,
    font:         tpl.font,
    icon:         tpl.icon,
    iconColor:    tpl.iconColor,
    textColor:    tpl.textColor,
    sloganColor:  tpl.sloganColor,
    bgColor:      tpl.bgColor,
    bgColor2:     tpl.bgColor2 || '#6366F1',
    gradient:     tpl.gradient,
    transparent:  false,
    iconSize:     tpl.iconSize,
    textSize:     tpl.textSize,
    sloganSize:   tpl.sloganSize,
    spacing:      tpl.spacing,
    borderRadius: tpl.borderRadius,
    layout:       tpl.layout,
    padding:      40
  };
  applyStateToUI();
  updatePreview();
  saveHistory();
  saveDraft();
  showToast(`✨ Template "${tpl.name}" diterapkan!`);

  // Scroll to editor
  document.getElementById('editor-section')?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   13. BUILD PALETTES
   ============================================================ */
function buildPalettes() {
  const grid = document.getElementById('paletteGrid');
  if (!grid) return;
  grid.innerHTML = '';

  PALETTES.forEach(pal => {
    const item = document.createElement('div');
    item.className = 'palette-item';
    item.title = pal.name;

    [pal.bg, pal.icon, pal.text].forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'palette-swatch';
      swatch.style.background = color;
      item.appendChild(swatch);
    });

    item.addEventListener('click', () => {
      state.iconColor   = pal.icon;
      state.textColor   = pal.text;
      state.sloganColor = pal.slogan;
      state.bgColor     = pal.bg;
      setVal('iconColor',   pal.icon);
      setVal('textColor',   pal.text);
      setVal('sloganColor', pal.slogan);
      setVal('bgColor',     pal.bg);
      updateHex('iconColor',   pal.icon);
      updateHex('textColor',   pal.text);
      updateHex('sloganColor', pal.slogan);
      updateHex('bgColor',     pal.bg);
      updatePreview();
      saveHistory();
      saveDraft();
      showToast(`🎨 Palet "${pal.name}" diterapkan!`);
    });

    grid.appendChild(item);
  });
}

/* ============================================================
   14. RANDOMIZE
   ============================================================ */
function randomize() {
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  const randColor = () => '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

  state.icon         = rand(ICONS).id;
  state.font         = rand(['Poppins','Montserrat','Bebas Neue','Oswald','Inter','Lobster','Playfair Display','Anton']);
  state.iconColor    = randColor();
  state.textColor    = randColor();
  state.sloganColor  = randColor();
  state.bgColor      = randColor();
  state.bgColor2     = randColor();
  state.gradient     = Math.random() > 0.5;
  state.borderRadius = Math.floor(Math.random() * 80);
  state.iconSize     = Math.floor(Math.random() * 100) + 50;
  state.textSize     = Math.floor(Math.random() * 30) + 20;
  state.spacing      = Math.floor(Math.random() * 20);
  state.layout       = rand(['column', 'row', 'row-reverse']);
  state.iconRotation = rand([0, 0, 0, 45, 90, 180]);

  applyStateToUI();
  updatePreview();
  saveHistory();
  saveDraft();
  showToast('🎲 Logo berhasil di-random!');
}

/* ============================================================
   15. RESET
   ============================================================ */
function resetAll() {
  state = { ...DEFAULT_STATE };
  applyStateToUI();
  updatePreview();
  saveHistory();
  saveDraft();
  showToast('🔄 Reset ke default!');
}

/* ============================================================
   16. DOWNLOAD PNG (html2canvas)
   ============================================================ */
async function downloadPng() {
  const stage = document.getElementById('previewStage');
  if (!stage) return;

  showToast('⏳ Memproses PNG...');

  try {
    // Scale up for HD quality
    const scale = 3;
    const canvas = await html2canvas(stage, {
      scale:           scale,
      useCORS:         true,
      backgroundColor: state.transparent ? null : state.bgColor,
      logging:         false,
      allowTaint:      true
    });

    const link       = document.createElement('a');
    const filename   = `logo-${(state.brand || 'logo').toLowerCase().replace(/\s+/g, '-')}.png`;
    link.download    = filename;
    link.href        = canvas.toDataURL('image/png', 1.0);
    link.click();

    showToast(`✅ ${filename} berhasil diunduh!`);
  } catch (err) {
    console.error('Download PNG error:', err);
    showToast('❌ Gagal mengunduh. Coba lagi.');
  }
}

/* ============================================================
   17. EXPORT SVG
   ============================================================ */
function exportSvg() {
  const icon = getIconById(state.icon);

  // Calculate sizes based on layout
  const totalW = state.padding * 2 + Math.max(state.iconSize, state.textSize * state.brand.length * 0.6);
  const totalH = state.padding * 2 + state.iconSize + state.spacing + state.textSize + (state.slogan ? state.spacing * 0.5 + state.sloganSize : 0);

  const W = Math.max(300, state.layout === 'column' ? Math.max(state.iconSize * 2, state.textSize * (state.brand.length || 1) * 0.65) + state.padding * 2 : 400);
  const H = Math.max(200, totalH);

  // Build SVG content
  let bgContent = '';
  if (state.gradient) {
    bgContent = `
      <defs>
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${state.bgColor}"/>
          <stop offset="100%" stop-color="${state.bgColor2}"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" rx="${state.borderRadius}" fill="url(#bg-grad)"/>`;
  } else if (!state.transparent) {
    bgContent = `<rect width="${W}" height="${H}" rx="${state.borderRadius}" fill="${state.bgColor}"/>`;
  } else {
    bgContent = `<rect width="${W}" height="${H}" rx="${state.borderRadius}" fill="none"/>`;
  }

  // Build icon SVG string (clean it)
  let iconClean = icon.svg
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '');

  const cx = W / 2;
  const cy = state.padding;

  let content = '';
  if (state.layout === 'column') {
    const iconX = cx - state.iconSize / 2;
    const iconY = cy;
    const textY = iconY + state.iconSize + state.spacing + state.textSize * 0.8;
    const sloganY = textY + state.spacing * 0.5 + state.sloganSize;

    content = `
      <g transform="translate(${iconX}, ${iconY}) rotate(${state.iconRotation}, ${state.iconSize/2}, ${state.iconSize/2})">
        <svg width="${state.iconSize}" height="${state.iconSize}" viewBox="0 0 24 24" style="color:${state.iconColor}">
          <g fill="${state.iconColor}" stroke="${state.iconColor}">${iconClean}</g>
        </svg>
      </g>
      <text x="${cx}" y="${textY}" font-family="${state.font}, sans-serif" font-size="${state.textSize}" font-weight="700" fill="${state.textColor}" text-anchor="middle">${escapeXml(state.brand)}</text>
      ${state.slogan ? `<text x="${cx}" y="${sloganY}" font-family="${state.font}, sans-serif" font-size="${state.sloganSize}" fill="${state.sloganColor}" text-anchor="middle">${escapeXml(state.slogan)}</text>` : ''}`;
  } else {
    // Row layout
    const totalRowW = state.iconSize + state.spacing + state.textSize * (state.brand.length * 0.6);
    const startX    = (W - totalRowW) / 2;
    const iconY2    = H / 2 - state.iconSize / 2;
    const textX2    = startX + state.iconSize + state.spacing;
    const textY2    = H / 2 + state.textSize * 0.3;
    const sloganY2  = textY2 + state.sloganSize + 4;

    content = `
      <g transform="translate(${startX}, ${iconY2}) rotate(${state.iconRotation}, ${state.iconSize/2}, ${state.iconSize/2})">
        <svg width="${state.iconSize}" height="${state.iconSize}" viewBox="0 0 24 24">
          <g fill="${state.iconColor}" stroke="${state.iconColor}">${iconClean}</g>
        </svg>
      </g>
      <text x="${textX2}" y="${textY2}" font-family="${state.font}, sans-serif" font-size="${state.textSize}" font-weight="700" fill="${state.textColor}">${escapeXml(state.brand)}</text>
      ${state.slogan ? `<text x="${textX2}" y="${sloganY2}" font-family="${state.font}, sans-serif" font-size="${state.sloganSize}" fill="${state.sloganColor}">${escapeXml(state.slogan)}</text>` : ''}`;
  }

  const svgOutput = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  ${bgContent}
  ${content}
</svg>`;

  const blob     = new Blob([svgOutput], { type: 'image/svg+xml' });
  const url      = URL.createObjectURL(blob);
  const link     = document.createElement('a');
  const filename = `logo-${(state.brand || 'logo').toLowerCase().replace(/\s+/g, '-')}.svg`;
  link.download  = filename;
  link.href      = url;
  link.click();
  URL.revokeObjectURL(url);

  showToast(`✅ ${filename} berhasil diunduh!`);
}

function escapeXml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ============================================================
   18. TOAST NOTIFICATION
   ============================================================ */
let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ============================================================
   19. NAVBAR (Hamburger / Scroll Effect)
   ============================================================ */
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // Scroll effect on navbar
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

/* ============================================================
   20. ACCORDION TOGGLE
   ============================================================ */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parentId = header.dataset.target;
      const acc      = document.getElementById(parentId);
      if (acc) acc.classList.toggle('open');
    });
  });
}

/* ============================================================
   21. BIND ALL CONTROLS
   ============================================================ */
function bindControls() {

  // ---- Brand Name ----
  document.getElementById('brandName')?.addEventListener('input', (e) => {
    state.brand = e.target.value;
    updatePreview();
    scheduleSave();
  });

  // ---- Slogan ----
  document.getElementById('brandSlogan')?.addEventListener('input', (e) => {
    state.slogan = e.target.value;
    updatePreview();
    scheduleSave();
  });

  // ---- Font ----
  document.getElementById('fontFamily')?.addEventListener('change', (e) => {
    state.font = e.target.value;
    updatePreview();
    saveHistory();
    saveDraft();
  });

  // ---- Color Pickers ----
  const colorBindings = [
    { id: 'iconColor',   stateKey: 'iconColor'   },
    { id: 'textColor',   stateKey: 'textColor'   },
    { id: 'sloganColor', stateKey: 'sloganColor' },
    { id: 'bgColor',     stateKey: 'bgColor'     },
    { id: 'bgColor2',    stateKey: 'bgColor2'    },
  ];

  colorBindings.forEach(({ id, stateKey }) => {
    document.getElementById(id)?.addEventListener('input', (e) => {
      state[stateKey] = e.target.value;
      updateHex(id, e.target.value);
      updatePreview();
      scheduleSave();
    });
    document.getElementById(id)?.addEventListener('change', () => {
      saveHistory();
      saveDraft();
    });
  });

  // ---- Transparent BG ----
  document.getElementById('transparentBg')?.addEventListener('change', (e) => {
    state.transparent = e.target.checked;
    updatePreview();
    saveHistory();
    saveDraft();
  });

  // ---- Gradient BG ----
  document.getElementById('gradientBg')?.addEventListener('change', (e) => {
    state.gradient = e.target.checked;
    const wrap = document.getElementById('gradientSecondWrap');
    if (wrap) wrap.classList.toggle('hidden', !state.gradient);
    updatePreview();
    saveHistory();
    saveDraft();
  });

  // ---- Sliders ----
  const sliderBindings = [
    { id: 'iconSize',      stateKey: 'iconSize',     labelId: 'iconSizeVal',     unit: 'px' },
    { id: 'textSize',      stateKey: 'textSize',     labelId: 'textSizeVal',     unit: 'px' },
    { id: 'sloganSize',    stateKey: 'sloganSize',   labelId: 'sloganSizeVal',   unit: 'px' },
    { id: 'spacing',       stateKey: 'spacing',      labelId: 'spacingVal',      unit: 'px' },
    { id: 'borderRadius',  stateKey: 'borderRadius', labelId: 'borderRadiusVal', unit: 'px' },
    { id: 'canvasPadding', stateKey: 'padding',      labelId: 'paddingVal',      unit: 'px' },
    { id: 'iconRotation',  stateKey: 'iconRotation', labelId: 'iconRotationVal', unit: '°'  },
  ];

  sliderBindings.forEach(({ id, stateKey, labelId, unit }) => {
    document.getElementById(id)?.addEventListener('input', (e) => {
      state[stateKey] = parseInt(e.target.value, 10);
      updateSliderLabel(labelId, state[stateKey], unit);
      updatePreview();
      scheduleSave();
    });
    document.getElementById(id)?.addEventListener('change', () => {
      saveHistory();
      saveDraft();
    });
  });

  // ---- Layout Buttons ----
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.layout = btn.dataset.layout;
      document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePreview();
      saveHistory();
      saveDraft();
    });
  });

  // ---- Action Buttons ----
  document.getElementById('btnRandomize')?.addEventListener('click', randomize);
  document.getElementById('btnReset')?.addEventListener('click', resetAll);
  document.getElementById('btnDownloadPng')?.addEventListener('click', downloadPng);
  document.getElementById('btnDownloadSvg')?.addEventListener('click', exportSvg);

  // ---- Undo / Redo ----
  document.getElementById('btnUndo')?.addEventListener('click', undo);
  document.getElementById('btnRedo')?.addEventListener('click', redo);

  // ---- Copy Brand Name ----
  document.getElementById('btnCopyBrand')?.addEventListener('click', () => {
    const val = state.brand;
    if (!val) return;
    navigator.clipboard.writeText(val)
      .then(() => showToast('📋 Nama brand disalin!'))
      .catch(() => showToast('❌ Gagal menyalin'));
  });

  // ---- Dark Mode ----
  document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);

  // ---- Keyboard Shortcuts ----
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
  });
}

/* ============================================================
   22. DEBOUNCE SAVE
   ============================================================ */
let saveTimer = null;
function scheduleSave() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveHistory();
    saveDraft();
  }, 600);
}

/* ============================================================
   23. INIT (Main Entry Point)
   ============================================================ */
function init() {
  // 1. Dark mode
  initDarkMode();

  // 2. Load draft from localStorage
  const hasDraft = loadDraft();

  // 3. Build static UI components
  buildIconCategories();
  buildIconGrid();
  buildTemplates();
  buildPalettes();

  // 4. Init interactions
  initNavbar();
  initAccordions();
  bindControls();

  // 5. Apply state to UI form elements
  applyStateToUI();

  // 6. Initial preview render
  updatePreview();

  // 7. Save initial state to history
  saveHistory();

  // 8. Toast if draft loaded
  if (hasDraft) {
    setTimeout(() => showToast('📂 Draft terakhir dimuat!'), 800);
  }

  // 9. Update dimension label on resize
  window.addEventListener('resize', () => {
    updatePreview();
  });

  // 10. Animate elements into view (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.template-card, .feature-card').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

  console.log('%c🎨 LogoCraft loaded!', 'color:#4F46E5;font-size:16px;font-weight:bold;');
  console.log('%cKetik `state` di console untuk melihat state saat ini.', 'color:#6366F1;');
}

// Expose state globally for debugging
window.logocraft_state = () => console.log(state);

// Boot
document.addEventListener('DOMContentLoaded', init);
