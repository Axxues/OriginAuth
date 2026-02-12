# Nexus Auth | Premium Light Glass UI Kit

**Nexus Auth** is a high-performance, light-mode Authentication UI Kit crafted by **Zero Bloat UI**. It features a sophisticated glassmorphism aesthetic, interactive ambient lighting, and robust real-time form validation—all engineered with a performance-first mindset to fit perfectly on any screen without scrolling.

**"Elevate your entry point with crystalline precision."**

## Key Features

### Crystalline Visuals

* **Ambient Refraction:** Fluid, rotating background gradients that simulate light refracting through glass, providing depth without heavy assets.
* **High-Fidelity Glassmorphism:** Clean, ultra-blurred surfaces with frosted borders for a premium, modern feel.

### Zero Bloat Architecture

* **Vanilla Stack:** Built with pure HTML5, Bootstrap 5 (Grid/Utilities only), and optimized Vanilla JavaScript.
* **No Scrolling:** Specifically engineered using dynamic viewport units (`dvh`) to fit entirely within the viewport height on both desktop and mobile.

### Advanced Interactivity

* **Spring-Physics Animations:** Staggered entrance sequences and 3D card perspective shifts that feel "snappy" and high-end.
* **Haptic Validation:** The UI utilizes "Shake" physics to communicate errors and scaling success icons for valid inputs.
* **Adaptive UX:** Intelligent "See Password" positioning and transparent floating labels that prevent text overlap and ensure 100% readability.

---

## Quick Start

### Option 1: Direct Usage (Local Assets)

This template is pre-configured to run offline using the local `assets/` directory.

1. Clone the repository.
2. Open `login.html`, `register.html`, or `forgot-password.html` in your browser.
3. That's it!

### Option 2: Production Integration

To integrate this into a modern web project (React, Vue, ASP.NET Core):

1. Link `style.css` and `main.js` to your project structure.
2. Copy the CSS variables from the `:root` section of `style.css` into your global stylesheet.
3. Extract the semantic HTML structure into your specific framework components.

---

## Customization

### Changing the Color Scheme

**Nexus Auth** uses a **Blue-to-Indigo** gradient by default. To change the brand color globally, modify the CSS variables in `style.css`:

```css
:root {
    --primary: #2563eb;
    --primary-gradient: linear-gradient(135deg, #2563eb, #4f46e5);
}

```

### Modifying Validation Logic

Global validation rules, real-time feedback thresholds, and password strength requirements are centrally managed within `assets/js/main.js`.

---

## Browser Support

Nexus Auth utilizes modern CSS features like `backdrop-filter`, `dvh` units, and CSS variables.

Browser      Support
**Chrome**   Latest 
**Firefox**  Latest 
**Safari**   Latest 
**Edge**     Latest 
