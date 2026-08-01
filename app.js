// BD House Planning & Construction - Application Logic

// House Plans Dataset
const housePlans = [
  {
    id: 'duplex-01',
    title: '4 Bedroom Modern Luxury Duplex',
    category: 'duplex',
    bedrooms: 4,
    bathrooms: 4,
    stories: '2 Stories (Duplex)',
    landAreaSqFt: '1,800 Sq. Ft.',
    plotSize: '2.48 Decimals (1.5 Katha)',
    dimensions: "36' - 0\" X 33' - 0\"",
    budgetBDT: '42 - 48 Lacs BDT',
    tag: 'Popular Choice',
    image: 'assets/images/hero_duplex.png',
    blueprint: 'assets/images/floor_plan.png',
    description: 'Beautiful 4-bedroom duplex featuring 3 master bedrooms, drawing room, spacious dining hall, modern open kitchen, front car porch, and upper floor open terrace balustrade.',
    features: ['Car Porch', 'Open Terrace', '3 Master Beds', 'Guest Bed', 'Modern Kitchen']
  },
  {
    id: 'single-story-01',
    title: '3 Bedroom Stylish Single Story Villa',
    category: 'single-story',
    bedrooms: 3,
    bathrooms: 2,
    stories: 'Single Story',
    landAreaSqFt: '1,200 Sq. Ft.',
    plotSize: '1.65 Decimals (1.0 Katha)',
    dimensions: "34' - 0\" X 28' - 0\"",
    budgetBDT: '18 - 22 Lacs BDT',
    tag: 'Budget Friendly',
    image: 'assets/images/single_story.png',
    blueprint: 'assets/images/floor_plan.png',
    description: 'Compact and elegant 3-bedroom single-story home plan ideal for family living in district towns or rural plots. Features front porch verandah and optimized natural air flow.',
    features: ['Front Verandah', 'Living & Dining', '2 Toilets', 'Low Cost Construction']
  },
  {
    id: 'tin-shed-01',
    title: '3 Bedroom Modern Tin Shed House Plan',
    category: 'tin-shed',
    bedrooms: 3,
    bathrooms: 2,
    stories: 'Tin Shed (L-Shape)',
    landAreaSqFt: '900 Sq. Ft.',
    plotSize: '1.24 Decimals (0.75 Katha)',
    dimensions: "40' - 0\" X 22' - 6\"",
    budgetBDT: '8 - 12 Lacs BDT',
    tag: 'Low Cost',
    image: 'assets/images/tin_shed.png',
    blueprint: 'assets/images/floor_plan.png',
    description: 'Long-lot tin-shed house plan with stylish corrugated CGI roof framing, 3 bedrooms, kitchen, 2 toilets, and open front porch for village living.',
    features: ['High CGI Roof', 'L-Shape Verandah', 'Ventilated', 'Affordable Build']
  },
  {
    id: 'interior-01',
    title: 'Luxury 5-Star Apartment Interior Design',
    category: 'interior',
    bedrooms: 3,
    bathrooms: 3,
    stories: 'Interior Project',
    landAreaSqFt: '1,650 Sq. Ft.',
    plotSize: 'Apartment Unit',
    dimensions: 'Custom Fit',
    budgetBDT: '12 - 16 Lacs BDT',
    tag: 'Interior',
    image: 'assets/images/interior.png',
    blueprint: 'assets/images/interior.png',
    description: 'Full interior architectural transformation including false ceiling with indirect LED lighting, marble-effect media wall, custom modular kitchen, and luxury master bed decor.',
    features: ['False Ceiling', 'Marble Media Wall', 'Modular Kitchen', 'Ambient Lighting']
  },
  {
    id: 'two-storied-01',
    title: '4 Bedroom 2-Storied House with Shop',
    category: 'two-storied',
    bedrooms: 4,
    bathrooms: 3,
    stories: '2 Storied',
    landAreaSqFt: '1,500 Sq. Ft.',
    plotSize: '2.06 Decimals (1.25 Katha)',
    dimensions: "43' - 0\" X 30' - 0\"",
    budgetBDT: '32 - 38 Lacs BDT',
    tag: 'Commercial + Res',
    image: 'assets/images/hero_duplex.png',
    blueprint: 'assets/images/floor_plan.png',
    description: 'Designed for long lots. Ground floor includes 2 shops/garage plus 2 bedrooms; top floor contains 2 bedrooms, spacious drawing hall, and balcony.',
    features: ['Ground Floor Shop', '2 Units Possible', 'Front Balcony', 'Stair Core']
  },
  {
    id: 'three-storied-01',
    title: '5 Bedroom 3-Storied Residential Plan',
    category: 'three-storied',
    bedrooms: 5,
    bathrooms: 4,
    stories: '3 Storied',
    landAreaSqFt: '2,100 Sq. Ft.',
    plotSize: '2.89 Decimals (1.75 Katha)',
    dimensions: "42' - 0\" X 36' - 0\"",
    budgetBDT: '55 - 65 Lacs BDT',
    tag: 'Multi Unit',
    image: 'assets/images/single_story.png',
    blueprint: 'assets/images/floor_plan.png',
    description: 'High density residential building plan designed to BNBC 2020 structural standards. Ideal for rental income units or large joint families.',
    features: ['BNBC 2020 Compliant', 'Rental Units', 'Earthquake Resistant', 'Lift Provision']
  }
];

