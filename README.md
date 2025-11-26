# ✨ Souvik Portfolio — Modern Web Experience

<div align="center">

![Portfolio Preview](/home/skarfa/.gemini/antigravity/brain/8f7ffa75-61f3-4236-9ed9-65a681dbf260/uploaded_image_1764172500178.png)

**A stunning, animation-rich portfolio website featuring GSAP-powered interactions and Nike-inspired mobile navigation**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://mrkarfa.github.io/template-for-Jaeyi.net)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)]()

</div>

---

## 🎯 Overview

A meticulously crafted personal portfolio website showcasing modern web design principles, smooth animations, and exceptional user experience. Built with vanilla JavaScript and powered by GSAP, this portfolio demonstrates expertise in front-end development and interaction design.

### ✨ Key Highlights

- 🎨 **Minimalist Design** — Clean, modern aesthetic with perfect typography
- 🚀 **Smooth Animations** — GSAP-powered scroll-triggered effects throughout
- 📱 **Fully Responsive** — Optimized for all devices from mobile to desktop
- 🎭 **Parallax Effects** — Dynamic depth and movement on scroll
- 🍔 **Nike-Style Nav** — Fullscreen mobile overlay with stunning animations
- ⚡ **Buttery Smooth** — Lenis smooth scrolling for premium feel
- 🎬 **Text Reveals** — Words fade in individually as you scroll

---

## 🛠️ Tech Stack

<div align="center">

| Technology                                                                                                      | Purpose               |
| --------------------------------------------------------------------------------------------------------------- | --------------------- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)                | Structure & Semantics |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)                   | Styling & Layout      |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Interactivity & Logic |
| ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)              | Advanced Animations   |
| ![Lenis](https://img.shields.io/badge/Lenis-000000?style=flat-square)                                           | Smooth Scrolling      |

</div>

### 📚 Libraries & CDNs

```html
<!-- Smooth Scrolling -->
<script src="https://unpkg.com/lenis@1.3.15/dist/lenis.min.js"></script>

<!-- Animation Framework -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

---

## 🎨 Features Breakdown

### 🎬 Animations

#### **Page Load Animations**

- Navbar slides down with fade-in effect
- Hero content appears with staggered timing
- Profile image scales up with bounce effect
- Button section slides in from the right

#### **Scroll-Triggered Effects**

- **Parallax Hero** — Elements move at different speeds while scrolling
- **Text Reveal** — About section title words fade in individually
- **Section Transitions** — All sections animate smoothly into view
- **Image Reveals** — Project cards and images slide up on scroll

#### **Hover Interactions**

- Project cards lift on hover with smooth transition
- Buttons scale and elevate with shadow
- Contact links reveal animated underlines
- Social icons expand with bounce effect

### 📱 Mobile Navigation

Nike-inspired fullscreen overlay featuring:

- ✅ Smooth hamburger → X transformation
- ✅ Staggered menu item animations
- ✅ Close button with rotation effect
- ✅ Auto-closes when clicking links
- ✅ Body scroll lock when menu is open

### 🎯 Sections

1. **Hero** — Full-height introduction with parallax effects
2. **Work** — Grid showcase of projects with hover animations
3. **About** — Personal story with word-by-word text reveal
4. **Testimonials** — Client feedback with elegant table layout
5. **FAQ** — Frequently asked questions with toggle interactions
6. **Contact** — Multiple contact methods with hover effects
7. **Footer** — Large branding with subtle animations

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Local server (Live Server extension or similar)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mrkarfa/template-for-Jaeyi.net.git
   cd template-for-Jaeyi.net
   ```

2. **Open with Live Server**

   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Or simply open `index.html` in your browser

3. **Customize**
   - Update content in `index.html`
   - Modify styles in `style.css`
   - Adjust animations in `script.js`
   - Replace images in `Images/` folder

---

## 📁 Project Structure

```
jaeyi.net/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # GSAP animations and interactions
│
├── Font/               # Custom fonts
│   └── UjlFhCnUjxhNfep4oYBPqnEssyo.woff2
│
└── Images/             # Image assets
    ├── heroimg.avif
    ├── about.avif
    ├── project1.avif
    ├── project2.avif
    ├── project3.avif
    ├── project4.avif
    ├── project5.avif
    └── project6.avif
```

---

## 🎨 Design Principles

### Color Palette

```css
--primary-color: #fafafa; /* Main background */
--secondary-color: #ededed; /* Secondary background */
--text-color: #000000; /* Primary text */
--accent-color: #6f6f6f; /* Buttons & accents */
```

### Typography

- **Font Family:** Custom "default" font (included in `/Font`)
- **Heading Sizes:** Responsive with `clamp()` for fluid scaling
- **Line Heights:** Optimized for readability (1.0 - 1.6)
- **Letter Spacing:** Carefully tuned for visual balance

### Spacing System

- Consistent `8%` horizontal padding on sections
- Vertical spacing using `vh` units for viewport-relative sizing
- Gap values use `clamp()` for responsive behavior
- Grid layouts with auto-fit for flexibility

---

## ⚡ Performance Optimizations

- ✅ **AVIF Images** — Modern format for smaller file sizes
- ✅ **WOFF2 Fonts** — Compressed web font format
- ✅ **CSS Grid/Flexbox** — Hardware-accelerated layouts
- ✅ **GSAP Ticker** — Optimized animation loop
- ✅ **Lazy ScrollTrigger** — Animations only when in viewport
- ✅ **Minimal DOM manipulation** — Efficient JavaScript

---

## 📱 Responsive Breakpoints

### Desktop (Default)

- Full navigation bar
- Multi-column layouts
- Large typography

### Tablet & Mobile (≤768px)

- Hamburger menu navigation
- Stacked layouts
- Adjusted font sizes
- Touch-optimized interactions

---

## 🎯 Animation Timeline

### Hero Section (0-1.2s)

```
0.0s → Navbar slides down
0.3s → Main text fades in
0.4s → Name appears
0.5s → Image scales up
0.6s → Button slides in
```

### Scroll Animations

```
Parallax Hero → scrub: 1 (1:1 scroll ratio)
Text Reveal → stagger: 0.1s per word
Section Fade → 80% to 50% viewport
Card Animations → 0.1s stagger delay
```

---

## 🛠️ Customization Guide

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
  --primary-color: #yourcolor;
  --text-color: #yourcolor;
  --button-bg-color: #yourcolor;
}
```

### Adding Projects

Add a new card in `index.html`:

```html
<div class="project-card">
  <div class="project-image">
    <img src="./Images/your-project.avif" alt="Project Name" />
  </div>
  <div class="project-info">
    <h3 class="project-title">Your Project</h3>
    <span class="project-category">— Category</span>
  </div>
