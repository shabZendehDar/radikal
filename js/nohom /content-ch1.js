/* ============================================
   📖 فصل ۱: مجموعه‌ها
   ============================================ */

const CONTENT_CH1 = {

  /* ============================================
     📘 درس ۱: معرفی مجموعه
     ============================================ */
  'ch1-l1': {
    title: 'معرفی مجموعه',
    chapter: 'ch1',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف مجموعه</div>
        <p>مجموعه، دسته‌ای از اشیاء <b>مشخص</b> و <b>متمایز</b> است که با یک نام (معمولاً حرف بزرگ) نمایش داده می‌شود.</p>
        <p>هر یک از اشیاء داخل مجموعه را یک <b>عضو</b> مجموعه می‌نامیم.</p>
      </div>

      <h2>💡 نکات کلیدی</h2>
      <ul>
        <li>در نمایش مجموعه، <b>ترتیب</b> نوشتن اعضا مهم نیست.</li>
        <li><b>تکرار</b> عضوها مجموعه‌ی جدیدی نمی‌سازد؛ مثلاً <span class="math">{3, 3, 4}</span> همان <span class="math">{3, 4}</span> است.</li>
        <li>عبارت‌هایی که مجموعه‌ی <b>معین و یکتا</b> را مشخص نکنند، مجموعه نیستند.</li>
      </ul>

      <h2>✍️ نمایش مجموعه</h2>

      <h3>روش اول: نوشتن اعضا</h3>
      <p>اعضای مجموعه را داخل دو آکولاد <span class="math">{ }</span> می‌نویسیم.</p>
      <div class="formula-text">A = {2, 3, 5}</div>

      <h3>روش دوم: نمودار ون</h3>
      <p>اعضای مجموعه را داخل یک منحنی بسته رسم می‌کنیم و نام مجموعه را کنار آن می‌نویسیم.</p>

      <div class="box box-formula">
        <div class="box-title">🔑 نماد عضویت</div>
        <p>اگر <span class="math">a</span> عضوی از مجموعه <span class="math">A</span> باشد، می‌نویسیم:</p>
        <div class="formula-text">a ∈ A</div>
        <p>و اگر عضو نباشد:</p>
        <div class="formula-text">a ∉ A</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>مجموعه <span class="math">A = {1, 2, 3, 4}</span> را در نظر بگیرید:</p>
        <ul>
          <li><span class="math">2 ∈ A</span> ✅ (۲ عضوه)</li>
          <li><span class="math">5 ∉ A</span> ✅ (۵ عضو نیست)</li>
          <li><span class="math">4 ∈ A</span> ✅</li>
          <li><span class="math">7 ∉ A</span> ✅</li>
        </ul>
      </div>

      <h2>🎯 مجموعه تهی</h2>
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>اگر در مجموعه‌ای هیچ عضوی وجود نداشته باشد، آن را <b>مجموعه تهی</b> می‌نامیم و با نماد <span class="math">∅</span> یا <span class="math">{ }</span> نمایش می‌دهیم.</p>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ توجه</div>
        <p>مجموعه <span class="math">∅</span> با مجموعه <span class="math">{∅}</span> متفاوت است!</p>
        <ul>
          <li><span class="math">∅</span> → خالی است (۰ عضو)</li>
          <li><span class="math">{∅}</span> → یک عضو دارد (که همان مجموعه تهی است)</li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: کدام مجموعه تهی است؟</div>
        <ul>
          <li>عددهای طبیعی بین ۵ و ۶ → تهی ✅</li>
          <li>عددهای صحیح بین −۱ و ۱ → تهی ✅</li>
          <li>عددهای اول و زوج → تهی ✅</li>
          <li>عددهای طبیعی یک رقمی و مضرب ۳ که اول باشند → تهی ✅</li>
        </ul>
      </div>

      <h2>📝 تعیین تعداد اعضای مجموعه</h2>
      <p>تعداد اعضای مجموعه <span class="math">A</span> را با <span class="math">n(A)</span> نمایش می‌دهیم.</p>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>اگر <span class="math">A = {2, 4, 6, 7}</span> باشد، <span class="math">n(A)</span> چقدر است؟</p>
        <div class="example-solution">n(A) = 4</div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>عبارت‌هایی مثل «چهار عدد فرد متوالی» یا «سه شهر ایران» مجموعه نیستند، چون اعضایشان <b>معین و مشخص</b> نیستند.</p>
      </div>
    `
  },

  /* ============================================
     📘 درس ۲: مجموعه‌های برابر و نمایش مجموعه‌ها
     ============================================ */
  'ch1-l2': {
    title: 'مجموعه‌های برابر و نمایش مجموعه‌ها',
    chapter: 'ch1',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 دو مجموعه برابر</div>
        <p>دو مجموعه <span class="math">A</span> و <span class="math">B</span> را برابر می‌نامیم، هرگاه همه اعضای <span class="math">A</span> عضو <span class="math">B</span> باشند و برعکس.</p>
        <div class="formula-text">A = B</div>
        <p>اگر حتی یک عضو در یکی باشد و در دیگری نباشد، مجموعه‌ها برابر نیستند:</p>
        <div class="formula-text">A ≠ B</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>آیا <span class="math">A = {1, 2, 3}</span> با <span class="math">B = {3, 2, 1}</span> برابر است؟</p>
        <div class="example-solution">
          بله ✅ — چون ترتیب مهم نیست و هر دو مجموعه اعضای یکسانی دارند.
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>آیا <span class="math">{7, 8, 9}</span> با <span class="math">{8, 9, 10}</span> برابر است؟</p>
        <div class="example-solution">
          خیر ❌ — چون ۷ در اولی هست و در دومی نیست.
        </div>
      </div>

      <h2>🎯 زیرمجموعه</h2>
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>اگر هر عضو مجموعه <span class="math">A</span>، عضوی از مجموعه <span class="math">B</span> باشد، می‌گوییم <span class="math">A</span> زیرمجموعه <span class="math">B</span> است:</p>
        <div class="formula-text">A ⊆ B</div>
        <p>اگر حداقل یک عضو <span class="math">A</span> در <span class="math">B</span> نباشد:</p>
        <div class="formula-text">A ⊄ B</div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ تفاوت ∈ و ⊆</div>
        <ul>
          <li><span class="math">∈</span> → <b>عضویت</b> یک شیء در مجموعه</li>
          <li><span class="math">⊆</span> → <b>زیرمجموعه</b> بودن یک مجموعه در مجموعه دیگر</li>
        </ul>
      </div>

      <h2>📋 زیرمجموعه‌های یک مجموعه</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال</div>
        <p>همه زیرمجموعه‌های <span class="math">A = {a, b, c}</span> را بنویسید.</p>
        <div class="example-solution">
          ∅ <br>
          {a} ، {b} ، {c} <br>
          {a, b} ، {a, c} ، {b, c} <br>
          {a, b, c}
        </div>
        <p style="margin-top:10px;"><b>تعداد:</b> ۸ زیرمجموعه</p>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 قانون طلایی</div>
        <p>اگر مجموعه‌ای <span class="math">n</span> عضو داشته باشد، تعداد زیرمجموعه‌هایش برابر است با:</p>
        <div class="formula-text">2ⁿ</div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ نکات مهم</div>
        <ul>
          <li>مجموعه تهی، زیرمجموعه هر مجموعه‌ای است: <span class="math">∅ ⊆ A</span></li>
          <li>هر مجموعه، زیرمجموعه خودش است: <span class="math">A ⊆ A</span></li>
        </ul>
      </div>

      <h2>📐 نمایش مجموعه‌ها با نمادهای ریاضی</h2>
      <p>گاهی اعضای یک مجموعه خاصیت مشترکی دارند. در این حالت با نمادهای ریاضی نمایش می‌دهیم:</p>

      <div class="box box-example">
        <div class="box-title">📌 مثال‌ها</div>
        <p>مجموعه عددهای طبیعی زوج:</p>
        <div class="formula-text">E = {2k | k ∈ ℕ}</div>
        <p>مجموعه عددهای طبیعی فرد:</p>
        <div class="formula-text">O = {2k − 1 | k ∈ ℕ}</div>
        <p>عددهای طبیعی بین ۶ و ۱۱:</p>
        <div class="formula-text">A = {x ∈ ℕ | 6 < x < 11}</div>
      </div>

      <h2>🔢 مجموعه‌های اعداد</h2>

      <div class="box box-def">
        <div class="box-title">📖 مجموعه عددهای طبیعی</div>
        <div class="formula-text">ℕ = {1, 2, 3, 4, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 مجموعه عددهای حسابی</div>
        <div class="formula-text">𝕎 = {0, 1, 2, 3, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 مجموعه عددهای صحیح</div>
        <div class="formula-text">ℤ = {..., −3, −2, −1, 0, 1, 2, 3, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 مجموعه عددهای گویا</div>
        <p>عددهایی که به صورت کسر دو عدد صحیح نوشته می‌شوند:</p>
        <div class="formula-text">ℚ = {a/b | a, b ∈ ℤ , b ≠ 0}</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 رابطه مجموعه‌ها</div>
        <div class="formula-text">ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ</div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>هر عدد صحیح، یک عدد گویاست؛ چون می‌توان آن را به صورت <span class="math">a = a/1</span> نوشت.</p>
      </div>
    `
  }

  /* درس‌های ۳ و ۴ در پیام بعدی اضافه می‌شوند */
};
