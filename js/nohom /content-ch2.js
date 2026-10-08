/* ============================================
   📖 فصل ۲: عددهای حقیقی
   ============================================ */

const CONTENT_CH2 = {

  /* ============================================
     📘 درس ۱: عددهای گویا
     ============================================ */
  'ch2-l1': {
    title: 'عددهای گویا',
    chapter: 'ch2',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>عدد گویا عددی است که بتوان آن را به صورت کسری از دو عدد صحیح نوشت:</p>
        <div class="formula-text">a / b &nbsp; (b ≠ 0)</div>
        <p>که در آن <span class="math">a</span> و <span class="math">b</span> عدد صحیح هستند و <span class="math">b</span> مخالف صفر است.</p>
      </div>

      <h2>💡 نکات کلیدی</h2>
      <ul>
        <li>هر عدد صحیح، یک عدد گویاست؛ چون هر عدد صحیح مثل <span class="math">a</span> را می‌شود به صورت <span class="math">a/1</span> نوشت.</li>
        <li>مجموعه اعداد گویا را با <span class="math">ℚ</span> نمایش می‌دهیم.</li>
        <li>رابطه مجموعه‌ها: <span class="math">ℤ ⊂ ℚ</span> (صحیح‌ها زیرمجموعه گویاها هستند).</li>
      </ul>

      <h2>📋 مثال‌ها</h2>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>کدام‌یک از اعداد زیر گویاست؟</p>
        <p><span class="math">3/4</span> ، <span class="math">−5</span> ، <span class="math">0/25</span> ، <span class="math">√2</span></p>
        <div class="example-solution">
          3/4 ✅ (کسر دو عدد صحیح) <br>
          −5 ✅ (چون −5 = −5/1) <br>
          0/25 ✅ (چون 0/25 = 1/4) <br>
          √2 ❌ (گنگ است)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>عدد <span class="math">2</span> گویاست؟ چرا؟</p>
        <div class="example-solution">
          بله ✅ — چون <span class="math">2 = 2/1</span>
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ توجه</div>
        <p>عددی مثل <span class="math">2</span> هم گویاست چون می‌شود آن را به صورت <span class="math">2/1</span> نوشت. پس گویا بودن، فقط مخصوص کسرها نیست!</p>
      </div>

      <h2>📊 نمایش اعشاری اعداد گویا</h2>
      <p>هر عدد گویا، وقتی به اعشاری تبدیل شود، یکی از این دو حالت است:</p>

      <h3>الف) اعشاری مختوم</h3>
      <p>رقم‌های اعشار محدود و تمام‌شدنی هستند.</p>
      <div class="formula-text">1/4 = 0/25 &nbsp;&nbsp; | &nbsp;&nbsp; 3/8 = 0/375</div>

      <h3>ب) اعشاری متناوب</h3>
      <p>رقم‌ها تکرار می‌شوند.</p>
      <div class="formula-text">1/3 = 0/333... = 0/3̅</div>
      <div class="formula-text">7/6 = 1/1666... = 1/16̅</div>

      <div class="box box-formula">
        <div class="box-title">🔑 قانون طلایی</div>
        <p>کسر (بعد از ساده شدن) اعشاری مختوم دارد <b>اگر و فقط اگر</b> مخرجش فقط شمارنده‌های اول ۲ و ۵ داشته باشد.</p>
      </div>

      <h3>جدول نمونه</h3>
      <table>
        <thead>
          <tr>
            <th>کسر</th>
            <th>مخرج ساده‌شده</th>
            <th>نتیجه</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="math">3/20</span></td>
            <td><span class="math">2² × 5</span></td>
            <td>✅ مختوم</td>
          </tr>
          <tr>
            <td><span class="math">5/6</span></td>
            <td><span class="math">2 × 3</span></td>
            <td>❌ متناوب</td>
          </tr>
          <tr>
            <td><span class="math">7/16</span></td>
            <td><span class="math">2⁴</span></td>
            <td>✅ مختوم</td>
          </tr>
          <tr>
            <td><span class="math">5/11</span></td>
            <td><span class="math">11</span></td>
            <td>❌ متناوب</td>
          </tr>
        </tbody>
      </table>

      <h2>🔄 تبدیل اعشاری متناوب به کسر</h2>

      <div class="box box-example">
        <div class="box-title">📌 مثال: تبدیل 0/3̅ به کسر</div>
        <p>عدد را برابر <span class="math">x</span> می‌گذاریم:</p>
        <div class="example-solution">
          x = 0/333... <br>
          10x = 3/333... <br>
          10x − x = 3/333... − 0/333... <br>
          9x = 3 <br>
          x = 3/9 = 1/3
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال: تبدیل 0/12̅ به کسر</div>
        <div class="example-solution">
          x = 0/121212... <br>
          100x = 12/121212... <br>
          100x − x = 12 <br>
          99x = 12 <br>
          x = 12/99 = 4/33
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>اگر عدد متناوب با <b>n رقم</b> تکرار شود، دو طرف را در <span class="math">10ⁿ</span> ضرب کن و از هم کم کن.</p>
      </div>
    `
  },

  /* ============================================
     📘 درس ۲: عددهای حقیقی
     ============================================ */
  'ch2-l2': {
    title: 'عددهای حقیقی',
    chapter: 'ch2',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 عدد گنگ (اصم)</div>
        <p>عددهایی که <b>گویا نیستند</b> و نمی‌شود آن‌ها را به صورت کسر دو عدد صحیح نوشت.</p>
        <p>مثال‌ها: <span class="math">√2</span> ، <span class="math">√3</span> ، <span class="math">π</span> ، <span class="math">0/1010010001...</span></p>
        <p>اعشاری‌شان <b>نه مختوم است و نه متناوب</b>.</p>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 عدد حقیقی</div>
        <p>مجموعه اعداد حقیقی = اجتماع گویاها و گنگ‌ها.</p>
        <div class="formula-text">ℝ = ℚ ∪ ℚ′</div>
      </div>

      <h2>🔗 روابط مهم مجموعه‌ها</h2>
      <div class="formula-text" style="text-align: right; direction: rtl;">
        ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ
      </div>
      <div class="formula-text" style="text-align: right; direction: rtl;">
        ℚ ∩ ℚ′ = ∅ &nbsp; | &nbsp; ℚ ∪ ℚ′ = ℝ
      </div>

      <h2>📊 مقایسه اعداد حقیقی</h2>
      <ol>
        <li><b>تبدیل به اعشاری:</b> <span class="math">√2 ≈ 1/414</span> و <span class="math">3/2 = 1/5</span> → پس <span class="math">√2 < 3/2</span></li>
        <li><b>توان دوم گرفتن:</b> برای مقایسه <span class="math">√a</span> و <span class="math">√b</span> → <span class="math">a</span> و <span class="math">b</span> را مقایسه کن</li>
        <li><b>تقریب زدن:</b> با استفاده از مقادیر تقریبی</li>
      </ol>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>کدام بزرگ‌تر است؟ <span class="math">√5</span> یا <span class="math">2/2</span>؟</p>
        <div class="example-solution">
          √5 ≈ 2/236 > 2/2 <br>
          ⇒ √5 بزرگ‌تر است
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>کدام عدد بین <span class="math">1</span> و <span class="math">2</span> قرار دارد؟</p>
        <div class="example-solution">
          √2 ≈ 1/414 ✅ (بین 1 و 2)
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>اعداد گنگ را نمی‌توان به صورت کسر نوشت، ولی می‌توان آن‌ها را روی محور اعداد نمایش داد.</p>
      </div>
    `
  },

  /* ============================================
     📘 درس ۳: قدر مطلق و محاسبه تقریبی
     ============================================ */
  'ch2-l3': {
    title: 'قدر مطلق و محاسبه تقریبی',
    chapter: 'ch2',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف قدر مطلق</div>
        <p>فاصله عدد <span class="math">a</span> از صفر روی محور اعداد حقیقی.</p>
        <div class="formula-text">
          |a| = a &nbsp; اگر &nbsp; a ≥ 0 <br>
          |a| = −a &nbsp; اگر &nbsp; a < 0
        </div>
      </div>

      <h2>📋 مثال‌ها</h2>
      <ul>
        <li><span class="math">|5| = 5</span></li>
        <li><span class="math">|−3| = 3</span></li>
        <li><span class="math">|0| = 0</span></li>
      </ul>

      <h2>🎯 ویژگی‌های مهم</h2>
      <ol>
        <li><span class="math">|a| ≥ 0</span> (همیشه نامنفی)</li>
        <li><span class="math">|ab| = |a| · |b|</span></li>
        <li><span class="math">|a/b| = |a| / |b|</span></li>
        <li><span class="math">|a + b| ≤ |a| + |b|</span> (نامساوی مثلثی)</li>
      </ol>

      <h2>🔗 قدر مطلق و رادیکال</h2>
      <div class="formula-text">√(a²) = |a|</div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p><span class="math">√((−3)²) = √9 = 3 = |−3|</span></p>
      </div>

      <h2>✏️ ساده کردن عبارات قدر مطلق</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال: |1 − √2| را بدون قدر مطلق بنویس</div>
        <p>چون <span class="math">√2 ≈ 1/414 > 1</span>، پس <span class="math">1 − √2 < 0</span></p>
        <div class="example-solution">
          |1 − √2| = −(1 − √2) = √2 − 1
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال: |√5 − 2| را ساده کن</div>
        <p>چون <span class="math">√5 ≈ 2/236 > 2</span>، پس <span class="math">√5 − 2 > 0</span></p>
        <div class="example-solution">
          |√5 − 2| = √5 − 2
        </div>
      </div>

      <h2>📊 محاسبه تقریبی</h2>
      <table>
        <thead>
          <tr>
            <th>عدد</th>
            <th>مقدار تقریبی</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><span class="math">√2</span></td><td><span class="math">1/414</span></td></tr>
          <tr><td><span class="math">√3</span></td><td><span class="math">1/732</span></td></tr>
          <tr><td><span class="math">√5</span></td><td><span class="math">2/236</span></td></tr>
          <tr><td><span class="math">π</span></td><td><span class="math">3/141</span></td></tr>
        </tbody>
      </table>

      <div class="box box-example">
        <div class="box-title">📌 مثال</div>
        <p><span class="math">√7</span> بین کدام دو عدد صحیح است؟</p>
        <div class="example-solution">
          4 < 7 < 9 <br>
          ⇒ 2 < √7 < 3
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 روش سریع</div>
        <p>برای پیدا کردن دو عدد صحیح اطراف <span class="math">√n</span>، دو مربع کامل اطراف <span class="math">n</span> را پیدا کن.</p>
      </div>
    `
  }

};
