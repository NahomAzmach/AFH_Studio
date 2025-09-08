# AFH Web Studio — SaaS Landing Site (Markdown Build Spec)

> **Purpose:** A single, comprehensive Markdown document you can paste into `README.md` (or keep as `SPEC.md`) inside a Replit project. It describes and contains the exact content, structure, and code snippets for a simple, robust SaaS landing website that markets your Adult Family Home (AFH) web‑design service. It showcases template demos (including your completed **Everbloom** site), explains the tech stack, and provides copy you can use directly.

---

## How to Use This in Replit (Quick Start)

1. **Create a new Repl** → choose the **HTML, CSS, JS** template (no frameworks).
2. **Add files/folders** as shown in the *File Structure* section below.
3. **Copy/paste** the HTML skeletons into their respective files (`index.html`, `templates.html`, etc.).
4. **Copy/paste** the CSS and JS from the *Styles (styles.css)* and *JavaScript (app.js)* sections.
5. Replace demo image paths with your own assets in `/img`.
6. Update any placeholder links for your live template demos (keep **Everbloom** as a real demo).
7. Click **Run** → Replit serves your static site. Adjust copy and assets as needed.

> **Note:** This SaaS site promotes your AFH websites (including the one you already built at `https://everbloomcare.replit.app`).

---

## Brand & Audience

**Product Name (working):** AFH Web Studio  
**Tagline:** “Beautiful, compliant, and conversion‑ready websites for Adult Family Homes.”  
**Audience:** AFH & Assisted Living owners/operators.  
**Value Prop:** Fast launch, tailored content, accessibility‑minded design, measurable results (booked tours/calls), simple monthly plan with updates/support.

**Tone:** Warm, trustworthy, professional, jargon‑free.

---

## Simple Tech Stack (Replit‑Friendly)

- **HTML5 + CSS3 + Vanilla JavaScript** (single CSS, single JS)  
- **No build tools, no frameworks** (fewer moving parts, fewer bugs)  
- Optional embeds: a single Calendly iframe or Google Maps iframe  
- Local images only (WebP/JPEG), compressed

**Performance & Stability**  
- Mobile‑first styles; minimal CSS transitions (opacity/transform)  
- Defer JS; no blocking scripts  
- Accessible components (semantic HTML, keyboard focus, ARIA labels)

---

## Site Map

1. **Home** (`index.html`) — Hero, pains→solutions, trust, demos, CTA
2. **Templates** (`templates.html`) — Interactive gallery + live previewer modal
3. **Features** (`features.html`) — What’s included (SEO, forms, updates, accessibility)
4. **Pricing** (`pricing.html`) — Plans + included matrix, FAQ, CTA
5. **Case Studies** (`case-studies.html`) — Before/after, Everbloom spotlight
6. **About** (`about.html`) — Your story, process, values
7. **Contact/Start** (`contact.html`) — Short intake form + booking link
8. **Legal** (`privacy.html`, `terms.html`) — Plain‑language policies

---

## File Structure

```
/
├─ index.html
├─ templates.html
├─ features.html
├─ pricing.html
├─ case-studies.html
├─ about.html
├─ contact.html
├─ privacy.html
├─ terms.html
├─ /css
│  └─ styles.css
├─ /js
│  └─ app.js
└─ /img
   ├─ logos/
   ├─ screenshots/
   └─ placeholders/
```

---

## Global Layout Snippets

### 1) Site Header (include on every page)
```html
<header class="site-header">
  <a class="logo" href="/">AFH Web Studio</a>
  <nav class="nav" aria-label="Main">
    <a href="/templates.html">Templates</a>
    <a href="/features.html">Features</a>
    <a href="/pricing.html">Pricing</a>
    <a href="/case-studies.html">Case Studies</a>
    <a href="/about.html">About</a>
    <a class="btn" href="/contact.html">Start My Site</a>
    <button id="themeToggle" class="icon-button" aria-pressed="false" aria-label="Toggle theme">🌓</button>
  </nav>
</header>
```

