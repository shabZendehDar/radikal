/* ============================================
   📖 فصل ۶: خط و معادله‌های خطی
   ============================================ */

const CONTENT_CH6 = {

  /* ===== درس ۱: معادله خط ===== */
  'ch6-l1': {
    title: 'معادله خط',
    chapter: 'ch6',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 رابطه بین دو متغیر</div>
        <p>وقتی دو کمیت به هم وابسته باشند، بین آن‌ها یک <b>رابطه</b> وجود دارد که می‌توان با <b>معادله</b> یا <b>نمودار</b> نشان داد.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: دوچرخه‌سوار</div>
        <p>دوچرخه‌سواری با سرعت ثابت ۲ متر بر ثانیه حرکت می‌کند. جدول زیر را کامل کنید:</p>
        <table>
          <thead>
            <tr><th>زمان (ثانیه)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>
          </thead>
          <tbody>
            <tr><td>مسافت (متر)</td><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr>
          </tbody>
        </table>
        <p>رابطه: <span class="math">y = 2x</span></p>
      </div>

      <h2>🎯 معادله خط از مبدأ</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 معادله خط از مبدأ</div>
        <div class="formula-text">y = ax</div>
        <p>تمام خط‌هایی که از <b>مبدأ مختصات</b> می‌گذرند، این شکل را دارند.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>آیا خط <span class="math">y = 3x</span> از مبدأ می‌گذرد؟</p>
        <div class="example-solution">
          نقطه (0, 0) در معادله: <br>
          0 = 3 × 0 ⇒ 0 = 0 ✅ <br>
          پس بله، از مبدأ می‌گذرد.
        </div>
      </div>

      <h2>🎯 معادله خط کلی</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 معادله خط (فرم کلی)</div>
        <div class="formula-text">y = ax + b</div>
        <ul>
          <li><span class="math">a</span> = شیب خط</li>
          <li><span class="math">b</span> = عرض از مبدأ (محل برخورد با محور y‌ها)</li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: پیدا کردن معادله</div>
        <p>خطی از نقطه‌های (0, 2) و (1, 4) می‌گذرد. معادله آن را پیدا کنید.</p>
        <div class="example-solution">
          عرض از مبدأ: b = 2 (چون y در x=0 برابر 2 است) <br>
          شیب: a = (4−2)/(1−0) = 2 <br>
          ⇒ معادله: y = 2x + 2
        </div>
      </div>

      <h2>📐 رسم نمودار خط</h2>
      <p>برای رسم هر خط، کافی است <b>دو نقطه</b> از آن را پیدا کنیم و به هم وصل کنیم.</p>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: رسم خط y = 2x − 1</div>
        <div class="example-solution">
          x = 0 ⇒ y = −1 → نقطه (0, −1) <br>
          x = 2 ⇒ y = 3 → نقطه (2, 3) <br>
          دو نقطه را به هم وصل می‌کنیم.
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>برای پیدا کردن محل برخورد خط با محورها:</p>
        <ul>
          <li>با محور y‌ها: <span class="math">x = 0</span> قرار بده</li>
          <li>با محور x‌ها: <span class="math">y = 0</span> قرار بده</li>
        </ul>
      </div>
    `
  },

  /* ===== درس ۲: شیب و عرض از مبدأ ===== */
  'ch6-l2': {
    title: 'شیب و عرض از مبدأ',
    chapter: 'ch6',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 شیب خط</div>
        <p>نسبت <b>تغییرات y</b> به <b>تغییرات x</b> بین دو نقطه از خط.</p>
        <div class="formula-text">a = (y₂ − y₁) / (x₂ − x₁)</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 معادله خط با شیب و عرض از مبدأ</div>
        <div class="formula-text">y = ax + b</div>
        <ul>
          <li><span class="math">a</span> = شیب (زاویه خط با محور x‌ها)</li>
          <li><span class="math">b</span> = عرض از مبدأ (محل برخورد با محور y‌ها)</li>
        </ul>
      </div>

      <h2>🎯 رابطه شیب با زاویه</h2>
      <table>
        <thead>
          <tr><th>شیب</th><th>زاویه با محور x‌ها</th><th>شکل خط</th></tr>
        </thead>
        <tbody>
          <tr><td>a > 0</td><td>زاویه حاده</td><td>صعودی ↗</td></tr>
          <tr><td>a < 0</td><td>زاویه منفرجه</td><td>نزولی ↘</td></tr>
          <tr><td>a = 0</td><td>موازی محور x</td><td>افقی →</td></tr>
        </tbody>
      </table>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>در معادله‌های زیر، شیب و عرض از مبدأ را مشخص کنید.</p>
        <div class="example-solution">
          y = 2x − 4 &nbsp; → &nbsp; شیب 2، عرض از مبدأ −4 <br>
          y = −(2/3)x &nbsp; → &nbsp; شیب −2/3، عرض از مبدأ 0 <br>
          y = −3x + 1 &nbsp; → &nbsp; شیب −3، عرض از مبدأ 1
        </div>
      </div>

      <h2>🎯 پیدا کردن شیب از دو نقطه</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>شیب خطی که از نقطه‌های (1, 3) و (4, 9) می‌گذرد چقدر است؟</p>
        <div class="example-solution">
          a = (9 − 3) / (4 − 1) = 6/3 = 2
        </div>
      </div>

      <h2>🎯 خطوط موازی</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 شرط موازی بودن</div>
        <p>دو خط موازی هستند اگر و فقط اگر <b>شیب‌هایشان برابر</b> باشد.</p>
        <div class="formula-text">a₁ = a₂</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>معادله خطی را بنویسید که موازی <span class="math">y = 2x + 1</span> باشد و از نقطه (1, 5) بگذرد.</p>
        <div class="example-solution">
          چون موازی است: a = 2 <br>
          y = 2x + b <br>
          5 = 2(1) + b ⇒ b = 3 <br>
          ⇒ y = 2x + 3
        </div>
      </div>

      <h2>🎯 پیدا کردن معادله خط</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>معادله خطی را بنویسید که شیب آن ۳ و از نقطه (2, 1) می‌گذرد.</p>
        <div class="example-solution">
          y = 3x + b <br>
          1 = 3(2) + b ⇒ b = −5 <br>
          ⇒ y = 3x − 5
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته طلایی</div>
        <p>برای پیدا کردن معادله خط، همیشه به دو چیز نیاز داری:</p>
        <ol>
          <li><b>شیب</b> (a)</li>
          <li><b>یک نقطه</b> روی خط</li>
        </ol>
      </div>
    `
  },

  /* ===== درس ۳: دستگاه معادله‌های خطی ===== */
  'ch6-l3': {
    title: 'دستگاه معادله‌های خطی',
    chapter: 'ch6',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 دستگاه معادله‌های خطی</div>
        <p>دو معادله خطی که باید همزمان حل شوند، یک <b>دستگاه معادله‌های خطی</b> می‌سازند.</p>
        <div class="formula-text">a₁x + b₁y = c₁</div>
        <div class="formula-text">a₂x + b₂y = c₂</div>
      </div>

      <h2>🎯 روش حل: حذفی</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 روش حذفی</div>
        <p>یکی از متغیرها را حذف می‌کنیم تا به یک معادله یک‌مجهولی برسیم.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>دستگاه زیر را حل کنید:</p>
        <div class="example-solution">
          x − y = 1 <br>
          x + y = 3 <br>
          <br>
          (جمع دو معادله) <br>
          2x = 4 ⇒ x = 2 <br>
          <br>
          (جایگزینی در معادله اول) <br>
          2 − y = 1 ⇒ y = 1 <br>
          <br>
          جواب: (x, y) = (2, 1)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>حل کنید:</p>
        <div class="example-solution">
          3x − 5y = 1 <br>
          2x + 3y = 7 <br>
          <br>
          معادله اول × 3: 9x − 15y = 3 <br>
          معادله دوم × 5: 10x + 15y = 35 <br>
          <br>
          جمع: 19x = 38 ⇒ x = 2 <br>
          2(2) + 3y = 7 ⇒ y = 1 <br>
          <br>
          جواب: (x, y) = (2, 1)
        </div>
      </div>

      <h2>🎯 روش حل: جایگزینی</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 روش جایگزینی</div>
        <p>از یکی از معادله‌ها، یک متغیر را برحسب دیگری می‌نویسیم و در معادله دیگر می‌گذاریم.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>حل کنید:</p>
        <div class="example-solution">
          2x − 3y = 5 <br>
          y = (1/3)x − 2/3 <br>
          <br>
          2x − 3[(1/3)x − 2/3] = 5 <br>
          2x − x + 2 = 5 <br>
          x = 3 <br>
          y = (1/3)(3) − 2/3 = 1/3 <br>
          <br>
          جواب: (x, y) = (3, 1/3)
        </div>
      </div>

      <h2>🎯 روش حل: ترسیمی</h2>
      <div class="box box-def">
        <div class="box-title">📖 حل ترسیمی</div>
        <p>دو خط را در دستگاه مختصات رسم می‌کنیم. <b>نقطه برخورد</b> آن‌ها جواب دستگاه است.</p>
      </div>

      <h2>📊 حالات دستگاه</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 سه حالت دستگاه</div>
        <ol>
          <li><b>یک جواب:</b> خط‌ها در یک نقطه همدیگر را قطع می‌کنند (شیب‌های متفاوت).</li>
          <li><b>بی‌شمار جواب:</b> خط‌ها بر هم منطبق‌اند (یک خط هستند).</li>
          <li><b>بدون جواب:</b> خط‌ها موازی‌اند (شیب برابر، عرض از مبدأ متفاوت).</li>
        </ol>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>دستگاه زیر چند جواب دارد؟</p>
        <div class="example-solution">
          2x − 3y = 7 <br>
          4x − 6y = 5 <br>
          <br>
          شیب هر دو: a = 2/3 (برابر) <br>
          پس موازی هستند → بدون جواب
        </div>
      </div>

      <h2>🎯 مثال کاربردی: مسئله شترمرغ و گاو</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۵</div>
        <p>در مزرعه‌ای ۲۰ شترمرغ و گاو وجود دارد. پاهای آن‌ها ۵۶ عدد است. چند شترمرغ و چند گاو وجود دارد؟</p>
        <p>(شترمرغ ۲ پا، گاو ۴ پا)</p>
        <div class="example-solution">
          x + y = 20 (تعداد) <br>
          2x + 4y = 56 (پاها) <br>
          <br>
          از اولی: x = 20 − y <br>
          2(20 − y) + 4y = 56 <br>
          40 − 2y + 4y = 56 <br>
          2y = 16 ⇒ y = 8 (گاو) <br>
          x = 12 (شترمرغ) <br>
          <br>
          جواب: ۱۲ شترمرغ و ۸ گاو
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>برای حل مسائل کلامی با دستگاه:</p>
        <ol>
          <li>دو متغیر تعریف کن</li>
          <li>دو معادله بنویس</li>
          <li>دستگاه را حل کن</li>
          <li>جواب را در صورت مسئله چک کن</li>
        </ol>
      </div>
    `
  }

};
