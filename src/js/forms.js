/* ==========================================
   MY BHOOMI GROUP - HIGH-CONVERSION ENGINE
   ========================================== */
export function initForms() {
  const modalBackdrop = document.getElementById('lead-modal');
  const modalTitle = document.getElementById('modal-title-text');
  const modalSubtitle = document.getElementById('modal-subtitle-text');
  const modalClose = document.getElementById('modal-close-btn');
  const modalForm = document.getElementById('premium-lead-form');
  const leadSourceInput = document.getElementById('lead-source');

  // Success Modal
  const successModal = document.getElementById('success-modal');
  const successClose = document.getElementById('success-close-btn');

  // Trigger elements
  const ctaButtons = document.querySelectorAll('[data-cta]');

  // Open Modal function
  const openLeadModal = (actionName, titleText, subtitleText) => {
    if (!modalBackdrop) return;
    
    if (leadSourceInput) leadSourceInput.value = actionName;
    if (modalTitle && titleText) modalTitle.textContent = titleText;
    if (modalSubtitle && subtitleText) modalSubtitle.textContent = subtitleText;
    
    modalBackdrop.classList.add('active');
  };

  // Close Modal function
  const closeLeadModal = () => {
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  };

  // Bind CTA triggers
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-cta');
      
      let title = "Secure Your Plot Today";
      let subtitle = "Submit details to receive direct sales availability charts.";

      if (action === 'brochure') {
        title = "Download Premium Brochure";
        subtitle = "Fill details to receive detailed layouts and pricing structures.";
      } else if (action === 'visit') {
        title = "Book VIP Site Tour";
        subtitle = "Choose your date for a complimentary private luxury transport.";
      } else if (action === 'callback') {
        title = "Request Executive Callback";
        subtitle = "An investment manager will connect within 15 minutes.";
      }

      openLeadModal(action, title, subtitle);
    });
  });

  // Modal Close Listeners
  if (modalClose) {
    modalClose.addEventListener('click', closeLeadModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeLeadModal();
    });
  }

  // Success Modal Close
  if (successClose && successModal) {
    successClose.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) successModal.classList.remove('active');
    });
  }

  // 1. Timed VIP Consultation Offer (Pivoted from mouseleave to prevent menu-click interference)
  const enableExitIntent = () => {
    // Only trigger on the Home landing page (index.html or root)
    const isHomePage = window.location.pathname === '/' || 
                       window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '';
                       
    if (!isHomePage) return;
    
    // Avoid double triggering in a single session
    if (sessionStorage.getItem('mybhoomi_exit_intent_fired')) return;

    // Trigger elegant consultation promo after 20 seconds of active reading
    setTimeout(() => {
      sessionStorage.setItem('mybhoomi_exit_intent_fired', 'true');
      openLeadModal(
        'exit-intent',
        'Unlock Exclusive 10% Benefit',
        'Before you leave, secure your early-bird pricing slot on Pune South highway corridors.'
      );
    }, 20000); // 20 seconds delay
  };

  // Initialize timed consultation engine
  enableExitIntent();

  // 2. Form Submission Handling
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const date = document.getElementById('form-date') ? document.getElementById('form-date').value : '';
      const source = leadSourceInput ? leadSourceInput.value : 'general';

      if (!name || !phone) {
        alert("Please complete all required fields.");
        return;
      }

      // Format WhatsApp redirection link to sales desk (Maruti Yedge desk)
      const salesNumber = '919876543210'; // Replace with company sales phone number
      const whatsappMsg = encodeURIComponent(
        `*New Lead from My Bhoomi Website*\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Interest Type:* ${source}\n` +
        `*Visit Date:* ${date || 'Not Scheduled'}\n` +
        `*Portal:* https://mybhoomi.org.in/`
      );
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${salesNumber}&text=${whatsappMsg}`;

      // Save lead locally as secure backup
      const localLeads = JSON.parse(localStorage.getItem('mybhoomi_leads') || '[]');
      localLeads.push({
        name,
        phone,
        date,
        source,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('mybhoomi_leads', JSON.stringify(localLeads));

      // Close Form Modal
      closeLeadModal();

      // Show Success Popup
      if (successModal) {
        successModal.classList.add('active');
      } else {
        alert(`Thank you, ${name}! Your request has been registered.`);
      }

      // Reset form
      modalForm.reset();

      // Open WhatsApp desk in a new window for immediate connection
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    });
  }

  // Hamburger Mobile Navigation Menu Toggle
  const hamburger = document.getElementById('mobile-hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}
