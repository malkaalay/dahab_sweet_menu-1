
const WHATSAPP_NUMBER = "+972569896990";



const products = [
  /* --- ميلك شيك --- */
  {
    id: 1,
    name: "ميلك شيك شوكولاتة فاخر",
    category: "milkshake",
    price: "15 ₪",
    image: "images/milkshake-chocolate.jpg",
    description: "ميلك شيك غني بالشوكولاتة البلجيكية مع كريمة مخفوقة وتوبينج فاخر",
    featured: true,
    emoji: "🍫"
  },
  {
    id: 2,
    name: "ميلك شيك فراولة",
    category: "milkshake",
    price: "14 ₪",
    image: "images/milkshake-strawberry.jpg",
    description: "ميلك شيك طازج بالفراولة الطبيعية مع آيس كريم فانيليا",
    featured: false,
    emoji: "🍓"
  },
  {
    id: 3,
    name: "ميلك شيك مانجو",
    category: "milkshake",
    price: "14 ₪",
    image: "images/milkshake-mango.jpg",
    description: "ميلك شيك مانجو الاستوائي الطازج بنكهة لا تُقاوم",
    featured: false,
    emoji: "🥭"
  },
  {
    id: 4,
    name: "ميلك شيك أوريو",
    category: "milkshake",
    price: "16 ₪",
    image: "images/milkshake-oreo.jpg",
    description: "ميلك شيك الأوريو الكريمي مع قطع بسكويت ومربى شوكولاتة",
    featured: true,
    emoji: "⚫"
  },

  /* --- وافل --- */
  {
    id: 5,
    name: "وافل بالنوتيلا",
    category: "waffle",
    price: "18 ₪",
    image: "images/waffle-nutella.jpg",
    description: "وافل هش ومقرمش مغطى بالنوتيلا وآيس كريم الفانيليا وقطع الفستق",
    featured: true,
    emoji: "🧇"
  },
  {
    id: 6,
    name: "وافل فراولة وكريمة",
    category: "waffle",
    price: "17 ₪",
    image: "images/waffle-strawberry.jpg",
    description: "وافل طازج مع كريمة مخفوقة وفراولة طازجة وصلصة الفراولة",
    featured: false,
    emoji: "🧇"
  },

  /* --- كريب --- */
  {
    id: 7,
    name: "كريب شوكولاتة وموز",
    category: "crepe",
    price: "16 ₪",
    image: "images/crepe-choco-banana.jpg",
    description: "كريب رفيع وهش بالشوكولاتة والموز الطازج ورشة السكر البودرة",
    featured: false,
    emoji: "🥞"
  },
  {
    id: 8,
    name: "كريب لوتس",
    category: "crepe",
    price: "18 ₪",
    image: "images/crepe-lotus.jpg",
    description: "كريب ذهبي مع كريمة اللوتس وبسكويت كامل وآيس كريم فانيليا",
    featured: true,
    emoji: "🥞"
  },

  /* --- بان كيك --- */
  {
    id: 9,
    name: "بان كيك العسل والزبدة",
    category: "pancake",
    price: "15 ₪",
    image: "images/pancake-honey.jpg",
    description: "بان كيك طري وسميك مع زبدة طبيعية وعسل ذهبي",
    featured: false,
    emoji: "🥞"
  },
  {
    id: 10,
    name: "بان كيك بلوبيري",
    category: "pancake",
    price: "17 ₪",
    image: "images/pancake-blueberry.jpg",
    description: "بان كيك أمريكي بحبات البلوبيري الطازجة وصلصة التوت الأحمر",
    featured: false,
    emoji: "🫐"
  },

  /* --- آيس كريم --- */
  {
    id: 11,
    name: "كوب آيس كريم مشكل",
    category: "icecream",
    price: "12 ₪",
    image: "images/icecream-mix.jpg",
    description: "كوب متنوع من نكهات آيس كريم فاخرة مع توبينج من اختيارك",
    featured: false,
    emoji: "🍨"
  },
  {
    id: 12,
    name: "سنداي الشوكولاتة",
    category: "icecream",
    price: "16 ₪",
    image: "images/icecream-sundae.jpg",
    description: "آيس كريم فانيليا فاخر مع صلصة الشوكولاتة الساخنة والمكسرات المحمصة",
    featured: true,
    emoji: "🍧"
  },

  /* --- كيك --- */
  {
    id: 13,
    name: "تشيز كيك العسل",
    category: "cake",
    price: "25 ₪",
    image: "images/cake-cheesecake.jpg",
    description: "تشيز كيك كريمي بقاعدة البسكويت مع صلصة العسل والمانجو الطازجة",
    featured: true,
    emoji: "🍰"
  },
  {
    id: 14,
    name: "كيك الشوكولاتة الفاخر",
    category: "cake",
    price: "22 ₪",
    image: "images/cake-chocolate.jpg",
    description: "كيك شوكولاتة بلجيكية غنية مع طبقات كريمة الشوكولاتة",
    featured: false,
    emoji: "🎂"
  },

  /* --- مشروبات ساخنة --- */
  {
    id: 15,
    name: "قهوة موكا",
    category: "hot",
    price: "12 ₪",
    image: "images/hot-mocha.jpg",
    description: "قهوة موكا فاخرة مع الشوكولاتة والحليب المبخر",
    featured: false,
    emoji: "☕"
  },
  {
    id: 16,
    name: "كاكاو ساخن بالكريمة",
    category: "hot",
    price: "11 ₪",
    image: "images/hot-cocoa.jpg",
    description: "كاكاو دافئ غني بالشوكولاتة مع كريمة مخفوقة",
    featured: false,
    emoji: "🍫"
  },

  /* --- مشروبات باردة --- */
  {
    id: 17,
    name: "آيس ماتشا لاتيه",
    category: "cold",
    price: "14 ₪",
    image: "images/cold-matcha.jpg",
    description: "ماتشا ياباني فاخر مع الحليب البارد والثلج وشيرة الفانيليا",
    featured: false,
    emoji: "🍵"
  },
  {
    id: 18,
    name: "فريدو إسبريسو",
    category: "cold",
    price: "13 ₪",
    image: "images/cold-freddo.jpg",
    description: "إسبريسو مخفوق ومثلج مع الحليب البارد الكريمي",
    featured: false,
    emoji: "🧊"
  },

  /* --- عروض خاصة --- */
  {
    id: 19,
    name: "عرض الثنائي — وافل + ميلك شيك",
    category: "offers",
    price: "28 ₪",
    image: "images/offer-duo.jpg",
    description: "وافل بالنوتيلا + ميلك شيك من اختيارك بسعر خاص",
    featured: true,
    emoji: "🎁"
  },
  {
    id: 20,
    name: "عرض العائلة — 4 أصناف",
    category: "offers",
    price: "55 ₪",
    image: "images/offer-family.jpg",
    description: "اختر 4 أصناف من المنيو كاملاً بسعر مخفوض خاص للعائلة",
    featured: false,
    emoji: "👨‍👩‍👧‍👦"
  }
];


