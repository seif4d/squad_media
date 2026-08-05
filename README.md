# 🚀 SQUAD MEDIA — Modern Marketing Agency Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![RTL Supported](https://img.shields.io/badge/Language-Arabic%20(RTL)-008080?style=for-the-badge)](#)

> **SQUAD MEDIA** is a high-converting, modern, dark-themed Glassmorphism landing page engineered for digital marketing agencies, media buyers, and growth partners. Built with pure HTML5, CSS3, and Vanilla JavaScript, it focuses on high conversion rates, direct WhatsApp lead acquisition, dynamic tabbed pricing, and ultra-fast performance.

---

## 🔗 Live Demo & Links

- **Live Website:** [https://squadmedia.store/](https://squadmedia.store/)
- **GitHub Repository:** [https://github.seif4d.squad_media](https://github.com/seif4d/squad_media)

---

## ✨ Key Features

- 💎 **Modern Dark Glassmorphism UI:** Features neon accent highlights (`#C6FF00`), dynamic ambient glow blobs, dynamic floating 3D cards, and backdrop blur filters.
- 💬 **Instant WhatsApp Lead Generation Engine:** A streamlined custom form that automatically parses client details (Name, Brand, URL, Business Type, Budget) and formats a structured WhatsApp message to instantly open a chat.
- 📊 **Interactive Pricing Engine:** Switchable tabbed interface supporting 3 business models:
  1. **Test Sprint:** Single-tier risk-free trial.
  2. **Core Retainers:** Monthly subscription packages (*Bāsiq*, *Growth*, *Pro*).
  3. **Scale & Rev-Share:** Media buying commissions & Revenue-share models.
- 🎨 **Custom Vanilla JS Dropdowns:** Custom-built accessible custom select controls replacing native browser dropdowns for dark-mode consistency.
- ♾️ **Infinite CSS Marquee:** Seamless, infinite-scrolling ticker showcasing key agency services.
- 📱 **100% Fully Responsive & RTL First:** Custom mobile drawer navigation, touch-friendly UI components, optimized tap targets, and full Right-To-Left (Arabic) layout support.
- ⚡ **Zero Framework Overhead:** Pure, dependency-free Vanilla JavaScript and modern CSS for lightning-fast loading speeds and high SEO performance scores.
- 📜 **Scroll Animations:** Native `IntersectionObserver` triggered reveal effects (`.reveal`, `.reveal-left`, `.reveal-right`).

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic elements, Open Graph / Twitter Cards meta tags)
- **Styling:** CSS3 (Custom CSS Variables, Flexbox, Grid, Dynamic Keyframe Animations, `@media` queries)
- **Scripting:** Vanilla JavaScript (ES6+, DOM Manipulation, Event Listeners, `IntersectionObserver`)
- **Typography:** Google Fonts ([Cairo](https://fonts.google.com/specimen/Cairo) & [Changa](https://fonts.google.com/specimen/Changa))
- **Icons:** FontAwesome v6.4.0 (CDN)

---

## 📁 Project Structure

```text
squad_media/
├── index.html            # Main HTML landing page structure
├── img/                  # Assets folder (Favicon, team preview image)
│   ├── favicon.ico
│   └── team.png
└── README.md             # Project documentation
```

---

## ⚙️ Customization Guide

### 1. Changing Colors & Styling Variables
All theme styles are centralized using CSS variables inside `index.html`:

```css
:root {
    --primary: #C6FF00;             /* Neon Accent Color */
    --primary-hover: #b3e600;       /* Hover Accent Color */
    --bg-base: #050505;             /* Main Background */
    --text-main: #ffffff;           /* Heading & Primary Text */
    --text-muted: #a1a1aa;          /* Secondary Muted Text */
    --font-main: 'Cairo', sans-serif;
    --font-title: 'Changa', sans-serif;
}
```

### 2. Updating WhatsApp Phone Number
Search for `201042472017` in `index.html` and replace it with your target WhatsApp number (in international format without `+`):

- **Floating WhatsApp Button:** `<a href="https://wa.me/YOUR_NUMBER"...>`
- **Form Submit Handler in JavaScript:**
  ```javascript
  const waUrl = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(waMessage)}`;
  ```

### 3. Updating Social Media Links
Modify the footer links inside the `.social-links` container:

```html
<a href="https://www.facebook.com/YOUR_PAGE" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
<a href="https://www.instagram.com/YOUR_HANDLE" target="_blank"><i class="fa-brands fa-instagram"></i></a>
<a href="https://wa.me/YOUR_NUMBER" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
```

---

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/seif4d/squad_media.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd squad_media
   ```

3. **Run locally:**
   Simply open `index.html` in any modern web browser or use a live server extension (e.g., *Live Server* extension in VS Code).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Developed with ❤️ by <strong>SQUAD MEDIA</strong> & Developed by <a href="https://github.com/seif4d">Seif4D</a>
</p>
