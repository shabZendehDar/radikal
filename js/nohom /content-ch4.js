/* ============================================
   📖 فصل ۴: توان و ریشه
   ============================================ */

const CONTENT_CH4 = {

  /* ===== درس ۱: توان صحیح ===== */
  'ch4-l1': {
    title: 'توان صحیح',
    chapter: 'ch4',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 یادآوری توان طبیعی</div>
        <p>اگر <span class="math">a</span> عددی غیرصفر و <span class="math">n</span> عددی طبیعی باشد:</p>
        <div class="formula-text">aⁿ = a × a × ... × a &nbsp; (n بار)</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 تعریف توان منفی</div>
        <p>اگر <span class="math">a</span> عددی غیرصفر و <span class="math">n</span> عددی طبیعی باشد:</p>
        <div class="formula-text">a⁻ⁿ = 1 / aⁿ</div>
        <p>و همچنین:</p>
        <div class="formula-text">a⁻ⁿ = (1/a)ⁿ</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <div class="example-solution">
          2⁻³ = 1/2³ = 1/8 <br>
          5⁻² = 1/5² = 1/25 <br>
          (2/3)⁻⁴ = (3/2)⁴ = 81/16 <br>
          (−2)⁻³ = 1/(−2)³ = −1/8
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ تفاوت مهم</div>
        <ul>
          <li><span class="math">(−5)⁻² = 1/25</span></li>
          <li><span class="math">−5⁻² = −1/25</span></li>
        </ul>
        <p>پرانتز، علامت منفی را هم داخل توان می‌برد!</p>
      </div>

      <h2>📐 قوانین توان</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قوانین اصلی</div>
        <ul>
          <li><span class="math">aᵐ × aⁿ = aᵐ⁺ⁿ</span></li>
          <li><span class="math">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</span></li>
          <li><span class="math">(aᵐ)ⁿ = aᵐˣⁿ</span></li>
          <li><span class="math">(ab)ⁿ = aⁿ × bⁿ</span></li>
          <li><span class="math">(a/b)ⁿ = aⁿ / bⁿ</span></li>
          <li><span class="math">a⁰ = 1 &nbsp; (a ≠ 0)</span></li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: ساده کن</div>
        <div class="example-solution">
          2⁻² × 5⁻² = (2 × 5)⁻² = 10⁻² = 1/100 <br>
          (2⁸ × 5¹⁰) / (2⁴ × 5⁶) = 2⁴ × 5⁴ = 16 × 625 = 10000 <br>
          (x⁵ · y² · z) / (x⁻² · y² · z³) = x⁷ · z⁻²
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>توان منفی، معکوس عدد با توان مثبت است. این کار برای ساده‌سازی محاسبات خیلی مفیده.</p>
      </div>
    `
  },

  /* ===== درس ۲: نماد علمی ===== */
  'ch4-l2': {
    title: 'نماد علمی',
    chapter: 'ch4',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف نماد علمی</div>
        <p>نماد علمی هر عدد اعشاری مثبت به صورت زیر است:</p>
        <div class="formula-text">a × 10ⁿ &nbsp; (1 ≤ a < 10)</div>
        <p>که در آن <span class="math">n</span> عددی صحیح است.</p>
      </div>

      <h2>🎯 چرا نماد علمی؟</h2>
      <ul>
        <li>نمایش اعداد <b>خیلی بزرگ</b> (مثل فاصله ستاره‌ها)</li>
        <li>نمایش اعداد <b>خیلی کوچک</b> (مثل اندازه باکتری)</li>
        <li>سادگی در محاسبات و ضرب و تقسیم</li>
      </ul>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: اعداد بزرگ</div>
        <div class="example-solution">
          124000 = 1/24 × 10⁵ <br>
          170000000000 = 1/7 × 10¹¹ <br>
          920400000 = 9/204 × 10⁸ <br>
          29000 = 2/9 × 10⁴
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: اعداد کوچک</div>
        <div class="example-solution">
          0/0000007 = 7 × 10⁻⁷ <br>
          0/0016 = 1/6 × 10⁻³ <br>
          0/00001275 = 1/275 × 10⁻⁵ <br>
          0/0137 = 1/37 × 10⁻²
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 قانون تبدیل</div>
        <ul>
          <li>برای اعداد بزرگ: ممیز را به <b>چپ</b> ببر → توان مثبت</li>
          <li>برای اعداد کوچک: ممیز را به <b>راست</b> ببر → توان منفی</li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: کاربرد در علوم</div>
        <p>شعاع خورشید حدود ۶۹۵۰۰۰ کیلومتر است. با نماد علمی:</p>
        <div class="example-solution">
          695000 = 6/95 × 10⁵
        </div>
        <p>اندازه یک باکتری ۰/۰۰۰۰۰۰۰۵ متر است:</p>
        <div class="example-solution">
          0/00000005 = 5 × 10⁻⁸
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: مقایسه</div>
        <p>قطر خورشید ۱/۴×۱۰⁹ متر و قطر زمین ۱/۳×۱۰⁷ متر است. قطر خورشید چند برابر زمین است؟</p>
        <div class="example-solution">
          (1/4 × 10⁹) / (1/3 × 10⁷) ≈ 1/08 × 10² ≈ 108 برابر
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>در ضرب اعداد با نماد علمی: ضرایب را در هم ضرب و توان‌ها را جمع کن.</p>
        <p>در تقسیم: ضرایب را تقسیم و توان‌ها را کم کن.</p>
      </div>
    `
  },

  /* ===== درس ۳: ریشه‌گیری ===== */
  'ch4-l3': {
    title: 'ریشه‌گیری',
    chapter: 'ch4',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 ریشه دوم</div>
        <p>اگر <span class="math">b</span> عددی حقیقی و <b>مثبت</b> باشد، <span class="math">√b</span> و <span class="math">−√b</span> را ریشه‌های دوم <span class="math">b</span> می‌نامند.</p>
        <div class="formula-text">(√b)² = b</div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ توجه</div>
        <p>عددهای منفی، ریشه دوم <b>ندارند</b>!</p>
        <p>مثلاً <span class="math">√(−9)</span> تعریف نشده است.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <div class="example-solution">
          √9 = 3 <br>
          −√9 = −3 <br>
          √0 = 0 <br>
          √(1/4) = 1/2 <br>
          √0/49 = 0/7
        </div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 ریشه سوم</div>
        <p>مکعب (توان سوم) عددی مثل <span class="math">b</span>، یعنی <span class="math">b³ = a</span>. ریشه سوم <span class="math">a</span> را با <span class="math">∛a</span> نمایش می‌دهیم.</p>
        <div class="formula-text">∛(a³) = a</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: ریشه سوم</div>
        <div class="example-solution">
          ∛8 = 2 (چون 2³ = 8) <br>
          ∛(−8) = −2 (چون (−2)³ = −8) <br>
          ∛27 = 3 <br>
          ∛(−27) = −3 <br>
          ∛0 = 0
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 نکته مهم</div>
        <ul>
          <li>عددهای <b>منفی، ریشه دوم ندارند</b>.</li>
          <li>ولی عددهای منفی، ریشه <b>سوم</b> دارند!</li>
          <li>هر عدد، فقط <b>یک</b> ریشه سوم دارد.</li>
        </ul>
      </div>

      <h2>📐 رابطه ریشه با قدر مطلق</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 رابطه طلایی</div>
        <div class="formula-text">√(x²) = |x|</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <div class="example-solution">
          √((−6)²) = √36 = 6 = |−6| <br>
          √(x²) = |x| <br>
          √((1−√2)²) = |1−√2| = √2 − 1
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>حاصل <span class="math">√x² + √y²</span> را در حالت‌های مختلف بنویسید.</p>
        <div class="example-solution">
          الف) x>0, y>0: = x + y <br>
          ب) x>0, y<0: = x − y <br>
          ج) x<0, y>0: = −x + y <br>
          د) x<0, y<0: = −x − y
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>برای ریشه دوم، همیشه به قدر مطلق فکر کن. برای ریشه سوم، علامت عدد حفظ می‌شود.</p>
      </div>
    `
  },

  /* ===== درس ۴: جمع و تفریق رادیکال‌ها ===== */
  'ch4-l4': {
    title: 'جمع و تفریق رادیکال‌ها',
    chapter: 'ch4',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 ضرب و تقسیم رادیکال‌ها</div>
        <p>برای دو عدد مثبت <span class="math">a</span> و <span class="math">b</span>:</p>
        <div class="formula-text">√(ab) = √a × √b</div>
        <div class="formula-text">√(a/b) = √a / √b</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <div class="example-solution">
          √2 × √8 = √(2×8) = √16 = 4 <br>
          √12 × √3 = √36 = 6 <br>
          √(50/2) = √25 = 5
        </div>
      </div>

      <h2>🎯 ساده کردن رادیکال</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قانون ساده‌سازی</div>
        <p>عدد زیر رادیکال را به ضرب دو عدد تجزیه کن که یکی مربع کامل باشد:</p>
        <div class="formula-text">√(a² × b) = a√b</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: ساده کن</div>
        <div class="example-solution">
          √8 = √(4 × 2) = 2√2 <br>
          √12 = √(4 × 3) = 2√3 <br>
          √18 = √(9 × 2) = 3√2 <br>
          √50 = √(25 × 2) = 5√2 <br>
          √75 = √(25 × 3) = 5√3 <br>
          √125 = √(25 × 5) = 5√5
        </div>
      </div>

      <h2>📐 جمع و تفریق رادیکال‌ها</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قانون طلایی</div>
        <p>برای جمع یا تفریق رادیکال‌ها، باید <b>قسمت رادیکالی یکسان</b> باشد:</p>
        <div class="formula-text">a√c + b√c = (a + b)√c</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <div class="example-solution">
          √12 + 9√3 = 2√3 + 9√3 = 11√3 <br>
          3√2 + 5√2 = 8√2 <br>
          7√5 − 2√5 = 5√5
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ هشدار</div>
        <p>عبارت‌های زیر را <b>نمی‌توان</b> ساده کرد (چون رادیکال یکسان نیست):</p>
        <ul>
          <li><span class="math">2√5 + 2√2</span> ≠ <span class="math">4√7</span></li>
          <li><span class="math">2√2 + 7√3</span> ≠ <span class="math">9√5</span></li>
        </ul>
      </div>

      <h2>🎯 گویا کردن مخرج</h2>
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>اگر در مخرج کسری رادیکال باشد، با ضرب صورت و مخرج در عبارت مناسب، مخرج را <b>گویا</b> می‌کنیم.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <div class="example-solution">
          20/√2 = (20 × √2)/(√2 × √2) = 20√2/2 = 10√2 <br>
          <br>
          5/(2√3) = 5√3/(2√3 × √3) = 5√3/6 <br>
          <br>
          4/√3 = 4√3/(√3 × √3) = 4√3/3
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 قاعده کلی</div>
        <p>برای گویا کردن مخرج <span class="math">√a</span>، صورت و مخرج را در <span class="math">√a</span> ضرب کن:</p>
        <div class="formula-text">b/√a = (b × √a) / a</div>
      </div>

      <h2>🎯 کاربردها</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۵: مساحت مثلث متساوی‌الاضلاع</div>
        <p>مثلث متساوی‌الاضلاعی به ضلع <span class="math">a</span> داریم. ارتفاع و مساحت را بیابید.</p>
        <p><b>حل:</b></p>
        <div class="example-solution">
          با فیثاغورس: h² = a² − (a/2)² = 3a²/4 <br>
          ⇒ h = (√3/2)a <br>
          <br>
          مساحت = (1/2) × a × h = (1/2) × a × (√3/2)a <br>
          = (√3/4)a²
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۶: زمین مربعی</div>
        <p>زمینی مربعی با قطر <span class="math">2√6</span> متر. مساحت و محیط را بیابید.</p>
        <p><b>حل:</b></p>
        <div class="example-solution">
          x² + x² = (2√6)² = 24 <br>
          2x² = 24 ⇒ x² = 12 <br>
          مساحت = 12 متر مربع <br>
          ضلع = √12 = 2√3 متر <br>
          محیط = 4 × 2√3 = 8√3 متر
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>برای جمع و تفریق رادیکال‌ها، <b>حتماً اول ساده کن</b> تا ببینی رادیکال‌ها یکسان می‌شوند یا نه.</p>
      </div>
    `
  }

};