const categoryLabels = {
  milkshake: "ميلك شيك",
  waffle:    "وافل",
  crepe:     "كريب",
  pancake:   "بان كيك",
  icecream:  "آيس كريم",
  cake:      "كيك",
  hot:       "مشروبات ساخنة",
  cold:      "مشروبات باردة",
  offers:    "عروض خاصة"
};

/* ============================================================
   STATE
   ============================================================ */
let currentCategory = "all";
let currentSearch   = "";

/* ============================================================
   DOM REFS
   ============================================================ */
const productsGrid    = document.getElementById("productsGrid");
const featuredGrid    = document.getElementById("featuredGrid");
const emptyState      = document.getElementById("emptyState");
const searchInput     = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const modalOverlay    = document.getElementById("modalOverlay");
const modalClose      = document.getElementById("modalClose");
const modalImage      = document.getElementById("modalImage");
const modalCategory   = document.getElementById("modalCategory");
const modalName       = document.getElementById("modalName");
const modalDescription= document.getElementById("modalDescription");
const modalPrice      = document.getElementById("modalPrice");
const modalWhatsapp   = document.getElementById("modalWhatsapp");
const siteHeader      = document.getElementById("siteHeader");
const hamburger       = document.getElementById("hamburger");
const mobileNav       = document.getElementById("mobileNav");
const mobileNavOverlay= document.getElementById("mobileNavOverlay");
const mobileNavClose  = document.getElementById("mobileNavClose");
const backToTop       = document.getElementById("backToTop");

/* ============================================================
   RENDER HELPERS
   ============================================================ */
function buildImageTag(product, heightClass = "") {
  return `
    <div class="product-image-wrap ${heightClass}">
      ${product.image
        ? `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'product-image-placeholder\\'>${product.emoji || "🍬"}</div>'" />`
        : `<div class="product-image-placeholder">${product.emoji || "🍬"}</div>`
      }
      <span class="product-cat-badge">${categoryLabels[product.category] || product.category}</span>
    </div>`;
}

function buildWhatsappLink(product) {
  const msg = encodeURIComponent(`مرحبا Dahab Sweets، أريد طلب: ${product.name}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

/* ============================================================
   RENDER FEATURED
   ============================================================ */