// Initialize DOM elements & Event listeners
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCatalog(housePlans);
  initCalculator();
  initSearchAndFilter();
  initContactForm();
});

// Theme Switcher Logic
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('bd_house_theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('bd_house_theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('bd_house_theme', 'dark');
    }
  });
}

// Render House Plans Catalog
function renderCatalog(plans) {
  const container = document.getElementById('plansGrid');
  if (!container) return;

  if (plans.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <i class="fa-solid fa-building-circle-xmark" style="font-size: 3rem; margin-bottom: 1rem; color: var(--secondary);"></i>
        <h3>No house plans found</h3>
        <p>Try matching another category or clearing your search term.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = plans.map(plan => `
    <div class="plan-card">
      <div class="plan-img">
        <img src="${plan.image}" alt="${plan.title}" loading="lazy">
        <span class="plan-tag">${plan.tag}</span>
      </div>
      <div class="plan-body">
        <h3 class="plan-title">${plan.title}</h3>
        <div class="plan-dims">
          <i class="fa-solid fa-ruler-combined text-accent"></i> ${plan.dimensions} (${plan.landAreaSqFt})
        </div>
        <div class="plan-features">
          <div class="feat-item"><i class="fa-solid fa-bed"></i> ${plan.bedrooms} Bed</div>
          <div class="feat-item"><i class="fa-solid fa-bath"></i> ${plan.bathrooms} Bath</div>
          <div class="feat-item"><i class="fa-solid fa-layer-group"></i> ${plan.stories}</div>
        </div>
        <div class="plan-footer">
          <div class="plan-price">
            <span>Est. Construction</span>
            ${plan.budgetBDT}
          </div>
          <button class="btn btn-primary" onclick="openPlanModal('${plan.id}')">
            <i class="fa-solid fa-eye"></i> View Plan
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Search and Filter Functionality
function initSearchAndFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');

  let currentCategory = 'all';
  let searchQuery = '';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  function applyFilters() {
    let filtered = housePlans.filter(plan => {
      const matchesCategory = (currentCategory === 'all') || (plan.category === currentCategory);
      const matchesSearch = plan.title.toLowerCase().includes(searchQuery) ||
                            plan.description.toLowerCase().includes(searchQuery) ||
                            plan.dimensions.toLowerCase().includes(searchQuery) ||
                            plan.bedrooms.toString().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    renderCatalog(filtered);
  }
}

// BD Construction Cost & Material Calculator
function initCalculator() {
  const areaInput = document.getElementById('calcArea');
  const areaVal = document.getElementById('areaVal');
  const floorsSelect = document.getElementById('calcFloors');
  const typeSelect = document.getElementById('calcType');
  const qualitySelect = document.getElementById('calcQuality');

  if (!areaInput) return;

  function updateCalculation() {
    const area = parseFloat(areaInput.value) || 1200;
    const floors = parseInt(floorsSelect.value) || 1;
    const type = typeSelect.value; // rcc or tin
    const quality = qualitySelect.value; // standard, semi, luxury

    areaVal.textContent = `${area} Sq. Ft.`;

    const totalBuiltUpArea = area * floors;

    // Rates in BDT per Sq Ft
    let ratePerSqFt = 2000;
    if (type === 'rcc') {
      if (quality === 'standard') ratePerSqFt = 1950;
      else if (quality === 'semi') ratePerSqFt = 2350;
      else if (quality === 'luxury') ratePerSqFt = 2900;
    } else {
      // Tin shed
      if (quality === 'standard') ratePerSqFt = 950;
      else if (quality === 'semi') ratePerSqFt = 1250;
      else if (quality === 'luxury') ratePerSqFt = 1550;
    }

    const totalCostBDT = totalBuiltUpArea * ratePerSqFt;
    const costInLacs = (totalCostBDT / 100000).toFixed(2);

    // Material Quantities
    let cementBags, steelKg, bricksPcs, sandCft, stoneCft;

    if (type === 'rcc') {
      cementBags = Math.round(totalBuiltUpArea * 0.42);
      steelKg = Math.round(totalBuiltUpArea * 3.6);
      bricksPcs = Math.round(totalBuiltUpArea * 9.5);
      sandCft = Math.round(totalBuiltUpArea * 1.25);
      stoneCft = Math.round(totalBuiltUpArea * 1.15);
    } else {
      // Tin shed structure
      cementBags = Math.round(totalBuiltUpArea * 0.18);
      steelKg = Math.round(totalBuiltUpArea * 0.9);
      bricksPcs = Math.round(totalBuiltUpArea * 5.5);
      sandCft = Math.round(totalBuiltUpArea * 0.65);
      stoneCft = Math.round(totalBuiltUpArea * 0.45);
    }

    // Steel in Tons if large
    const steelDisplay = steelKg >= 1000 ? `${(steelKg / 1000).toFixed(2)} Tons` : `${steelKg} Kg`;

    // Render results
    document.getElementById('resTotalCost').textContent = `৳ ${costInLacs} Lacs`;
    document.getElementById('resCement').textContent = `${cementBags.toLocaleString()} Bags`;
    document.getElementById('resSteel').textContent = steelDisplay;
    document.getElementById('resBricks').textContent = `${bricksPcs.toLocaleString()} Pcs`;
    document.getElementById('resSand').textContent = `${sandCft.toLocaleString()} CFT`;
    document.getElementById('resStone').textContent = `${stoneCft.toLocaleString()} CFT`;
    document.getElementById('resSqFtRate').textContent = `৳ ${ratePerSqFt} / Sq. Ft.`;
  }

  areaInput.addEventListener('input', updateCalculation);
  floorsSelect.addEventListener('change', updateCalculation);
  typeSelect.addEventListener('change', updateCalculation);
  qualitySelect.addEventListener('change', updateCalculation);

  // Run initial calculation
  updateCalculation();
}

// Modal Details for House Plan
function openPlanModal(planId) {
  const plan = housePlans.find(p => p.id === planId);
  if (!plan) return;

  const modalBackdrop = document.getElementById('planModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  modalTitle.textContent = plan.title;
  modalContent.innerHTML = `
    <div class="modal-body-grid">
      <div>
        <div class="modal-img-wrap mb-3">
          <img src="${plan.image}" alt="${plan.title}">
        </div>
        <h4>2D Architectural Floor Blueprint</h4>
        <div class="modal-img-wrap mt-2">
          <img src="${plan.blueprint}" alt="Blueprint">
        </div>
      </div>
      <div>
        <div class="badge">${plan.tag}</div>
        <p class="mb-3">${plan.description}</p>
        
        <table style="width:100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem;">
          <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:0.5rem 0; color:var(--text-secondary);">Plot Dimensions:</td>
            <td style="padding:0.5rem 0; font-weight:600; text-align:right;">${plan.dimensions}</td>
          </tr>
          <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:0.5rem 0; color:var(--text-secondary);">Built-up Area:</td>
            <td style="padding:0.5rem 0; font-weight:600; text-align:right;">${plan.landAreaSqFt}</td>
          </tr>
          <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:0.5rem 0; color:var(--text-secondary);">Required Land:</td>
            <td style="padding:0.5rem 0; font-weight:600; text-align:right;">${plan.plotSize}</td>
          </tr>
          <tr style="border-bottom:1px solid var(--card-border);">
            <td style="padding:0.5rem 0; color:var(--text-secondary);">Est. Construction Budget:</td>
            <td style="padding:0.5rem 0; font-weight:700; color:var(--secondary); text-align:right;">${plan.budgetBDT}</td>
          </tr>
        </table>

        <h4>Request Plan Drawings or Customization</h4>
        <form onsubmit="handleModalRequest(event, '${plan.title}')" style="margin-top:1rem;">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="tel" class="form-control" placeholder="Mobile Number (e.g. 01712345678)" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="2" placeholder="Any custom land size or requirements..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">
            <i class="fa-brands fa-whatsapp"></i> Request Call Back & Drawing PDF
          </button>
        </form>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
}

function closeModal() {
  const modalBackdrop = document.getElementById('planModal');
  if (modalBackdrop) modalBackdrop.classList.remove('active');
}

function handleModalRequest(e, planTitle) {
  e.preventDefault();
  closeModal();
  showToast(`Thank you! Our architect will contact you regarding "${planTitle}".`);
}

// Contact Form Handler
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    showToast('Your request has been submitted successfully! Hotline: 01707570450');
  });
}

// Toast Notification
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Global functions for inline HTML calls
window.openPlanModal = openPlanModal;
window.closeModal = closeModal;
window.handleModalRequest = handleModalRequest;
