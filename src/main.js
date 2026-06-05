/* ==========================================
   MY BHOOMI GROUP - CENTRAL BOOTSTRAPPER & ROUTER
   ========================================== */
import './style.css';
import { projects } from './js/projects-data.js';
import { initCalculator } from './js/calculator.js';
import { initAnimations } from './js/animations.js';
import { initForms } from './js/forms.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize core modular engines
  initCalculator();
  initAnimations();
  initForms();

  // 2. Sticky Header Scroll Trigger
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // 3. FAQ Accordion Action
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    
    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle selected item
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // 4. Detailed Project Router & Catalog Filter (projects.html specific)
  const isProjectsPage = window.location.pathname.includes('projects.html');
  if (isProjectsPage) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const filterBar = document.getElementById('catalog-filter-bar');
    const catalogGrid = document.getElementById('projects-catalog-grid');
    const detailView = document.getElementById('project-detail-view');

    if (projectId) {
      // Find matching project from database
      const project = projects.find(p => p.id === projectId);
      
      if (project && detailView && catalogGrid && filterBar) {
        // Hide standard catalog lists
        filterBar.style.display = 'none';
        catalogGrid.style.display = 'none';

        // Render project-specific titles & copy
        document.getElementById('projects-page-title').textContent = project.title;
        document.getElementById('projects-page-desc').textContent = `Explore exclusive plot layouts and investment parameters for ${project.title} Gated Community.`;

        // Render project details
        document.getElementById('detail-title').textContent = project.title;
        document.getElementById('detail-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${project.location}`;
        document.getElementById('detail-price').textContent = project.price;
        document.getElementById('detail-price-sqft').textContent = project.priceSqFt;
        document.getElementById('detail-rera').textContent = project.rera;
        document.getElementById('detail-size').textContent = project.size;
        document.getElementById('detail-desc').textContent = project.description;
        
        const detailImg = document.getElementById('detail-img');
        detailImg.src = project.image;
        detailImg.alt = project.title;
        
        document.getElementById('detail-roi-badge').textContent = project.roi;

        // Render dynamic connectivity items
        const connContainer = document.getElementById('detail-connectivity');
        connContainer.innerHTML = '';
        project.connectivity.forEach(c => {
          connContainer.innerHTML += `
            <div class="connectivity-item">
              <div class="conn-left">
                <span style="color: var(--secondary);"><i class="fa-solid fa-car-side"></i></span>
                <span class="conn-name">${c.name}</span>
              </div>
              <span class="conn-right">
                <i class="fa-solid fa-clock"></i> ${c.time}
              </span>
            </div>
          `;
        });

        // Render dynamic amenities cards
        const amenitiesContainer = document.getElementById('detail-amenities');
        amenitiesContainer.innerHTML = '';
        project.amenities.forEach(a => {
          amenitiesContainer.innerHTML += `
            <div class="amenity-card">
              <div class="amenity-icon">${a.icon}</div>
              <h4 class="amenity-title">${a.title}</h4>
              <p class="amenity-desc">${a.desc}</p>
            </div>
          `;
        });

        // Display detail block
        detailView.style.display = 'block';
      }
    } else {
      // No ID specified: Render entire catalog
      renderProjectsCatalog(projects);
      setupCatalogFilters();
    }
  }

  // 5. Shared Resilient Form Submission handler (Captures fields dynamically)
  const setupFormSubmission = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Safely extract whatever values are available in this specific form
      const nameEl = form.querySelector('[id*="name"]');
      const phoneEl = form.querySelector('[id*="phone"]');
      const cityEl = form.querySelector('[id*="city"]');
      const reqEl = form.querySelector('[id*="requirement"]') || form.querySelector('[id*="source"]');
      const dateEl = form.querySelector('[id*="date"]');
      const pickupEl = form.querySelector('[id*="pickup"]');
      const msgEl = form.querySelector('[id*="message"]');

      const name = nameEl ? nameEl.value.trim() : '';
      const phone = phoneEl ? phoneEl.value.trim() : '';
      const city = cityEl ? cityEl.value.trim() : '';
      const requirement = reqEl ? reqEl.value : 'General Inquiry';
      const date = dateEl ? dateEl.value : '';
      const pickup = pickupEl ? pickupEl.value : '';
      const message = msgEl ? msgEl.value.trim() : '';

      if (!name || !phone) {
        alert("Please fill in Name and Phone Number.");
        return;
      }

      // Format WhatsApp lead text blocks beautifully
      const salesNumber = '919112291415';
      let whatsappBody = `*New Lead from My Bhoomi Website*\n\n`;
      whatsappBody += `*Name:* ${name}\n`;
      whatsappBody += `*Phone:* ${phone}\n`;
      
      if (city) whatsappBody += `*City:* ${city}\n`;
      if (requirement) whatsappBody += `*Requirement:* ${requirement}\n`;
      if (date) whatsappBody += `*Date of Visit:* ${date}\n`;
      if (pickup) whatsappBody += `*Pick-up Location:* ${pickup}\n`;
      if (message) whatsappBody += `*Message:* ${message}\n`;
      
      whatsappBody += `\n*Portal:* https://mybhoomi.org.in/`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${salesNumber}&text=${encodeURIComponent(whatsappBody)}`;

      // Save lead locally as secure backup
      const localLeads = JSON.parse(localStorage.getItem('mybhoomi_leads') || '[]');
      localLeads.push({
        name,
        phone,
        city,
        requirement,
        date,
        pickup,
        message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('mybhoomi_leads', JSON.stringify(localLeads));

      // Close open modals if active
      const modalBackdrop = document.getElementById('lead-modal');
      if (modalBackdrop) modalBackdrop.classList.remove('active');

      // Display Success Modal
      const successModal = document.getElementById('success-modal');
      if (successModal) {
        successModal.classList.add('active');
      } else {
        alert(`Thank you, ${name}! Your VIP request has been registered.`);
      }

      form.reset();

      // Open WhatsApp sales window
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    });
  };

  // Bind all forms cleanly
  setupFormSubmission('main-contact-form');
  setupFormSubmission('contact-page-form');
  setupFormSubmission('premium-lead-form');
});

// Helper: Render full catalog grid dynamically
function renderProjectsCatalog(items) {
  const container = document.getElementById('projects-catalog-grid');
  if (!container) return;

  container.innerHTML = '';
  items.forEach(p => {
    container.innerHTML += `
      <div class="project-card" data-category="${p.category}">
        <div class="project-image-wrapper">
          <div class="roi-badge">${p.roi}</div>
          <div class="rera-badge">RERA VERIFIED</div>
          <img src="${p.image}" alt="${p.title}" class="project-image" />
        </div>
        <div class="project-content">
          <span class="project-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="why-desc" style="margin-bottom: 1.25rem; font-size: 0.9rem;">
            ${p.description.substring(0, 110)}...
          </p>
          <div class="project-meta-grid">
            <div class="project-meta-item">
              <span class="project-meta-label">Plot Sizes</span>
              <span class="project-meta-value">${p.size.split(' ')[0]} sq.ft+</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Appreciation</span>
              <span class="project-meta-value">${p.roi.split(' ')[0]}</span>
            </div>
          </div>
          <div class="project-footer">
            <div class="project-price">
              <span class="project-price-label">Pricing Starts From</span>
              <span class="project-price-value">${p.price}</span>
            </div>
            <a href="/projects.html?id=${p.id}" class="btn btn-primary" style="padding: 0.65rem 1.25rem; font-size: 0.85rem; border-radius: 10px; color: #FFFFFF;">
              View Details
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

// Helper: Bind filtering buttons to filter card grid
function setupCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