function renderFeatured() {
  const featured = products.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(product => `
    <div class="featured-card reveal-card" data-id="${product.id}">
      <div class="featured-card-image-wrap">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'featured-card-image-placeholder\\'>${product.emoji || "🍬"}</div>'" />`
          : `<div class="featured-card-image-placeholder">${product.emoji || "🍬"}</div>`
        }
        <div class="featured-badge">الأكثر طلباً ★</div>
      </div>
      <div class="featured-card-body">
        <h3 class="featured-card-name">${product.name}</h3>
        <p class="featured-card-description">${product.description}</p>
        <div class="featured-card-footer">
          <span class="featured-card-price">${product.price}</span>
          <button class="featured-card-btn" onclick="openModal(${product.id})">التفاصيل</button>
        </div>
      </div>
    </div>
  `).join("");
  observeRevealElements();
}

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function getFilteredProducts() {
  return products.filter(p => {
    const catMatch = currentCategory === "all" || p.category === currentCategory;
    const search   = currentSearch.trim().toLowerCase();
    const nameMatch = !search || p.name.toLowerCase().includes(search);
    return catMatch && nameMatch;
  });
}

function renderProducts(filtered, animate = true) {
  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";
  productsGrid.innerHTML = filtered.map((product, index) => `
    <div class="product-card${animate ? " filtering-in" : ""}"
         data-id="${product.id}"
         style="transition-delay: ${index * 60}ms"
         onclick="openModal(${product.id})">
      ${buildImageTag(product)}
      <div class="product-body">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <div class="product-actions" onclick="event.stopPropagation()">
            <button class="product-btn-details" onclick="openModal(${product.id})">
              <i class="fa fa-info-circle"></i> التفاصيل
            </button>
            <a class="product-btn-whatsapp" href="${buildWhatsappLink(product)}" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i> اطلب
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  /* Stagger reveal */
  if (animate) {
    requestAnimationFrame(() => {
      const cards = productsGrid.querySelectorAll(".product-card");
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.remove("filtering-in");
          card.classList.add("visible");
        }, i * 60 + 50);
      });
    });
  } else {
    productsGrid.querySelectorAll(".product-card").forEach(c => c.classList.add("visible"));
  }
}

/* ============================================================
   FILTER WITH ANIMATION
   ============================================================ */
function applyFilter() {
  const existing = productsGrid.querySelectorAll(".product-card");
  if (existing.length === 0) {
    renderProducts(getFilteredProducts(), true);
    return;
  }
  existing.forEach(c => c.classList.add("filtering-out"));
  setTimeout(() => {
    renderProducts(getFilteredProducts(), true);
  }, 280);
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (product.image) {
    modalImage.src   = product.image;
    modalImage.alt   = product.name;
    modalImage.style.display = "block";
    modalImage.onerror = () => {
      modalImage.style.display = "none";
      const wrap = modalImage.parentElement;
      const ph = document.createElement("div");
      ph.className = "modal-image-placeholder";
      ph.textContent = product.emoji || "🍬";
      wrap.insertBefore(ph, modalImage);
    };
  } else {
    modalImage.style.display = "none";
    const wrap = modalImage.parentElement;
    let ph = wrap.querySelector(".modal-image-placeholder");
    if (!ph) {
      ph = document.createElement("div");
      ph.className = "modal-image-placeholder";
      wrap.insertBefore(ph, modalImage);
    }
    ph.textContent = product.emoji || "🍬";
  }

  modalCategory.textContent   = categoryLabels[product.category] || product.category;
  modalName.textContent        = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent       = product.price;
  modalWhatsapp.href           = buildWhatsappLink(product);

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

window.openModal = openModal; // expose globally for inline onclick

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* ============================================================
   CATEGORY FILTER BUTTONS
   ============================================================ */
categoryFilters.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  categoryFilters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.category;
  applyFilter();
});

/* ============================================================
   SEARCH
   ============================================================ */
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentSearch = searchInput.value;
    applyFilter();
  }, 320);
});

/* ============================================================
   HEADER SCROLL
   ============================================================ */
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    siteHeader.classList.add("scrolled");
    backToTop.classList.add("visible");
  } else {
    siteHeader.classList.remove("scrolled");
    backToTop.classList.remove("visible");
  }
}, { passive: true });

/* ============================================================
   BACK TO TOP
   ============================================================ */
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   MOBILE NAV
   ============================================================ */
function openMobileNav() {
  hamburger.classList.add("open");
  mobileNav.classList.add("open");
  mobileNavOverlay.classList.add("open");
  mobileNavOverlay.style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  hamburger.classList.remove("open");
  mobileNav.classList.remove("open");
  mobileNavOverlay.classList.remove("open");
  setTimeout(() => { mobileNavOverlay.style.display = "none"; }, 350);
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMobileNav);
mobileNavClose.addEventListener("click", closeMobileNav);
mobileNavOverlay.addEventListener("click", closeMobileNav);

document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", closeMobileNav);
});

/* ============================================================
   SMOOTH SCROLL for nav links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ============================================================
   INTERSECTION OBSERVER — Scroll Reveal
   ============================================================ */
function observeRevealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(
    ".reveal-up, .reveal-section, .reveal-card, .reveal-logo"
  ).forEach(el => observer.observe(el));
}

/* ============================================================
   HERO PARALLAX (subtle)
   ============================================================ */
const heroBg = document.getElementById("heroBg");
window.addEventListener("scroll", () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
  }
}, { passive: true });

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProducts(getFilteredProducts(), false);
  observeRevealElements();
});