</div>
```

### Adjusting Animations

Modify timing in `script.js`:

```javascript
gsap.from(".your-element", {
  scrollTrigger: {
    trigger: ".your-section",
    start: "top 80%", // When to start
    end: "top 50%", // When to end
    scrub: 1, // Smooth scrubbing
  },
  y: 100, // Start position
  opacity: 0, // Start opacity
  duration: 1, // Animation speed
});
```

---

## 🌟 Browser Support

| Browser | Version | Status             |
| ------- | ------- | ------------------ |
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |
| Opera   | 76+     | ✅ Fully Supported |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **GSAP** — GreenSock Animation Platform for amazing animations
- **Lenis** — Studio Freight for buttery smooth scrolling
- **Inspiration** — jaeyi.net for design reference
- **Icons** — Custom SVG icons for social media

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Souvik Karfa**

- GitHub: [@Mrkarfa](https://github.com/Mrkarfa)
- Portfolio: [jaeyi.net](https://mrkarfa.github.io/template-for-Jaeyi.net)

---

<div align="center">

### 💫 Made with passion and attention to detail

**If you like this project, give it a ⭐ on GitHub!**

[![GitHub followers](https://img.shields.io/github/followers/Mrkarfa?style=social)](https://github.com/Mrkarfa)
[![GitHub stars](https://img.shields.io/github/stars/Mrkarfa/template-for-Jaeyi.net?style=social)](https://github.com/Mrkarfa/template-for-Jaeyi.net/stargazers)

</div>

---

<div align="center">

**© 2025 Souvik Portfolio. All rights reserved.**

</div>
