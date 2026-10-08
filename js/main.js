/* ============================================
   💾 سیستم ذخیره پیشرفت (localStorage)
   ============================================ */

function getProgress(lessonId) {
  const saved = localStorage.getItem('progress_' + lessonId);
  return saved ? parseInt(saved) : 0;
}

function setProgress(lessonId, percent) {
  localStorage.setItem('progress_' + lessonId, percent);
}

/* ============================================
   📊 محاسبه پیشرفت
   ============================================ */

function getChapterProgress(chapter) {
  if (!chapter.lessons || chapter.lessons.length === 0) return 0;
  const total = chapter.lessons.reduce((s, l) => s + getProgress(l.id), 0);
  return Math.round(total / chapter.lessons.length);
}

function getTotalProgress() {
  const totalLessons = CHAPTERS.reduce((s, ch) => s + ch.lessons.length, 0);
  if (totalLessons === 0) return 0;
  const totalProgress = CHAPTERS.reduce((s, ch) =>
    s + ch.lessons.reduce((ss, l) => ss + getProgress(l.id), 0), 0);
  return Math.round(totalProgress / totalLessons);
}

function getDoneLessons() {
  return CHAPTERS.reduce((s, ch) =>
    s + ch.lessons.filter(l => getProgress(l.id) === 100).length, 0);
}

function getTotalLessons() {
  return CHAPTERS.reduce((s, ch) => s + ch.lessons.length, 0);
}

/* ============================================
   🏠 صفحه خانه
   ============================================ */

