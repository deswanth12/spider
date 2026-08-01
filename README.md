<div align="center">

  # 🕷️ SPIDER-MAN: PETER PARKER MULTIVERSE SHOWCASE 🕸️
  ### *An Ultra-Cinematic 100vh Full-Viewport Web Experience*

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Web Audio API](https://img.shields.io/badge/Web_Audio_API-000000?style=for-the-badge&logo=webaudio&logoColor=red)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
  [![Canvas API](https://img.shields.io/badge/Canvas_API-020408?style=for-the-badge&logo=canvas&logoColor=cyan)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.style=for-the-badge)](LICENSE)

  <br />

  **[🌐 Live Demo](https://deswanth12.github.io/spider/)** • **[📖 Chapter Guide](#-cinematic-movie-chapters-act-i---act-v)** • **[🚀 Quick Start](#-quick-start)**

</div>

---

## 🌟 Overview

**Spider-Man: Peter Parker Multiverse Showcase** is a hyper-cinematic, 100vh full-viewport interactive web showcase built using vanilla HTML5, custom CSS design tokens, physics-based 2D HTML5 Canvas rendering engines, Web Audio sound synthesis, and the Web Speech API.

Designed as an homage to Classic Peter Parker and the Multiverse Spider-Verse, this application abandons traditional commercial landing page templates in favor of **5 Discrete Viewport Movie Chapters (ACT I — ACT V)** with mandatory scroll snapping, widescreen letterboxing, and interactive 3D artifacts.

---

## ✨ Key Feature Highlights

### 🎬 1. Full-Viewport Movie Chapter Architecture (ACT I — ACT V)
- **Cinematic Letterboxing (`.cinematic-bar`)**: Widescreen top and bottom film bars framing every scene.
- **Mandatory Scroll Snapping (`scroll-snap-type: y mandatory`)**: Discrete 100vh chapter transitions.
- **Atmospheric Layers**: Procedural SVG lightning storm generator, film grain overlay, vignette mask, CRT scanlines, and vertical Japanese typography side rails (`親愛なる隣人`).

### 👁️ 2. Interactive SVG Spider Eye Lens Transformer Engine
- **Morphing Lens Geometry**: Click to morph between 4 iconic Spider-Man lenses (*Classic Mesh*, *Battle Focus Mode*, *Spider-Sense Warning*, and *Stark HUD Target Lock*).
- **HUD Indicator**: Live SVG path interpolation paired with dynamic color glow and sound effects.

### 🕸️ 3. Physics-Based Web-Shooting Canvas (`THWIP!`)
- **Elastic Node Tension**: Click and drag anywhere across the screen to shoot high-tensile web strands.
- **Particle Decay & Spring Physics**: Realistic string tension dampening with web droplet embers.

### 🎨 4. Multiverse Suit Vault with Live Theme Shifting
- **Interactive Suits**: *Classic Red & Blue (1962)*, *Black Symbiote (1984)*, *Iron Spider Nanotech (2006)*, and *Miles Morales (2011)*.
- **Instant Palette Shift**: Equipping any suit mutates CSS root color variables (`--spider-red`, `--border-glow`) and dynamically swaps the hero background & character cards.

### ⚡ 5. Spider-Sense Overdrive & Web Audio Synthesizer
- **Danger Warning Alarm**: Press `SPACEBAR` or click `⚡ SPIDER-SENSE OVERDRIVE` to unleash radiating golden shockwave pulses.
- **Synthesized Audio Engine**: Real-time Web Audio API generation for `THWIP!` whip snaps, thunder rumbles, and Spider-Sense alarms.

### 🗣️ 6. Web Speech API Character Dialogue
- **Interactive Speech Synthesis**: Click any villain card (*Green Goblin*, *Doc Ock*, *Venom*, *Mysterio*) or lore card to hear Spider-Man speak hero voice lines out loud!

### 👾 7. Spider-Verse Glitch Mode
- **RGB Chromatic Aberration**: Toggle `👾 GLITCH` in the header for instant Spider-Verse glitch distortion.

---

## 🎬 Cinematic Movie Chapters (ACT I - ACT V)

| Chapter | Title | Description |
|---|---|---|
| **ACT I** | **序章 — PROLOGUE** | Fullscreen hero stage with moon glow, storm lightning, and hero card frame. |
| **ACT II** | **蜘蛛の眼 — OPTICAL ARTIFACT** | Fullscreen interactive SVG eye lens transformation stage with target lock. |
| **ACT III** | **蜘蛛の巣 — PHYSICS CANVAS** | Fullscreen interactive elastic web-shooting canvas playground (`THWIP!`). |
| **ACT IV** | **マルチバース — SUIT VAULT** | Fullscreen 4-suit transformation vault with live theme color shifting. |
| **ACT V** | **宿敵たちの宴 — ROGUE GALLERY** | Fullscreen villain gallery featuring high-res movie portraits and neon auras. |

---

## 📂 Repository Directory Structure

```ascii
spider/
├── index.html              # Main HTML5 document with Act I - Act V chapter stages
├── style.css               # CSS design system, tokens, 100vh chapter layouts & animations
├── script.js               # Canvas physics, storm generator, suit engine & sound synth
├── README.md               # Super professional GitHub documentation
├── LICENSE                 # MIT License file
├── hero-action.png         # Main Spider-Man hero action banner
├── suit-classic.png        # Classic Red & Blue Suit asset
├── suit-symbiote.png       # Black Symbiote Suit asset
├── suit-iron.png           # Iron Spider Nanotech Suit asset
├── suit-miles.png          # Miles Morales Spider-Verse Suit asset
├── power-sense.jpg         # Spider-Sense precognition asset
├── power-web.jpg           # Web-slinging action asset
├── power-wall.jpg          # Wall-crawling skyscraper asset
├── rogue-goblin.jpg        # Green Goblin portrait asset
├── rogue-docock.jpg        # Doctor Octopus portrait asset
├── rogue-venom.jpg         # Venom portrait asset
└── rogue-mysterio.jpg      # Mysterio portrait asset
```

---

## 🚀 Quick Start Guide

### Option 1: View Online
Visit the live GitHub Pages link: **[https://deswanth12.github.io/spider/](https://deswanth12.github.io/spider/)**

### Option 2: Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/deswanth12/spider.git
   cd spider
   ```
2. **Start a local development server:**
   ```bash
   python -m http.server 8080
   ```
3. **Open in browser:**
   Navigate to `http://localhost:8080/` in your browser.

---

## 🛠️ Technology Stack

- **Frontend Core**: Semantic HTML5, Vanilla JavaScript (ES6+)
- **Styling & Design System**: Vanilla CSS3, CSS Custom Properties, Glassmorphism, HSL Color Math
- **Graphics & Physics**: HTML5 2D Canvas API, Procedural SVG Path Interpolation
- **Audio & Speech**: Web Audio API (Oscillators, Biquad Filters, Noise Buffers), Web Speech Synthesis API
- **Typography**: Google Fonts (*Cinzel*, *Bebas Neue*, *Shippori Mincho*, *Space Grotesk*)

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<div align="center">
  <sub>Created with ❤️ and Spider-Sense by Deswanth. Friendly Neighborhood Hero.</sub>
</div>
