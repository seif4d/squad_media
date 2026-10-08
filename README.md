# 🚀 SQUAD MEDIA — Modern Marketing Agency Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![RTL Supported](https://img.shields.io/badge/Language-Arabic%20(RTL)-008080?style=for-the-badge)](#)

> **SQUAD MEDIA** is an Arabic, RTL landing page for a digital marketing agency. The charcoal and lime design combines a geometric growth illustration, creative service cards, the full team image, accessible pricing tabs, testimonials, native FAQs, and a WhatsApp consultation form. Built with HTML, CSS, and vanilla JavaScript, with no framework, build step, or backend.

---

## 🔗 Live Demo & Links

- **Live Website:** [https://squadmedia.store/](https://squadmedia.store/)
- **GitHub Repository:** [https://github.seif4d.squad_media](https://github.com/seif4d/squad_media)

---

## ✨ Key Features

- 💎 **Bold Dark UI:** Charcoal backgrounds, lime accents (`#C6FF00`), large Arabic typography, a layered studio illustration, staggered service cards with original CSS/SVG artwork, an ivory accent card, and a full, uncropped team poster. Illustrations are decorative concepts, not client performance reports.
- 🧮 **Live Fee Estimate:** An accessible calculator explains Growth and Scale's excess-only 10% fee and standalone ads' higher-of-3,000-or-15% rule. Empty/negative input prompts a correction; spend above 100,000 EGP requests a custom quote. Ad spend, taxes, and additional services remain separate. The calculator appears only when JavaScript is available.
- 💬 **WhatsApp Consultation Form:** Validates the visitor's details and prepares a structured message. The visitor reviews and sends it in WhatsApp. Data stays in the form, and a prepared-message link remains available when popups are blocked; editing a field clears the old link.
- 📊 **Interactive Pricing Engine:** Switchable tabbed interface supporting 3 business models:
  1. **Monthly packages (default):** Presence 4,500 / Growth 8,500 / Scale 13,500 EGP. Growth includes Meta management up to 20,000 EGP spend; Scale up to 40,000. Only the excess approved spend adds a 10% fee.
  2. **14-day campaign trial:** 2,500 EGP service fee, four creatives and copy, one Meta campaign, and a short report.
  3. **Ads & partnerships:** Standalone Meta management at the higher of 3,000 EGP/month or 15% of spend; performance partnerships require a scoped custom offer.

  Ad spend is separate in every offer. Production counts are per brand across channels; stories are adapted content and Reels use client footage. Photography, inbox handling, bots, CRM, and third-party subscriptions are extra. Content plans include two grouped revision rounds per batch. Spend above 100,000 EGP/month, extra ad platforms, or additional accounts needs a custom quote. Package buttons preselect the service in the contact form and include it in the prepared WhatsApp message.
- 🎨 **Native Form Controls:** Visible labels and dark native selects with browser validation, touch, and keyboard support.
- ♾️ **Infinite CSS Marquee:** Seamless, infinite-scrolling ticker showcasing key agency services.
- 📱 **Responsive & RTL First:** A mobile drawer with Escape dismissal, a keyboard focus loop, and focus return. Pricing tabs support RTL arrows, Home, and End. Active sections are marked in navigation. A floating WhatsApp shortcut appears only when the desktop gutter has sufficient room.
- ⚡ **Zero Framework Overhead:** Pure, dependency-free Vanilla JavaScript and modern CSS for lightning-fast loading speeds and high SEO performance scores.
- 📜 **Progressive Enhancement:** Subtle entry motion respects reduced-motion preferences. Content stays visible without animations. Without JavaScript, all pricing panels, native FAQ controls, navigation, and a direct WhatsApp fallback remain available.

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
├── styles.css            # Design tokens, responsive layouts, and motion
├── script.js             # Navigation, pricing tabs, FAQs, WhatsApp message
├── img/                  # Assets folder (Favicon, team preview image)
│   ├── favicon.ico
│   └── team.png
└── README.md             # Project documentation
```

---

## ⚙️ Customization Guide

### 1. Changing Colors & Styling Variables
Theme variables are centralized at the beginning of `styles.css`:

```css
:root {
    --primary: #C6FF00;             /* Neon Accent Color */
    --primary-hover: #d5ff4d;       /* Hover Accent Color */
    --bg-base: #090b09;             /* Main Background */
    --text-main: #f4f5ef;           /* Heading & Primary Text */
    --text-muted: #a8afa0;          /* Secondary Muted Text */
    --font-main: 'Cairo', sans-serif;
    --font-title: 'Changa', sans-serif;
}
```

### 2. Updating WhatsApp Phone Number
Replace every occurrence of `201042472017` in **both `index.html` and `script.js`**, including the hidden form phone field, with your target number (international format without `+`):

- **Floating WhatsApp Button:** `<a href="https://wa.me/YOUR_NUMBER"...>`
- **Form Submit Handler in JavaScript:**
  ```javascript
  const url = `https://api.whatsapp.com/send?phone=YOUR_NUMBER&text=${encodeURIComponent(message)}`;
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
   Open `index.html` directly, or run `python -m http.server 4173 --bind 127.0.0.1` from this directory and visit [the local preview](http://127.0.0.1:4173). No package installation is needed. Google Fonts and Font Awesome load externally; system font fallbacks remain available.

## Verification

Review at **360, 390, 768, 1024, and 1440 px**, including all three pricing panels. Check for horizontal overflow, the full team image, and usable form controls. Use a keyboard to test the drawer, tab arrows/Home/End, FAQ Enter/Space, and visible focus. Verify missing fields, Arabic/emoji/link encoding, preserved form data, and the blocked-popup fallback. Also check reduced-motion and JavaScript-disabled behavior. The redesign is local; publishing is a separate action.

Calculator checks: Growth at 30,000 EGP spend → 9,500 EGP fee; Scale at 50,000 → 14,500; ads-only at 30,000 → 4,500. Check zero spend, exact caps (20,000 / 40,000), the 100,000 custom-quote boundary, empty/negative values, and decimal inputs. Pressing Enter recalculates without navigating or clearing visitor data.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Developed with ❤️ by <strong>SQUAD MEDIA</strong> & Developed by <a href="https://github.com/seif4d">Seif4D</a>
</p>