### 2) Site Footer (include on every page)
```html
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <h4>AFH Web Studio</h4>
      <p>Beautiful, compliant, conversion‑ready websites for Adult Family Homes.</p>
    </div>
    <div>
      <h5>Pages</h5>
      <ul>
        <li><a href="/templates.html">Templates</a></li>
        <li><a href="/features.html">Features</a></li>
        <li><a href="/pricing.html">Pricing</a></li>
        <li><a href="/case-studies.html">Case Studies</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>
    <div>
      <h5>Legal</h5>
      <ul>
        <li><a href="/privacy.html">Privacy</a></li>
        <li><a href="/terms.html">Terms</a></li>
      </ul>
    </div>
  </div>
  <p class="tiny">© <span id="year"></span> AFH Web Studio. All rights reserved.</p>
</footer>
```

---

## Page Content (Copy + Sections)

### Home — `index.html`
```html
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AFH Web Studio — Adult Family Home Websites</title>
  <meta name="description" content="Beautiful, compliant, conversion‑ready AFH websites with fast launch and ongoing updates." />
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
  <!-- Header -->
  <!-- paste global header here -->

  <main>
    <section class="hero">
      <h1>Launch an Adult Family Home website you’re proud of—this week.</h1>
      <p>Done‑for‑you design, content, and updates so you can focus on care.</p>
      <div class="actions">
        <a class="btn" href="/contact.html">Start My Site</a>
        <a class="btn ghost" href="/templates.html">See Templates</a>
      </div>
    </section>

    <section class="pains">
      <h2>Common Challenges We Solve</h2>
      <div class="grid3">
        <article class="card">
          <h3>Outdated or unclear</h3>
          <p>Families can’t quickly tell what you offer, your rooms, or how to book a tour.</p>
        </article>
        <article class="card">
          <h3>Hard to keep updated</h3>
          <p>Menu changes, new activities, or staffing updates shouldn’t take weeks.</p>
        </article>
        <article class="card">
          <h3>Low calls or tour requests</h3>
          <p>Your site should encourage action with clear buttons and friendly copy.</p>
        </article>
      </div>
    </section>

    <section class="solutions">
      <h2>Simple, Effective AFH Websites</h2>
      <ul class="benefits">
        <li>Modern design with clear services & amenities</li>
        <li>Click‑to‑call and tour request options</li>
        <li>SEO basics and fast loading</li>
        <li>Accessibility‑minded (contrast, keyboard nav, alt text)</li>
      </ul>
    </section>

    <section class="trust">
      <h2>Built for AFHs</h2>
      <div class="bar">
        <span>Mobile‑ready</span>
        <span>Fast & lightweight</span>
        <span>Friendly support</span>
        <span>No PHI collection</span>
      </div>
    </section>

    <section class="live-demos">
      <h2>Live Demos</h2>
      <div class="gallery">
        <article class="card template">
          <img src="/img/screenshots/everbloom-thumb.webp" alt="Everbloom Care demo thumbnail" />
          <h3>Everbloom Care</h3>
          <p>Warm, welcoming design with clear services and tour prompts.</p>
          <div class="actions">
            <button class="btn" data-preview-url="https://everbloomcare.replit.app">Live Preview</button>
            <a class="btn ghost" href="/contact.html?template=everbloom">Use This Template</a>
          </div>
        </article>
        <article class="card template">
          <img src="/img/screenshots/cedar-grove-thumb.webp" alt="Cedar Grove template preview" />
          <h3>Cedar Grove Living</h3>
          <p>Nature‑forward layout with large hero and services icons.</p>
          <div class="actions">
            <button class="btn" data-preview-url="https://example-cedar-grove.replit.app">Live Preview</button>
            <a class="btn ghost" href="/contact.html?template=cedar-grove">Use This Template</a>
          </div>
        </article>
        <!-- Add Maple & Stone, Sunrise Orchard, Bluebird Haven cards similarly -->
      </div>
      <div class="cta-center">
        <a class="btn" href="/templates.html">Browse All Templates</a>
      </div>
    </section>

    <section class="mini-case">
      <h2>Recent Outcome</h2>
      <p><strong>+40% tour inquiries</strong> after a simple redesign with clearer buttons and services highlights.</p>
    </section>

    <section class="cta">
      <h2>Ready to Get Started?</h2>
      <p>Pick a template and we’ll tailor it to your home—copy, photos, and colors.</p>
      <a class="btn" href="/contact.html">Start My Site</a>
    </section>
  </main>

  <!-- Previewer Modal -->
  <div id="previewer" class="modal" aria-hidden="true" role="dialog" aria-labelledby="previewTitle">
    <div class="modal-body" role="document">
      <header class="modal-head">
        <h2 id="previewTitle">Live Preview</h2>
        <div class="modes">
          <button data-mode="desktop" aria-pressed="true">Desktop</button>
          <button data-mode="mobile">Mobile</button>
        </div>
        <button class="close" aria-label="Close">&times;</button>
      </header>
      <iframe id="previewFrame" title="Template preview" loading="lazy"></iframe>
    </div>
  </div>

  <!-- Footer -->
  <!-- paste global footer here -->

  <script defer src="/js/app.js"></script>
</body>
</html>
```

