# 🚀 SQUAD MEDIA — Modern Marketing Agency Landing Page

> **تنظيم محلي جديد:** ملفات الموقع مستقلة داخل `landing-page/`. شغّل خادم المعاينة من هذا المجلد، أو من جذر مساحة العمل باستخدام `python -m http.server 4173 --bind 127.0.0.1 --directory landing-page`. نشر GitHub Pages الحالي ما زال يعتمد على وجود **محتويات هذا المجلد** في جذر `main`؛ نقل الملفات محليًا لا يغير الموقع المنشور. خطة لوحة الإدارة موجودة في `../docs/squad-os-plan.md`.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![RTL Supported](https://img.shields.io/badge/Language-Arabic%20(RTL)-008080?style=for-the-badge)](#)

> **SQUAD MEDIA** is an Arabic, RTL landing page for a digital marketing agency. The conversation identity combines an editable vector logo, black/white/lime colors, a CSS-built phone scene, creative service cards, the full team image, accessible pricing tabs, testimonials, native FAQs, and a WhatsApp consultation form. Built with HTML, CSS, and vanilla JavaScript, with no framework, build step, or backend.

---

## 🔗 Live Demo & Links

- **Live Website:** [https://squadmedia.store/](https://squadmedia.store/)
- **GitHub Repository:** [https://github.seif4d.squad_media](https://github.com/seif4d/squad_media)

---

## ✨ Key Features

- 💎 **Conversation Identity:** Neutral black (`#0A0A0A`), white, and lime (`#C9FF16`), large Arabic typography, a phone illustration built in CSS, six solution cards, and a full, uncropped team poster. The two-bubble mark and angular wordmark are SVG redraws based on the supplied identity images, shared across the header, hero, and footer. Illustrations are decorative concepts, not client performance reports.
- 🔖 **Brand Assets:** Editable `brand-mark.svg`, `brand-wordmark.svg`, and `brand-lockup.svg`, plus SVG/ICO browser icons, an Apple touch icon, and a 1200×630 PNG social preview with its SVG source. Sharing titles and descriptions follow the website's “تسويق ذكي. نمو يستحق المشاهدة.” positioning.
- 🗂️ **Portfolio & Project Studies:** Real client work appears before pricing, with Via Cairo Tours (web development) and Dar Alezz in Riyadh (content, design, and ads). Preview images link to the full captures/original creatives and the actual client properties. Native expandable studies explain the task, SQUAD's scope, and visible deliverables without adding unverified campaign metrics. Work sources and attribution are documented in `research/project-sources-2026-10-08.md`.
- 🧩 **Solutions Separate from Packages:** The `#services` section offers social management, Meta ads management, graphic design, visual identity, website design/development, and video/Reels editing. Each has a scoped inquiry CTA and no invented fixed price. The `#pricing` section keeps the approved monthly packages and performance partnership. Contact options group solutions and subscriptions separately; ad budget is required only for requests involving ads. Website requests link to the existing Via Cairo Tours case study.
- 🧮 **Monthly Budget Calculator:** Package fees are fixed at 1,500 / 3,000 / 5,000 EGP. The calculator displays the selected fee and the total including separately paid platform spend. Empty/negative spend prompts a correction; there are no spend caps or percentage surcharges. The calculator appears only when JavaScript is available.
- 💬 **WhatsApp Consultation Form:** Validates the visitor's details and prepares a structured message. The visitor reviews and sends it in WhatsApp. Data stays in the form, and a prepared-message link remains available when popups are blocked; editing a field clears the old link.
- 📊 **Pricing:** Two accessible tabs show monthly packages and a separately scoped performance partnership.
  1. **بداية / Start — 1,500 EGP/month:** 8 post designs with copy, 4 adapted stories, content planning, scheduling/publishing, Meta ad management, and a monthly report.
  2. **نمو / Growth — 3,000 EGP/month:** 12 post designs with copy, 8 adapted stories, Reels, content planning, scheduling/publishing, Meta ad management, a weekly summary, and a monthly report.
  3. **توسّع / Scale — 5,000 EGP/month:** 16 post designs with copy, 12 adapted stories, Reels, content planning, scheduling/publishing, Meta ad management, a weekly summary, a monthly report, and a monthly meeting.

  All packages cover one brand with publishing to Facebook and Instagram. Ad spend is paid separately to the platform. Displayed package prices are after discount for a limited time. Ad management commission is added at 10% of platform spend with a package or 20% without one. Reels appear only from Growth, with no public count or duration. No campaign counts, spend caps, or revision limits are advertised. The old 14-day trial and priced standalone ads offer were removed at the user's request; individual services now have scoped quotes in the solutions section. Photography, inbox handling, bots, CRM, and third-party subscriptions remain separate services. Package buttons preselect the service in the contact form and include its current name and price in the prepared WhatsApp message. See `research/pricing-update-2026-10-12.md` and its commission correction dated 13 October for the adopted specification.
- 🎨 **Native Form Controls:** Visible labels and dark native selects with browser validation, touch, and keyboard support.
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
├── img/                  # Brand vectors, browser icons, social preview, team photo
│   ├── brand-mark.svg
│   ├── brand-wordmark.svg
│   ├── brand-lockup.svg
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── social-preview.svg
│   ├── social-preview.png
│   ├── work/             # Actual client website captures and published creatives
│   └── team.png
└── README.md             # Project documentation
```

---

## ⚙️ Customization Guide

### 1. Changing Colors & Styling Variables
Theme variables are centralized at the beginning of `styles.css`:

```css
:root {
    --primary: #C9FF16;             /* Neon Accent Color */
    --primary-hover: #dcff70;       /* Hover Accent Color */
    --bg-base: #0a0a0a;             /* Main Background */
    --text-main: #f5f5f2;           /* Heading & Primary Text */
    --text-muted: #adada7;          /* Secondary Muted Text */
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

4. **Keep deployed assets in sync:** The CSS and JavaScript URLs in `index.html` include a `?v=` content version so returning visitors do not combine new markup with cached old styling. After editing either file, update its version to the first 12 characters of that file's SHA-256 hash before publishing. The logo also has safe intrinsic dimensions if styling is temporarily unavailable.

## Verification

Review at **360, 390, 768, 1024, and 1440 px**, including both pricing panels. Check for horizontal overflow, the full team image, and usable form controls. Use a keyboard to test the drawer, tab arrows/Home/End, FAQ Enter/Space, and visible focus. Verify missing fields, Arabic/emoji/link encoding, preserved form data, and the blocked-popup fallback. Also check reduced-motion and JavaScript-disabled behavior. GitHub Pages publishes the repository root from `main` to `https://squadmedia.store/`; pushing to `main` triggers deployment.

Calculator checks: Start with 3,000 EGP platform spend → 1,500 package + 300 commission / 4,800 total; Growth with 30,000 → 3,000 package + 3,000 commission / 36,000 total; Scale with 50,000 → 5,000 package + 5,000 commission / 60,000 total. Ads without a package with 10,000 spend → 2,000 commission / 12,000 total. Verify zero, amounts above 100,000, decimal inputs, and empty/negative values. Package fees stay fixed; commission is 10% of the entire platform spend with a package and 20% without one. Commission is rounded to piastres, and the total sums the displayed line items. Enter recalculates without navigating or clearing visitor data. Check both pricing tabs, all three package CTAs, and the current service/price in the WhatsApp fallback message.

Solutions checks: every service CTA selects its matching contact option. Website/design/identity/video/social-only inquiries hide and disable the ad budget field and omit it from WhatsApp. Meta ads and monthly packages restore the budget field and its required state without clearing entered values. Check the website case-study link and separate navigation labels at mobile, tablet, and desktop widths.

Portfolio checks: both project studies open with click, Enter, and Space, and remain usable without JavaScript. Verify previews and full-image links, the mobile navigation link, the consultation CTA, and expanded studies at 320–1440 px. Keep the layout viewport equal to the emulated mobile width to catch automatic browser zoom caused by overflowing content.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Developed with ❤️ by <strong>SQUAD MEDIA</strong> & Developed by <a href="https://github.com/seif4d">Seif4D</a>
</p>
