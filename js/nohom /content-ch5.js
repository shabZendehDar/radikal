/* ============================================
   📖 فصل ۵: عبارت‌های جبری
   ============================================ */

const CONTENT_CH5 = {

  /* ===== درس ۱: اتحادها ===== */
  'ch5-l1': {
    title: 'اتحادها',
    chapter: 'ch5',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف تک‌جمله‌ای</div>
        <p>هر عبارت که به صورت حاصل‌ضرب یک عدد حقیقی در توان‌های صحیح و نامنفی یک یا چند متغیر باشد.</p>
        <p><b>مثال:</b> <span class="math">7, x, 5x¹⁰, −√3a³x²z, (1/5)xy, πx²</span></p>
        <p><b>غیر تک‌جمله‌ای:</b> <span class="math">1/x, 2√x, |x|, x² + 2x</span></p>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 اتحاد جبری</div>
        <p>اگر دو عبارت جبری به ازای <b>هر مقدار</b> برای متغیرها، حاصل یکسانی داشته باشند، برابری آن‌ها یک <b>اتحاد</b> است.</p>
      </div>

      <h2>🔑 اتحاد مربع دو جمله‌ای</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 اتحاد اول</div>
        <div class="formula-text">(a + b)² = a² + 2ab + b²</div>
        <div class="formula-text">(a − b)² = a² − 2ab + b²</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <div class="example-solution">
          (x + 3)² = x² + 6x + 9 <br>
          (2a + 3b)² = 4a² + 12ab + 9b² <br>
          (5 − 2√2)² = 25 − 20√2 + 8 = 33 − 20√2
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: پیدا کردن جمله</div>
        <p>در <span class="math">4a² + ... + 9b²</span> چه چیزی بگذاریم تا مربع کامل شود؟</p>
        <div class="example-solution">
          4a² = (2a)² <br>
          9b² = (3b)² <br>
          جمله میانی = 2 × 2a × 3b = 12ab
        </div>
      </div>

      <h2>🔑 اتحاد مزدوج</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 اتحاد دوم</div>
        <div class="formula-text">(a + b)(a − b) = a² − b²</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <div class="example-solution">
          (1 − x)(1 + x) = 1 − x² <br>
          (2a + 5)(2a − 5) = 4a² − 25 <br>
          (x − 2y + 5)(x + 2y − 5) = x² − (2y − 5)² <br>
          = x² − 4y² + 20y − 25
        </div>
      </div>

      <h2>🎯 کاربرد اتحاد مزدوج</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 تجزیه با اتحاد مزدوج</div>
        <div class="formula-text">a² − b² = (a + b)(a − b)</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: تجزیه کن</div>
        <div class="example-solution">
          x² − 9 = (x + 3)(x − 3) <br>
          4y² − (1/4)z² = (2y + z/2)(2y − z/2) <br>
          (2x+1)² − y² = (2x+1+y)(2x+1−y)
        </div>
      </div>

      <h2>📐 اتحاد مربع سه جمله‌ای</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 اتحاد سوم</div>
        <div class="formula-text">(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</div>
        <div class="formula-text">(a + b − c)² = a² + b² + c² + 2ab − 2ac − 2bc</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۵</div>
        <div class="example-solution">
          (x + y + 2)² = x² + y² + 4 + 2xy + 4x + 4y
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>اتحادها ابزار اصلی ساده‌سازی و تجزیه عبارت‌های جبری هستند.</p>
      </div>
    `
  },

  /* ===== درس ۲: چند اتحاد دیگر و تجزیه ===== */
  'ch5-l2': {
    title: 'چند اتحاد دیگر و تجزیه',
    chapter: 'ch5',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تجزیه چیست؟</div>
        <p>تجزیه یعنی نوشتن یک عبارت جبری به صورت <b>حاصل‌ضرب چند عبارت ساده‌تر</b>.</p>
      </div>

      <h2>🔑 اتحاد جمله مشترک</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 اتحاد جمله مشترک</div>
        <div class="formula-text">(x + a)(x + b) = x² + (a + b)x + ab</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <div class="example-solution">
          (x + 5)(x + 2) = x² + 7x + 10 <br>
          (x + 9)(x − 4) = x² + 5x − 36 <br>
          (x − 7)(x + 3) = x² − 4x − 21
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: تجزیه</div>
        <div class="example-solution">
          x² + 7x + 10 = (x + 5)(x + 2) <br>
          x² + 7x + 12 = (x + 3)(x + 4) <br>
          x² − x − 6 = (x + 2)(x − 3) <br>
          x² + 5y + 6 = (y + 2)(y + 3)
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ راهنمای تجزیه</div>
        <p>برای <span class="math">x² + bx + c</span>:</p>
        <ul>
          <li>دو عدد پیدا کن که <b>جمعشان b</b> و <b>ضربشان c</b> باشد.</li>
          <li>مثال: <span class="math">x² + 7x + 10</span> → دو عدد ۵ و ۲ (جمع ۷، ضرب ۱۰)</li>
        </ul>
      </div>

      <h2>🔑 اتحاد مربع سه جمله و تبدیل</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 اتحاد مکعب</div>
        <div class="formula-text">(a + b)³ = a³ + 3a²b + 3ab² + b³</div>
        <div class="formula-text">(a − b)³ = a³ − 3a²b + 3ab² − b³</div>
      </div>

      <h2>🎯 تجزیه با فاکتورگیری</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <div class="example-solution">
          3x + 6y = 3(x + 2y) <br>
          5x² − 10x = 5x(x − 2) <br>
          a²b + ab² = ab(a + b) <br>
          x(a + b) + y(a + b) = (a + b)(x + y)
        </div>
      </div>

      <h2>🎯 عبارت‌های مربع کامل</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: تجزیه</div>
        <div class="example-solution">
          x² + 6x + 9 = (x + 3)² <br>
          x² − 8x + 16 = (x − 4)² <br>
          4x² + 12x + 9 = (2x + 3)² <br>
          a² − 2ab + b² = (a − b)²
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خلاصه تجزیه</div>
        <ol>
          <li><b>فاکتور مشترک:</b> ab + ac = a(b + c)</li>
          <li><b>اتحاد مزدوج:</b> a² − b² = (a + b)(a − b)</li>
          <li><b>مربع کامل:</b> a² + 2ab + b² = (a + b)²</li>
          <li><b>جمله مشترک:</b> x² + (a+b)x + ab = (x + a)(x + b)</li>
        </ol>
      </div>

      <h2>📐 مثال‌های ترکیبی</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۵</div>
        <p>ثابت کنید: <span class="math">(x+y)² − (x−y)² = 4xy</span></p>
        <div class="example-solution">
          (x+y)² − (x−y)² = (x² + 2xy + y²) − (x² − 2xy + y²) <br>
          = x² + 2xy + y² − x² + 2xy − y² <br>
          = 4xy ✅
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۶</div>
        <p>ثابت کنید: <span class="math">a² + 1/a² = (a + 1/a)² − 2</span></p>
        <div class="example-solution">
          (a + 1/a)² = a² + 2 + 1/a² <br>
          ⇒ a² + 1/a² = (a + 1/a)² − 2 ✅
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>قبل از هر تجزیه، اول <b>فاکتور مشترک</b> را جدا کن، بعد از اتحاد استفاده کن.</p>
      </div>
    `
  },

  /* ===== درس ۳: ناابرابری‌ها و نامعادله ===== */
  'ch5-l3': {
    title: 'ناابرابری‌ها و نامعادله',
    chapter: 'ch5',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 نامساوی و ناابرابری</div>
        <p>عبارتی که در آن یکی از نمادهای <span class="math"><</span> ، <span class="math">></span> ، <span class="math">≤</span> ، <span class="math">≥</span> استفاده شده باشد.</p>
        <div class="formula-text">a > b ⇒ a بزرگ‌تر از b</div>
        <div class="formula-text">a < b ⇒ a کوچک‌تر از b</div>
      </div>

      <h2>🔑 خاصیت‌های نابرابری</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 خاصیت ۱: جمع</div>
        <p>اگر <span class="math">a > b</span>، آنگاه برای هر عدد c:</p>
        <div class="formula-text">a + c > b + c</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خاصیت ۲: ضرب در عدد مثبت</div>
        <p>اگر <span class="math">a > b</span> و <span class="math">c > 0</span>:</p>
        <div class="formula-text">ac > bc</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خاصیت ۳: ضرب در عدد منفی</div>
        <p>اگر <span class="math">a > b</span> و <span class="math">c < 0</span>:</p>
        <div class="formula-text">ac < bc &nbsp; (جهت نابرابری عوض می‌شود!)</div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ هشدار طلایی</div>
        <p>در ضرب یا تقسیم <b>عدد منفی</b>، جهت نامساوی <b>برعکس</b> می‌شود!</p>
      </div>

      <h2>🎯 حل نامعادله</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>حل کن: <span class="math">2x + 1 > 7</span></p>
        <div class="example-solution">
          2x + 1 > 7 <br>
          2x > 6 <br>
          x > 3 <br>
          D = {x ∈ ℝ | x > 3}
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>حل کن: <span class="math">−2x + 5 ≥ 11</span></p>
        <div class="example-solution">
          −2x + 5 ≥ 11 <br>
          −2x ≥ 6 <br>
          x ≤ −3 (جهت عوض شد!) <br>
          D = {x ∈ ℝ | x ≤ −3}
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>حل کن: <span class="math">x/3 − 1/2 < (x−1)/6</span></p>
        <div class="example-solution">
          6 × (x/3) − 6 × (1/2) < 6 × (x−1)/6 <br>
          2x − 3 < x − 1 <br>
          x < 2 <br>
          D = {x ∈ ℝ | x < 2}
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>حل کن: <span class="math">3(x − 1) ≥ 2x + 1</span></p>
        <div class="example-solution">
          3x − 3 ≥ 2x + 1 <br>
          x ≥ 4 <br>
          D = {x ∈ ℝ | x ≥ 4}
        </div>
      </div>

      <h2>📊 نمایش روی محور</h2>
      <ul>
        <li><span class="math">x > 3</span> → نقطه توخالی روی ۳، جهت راست</li>
        <li><span class="math">x ≥ 3</span> → نقطه توپر روی ۳، جهت راست</li>
        <li><span class="math">x < 3</span> → نقطه توخالی روی ۳، جهت چپ</li>
        <li><span class="math">x ≤ 3</span> → نقطه توپر روی ۳، جهت چپ</li>
      </ul>

      <div class="box box-formula">
        <div class="box-title">🔑 نکته طلایی</div>
        <ul>
          <li>در جمع: جهت نابرابری عوض نمی‌شود</li>
          <li>در ضرب و تقسیم عدد مثبت: عوض نمی‌شود</li>
          <li>در ضرب و تقسیم عدد منفی: <b>عوض می‌شود</b></li>
        </ul>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>مجموعه جواب نامعادله را می‌توان با نماد ریاضی یا روی محور اعداد نمایش داد.</p>
      </div>
    `
  }

};