### Templates — `templates.html`
- Same header/footer. Top intro: “Choose a starting point. We’ll tailor the colors, photos, and copy to your home.”  
- Grid of **template cards** (use the same card markup as on the Home page).
- Include **Everbloom** demo and 3–4 additional templates with `data-preview-url` values pointing to live demos.  
- Reuse the **Previewer Modal** block and `app.js` behaviors.

### Features — `features.html`
**What You Get (cards):**
- **Design & Copy:** Homepage, Services, Rooms/Amenities, About, Testimonials, Contact  
- **Lead Gen:** Click‑to‑call, contact form, tour booking link  
- **SEO Basics:** Titles, meta, structured content, fast images  
- **Updates & Support:** Monthly changes, security checks, uptime monitoring  
- **Accessibility‑minded:** Large text, contrast, keyboard nav, alt text

**Why AFH‑Specific?**
- Content tuned for families choosing care  
- Clear services, staffing, meals, activities, safety & oversight  
- Simple map/directions and repeated tour prompts

**Security & Privacy**
- “We don’t collect PHI. Inquiry forms are limited to contact details and questions.”

### Pricing — `pricing.html`
**Plans (3 columns):**
- **Starter** — Launch + 1 month of updates  
- **Standard** — Launch + monthly updates & hosting  
- **Plus** — Standard + photo refresh, quarterly copy tune‑ups, priority support

**Included Matrix:** pages included, update hours/month, SEO basics, analytics, uptime, SLA.

**FAQ:** How fast can we launch? Can you use my logo/photos? Domain setup? Do you write copy? Cancel anytime?

**CTA:** “Start my site” → `/contact.html`

### Case Studies — `case-studies.html`
**Everbloom Spotlight**  
- 2–3 screenshots (home/services/contact) with captions  
- Outcome bullets (e.g., “Clear services; tour button always visible; welcoming visuals”)  
- **View the live site** → opens previewer

**Short Before/After Cards**  
- Headline clarity, above‑the‑fold phone number, simplified services, trust elements

### About — `about.html`
**Your Story & Process**  
- AFH‑focused builder who cares about clear, helpful websites  
- 4‑step process: **Pick Template → Customize → QA & Launch → Ongoing Care**  
- Values: clarity, empathy, speed, reliability

### Contact / Start — `contact.html`
```html
<main class="narrow">
  <h1>Start Your Website</h1>
  <p>Tell us a bit about your home—we’ll respond within 24 hours.</p>
  <form data-validate method="post" action="mailto:hello@yourdomain.com">
    <label>Full name
      <input name="name" type="text" required />
    </label>
    <label>Adult Family Home name
      <input name="afh" type="text" required />
    </label>
    <label>Phone
      <input name="phone" type="tel" required />
    </label>
    <label>Email
      <input name="email" type="email" required />
    </label>
    <label>City
      <input name="city" type="text" />
    </label>
    <label>Current website (optional)
      <input name="website" type="url" placeholder="https://" />
    </label>
    <label>Template you like (optional)
      <select name="template">
        <option value="">Select one…</option>
        <option value="everbloom">Everbloom Care</option>
        <option value="cedar-grove">Cedar Grove Living</option>
        <option value="maple-stone">Maple & Stone Home</option>
        <option value="sunrise-orchard">Sunrise Orchard</option>
        <option value="bluebird-haven">Bluebird Haven</option>
      </select>
    </label>
    <label>What should your website do better?
      <textarea name="goals" rows="5" required></textarea>
    </label>
    <p class="tiny">We don’t collect PHI—please share only inquiry details.</p>
    <button class="btn" type="submit">Send Inquiry</button>
  </form>

  <!-- Optional booking embed -->
  <!-- <iframe src="https://calendly.com/your-handle/intro-call" title="Book a call" loading="lazy"></iframe> -->
</main>
```

