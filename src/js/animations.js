/* ==========================================
   MY BHOOMI GROUP - GSAP ANIMATION ENGINE
   ========================================== */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // 1. Core Reveal on Scroll Animations
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // Staggered Card reveals
  const cardGrids = document.querySelectorAll('.stagger-cards');
  cardGrids.forEach((grid) => {
    const cards = grid.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // 2. Stats Counters Animation
  const statsContainer = document.querySelector('.stats-bar');
  if (statsContainer) {
    const numbers = statsContainer.querySelectorAll('.stat-number');
    numbers.forEach((num) => {
      const targetVal = parseInt(num.getAttribute('data-target'), 10);
      const suffix = num.getAttribute('data-suffix') || '';
      
      const obj = { value: 0 };
      gsap.to(obj, {
        value: targetVal,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsContainer,
          start: 'top 85%',
        },
        onUpdate: () => {
          num.textContent = Math.round(obj.value) + suffix;
        }
      });
    });
  }

  // 3. Hero cinematic entrance
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const timeline = gsap.timeline();
    timeline
      .fromTo('.hero-tagline', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' })
      .fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, '-=0.5')
      .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.trust-strip', { opacity: 0 }, { opacity: 1, duration: 1.2 }, '-=0.4');
  }

  // 4. Parallax Background effect
  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo) {
    gsap.to(heroVideo, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // 5. Card Mouse Tracker reflection (3D tilt / light reflection)
  const trackedCards = document.querySelectorAll('.why-card, .project-card, .awards-showcase-card');
  trackedCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
