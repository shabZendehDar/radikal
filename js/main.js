/* ============================================
   ⚙️ رادیکال — منطق اصلی سایت
   ============================================ */

/* ============================================
   🗺️ نقشه صفحات
   ============================================ */
const PAGES = {
  'home': { title: 'خانه', file: null },
  'lessons': { title: 'درسنامه', file: 'lessons.html' },
  'lesson': { title: 'درس', file: 'lesson.html' },
  'practice': { title: 'تمرین‌ها', file: 'practice.html' },
  'exams': { title: 'آزمون‌ها', file: 'exams.html' },
  'analysis': { title: 'آنالیز و پیشرفت', file: 'analysis.html' },
  'formulas': { title: 'فرمول‌نامه', file: 'formulas.html' },
  'calculator': { title: 'ماشین‌حساب', file: 'calculator.html' },
  'favorites': { title: 'علاقه‌مندی‌ها', file: 'favorites.html' },
  'settings': { title: 'تنظیمات', file: 'settings.html' }
};

/* ============================================
   📚 محتوای صفحه خانه
   ============================================ */
const HOME_CONTENT = `
  <div class="hero">
    <div class="hero-content">
      <div class="hero-badge">🎓 مسیر المپیاد فیزیک</div>
      <h1>سلام! خوش اومدی 👋</h1>
      <p>اینجا قراره ریاضی نهم رو عمیق یاد بگیری، سریع‌تر از مدرسه جلو بری و برای المپیاد فیزیک آماده بشی.</p>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon"><svg class="icon"><use href="#icon-book"></use></svg></div>
      <div class="stat-info">
        <div class="value">۸</div>
        <div class="label">فصل آموزشی</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon"><svg class="icon"><use href="#icon-pencil"></use></svg></div>
      <div class="stat-info">
        <div class="value">۱۸۰</div>
        <div class="label">تمرین</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon"><svg class="icon"><use href="#icon-target"></use></svg></div>
      <div class="stat-info">
        <div class="value">۲۴</div>
        <div class="label">آزمون</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon"><svg class="icon"><use href="#icon-flame"></use></svg></div>
      <div class="stat-info">
        <div class="value">۵</div>
        <div class="label">روز پیوسته</div>
      </div>
    </div>
  </div>

  <div class="section-header">
    <h2>📖 فصل‌های آموزشی</h2>
    <a href="#lessons" style="color: var(--primary); text-decoration: none; font-size: 0.9rem; font-weight: 600;">مشاهده همه →</a>
  </div>

  <div class="chapters-grid">
    ${[
      {n: '۱', t: 'مجموعه‌ها', c: 4, p: 100},
      {n: '۲', t: 'عددهای حقیقی', c: 3, p: 60},
      {n: '۳', t: 'استدلال و اثبات', c: 5, p: 20},
      {n: '۴', t: 'توان و ریشه', c: 4, p: 0},
      {n: '۵', t: 'عبارت‌های جبری', c: 3, p: 0},
      {n: '۶', t: 'خط و معادله‌ها', c: 3, p: 0},
      {n: '۷', t: 'عبارت‌های گویا', c: 3, p: 0},
      {n: '۸', t: 'حجم و مساحت', c: 3, p: 0}
    ].map(ch => `
      <a href="#ch${ch.n}" class="chapter-card">
        <div class="chapter-num">${ch.n}</div>
        <h3>فصل ${ch.n}: ${ch.t}</h3>
        <p>${ch.c} درس آموزشی</p>
        <div class="chapter-meta">
          <div class="chapter-progress-mini">
            <div class="mini-bar">
              <div class="mini-bar-fill" style="width:${ch.p}%"></div>
            </div>
            <span>${ch.p}٪</span>
          </div>
          <span>${ch.p === 0 ? '🆕' : ch.p === 100 ? '✅' : '📖'}</span>
        </div>
      </a>
    `).join('')}
  </div>
`;

/* ============================================
   🔄 ROUTER — لود صفحات
   ============================================ */
async function render() {
  const hash = location.hash.slice(1) || 'home';
  const main = document.getElementById('mainContent');
  if (!main) return;

  // صفحه خانه
  if (hash === 'home' || hash === '') {
    main.innerHTML = HOME_CONTENT;
    updateActiveLink(hash);
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // پیدا کردن صفحه
  const page = PAGES[hash];

  if (!page) {
    // صفحه ناشناخته
    main.innerHTML = `
      <div class="under-construction">
        <div class="icon-big">❓</div>
        <h1>صفحه پیدا نشد</h1>
        <p>این صفحه وجود نداره. <a href="#home" style="color: var(--primary);">بازگشت به خانه</a></p>
      </div>
    `;
    return;
  }

  // لود فایل صفحه
  if (page.file) {
    try {
      main.innerHTML = `
        <div style="text-align: center; padding: 60px; color: var(--text-light);">
          <div style="font-size: 2rem;">⏳</div>
          <p>در حال لود...</p>
        </div>
      `;

      const response = await fetch(page.file);
      if (!response.ok) throw new Error('File not found');
      const html = await response.text();
      main.innerHTML = html;
    } catch (error) {
      main.innerHTML = `
        <div class="under-construction">
          <div class="icon-big">🚧</div>
          <h1>در حال ساخت</h1>
          <p>صفحه «${page.title}» هنوز آماده نشده. به‌زودی محتوای آن اضافه می‌شود.</p>
        </div>
      `;
    }
  }

  updateActiveLink(hash);
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================
   🎯 فعال کردن لینک سایدبار
   ============================================ */
function updateActiveLink(hash) {
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`.sidebar-link[href="#${hash}"]`);
  if (activeLink) activeLink.classList.add('active');
}

/* ============================================
   🌙 تم شب/روز
   ============================================ */
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.innerHTML = isDark 
      ? '<use href="#icon-sun"></use>' 
      : '<use href="#icon-moon"></use>';
  }
  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.innerHTML = '<use href="#icon-sun"></use>';
    }
  }
}

/* ============================================
   📌 پین کردن سایدبار
   ============================================ */
function togglePin() {
  document.body.classList.toggle('sidebar-locked');
  
  const pinBtn = document.getElementById('pinBtn');
  if (pinBtn) pinBtn.classList.toggle('pinned');
  
  const isLocked = document.body.classList.contains('sidebar-locked');
  localStorage.setItem('sidebarLocked', isLocked ? 'true' : 'false');
}

function initPin() {
  const saved = localStorage.getItem('sidebarLocked');
  if (saved === 'true') {
    document.body.classList.add('sidebar-locked');
    const pinBtn = document.getElementById('pinBtn');
    if (pinBtn) pinBtn.classList.add('pinned');
  }
}

/* ============================================
   📱 سایدبار موبایل
   ============================================ */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

/* ============================================
   📊 نوار پیشرفت اسکرول
   ============================================ */
function initProgressBar() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = progress + '%';
  });
}

/* ============================================
   ⌨️ میانبرهای کیبورد
   ============================================ */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+K یا / برای جستجو
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !e.target.matches('input, textarea'))) {
      e.preventDefault();
      const search = document.querySelector('.search-input');
      if (search) search.focus();
    }
    
    // Esc برای بستن
    if (e.key === 'Escape') {
      closeSidebar();
      const search = document.querySelector('.search-input');
      if (search) search.blur();
    }
  });
}

/* ============================================
   🚀 راه‌اندازی
   ============================================ */
function init() {
  initTheme();
  initPin();
  initProgressBar();
  initKeyboard();
  render();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', init);