### Legal — `privacy.html`, `terms.html`
- Plain‑language summaries of what data you collect (contact form submissions only), retention, and contact info.  
- Statement that you do not collect or store PHI.

---

## Styles (`/css/styles.css`)
```css
:root {
  --bg: #ffffff;
  --fg: #1f2937; /* slate-800 */
  --muted: #6b7280; /* gray-500 */
  --brand: #2563eb; /* blue-600 */
  --brand-2: #10b981; /* emerald-500 */
  --card: #f8fafc; /* slate-50 */
  --ring: rgba(37, 99, 235, 0.35);
  --shadow: 0 6px 24px rgba(0,0,0,.08);
}
html[data-theme="dark"] {
  --bg: #0b1220;
  --fg: #e5e7eb; /* gray-200 */
  --muted: #94a3b8; /* slate-400 */
  --card: #0f172a; /* slate-900 */
  --shadow: 0 8px 30px rgba(0,0,0,.35);
}
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0; font: 18px/1.55 ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color: var(--fg); background: var(--bg);
}
img { max-width: 100%; display: block; }

.site-header {
  position: sticky; top: 0; z-index: 10; background: var(--bg);
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px; box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.logo { font-weight: 700; text-decoration: none; color: var(--fg); }
.nav a { margin: 0 10px; text-decoration: none; color: var(--fg); }
.icon-button { background: none; border: none; cursor: pointer; font-size: 20px; margin-left: 8px; }

.btn { display: inline-block; background: var(--brand); color: #fff; text-decoration: none;
  padding: 10px 16px; border-radius: 10px; box-shadow: var(--shadow); min-height: 44px;
}
.btn:hover { filter: brightness(0.95); }
.btn.ghost { background: transparent; border: 2px solid var(--brand); color: var(--brand); }

.hero { padding: 64px 20px; text-align: center; }
.hero h1 { font-size: clamp(28px, 5vw, 48px); margin: 0 0 10px; }
.hero p { color: var(--muted); margin: 0 0 20px; }
.hero .actions { display: inline-flex; gap: 12px; }

.grid3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; padding: 20px; }
.card { background: var(--card); border-radius: 16px; padding: 20px; box-shadow: var(--shadow); }

.trust .bar { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; padding: 8px 20px; }
.benefits { list-style: none; padding: 0 20px; display: grid; gap: 8px; }

.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; padding: 20px; }
.template .actions { display: flex; gap: 10px; }

.cta-center, .cta { text-align: center; padding: 28px 20px; }
.mini-case { padding: 20px; text-align: center; }

.site-footer { margin-top: 40px; padding: 28px 20px; background: var(--card); }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.tiny { font-size: 12px; color: var(--muted); }

/* Modal */
.modal[aria-hidden="true"] { display: none; }
.modal { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: grid; place-items: center; padding: 20px; }
.modal-body { background: var(--bg); border-radius: 16px; width: min(1100px, 96vw); height: min(80vh, 900px); display: grid; grid-template-rows: auto 1fr; box-shadow: var(--shadow); }
.modal-head { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; gap: 10px; }
.modal .modes button { margin-right: 8px; }
.modal .close { background: transparent; border: none; font-size: 24px; cursor: pointer; }
#previewFrame { width: 100%; height: 100%; border: 0; }
#previewFrame.mobile { width: 390px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 18px; }

/* Forms */
.narrow { max-width: 720px; margin: 0 auto; padding: 20px; }
label { display: grid; gap: 6px; margin: 12px 0; }
input, select, textarea {
  font: inherit; padding: 10px 12px; border-radius: 10px; border: 1px solid #d1d5db; background: #fff;
}
input:focus, select:focus, textarea:focus { outline: 3px solid var(--ring); outline-offset: 1px; }
.invalid { border-color: #ef4444; }
```

---

