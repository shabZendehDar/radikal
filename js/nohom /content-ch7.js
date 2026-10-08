/* ============================================
   📖 فصل ۷: عبارت‌های گویا
   ============================================ */

const CONTENT_CH7 = {

  /* ===== درس ۱: معرفی و ساده کردن عبارت‌های گویا ===== */
  'ch7-l1': {
    title: 'معرفی و ساده کردن عبارت‌های گویا',
    chapter: 'ch7',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف عبارت گویا</div>
        <p>هر عبارت کسری که صورت و مخرج آن چند جمله‌ای باشند، یک <b>عبارت گویا</b> است.</p>
        <p><b>مثال:</b> <span class="math">(x+1)/(x−1)</span> ، <span class="math">(2x−5)/(x²+1)</span> ، <span class="math">(x²−√3x+1)/(9xy)</span></p>
        <p><b>غیر گویا:</b> <span class="math">√xy</span> ، <span class="math">|x−y|</span> ، <span class="math">1/(x+y)</span> (اگر رادیکالی باشد)</p>
      </div>

      <h2>💡 نکته کلیدی: تعریف نشده</h2>
      <div class="box box-warn">
        <div class="box-title">⚠️ توجه</div>
        <p>عبارت گویا به ازای مقادیری که <b>مخرج را صفر</b> کنند، تعریف نشده است.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>عبارت <span class="math">(x+5)/(x−3)</span> به ازای چه مقداری تعریف نشده است؟</p>
        <div class="example-solution">
          مخرج = 0 <br>
          x − 3 = 0 ⇒ x = 3 <br>
          پس به ازای x = 3 تعریف نشده است.
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>عبارت <span class="math">(7x²+1)/((x−1)(x+2))</span> به ازای چه مقادیری تعریف نشده است؟</p>
        <div class="example-solution">
          (x − 1)(x + 2) = 0 <br>
          x = 1 یا x = −2 <br>
          پس به ازای x = 1 و x = −2 تعریف نشده.
        </div>
      </div>

      <h2>🎯 ساده کردن عبارت گویا</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قانون ساده‌سازی</div>
        <p>در ساده کردن عبارت گویا می‌توان صورت و مخرج را به عدد یا عبارت غیرصفر تقسیم کرد:</p>
        <div class="formula-text">AC/BC = A/B &nbsp; (B≠0, C≠0)</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: ساده کن</div>
        <div class="example-solution">
          18y³ / 6y⁵ = 3 / y² <br>
          <br>
          (x²+6x+9) / (x²+4x+3) <br>
          = (x+3)(x+3) / (x+1)(x+3) <br>
          = (x+3) / (x+1)
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ اشتباه رایج</div>
        <p>در ساده کردن، فقط <b>عوامل ضربی</b> را می‌توان حذف کرد، نه جمله‌های جمعی!</p>
        <div class="example-solution">
          ❌ (a + ax)/a = a + x (غلط) <br>
          ✅ (a + ax)/a = a(1+x)/a = 1+x (درست)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <div class="example-solution">
          (m²−16)/(4−m) = (m−4)(m+4)/(−(m−4)) = −(m+4) <br>
          <br>
          (a²−5a−14)/(a²+a−2) = (a−7)(a+2)/(a+2)(a−1) = (a−7)/(a−1)
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته طلایی</div>
        <p>قبل از ساده کردن، <b>صورت و مخرج را تجزیه کن</b> تا عامل‌های مشترک پیدا شوند.</p>
      </div>
    `
  },

  /* ===== درس ۲: ضرب و تقسیم عبارت‌های گویا ===== */
  'ch7-l2': {
    title: 'ضرب و تقسیم عبارت‌های گویا',
    chapter: 'ch7',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 ضرب عبارت‌های گویا</div>
        <p>مانند ضرب کسرهای عددی عمل می‌کنیم:</p>
        <div class="formula-text">(a/b) × (c/d) = (a × c) / (b × d)</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 تقسیم عبارت‌های گویا</div>
        <p>کسر اول را در معکوس کسر دوم ضرب می‌کنیم:</p>
        <div class="formula-text">(a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d) / (b × c)</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: ضرب</div>
        <div class="example-solution">
          (5xy²/x²z²) × (y²z³/15y⁴) = 2yz / 3x <br>
          <br>
          (x+3)/x × x²/(x²−2x−15) <br>
          = (x+3)/x × x²/((x+3)(x−5)) <br>
          = x / (x−5)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: تقسیم</div>
        <div class="example-solution">
          4x⁴/(3xy²) ÷ 8x/(9y⁵) <br>
          = 4x⁴/(3xy²) × 9y⁵/(8x) <br>
          = 3x²y³ / 2
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: با تجزیه</div>
        <div class="example-solution">
          (a²−a−6)/(a+3) × (a+3)/(a²−4) <br>
          = (a−3)(a+2)/(a+3) × (a+3)/((a−2)(a+2)) <br>
          = (a−3)/(a−2)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <div class="example-solution">
          (a²b + ab²)/a × 3ab/(a+b)² <br>
          = ab(a+b)/a × 3ab/(a+b)² <br>
          = 3ab / (a+b)
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 مراحل حل</div>
        <ol>
          <li>صورت‌ها و مخرج‌ها را <b>تجزیه</b> کن</li>
          <li>عامل‌های مشترک را <b>حذف</b> کن</li>
          <li>حاصل‌ضرب نهایی را بنویس</li>
        </ol>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>در تقسیم، یادت باشه که <b>معکوس</b> کسر دوم رو ضرب کنی!</p>
      </div>
    `
  },

  /* ===== درس ۳: جمع و تفریق عبارت‌های گویا ===== */
  'ch7-l3': {
    title: 'جمع و تفریق عبارت‌های گویا',
    chapter: 'ch7',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 جمع با مخرج مشترک</div>
        <p>اگر مخرج‌ها یکسان باشند:</p>
        <div class="formula-text">a/b + c/b = (a + c)/b</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 جمع با مخرج مختلف</div>
        <p>ابتدا مخرج مشترک می‌گیریم:</p>
        <div class="formula-text">a/b + c/d = (ad + bc)/(bd)</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: مخرج مشترک</div>
        <div class="example-solution">
          (3x+7)/(x+2) + (2x−3)/(x+2) <br>
          = (3x+7 + 2x−3)/(x+2) <br>
          = (5x+4)/(x+2)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: تفریق با پرانتز</div>
        <div class="example-solution">
          (3x+7)/(x+2) − (2x−3)/(x+2) <br>
          = (3x+7 − (2x−3))/(x+2) <br>
          = (3x+7−2x+3)/(x+2) <br>
          = (x+10)/(x+2)
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ هشدار</div>
        <p>در تفریق کسرها، <b>حتماً پرانتز</b> بذار تا علامت‌ها درست باز شوند!</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: مخرج مختلف</div>
        <div class="example-solution">
          (a²−2)/(a²−4) + (a−2)/(a+2) <br>
          مخرج مشترک: (a−2)(a+2) <br>
          = (a²−2)/((a−2)(a+2)) + (a−2)²/((a−2)(a+2)) <br>
          = (a²−2 + a²−4a+4)/((a−2)(a+2)) <br>
          = (2a²−4a+2)/((a−2)(a+2)) <br>
          = 2(a−1)²/((a−2)(a+2))
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <div class="example-solution">
          2/(x+2) − (x−1)/(x+4) <br>
          = [2(x+4) − (x−1)(x+2)]/((x+2)(x+4)) <br>
          = [2x+8 − (x²+x−2)]/((x+2)(x+4)) <br>
          = (−x² + x + 10)/((x+2)(x+4))
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۵: با تجزیه</div>
        <div class="example-solution">
          7/(x²−x−2) + x/(x²+4x+3) <br>
          <br>
          x²−x−2 = (x−2)(x+1) <br>
          x²+4x+3 = (x+1)(x+3) <br>
          مخرج مشترک: (x−2)(x+1)(x+3) <br>
          <br>
          = [7(x+3) + x(x−2)] / [(x−2)(x+1)(x+3)] <br>
          = (7x+21+x²−2x) / [(x−2)(x+1)(x+3)] <br>
          = (x²+5x+21) / [(x−2)(x+1)(x+3)]
        </div>
      </div>

      <h2>🎯 عبارت‌های گویای مرکب</h2>
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>عبارتی که در صورت یا مخرج آن، خودش یک عبارت گویا باشد.</p>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 دو روش حل</div>
        <ol>
          <li><b>روش اول:</b> صورت و مخرج را جدا ساده کن، بعد تقسیم کن.</li>
          <li><b>روش دوم:</b> صورت و مخرج را در مخرج مشترک ضرب کن.</li>
        </ol>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۶</div>
        <div class="example-solution">
          [1 − 1/x] / [1 − 1/x²] <br>
          <br>
          روش اول: <br>
          صورت: (x−1)/x <br>
          مخرج: (x²−1)/x² <br>
          حاصل: (x−1)/x ÷ (x²−1)/x² <br>
          = (x−1)/x × x²/((x−1)(x+1)) <br>
          = x/(x+1)
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته طلایی</div>
        <p>برای جمع و تفریق:</p>
        <ol>
          <li>مخرج‌ها را <b>تجزیه</b> کن</li>
          <li><b>مخرج مشترک</b> بگیر</li>
          <li>صورت را <b>ساده</b> کن</li>
          <li>در صورت امکان، حاصل را <b>تجزیه و ساده</b> کن</li>
        </ol>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۷: مسئله کاربردی</div>
        <p>طول مستطیلی از دو برابر عرض آن یک واحد کمتر است. نسبت محیط به مساحت این مستطیل را به صورت عبارت گویا بنویسید.</p>
        <div class="example-solution">
          عرض = x ، طول = 2x−1 <br>
          محیط = 2(x + 2x−1) = 6x − 2 <br>
          مساحت = x(2x−1) = 2x²−x <br>
          نسبت = (6x−2)/(2x²−x) = 2(3x−1)/(x(2x−1))
        </div>
      </div>
    `
  }

};