function renderHome() {
  return `
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
        <div class="stat-icon"><svg class="icon"><use href="#icon-file-text"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getTotalLessons()}</div>
          <div class="label">درس</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-chart"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getTotalProgress()}٪</div>
          <div class="label">پیشرفت کل</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-check"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getDoneLessons()}</div>
          <div class="label">درس کامل‌شده</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h2>📖 فصل‌های آموزشی</h2>
    </div>

    <div class="chapters-grid">
      ${CHAPTERS.map(ch => {
        const progress = getChapterProgress(ch);
        return `
          <a href="lessons.html#chapter/${ch.id}" class="chapter-card">
            <div class="chapter-num">${ch.num}</div>
            <h3>فصل ${ch.num}: ${ch.title}</h3>
            <p>${ch.lessons.length} درس آموزشی</p>
            <div class="chapter-meta">
              <div class="chapter-progress-mini">
                <div class="mini-bar">
                  <div class="mini-bar-fill" style="width:${progress}%"></div>
                </div>
                <span>${progress}٪</span>
              </div>
              <span>${progress === 0 ? '🆕' : progress === 100 ? '✅' : '📖'}</span>
            </div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

/* ============================================
   📚 صفحه درسنامه
   ============================================ */

function renderLessons() {
  return `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-badge">📚 آموزش کامل</div>
        <h1>درسنامه ریاضی نهم</h1>
        <p>همه فصل‌ها و درس‌ها با توضیح کامل، فرمول و مثال</p>
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
        <div class="stat-icon"><svg class="icon"><use href="#icon-file-text"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getTotalLessons()}</div>
          <div class="label">درس</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-chart"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getTotalProgress()}٪</div>
          <div class="label">پیشرفت کل</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-check"></use></svg></div>
        <div class="stat-info">
          <div class="value">${getDoneLessons()}</div>
          <div class="label">درس کامل‌شده</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h2>📖 فصل‌های آموزشی</h2>
    </div>

    <div class="chapters-grid">
      ${CHAPTERS.map(ch => {
        const progress = getChapterProgress(ch);
        return `
          <a href="#chapter/${ch.id}" class="chapter-card">
            <div class="chapter-num">${ch.num}</div>
            <h3>فصل ${ch.num}: ${ch.title}</h3>
            <p>${ch.desc}</p>
            <div class="chapter-meta">
              <div class="chapter-progress-mini">
                <div class="mini-bar">
                  <div class="mini-bar-fill" style="width:${progress}%"></div>
                </div>
                <span>${progress}٪</span>
              </div>
              <span>${ch.lessons.length} درس</span>
            </div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

/* ============================================
   📖 صفحه فصل
   ============================================ */

function renderChapter(chapterId) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) return renderNotFound();

  const progress = getChapterProgress(chapter);
  const doneCount = chapter.lessons.filter(l => getProgress(l.id) === 100).length;
  const inProgressCount = chapter.lessons.filter(l => {
    const p = getProgress(l.id);
    return p > 0 && p < 100;
  }).length;

  return `
    <div class="breadcrumb">
      <a href="#lessons">درسنامه</a> ›
      <span>فصل ${chapter.num}</span>
    </div>

    <div class="hero">
      <div class="hero-content">
        <div class="hero-badge">📖 فصل ${chapter.num}</div>
        <h1>${chapter.title}</h1>
        <p>${chapter.desc}</p>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-file-text"></use></svg></div>
        <div class="stat-info">
          <div class="value">${chapter.lessons.length}</div>
          <div class="label">درس</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-chart"></use></svg></div>
        <div class="stat-info">
          <div class="value">${progress}٪</div>
          <div class="label">پیشرفت</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-check"></use></svg></div>
        <div class="stat-info">
          <div class="value">${doneCount}</div>
          <div class="label">کامل‌شده</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><svg class="icon"><use href="#icon-target"></use></svg></div>
        <div class="stat-info">
          <div class="value">${inProgressCount}</div>
          <div class="label">در حال یادگیری</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <h2>📝 لیست درس‌ها</h2>
    </div>

    <div class="lesson-list">
      ${chapter.lessons.map((lesson, i) => {
        const p = getProgress(lesson.id);
        const isDone = p === 100;
        const isNew = p === 0;
        return `
          <a href="#lesson/${lesson.id}" class="lesson-item ${isDone ? 'done' : ''}">
            <div class="lesson-num">${isDone ? '✓' : (i + 1)}</div>
            <div class="lesson-info">
              <h4>درس ${i + 1}: ${lesson.title}</h4>
              <p>${isDone ? 'کامل‌شده ✅' : isNew ? 'شروع نشده 🆕' : `در حال یادگیری (${p}٪)`}</p>
            </div>
            <div class="lesson-progress">
              <div class="lesson-progress-fill" style="width:${p}%"></div>
            </div>
            <div class="lesson-status">${isDone ? '✅' : isNew ? '🆕' : '📖'}</div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

/* ============================================
   📘 صفحه درس
   ============================================ */

function renderLesson(lessonId) {
  // گرفتن محتوا از فایل‌های مختلف
  const lesson = getLessonContent(lessonId);
  if (!lesson) return renderNotFound();

  const chapter = CHAPTERS.find(c => c.id === lesson.chapter);
  const lessonMeta = chapter.lessons.find(l => l.id === lessonId);
  const lessonIndex = chapter.lessons.indexOf(lessonMeta);
  const prevLesson = lessonIndex > 0 ? chapter.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < chapter.lessons.length - 1 ? chapter.lessons[lessonIndex + 1] : null;
  const progress = getProgress(lessonId);
  const isDone = progress === 100;

  return `
    <div class="breadcrumb">
      <a href="#lessons">درسنامه</a> ›
      <a href="#chapter/${chapter.id}">فصل ${chapter.num}</a> ›
      <span>${lesson.title}</span>
    </div>

    <div class="lesson-header">
      <h1>📘 ${lesson.title}</h1>
      <p>فصل ${chapter.num}: ${chapter.title}</p>
    </div>

    <div class="lesson-progress-bar-wrap">
      <span class="label">پیشرفت درس:</span>
      <div class="bar">
        <div class="bar-fill" style="width:${progress}%"></div>
      </div>
      <span class="percent">${progress}٪</span>
    </div>

    <div class="lesson-content">
      ${lesson.content}
    </div>

    <div class="done-button-wrap">
      ${isDone ? `
        <button class="done-button" style="background:linear-gradient(135deg,#10b981,#059669);cursor:default;">
          <svg class="icon"><use href="#icon-check"></use></svg>
          این درس را کامل کردی! ✅
        </button>
      ` : `
        <button class="done-button" onclick="markAsDone('${lessonId}')">
          <svg class="icon"><use href="#icon-check"></use></svg>
          این درس را خواندم
        </button>
      `}
    </div>

    <div class="lesson-nav">
      ${prevLesson ? `
        <a href="#lesson/${prevLesson.id}">
          <span class="label"><svg class="icon" style="width:14px;height:14px;"><use href="#icon-arrow-right"></use></svg> درس قبلی</span>
          <span class="title">${prevLesson.title}</span>
        </a>
      ` : '<div></div>'}
      ${nextLesson ? `
        <a href="#lesson/${nextLesson.id}" class="next">
          <span class="label">درس بعدی <svg class="icon" style="width:14px;height:14px;"><use href="#icon-arrow-left"></use></svg></span>
          <span class="title">${nextLesson.title}</span>
        </a>
      ` : '<div></div>'}
    </div>
  `;
}

/* ============================================
   🔍 پیدا کردن محتوای درس از فایل‌ها
   ============================================ */

function getLessonContent(lessonId) {
  // جستجو در همه فایل‌های محتوا
  const contentFiles = [
    typeof CONTENT_CH1 !== 'undefined' ? CONTENT_CH1 : {},
    typeof CONTENT_CH2 !== 'undefined' ? CONTENT_CH2 : {},
    typeof CONTENT_CH3 !== 'undefined' ? CONTENT_CH3 : {},
    typeof CONTENT_CH4 !== 'undefined' ? CONTENT_CH4 : {},
    typeof CONTENT_CH5 !== 'undefined' ? CONTENT_CH5 : {},
    typeof CONTENT_CH6 !== 'undefined' ? CONTENT_CH6 : {},
    typeof CONTENT_CH7 !== 'undefined' ? CONTENT_CH7 : {},
    typeof CONTENT_CH8 !== 'undefined' ? CONTENT_CH8 : {}
  ];

  for (const file of contentFiles) {
    if (file[lessonId]) {
      return file[lessonId];
    }
  }
  return null;
}

/* ============================================
   ✅ علامت‌گذاری درس به عنوان خوانده‌شده
   ============================================ */

function markAsDone(lessonId) {
  setProgress(lessonId, 100);
  render();
}

/* ============================================
   ❓ صفحه پیدا نشد
   ============================================ */

function renderNotFound() {
  return `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-badge">❓ پیدا نشد</div>
        <h1>صفحه مورد نظر پیدا نشد</h1>
        <p>لطفاً به صفحه اصلی برگرد.</p>
        <a href="index.html" style="display:inline-block;margin-top:20px;padding:12px 25px;background:white;color:var(--primary-dark);border-radius:10px;text-decoration:none;font-weight:700;">بازگشت به خانه</a>
      </div>
    </div>
  `;
}

/* ============================================
   🚧 در حال ساخت
   ============================================ */

function renderComingSoon(title = 'به‌زودی...') {
  return `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-badge">🚧 در حال ساخت</div>
        <h1>${title}</h1>
        <p>این بخش هنوز آماده نشده. به‌زودی محتوای آن اضافه می‌شود.</p>
      </div>
    </div>
  `;
}

/* ============================================
   🔄 ROUTER — مسیریابی
   ============================================ */

function render() {
  const hash = location.hash.slice(1) || 'home';
  const main = document.getElementById('mainContent');
  if (!main) return;

  // Parse route
  let page, param;
  if (hash.includes('/')) {
    [page, param] = hash.split('/');
  } else {
    page = hash;
  }

  // Route
  if (page === 'home' || page === '') {
    main.innerHTML = renderHome();
  } else if (page === 'lessons') {
    main.innerHTML = renderLessons();
  } else if (page === 'chapter') {
    main.innerHTML = renderChapter(param);
  } else if (page === 'lesson') {
    main.innerHTML = renderLesson(param);
  } else if (page === 'practice') {
    main.innerHTML = renderComingSoon('📝 تمرین‌ها');
  } else if (page === 'exams') {
    main.innerHTML = renderComingSoon('🎯 آزمون‌ها');
  } else if (page === 'analysis') {
    main.innerHTML = renderComingSoon('📊 آنالیز و پیشرفت');
  } else if (page === 'formulas') {
    main.innerHTML = renderComingSoon('📋 فرمول‌نامه');
  } else if (page === 'calculator') {
    main.innerHTML = renderComingSoon('🧮 ماشین‌حساب');
  } else if (page === 'favorites') {
    main.innerHTML = renderComingSoon('⭐ علاقه‌مندی‌ها');
  } else if (page === 'settings') {
    main.innerHTML = renderComingSoon('⚙️ تنظیمات');
  } else {
    main.innerHTML = renderNotFound();
  }

  // Active link در سایدبار
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  let activeSelector = '';
  if (page === 'chapter' || page === 'lesson' || page === 'lessons') {
    activeSelector = '.sidebar-link[href="#lessons"]';
  } else {
    activeSelector = `.sidebar-link[href="#${page}"]`;
  }
  const activeLink = document.querySelector(activeSelector);
  if (activeLink) activeLink.classList.add('active');

  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================
   🌙 تغییر تم
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

function loadTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.innerHTML = '<use href="#icon-sun"></use>';
    }
  }
}

/* ============================================
   📌 قفل کردن سایدبار
   ============================================ */

function togglePin() {
  document.body.classList.toggle('sidebar-locked');
  const pinBtn = document.getElementById('pinBtn');
  if (pinBtn) {
    pinBtn.classList.toggle('pinned');
  }
  localStorage.setItem('sidebarLocked',
    document.body.classList.contains('sidebar-locked') ? 'true' : 'false');
}

function loadPin() {
  if (localStorage.getItem('sidebarLocked') === 'true') {
    document.body.classList.add('sidebar-locked');
    const pinBtn = document.getElementById('pinBtn');
    if (pinBtn) {
      pinBtn.classList.add('pinned');
    }
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

window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
});

/* ============================================
   🚀 راه‌اندازی
   ============================================ */

window.addEventListener('hashchange', render);
window.addEventListener('load', () => {
  loadTheme();
  loadPin();
  render();
});