## JavaScript (`/js/app.js`)
```js
(function () {
  const $ = (s, d=document)=>d.querySelector(s);
  const $$ = (s, d=document)=>Array.from(d.querySelectorAll(s));

  // Year in footer
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  // Previewer modal
  const previewer = $('#previewer');
  const frame = $('#previewFrame');
  function openPreview(url){
    if (!previewer || !frame) return;
    frame.src = url;
    previewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closePreview(){
    if (!previewer || !frame) return;
    previewer.setAttribute('aria-hidden','true');
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  }
  $$('.template .btn[data-preview-url]').forEach(btn=>{
    btn.addEventListener('click', ()=> openPreview(btn.getAttribute('data-preview-url')));
  });
  $('.modal .close')?.addEventListener('click', closePreview);
  document.addEventListener('keydown', (e)=> e.key==='Escape' && closePreview());
  previewer?.addEventListener('click', (e)=> e.target===previewer && closePreview());

  // Device mode toggles
  $$('#previewer [data-mode]').forEach(b=>{
    b.addEventListener('click', ()=>{
      $$('#previewer [data-mode]').forEach(x=>x.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true');
      frame?.classList.toggle('mobile', b.dataset.mode==='mobile');
    });
  });

  // Smooth anchors
  $$('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const t = $(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Theme toggle
  const toggle = $('#themeToggle');
  if (toggle){
    const html = document.documentElement;
    const apply = (mode)=>{
      html.setAttribute('data-theme', mode);
      toggle.setAttribute('aria-pressed', String(mode==='dark'));
      localStorage.setItem('theme', mode);
    };
    const saved = localStorage.getItem('theme');
    if (saved) apply(saved);
    toggle.addEventListener('click', ()=>{
      const next = (html.getAttribute('data-theme')||'light')==='light' ? 'dark' : 'light';
      apply(next);
    });
  }

  // Form validation (basic)
  const form = $('form[data-validate]');
  form?.addEventListener('submit', (e)=>{
    const invalid = $$('[required]', form).filter(i=>!i.value.trim());
    invalid.forEach(i=>i.classList.add('invalid'));
    if (invalid.length){ e.preventDefault(); alert('Please complete all required fields.'); }
  });
})();
```

---

## Copy Blocks (Editable)

**Hero Headlines**
- “Your Adult Family Home deserves a website that feels like home.”  
- “Turn website visitors into booked tours—this week.”

**CTAs**
- “Start My Site” / “See Templates” / “Schedule a Tour Call”

**Benefits**
- “Done‑for‑you design & copy”  
- “Clear services families care about”  
- “Fast launch, easy updates”  
- “Mobile‑ready & accessible”

**FAQ Ideas**
- How fast can we launch? (Typical: 1–2 weeks depending on assets)  
- Can you use my logo/photos? (Yes)  
- What if I already have a domain? (We’ll connect it)  
- Do you write the copy? (We draft, you approve)  
- Can I cancel anytime? (Yes)

---

## QA & Launch Checklist

- [ ] Keyboard navigation and focus visible  
- [ ] Images compressed; `width`/`height` set; `alt` text present  
- [ ] Titles/meta/OG tags populated; favicon set  
- [ ] Forms require only inquiry info (no PHI)  
- [ ] Previewer desktop/mobile toggle works  
- [ ] Theme toggle persists with `localStorage`  
- [ ] 404.html present and styled  
- [ ] Lighthouse scores: Performance, Accessibility, Best Practices, SEO 90+

---

## Portfolio Demos to Showcase

- **Everbloom Care** — `https://everbloomcare.replit.app` (primary case study & live demo)  
- **Cedar Grove Living** — `https://example-cedar-grove.replit.app` (placeholder)  
- **Maple & Stone Home** — `https://example-maple-stone.replit.app` (placeholder)  
- **Sunrise Orchard** — `https://example-sunrise-orchard.replit.app` (placeholder)  
- **Bluebird Haven** — `https://example-bluebird-haven.replit.app` (placeholder)

> Host each demo as a simple Replit static project. Use the **Live Preview** modal to showcase them without leaving the SaaS site.

---

## Notes
- This SaaS site markets your AFH website service and references your already‑built AFH site (Everbloom) as the main proof and demo.  
- Keep everything framework‑free to avoid build issues.  
- Replace placeholder links and images as you create additional live demos.

