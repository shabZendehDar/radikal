/* ============================================
   📖 فصل ۸: حجم و مساحت
   ============================================ */

const CONTENT_CH8 = {

  /* ===== درس ۱: حجم کره و نیم‌کره ===== */
  'ch8-l1': {
    title: 'حجم کره و نیم‌کره',
    chapter: 'ch8',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف کره</div>
        <p>کره مجموعه نقاطی از فضا است که از یک نقطه (مرکز) به یک فاصله ثابت (شعاع) قرار دارند.</p>
      </div>

      <h2>🎯 حجم کره</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول حجم کره</div>
        <p>کره‌ای به شعاع <span class="math">R</span>:</p>
        <div class="formula-text">V = (4/3) π R³</div>
      </div>

      <h2>🎯 حجم نیم‌کره</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول حجم نیم‌کره</div>
        <div class="formula-text">V = (2/3) π R³</div>
      </div>

      <h2>🎯 مساحت رویه کره</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول مساحت کره</div>
        <p>مساحت رویه کره به شعاع <span class="math">R</span>:</p>
        <div class="formula-text">S = 4 π R²</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 نکته: نیم‌کره</div>
        <p>مساحت رویه نیم‌کره (بدون قاعده) برابر است با <b>دو برابر</b> مساحت دایره‌ای که نیم‌کره روی آن ایستاده:</p>
        <div class="formula-text">S(نیم‌کره) = 2 π R²</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>کره‌ای به شعاع ۳ سانتی‌متر داریم. حجم و مساحت آن را بیابید.</p>
        <div class="example-solution">
          V = (4/3) π (3)³ = (4/3) π × 27 = 36π cm³ <br>
          <br>
          S = 4π (3)² = 4π × 9 = 36π cm²
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: کره محاط در استوانه</div>
        <p>کره‌ای به شعاع R در استوانه‌ای محاط شده که ارتفاع و قطر قاعده‌اش ۲R است. حجم کره چه کسری از حجم استوانه است؟</p>
        <div class="example-solution">
          V(استوانه) = π R² × 2R = 2π R³ <br>
          V(کره) = (4/3) π R³ <br>
          نسبت = (4/3)π R³ ÷ 2π R³ = 2/3 <br>
          <br>
          ⇒ حجم کره دو سوم حجم استوانه محیط بر آن است.
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: کره زمین</div>
        <p>قطر تقریبی کره زمین حدود ۱۲۸۰۰ کیلومتر است. مساحت رویه زمین را به دست آورید.</p>
        <div class="example-solution">
          R = 12800/2 = 6400 km <br>
          S = 4π (6400)² <br>
          = 4π × 40,960,000 <br>
          ≈ 5/14 × 10⁸ km²
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: کلاه نیم‌کره</div>
        <p>مساحت کلاه (عرق‌چین) به شکل رویه نیم‌کره به شعاع ۱۰ سانتی‌متر را پیدا کنید.</p>
        <div class="example-solution">
          S = 2π R² = 2π (10)² = 200π ≈ 628 cm²
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته: نیم‌کره توپر</div>
        <p>اگر نیم‌کره <b>توپر</b> باشد، مساحت کل شامل رویه + قاعده دایره‌ای است:</p>
        <div class="formula-text">S(کل) = 2π R² + π R² = 3π R²</div>
      </div>
    `
  },

  /* ===== درس ۲: حجم هرم و مخروط ===== */
  'ch8-l2': {
    title: 'حجم هرم و مخروط',
    chapter: 'ch8',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 هرم</div>
        <p>هرمی که قاعده آن چندضلعی و وجه‌های جانبی آن مثلث باشند.</p>
        <ul>
          <li><b>هرم منتظم:</b> قاعده چندضلعی منتظم و ارتفاع از مرکز قاعده می‌گذرد.</li>
          <li><b>ارتفاع هرم:</b> فاصله رأس از صفحه قاعده.</li>
        </ul>
      </div>

      <h2>🎯 حجم هرم</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول حجم هرم</div>
        <p>هرمی با مساحت قاعده <span class="math">S</span> و ارتفاع <span class="math">h</span>:</p>
        <div class="formula-text">V = (1/3) × S × h</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 اثبات تجربی</div>
        <p>یک منشور را می‌توان به سه هرم هم‌حجم تقسیم کرد. پس حجم هر هرم یک‌سوم حجم منشور است.</p>
        <div class="example-solution">
          V(هرم) = (1/3) × V(منشور) <br>
          = (1/3) × S × h
        </div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 مخروط</div>
        <p>شکلی شبیه هرم منتظم که قاعده آن دایره است و پای ارتفاع، مرکز دایره است.</p>
      </div>

      <h2>🎯 حجم مخروط</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول حجم مخروط</div>
        <p>مخروطی به شعاع قاعده <span class="math">R</span> و ارتفاع <span class="math">h</span>:</p>
        <div class="formula-text">V = (1/3) π R² h</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>هرم منتظمی با قاعده مربع به ضلع ۱۲ و ارتفاع ۱۰ داریم. حجم آن چقدر است؟</p>
        <div class="example-solution">
          S = 12² = 144 <br>
          V = (1/3) × 144 × 10 = 480
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>مخروطی به شعاع ۳ و ارتفاع ۷ داریم. حجم آن چقدر است؟</p>
        <div class="example-solution">
          V = (1/3) π (3)² (7) = 21π
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: هرم با یال‌های برابر</div>
        <p>هرم منتظمی با قاعده مربع به ضلع ۱۲، و یال‌های جانبی ۱۰. حجم هرم را بیابید.</p>
        <div class="example-solution">
          M وسط یک ضلع قاعده: <br>
          OM² = OB² − BM² = 100 − 36 = 64 <br>
          OM = 8 <br>
          <br>
          MH = نصف ضلع = 6 <br>
          OH² = OM² − MH² = 64 − 36 = 28 <br>
          OH = 2√7 <br>
          <br>
          V = (1/3) × 144 × 2√7 = 96√7
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 رابطه مهم</div>
        <p>اگر دو هرم با مساحت قاعده و ارتفاع برابر داشته باشیم، حجم‌هایشان برابر است.</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته: مخروط ناقص</div>
        <p>مخروط ناقص = استوانه + هرم کوچک. برای محاسبه، از تفریق یا تجزیه استفاده کن.</p>
      </div>
    `
  },

  /* ===== درس ۳: مساحت و حجم مرکب ===== */
  'ch8-l3': {
    title: 'مساحت و حجم مرکب',
    chapter: 'ch8',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 شکل‌های مرکب</div>
        <p>شکل‌هایی که از ترکیب چند شکل هندسی ساخته شده‌اند.</p>
        <p><b>روش:</b> شکل مرکب را به شکل‌های ساده‌تر تقسیم کن و حجم (یا مساحت) هرکدام را جدا محاسبه کن.</p>
      </div>

      <h2>🎯 حجم‌های مهم (مرور)</h2>
      <table>
        <thead>
          <tr><th>شکل</th><th>حجم</th></tr>
        </thead>
        <tbody>
          <tr><td>مکعب به ضلع a</td><td>V = a³</td></tr>
          <tr><td>مکعب مستطیل</td><td>V = a × b × c</td></tr>
          <tr><td>استوانه</td><td>V = π R² h</td></tr>
          <tr><td>کره</td><td>V = (4/3) π R³</td></tr>
          <tr><td>هرم</td><td>V = (1/3) S h</td></tr>
          <tr><td>مخروط</td><td>V = (1/3) π R² h</td></tr>
        </tbody>
      </table>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: استوانک گاز</div>
        <p>استوانکی از قرار گرفتن نیم‌کره روی استوانه ساخته شده. قطر استوانه ۶۰ سانتی‌متر و ارتفاع آن ۱ متر است. حجم کل را بیابید.</p>
        <div class="example-solution">
          R = 30 cm = 0/3 m <br>
          <br>
          V(استوانه) = π (0/3)² (1) = 0/09π m³ <br>
          V(نیم‌کره) = (2/3) π (0/3)³ = 0/018π m³ <br>
          <br>
          V(کل) = 0/09π + 0/018π = 0/108π m³ <br>
          ≈ 0/34 m³
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: پیمانه نیم‌کره</div>
        <p>پیمانه‌ای نیم‌کره‌ای به قطر دهانه ۲۴ سانتی‌متر را از آب پر کرده و در لیوان استوانه‌ای با همان قطر خالی می‌کنیم. آب تا چه ارتفاعی بالا می‌آید؟</p>
        <div class="example-solution">
          R = 12 cm <br>
          <br>
          V(نیم‌کره) = (2/3) π (12)³ = 1152π <br>
          <br>
          V(استوانه) = π R² h = π (144) h <br>
          <br>
          144π h = 1152π <br>
          h = 8 cm
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳: حجم مکعب و کره</div>
        <p>مکعبی به ضلع a در نظر بگیرید. کره‌ای محاط آن است (به هر وجه مماس). نسبت حجم کره به مکعب چقدر است؟</p>
        <div class="example-solution">
          شعاع کره = a/2 <br>
          V(کره) = (4/3) π (a/2)³ = (4/3) π a³/8 = π a³/6 <br>
          V(مکعب) = a³ <br>
          نسبت = (π a³/6) / a³ = π/6
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴: مقطع مکعب</div>
        <p>یک مکعب به ضلع a را با صفحه‌ای مورب بریده‌ایم. سطح مقطع چه شکلی است؟</p>
        <div class="example-solution">
          بسته به نحوه برش:
          <ul>
            <li>برش مورب از یک رأس: <b>مثلث</b></li>
            <li>برش مورب موازی ضلع: <b>مستطیل</b></li>
            <li>برش قائم روی قطر: <b>لوزی</b></li>
          </ul>
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۵: جعبه و کره</div>
        <p>از یک مقوای مربعی به ضلع a، گوشه‌های مربعی به ضلع x بریده و جعبه مکعب مستطیل ساخته شده. نسبت حجم به سطح را بیابید.</p>
        <div class="example-solution">
          ابعاد جعبه: <br>
          طول = a − 2x <br>
          عرض = a − 2x <br>
          ارتفاع = x <br>
          <br>
          V = x (a − 2x)² <br>
          S(جانبی) = 4x (a − 2x) <br>
          نسبت V/S = x(a−2x)² / [4x(a−2x)] = (a−2x)/4
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 مراحل حل مسائل مرکب</div>
        <ol>
          <li>شکل را به اجزای ساده <b>تقسیم</b> کن</li>
          <li>حجم (یا مساحت) هر جز را <b>جدا</b> محاسبه کن</li>
          <li>حجم‌ها را <b>جمع</b> یا <b>تفریق</b> کن</li>
          <li>یکا را <b>یکسان</b> کن</li>
        </ol>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ هشدار</div>
        <p>قبل از محاسبه، <b>یکاها</b> را یکسان کن! مثلاً ۱ متر = ۱۰۰ سانتی‌متر و ۱ متر مکعب = ۱۰۰۰۰۰۰ سانتی‌متر مکعب.</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته پایانی</div>
        <p>در مسائل ترکیبی، همیشه <b>شکل را رسم کن</b> تا ببینی کدام اجزا را باید جمع یا تفریق کنی.</p>
        <p>حالا کل فصل‌های ریاضی نهم رو یاد گرفتی! 🎉</p>
      </div>
    `
  }

};
