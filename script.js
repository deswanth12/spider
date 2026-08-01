/* ═════════════════════════════════════════════════════════════════════
   SPIDER-MAN: CLASSIC PETER PARKER — ULTRA-CINEMATIC JS ENGINE
   ═════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════ 1. PRELOADER ════════════ */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderPct = document.getElementById('loaderPct');
  
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      setTimeout(() => {
        loader.classList.add('done');
      }, 500);
    }
    loaderFill.style.width = `${progress}%`;
    loaderPct.textContent = String(progress).padStart(2, '0');
  }, 40);

  /* ════════════ 2. PROCEDURAL LIGHTNING BOLT SYSTEM ════════════ */
  const stormFlash = document.getElementById('stormFlash');
  const stormBolt = document.getElementById('stormBolt');
  const boltPath = document.getElementById('boltPath');
  const boltGlow = document.getElementById('boltGlow');

  function generateLightningPath() {
    let x = Math.random() * 800 + 100;
    let y = 0;
    let path = `M ${x} ${y}`;
    
    while (y < 900) {
      x += (Math.random() - 0.5) * 90;
      y += Math.random() * 60 + 30;
      path += ` L ${x} ${y}`;
      
      if (Math.random() > 0.8) {
        let bx = x;
        let by = y;
        let branchPath = ` M ${bx} ${by}`;
        for (let b = 0; b < 3; b++) {
          bx += (Math.random() - 0.5) * 70;
          by += Math.random() * 40 + 20;
          branchPath += ` L ${bx} ${by}`;
        }
        path += branchPath + ` M ${x} ${y}`;
      }
    }
    return path;
  }

  function strikeLightning() {
    if (!boltPath || !stormFlash) return;
    const pathD = generateLightningPath();
    boltPath.setAttribute('d', pathD);
    if (boltGlow) boltGlow.setAttribute('d', pathD);

    stormFlash.style.opacity = '0.9';
    stormBolt.style.opacity = '1';

    playThunderSound();

    setTimeout(() => {
      stormFlash.style.opacity = '0';
      stormBolt.style.opacity = '0';
      setTimeout(() => {
        if (Math.random() > 0.4) {
          stormFlash.style.opacity = '0.6';
          stormBolt.style.opacity = '0.8';
          setTimeout(() => {
            stormFlash.style.opacity = '0';
            stormBolt.style.opacity = '0';
          }, 70);
        }
      }, 90);
    }, 120);
  }

  function scheduleLightning() {
    const delay = Math.random() * 7000 + 5000;
    setTimeout(() => {
      strikeLightning();
      scheduleLightning();
    }, delay);
  }
  scheduleLightning();

  /* ════════════ 3. BOTTOM VIEWPORT WEB HEM CANVAS ════════════ */
  const webHemCanvas = document.getElementById('webHemCanvas');
  const hemCtx = webHemCanvas.getContext('2d');

  function resizeHemCanvas() {
    webHemCanvas.width = window.innerWidth;
    webHemCanvas.height = window.innerHeight * 0.09;
  }
  resizeHemCanvas();
  window.addEventListener('resize', resizeHemCanvas);

  class HemParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * webHemCanvas.width;
      this.y = webHemCanvas.height + Math.random() * 10;
      this.vy = -(Math.random() * 1.5 + 0.5);
      this.vx = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.7 + 0.3;
    }
    update() {
      this.y += this.vy;
      this.x += this.vx;
      this.alpha -= 0.015;
      if (this.alpha <= 0 || this.y < 0) {
        this.reset();
      }
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = '#ff2b34';
      ctx.shadowColor = '#ff2b34';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const hemParticles = Array.from({ length: 40 }, () => new HemParticle());

  function animateHemCanvas() {
    hemCtx.clearRect(0, 0, webHemCanvas.width, webHemCanvas.height);
    hemParticles.forEach(p => {
      p.update();
      p.draw(hemCtx);
    });
    requestAnimationFrame(animateHemCanvas);
  }
  animateHemCanvas();

  /* ════════════ 4. SPIDER EYE LENS TRANSFORMATIONS ════════════ */
  const eyePath = document.getElementById('eyePath');
  const eyeLabel = document.getElementById('eyeLabel');
  const eyeBtns = document.querySelectorAll('.eye-btn');

  const eyeShapes = {
    classic: { d: "M15 45 C15 25 50 15 85 45 C85 65 50 85 15 45 Z", color: "#ff2b34" },
    battle: { d: "M20 50 C20 38 50 28 80 50 C80 58 50 70 20 50 Z", color: "#e62429" },
    sense: { d: "M10 40 C10 15 50 5 90 40 C90 75 50 95 10 40 Z", color: "#ffd700" },
    iron: { d: "M25 45 L50 20 L75 45 L50 75 Z", color: "#00d2ff" }
  };

  eyeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eyeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const eyeType = btn.dataset.eye;
      const data = eyeShapes[eyeType];
      if (eyePath && data) {
        eyePath.setAttribute('d', data.d);
        eyePath.setAttribute('fill', data.color);
        if (eyeLabel && btn.dataset.label) {
          eyeLabel.textContent = btn.dataset.label;
        }
        playThwipSound();
      }
    });
  });

  /* ════════════ 5. CUSTOM CURSOR ════════════ */
  const cursor = document.getElementById('cursor');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverables = document.querySelectorAll('a, button, .suit-card, .power-card, .rogue-card, .eye-canvas-wrapper');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });

  /* ════════════ 6. WEB AUDIO SYNTHESIZER ════════════ */
  let audioCtx = null;
  let soundEnabled = false;
  const soundToggle = document.getElementById('soundToggle');
  const soundState = document.getElementById('soundState');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  soundToggle.addEventListener('click', () => {
    initAudio();
    soundEnabled = !soundEnabled;
    soundToggle.setAttribute('aria-pressed', soundEnabled);
    soundState.textContent = soundEnabled ? 'ON' : 'OFF';
    if (soundEnabled) {
      playThwipSound();
    }
  });

  function playThunderSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(20, now + 1.2);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      console.warn(e);
    }
  }

  function playThwipSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const bufferSize = audioCtx.sampleRate * 0.12;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(3500, now + 0.05);
      filter.Q.value = 3.5;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.11);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      whiteNoise.start(now);
    } catch (e) {
      console.warn(e);
    }
  }

  function playSpiderSenseSound() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn(e);
    }
  }

  /* ════════════ 7. WEB SHOOTING CANVAS PHYSICS ════════════ */
  const webCanvas = document.getElementById('webCanvas');
  const webCtx = webCanvas.getContext('2d');

  function resizeWebCanvas() {
    webCanvas.width = window.innerWidth;
    webCanvas.height = window.innerHeight;
  }
  resizeWebCanvas();
  window.addEventListener('resize', resizeWebCanvas);

  class WebStrand {
    constructor(startX, startY, endX, endY, color = '#70e0ff') {
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
      this.color = color;
      this.life = 1.0;
      this.decay = 0.015;
      this.nodes = [];
      this.createNodes();
    }

    createNodes() {
      const count = 12;
      for (let i = 0; i <= count; i++) {
        const t = i / count;
        this.nodes.push({
          x: this.startX + (this.endX - this.startX) * t,
          y: this.startY + (this.endY - this.startY) * t,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3
        });
      }
    }

    update() {
      this.life -= this.decay;
      for (let i = 1; i < this.nodes.length - 1; i++) {
        const node = this.nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.92;
        node.vy *= 0.92;
      }
    }

    draw(ctx) {
      if (this.life <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.life;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2 * this.life;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 12;

      ctx.beginPath();
      ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
      for (let i = 1; i < this.nodes.length - 1; i++) {
        const xc = (this.nodes[i].x + this.nodes[i + 1].x) / 2;
        const yc = (this.nodes[i].y + this.nodes[i + 1].y) / 2;
        ctx.quadraticCurveTo(this.nodes[i].x, this.nodes[i].y, xc, yc);
      }
      ctx.lineTo(this.nodes[this.nodes.length - 1].x, this.nodes[this.nodes.length - 1].y);
      ctx.stroke();

      this.nodes.forEach((node, idx) => {
        if (idx % 3 === 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2 * this.life, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      });
      ctx.restore();
    }
  }

  const webStrands = [];
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let currentColor = '#70e0ff';

  window.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    playThwipSound();
    triggerSpiderSensePulse(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist > 25) {
      webStrands.push(new WebStrand(lastX, lastY, e.clientX, e.clientY, currentColor));
      lastX = e.clientX;
      lastY = e.clientY;
      playThwipSound();
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  function animateWebCanvas() {
    webCtx.clearRect(0, 0, webCanvas.width, webCanvas.height);
    for (let i = webStrands.length - 1; i >= 0; i--) {
      const strand = webStrands[i];
      strand.update();
      strand.draw(webCtx);
      if (strand.life <= 0) {
        webStrands.splice(i, 1);
      }
    }
    requestAnimationFrame(animateWebCanvas);
  }
  animateWebCanvas();

  /* ════════════ 8. SPIDER-SENSE CANVAS ENGINE & OVERDRIVE ════════════ */
  const senseCanvas = document.getElementById('spiderSenseCanvas');
  const senseCtx = senseCanvas.getContext('2d');

  function resizeSenseCanvas() {
    senseCanvas.width = window.innerWidth;
    senseCanvas.height = window.innerHeight;
  }
  resizeSenseCanvas();
  window.addEventListener('resize', resizeSenseCanvas);

  const sensePulses = [];

  class SpiderSensePulse {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 10;
      this.life = 1.0;
      this.color = '#ffd700';
    }
    update() {
      this.radius += 5;
      this.life -= 0.025;
    }
    draw(ctx) {
      if (this.life <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.life;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      const count = 10;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const r = this.radius + (Math.random() - 0.5) * 15;
        const ax = this.x + Math.cos(angle) * r;
        const ay = this.y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(ax, ay);
        else ctx.lineTo(ax, ay);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  }

  function triggerSpiderSensePulse(x, y) {
    sensePulses.push(new SpiderSensePulse(x, y));
    playSpiderSenseSound();
  }

  function animateSenseCanvas() {
    senseCtx.clearRect(0, 0, senseCanvas.width, senseCanvas.height);
    for (let i = sensePulses.length - 1; i >= 0; i--) {
      const pulse = sensePulses[i];
      pulse.update();
      pulse.draw(senseCtx);
      if (pulse.life <= 0) {
        sensePulses.splice(i, 1);
      }
    }
    requestAnimationFrame(animateSenseCanvas);
  }
  animateSenseCanvas();

  // Spider Sense Overdrive Trigger
  const btnSenseTrigger = document.getElementById('btnSenseTrigger');
  function triggerSpiderSenseOverdrive() {
    initAudio();
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        triggerSpiderSensePulse(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 80);
    }
  }

  if (btnSenseTrigger) {
    btnSenseTrigger.addEventListener('click', triggerSpiderSenseOverdrive);
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      triggerSpiderSenseOverdrive();
    }
  });

  /* ════════════ 9. INTERACTIVE SUIT VAULT ════════════ */
  const suitCards = document.querySelectorAll('.suit-card');
  const heroBgImg = document.getElementById('heroBgImg');
  const heroCardImg = document.getElementById('heroCardImg');

  suitCards.forEach(card => {
    card.addEventListener('click', () => {
      suitCards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.suit-card__btn').textContent = 'EQUIP SUIT';
      });

      card.classList.add('active');
      card.querySelector('.suit-card__btn').textContent = 'EQUIPPED';

      const suitType = card.dataset.suit;
      const suitImg = card.dataset.img;

      playThwipSound();

      // Dynamic Hero Image Switcher
      if (suitImg && heroBgImg && heroCardImg) {
        heroBgImg.style.opacity = '0';
        heroCardImg.style.opacity = '0';
        setTimeout(() => {
          heroBgImg.src = suitImg;
          heroCardImg.src = suitImg;
          heroBgImg.style.opacity = '0.35';
          heroCardImg.style.opacity = '1';
        }, 300);
      }

      // Dynamic Theme Color Switcher
      if (suitType === 'symbiote') {
        document.documentElement.style.setProperty('--spider-red', '#a855f7');
        document.documentElement.style.setProperty('--spider-red-hot', '#c084fc');
        document.documentElement.style.setProperty('--border-glow', 'rgba(168, 85, 247, 0.35)');
        currentColor = '#c084fc';
      } else if (suitType === 'iron') {
        document.documentElement.style.setProperty('--spider-red', '#ffd700');
        document.documentElement.style.setProperty('--spider-red-hot', '#ffea70');
        document.documentElement.style.setProperty('--border-glow', 'rgba(255, 215, 0, 0.35)');
        currentColor = '#ffd700';
      } else if (suitType === 'miles') {
        document.documentElement.style.setProperty('--spider-red', '#ff0055');
        document.documentElement.style.setProperty('--spider-red-hot', '#00f0ff');
        document.documentElement.style.setProperty('--border-glow', 'rgba(0, 240, 255, 0.4)');
        currentColor = '#00f0ff';
      } else {
        document.documentElement.style.setProperty('--spider-red', '#e62429');
        document.documentElement.style.setProperty('--spider-red-hot', '#ff2b34');
        document.documentElement.style.setProperty('--border-glow', 'rgba(230, 36, 41, 0.3)');
        currentColor = '#70e0ff';
      }
    });
  });

  /* ════════════ 10. SPIDER-VERSE GLITCH MODE TOGGLE ════════════ */
  const glitchToggle = document.getElementById('glitchToggle');
  if (glitchToggle) {
    glitchToggle.addEventListener('click', () => {
      document.body.classList.toggle('glitch-active');
      playThwipSound();
    });
  }

  /* ════════════ 11. CHARACTER VOICE / SPEECH SYNTHESIS ════════════ */
  function speakCharacterLine(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }

  const rogueCards = document.querySelectorAll('.rogue-card');
  rogueCards.forEach(card => {
    card.addEventListener('click', () => {
      const rogueName = card.querySelector('.rogue-name').textContent;
      speakCharacterLine(`${rogueName}! I won't let you hurt this city!`);
      playThwipSound();
    });
  });

  const timelineCards = document.querySelectorAll('.timeline-card');
  timelineCards.forEach(card => {
    card.addEventListener('click', () => {
      const text = card.querySelector('.timeline-title').textContent;
      speakCharacterLine(text);
      playSpiderSenseSound();
    });
  });

});
