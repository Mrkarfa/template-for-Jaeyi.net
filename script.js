// Initialize Lenis -- for the smooth scrolling effect
const lenis = new Lenis({
  autoRaf: true,
});

// Register GSAP ScrollTrigger plugin with Lenis
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on("scroll", ScrollTrigger.update);

// Synchronize GSAP ticker with Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ========================================
// PAGE LOAD ANIMATIONS
// ========================================

window.addEventListener("load", () => {
  // Animate navbar
  gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate hero content
  gsap.from("#main-text", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from("#sub-text", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from("#button-section", {
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from("#name h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.from("#image img", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    ease: "back.out(1.7)",
  });
});

// ========================================
// PARALLAX EFFECT - HERO SECTION
// ========================================

gsap.to("#hero-content", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
  y: 200,
  opacity: 0.5,
  ease: "none",
});

gsap.to("#cta-section", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
  y: -150,
  ease: "none",
});

gsap.to("#button-section", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  ease: "none",
});

// ========================================
// WORK SECTION ANIMATIONS
// ========================================

gsap.from("#work-header", {
  scrollTrigger: {
    trigger: "#work",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
});

// Animate project cards with stagger
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: "#work-content",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  stagger: 0.1,
});

// ========================================
// ABOUT SECTION - SCROLL TO TEXT REVEAL
// ========================================

// Split text into words for reveal effect
const aboutTitle = document.querySelector(".about-title");
if (aboutTitle) {
  const words = aboutTitle.textContent.split(" ");
  aboutTitle.innerHTML = words
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  gsap.from(".about-title .word", {
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 80%",
      end: "top 40%",
      scrub: 1,
    },
    opacity: 0.2,
    y: 50,
    stagger: 0.1,
  });
}

// Animate about image
gsap.from(".about-image", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
    end: "top 30%",
    scrub: 1,
  },
  x: -100,
  opacity: 0,
});

// Animate about content columns
gsap.from(".about-column", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
});

// Animate social icons
gsap.from(".social-icon", {
  scrollTrigger: {
    trigger: ".about-footer",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
  scale: 0,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.7)",
});

// ========================================
// TESTIMONIAL SECTION ANIMATIONS
// ========================================

gsap.from(".testimonial-quote", {
  scrollTrigger: {
    trigger: "#testimonial",
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
});

gsap.from(".table-row", {
  scrollTrigger: {
    trigger: ".testimonial-table",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  x: -50,
  opacity: 0,
  stagger: 0.1,
});

// ========================================
// FAQ SECTION ANIMATIONS
// ========================================

gsap.from(".faq-title", {
  scrollTrigger: {
    trigger: "#faq",
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
});

gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-list",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.1,
});

// ========================================
// CONTACT SECTION ANIMATIONS
// ========================================

gsap.from(".contact-label", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
  x: -50,
  opacity: 0,
});

gsap.from(".contact-column", {
  scrollTrigger: {
    trigger: ".contact-links",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".contact-button", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
  x: 50,
  opacity: 0,
});

// ========================================
// FOOTER ANIMATIONS
// ========================================

gsap.from(".footer-logo", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  scale: 0.8,
  opacity: 0,
});

gsap.from(".footer-copyright", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
  y: 20,
  opacity: 0,
});

// ========================================
// MOBILE NAVIGATION - NIKE STYLE
// ========================================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

// GSAP timeline for mobile menu animation
const menuTimeline = gsap.timeline({ paused: true });

menuTimeline
  .to(mobileNavOverlay, {
    opacity: 1,
    visibility: "visible",
    duration: 0,
  })
  .from(".mobile-nav-links li", {
    x: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "power3.out",
  })
  .from(
    ".mobile-close-btn",
    {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );

// Open mobile menu
mobileMenuBtn.addEventListener("click", () => {
  menuTimeline.play();
  document.body.style.overflow = "hidden";

  // Animate hamburger to X
  gsap.to(mobileMenuBtn.children[0], {
    rotation: 45,
    y: 7,
    duration: 0.3,
  });
  gsap.to(mobileMenuBtn.children[1], {
    opacity: 0,
    duration: 0.3,
  });
  gsap.to(mobileMenuBtn.children[2], {
    rotation: -45,
    y: -7,
    duration: 0.3,
  });
});

// Close mobile menu
const closeMobileMenu = () => {
  menuTimeline.reverse();
  document.body.style.overflow = "";

  // Animate X back to hamburger
  gsap.to(mobileMenuBtn.children[0], {
    rotation: 0,
    y: 0,
    duration: 0.3,
  });
  gsap.to(mobileMenuBtn.children[1], {
    opacity: 1,
    duration: 0.3,
  });
  gsap.to(mobileMenuBtn.children[2], {
    rotation: 0,
    y: 0,
    duration: 0.3,
  });
};

mobileCloseBtn.addEventListener("click", closeMobileMenu);

// Close menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// ========================================
// SMOOTH HOVER EFFECTS
// ========================================

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Buttons pulse effect on hover
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    if (
      !this.classList.contains("mobile-menu-btn") &&
      !this.classList.contains("mobile-close-btn") &&
      !this.classList.contains("faq-toggle")
    ) {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  button.addEventListener("mouseleave", function () {
    if (
      !this.classList.contains("mobile-menu-btn") &&
      !this.classList.contains("mobile-close-btn") &&
      !this.classList.contains("faq-toggle")
    ) {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
});
