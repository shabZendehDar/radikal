/* ============================================
   📖 فصل ۳: استدلال و اثبات در هندسه
   ============================================ */

const CONTENT_CH3 = {

  /* ===== درس ۱: استدلال ===== */
  'ch3-l1': {
    title: 'استدلال',
    chapter: 'ch3',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 استدلال چیست؟</div>
        <p>استدلال، فرآیند رسیدن از <b>معلومات</b> به <b>نتیجه</b> با استفاده از دلیل‌های منطقی است.</p>
      </div>

      <h2>💡 چرا استدلال لازم است؟</h2>
      <ul>
        <li><b>مشاهده و حواس:</b> ممکن است خطا کنند.</li>
        <li><b>اندازه‌گیری:</b> دقیق نیست.</li>
        <li><b>مثال‌های متعدد:</b> اثبات درستی نمی‌کنند.</li>
        <li><b>استدلال منطقی:</b> تنها راه اطمینان ✅</li>
      </ul>

      <div class="box box-warn">
        <div class="box-title">⚠️ خطای حواس</div>
        <p>مثال‌های معروفی وجود دارد که چشم ما را فریب می‌دهند:</p>
        <ul>
          <li>خطوط موازی که به نظر غیرموازی می‌رسند.</li>
          <li>دو شکل یکسان که به نظر متفاوت می‌آیند.</li>
          <li>مقایسه اندازه‌ها بدون اندازه‌گیری دقیق.</li>
        </ul>
      </div>

      <h2>🎯 انواع استدلال</h2>

      <h3>۱. استدلال استقرایی (ناقص)</h3>
      <div class="box box-def">
        <p>از <b>مشاهده چند مثال</b> به یک <b>نتیجه کلی</b> می‌رسیم.</p>
        <p><b>مشکل:</b> ممکن است نتیجه غلط باشد.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال</div>
        <p>«چون تمام بچه‌های خاله‌های من دختر هستند، پس بچه خاله کوچکم هم که به دنیا می‌آید دختر خواهد بود.»</p>
        <p><b>چرا غلط است؟</b> چون از چند مشاهده، نتیجه قطعی گرفته شده.</p>
      </div>

      <h3>۲. استدلال استنتاجی (کامل)</h3>
      <div class="box box-def">
        <p>از <b>معلومات قطعی</b> و <b>قوانین منطقی</b> به نتیجه می‌رسیم.</p>
        <p><b>مزیت:</b> نتیجه <b>قطعاً درست</b> است ✅</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال</div>
        <p>«همه انسان‌ها فانی هستند. سقراط انسان است. پس سقراط فانی است.»</p>
        <p><b>چرا درست است؟</b> چون از قوانین منطقی استفاده شده.</p>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 نتیجه طلایی</div>
        <p>برای اثبات درستی یک موضوع، باید از <b>استدلال استنتاجی</b> استفاده کرد — نه مشاهده و اندازه‌گیری.</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>در ریاضی، هر ادعایی باید با <b>دلیل منطقی</b> ثابت شود. مثال آوردن کافی نیست.</p>
      </div>
    `
  },

  /* ===== درس ۲: آشنایی با اثبات در هندسه ===== */
  'ch3-l2': {
    title: 'آشنایی با اثبات در هندسه',
    chapter: 'ch3',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 ساختار یک اثبات</div>
        <p>هر اثبات هندسی از سه بخش تشکیل می‌شود:</p>
        <ol>
          <li><b>فرض:</b> معلومات و داده‌های مسئله</li>
          <li><b>حکم:</b> آنچه باید ثابت کنیم</li>
          <li><b>استدلال:</b> دلیل‌های منطقی که از فرض به حکم می‌رسند</li>
        </ol>
      </div>

      <h2>🎯 تفاوت فرض و حکم</h2>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>«در هر مثلث متساوی‌الساقین، زاویه‌های مجاور به قاعده با هم برابرند.»</p>
        <ul>
          <li><b>فرض:</b> مثلث ABC متساوی‌الساقین است (AB = AC)</li>
          <li><b>حکم:</b> زاویه‌های B و C با هم برابرند</li>
        </ul>
      </div>

      <h2>📐 هم‌نهشتی مثلث‌ها</h2>
      <div class="box box-def">
        <div class="box-title">📖 تعریف</div>
        <p>دو مثلث <b>هم‌نهشت</b> هستند، اگر تمام اضلاع و زاویه‌های متناظرشان با هم برابر باشند.</p>
        <div class="formula-text">△ABC ≅ △DEF</div>
      </div>

      <h3>حالت‌های هم‌نهشتی</h3>

      <div class="box box-formula">
        <div class="box-title">🔑 چهار حالت هم‌نهشتی</div>
        <ol>
          <li><b>ض ز ض</b> — دو ضلع و زاویه بین</li>
          <li><b>ز ض ز</b> — دو زاویه و ضلع بین</li>
          <li><b>ض ض ض</b> — سه ضلع</li>
          <li><b>ز ز ض</b> — دو زاویه و ضلع غیر بین (در RTL: ض ز ز)</li>
        </ol>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>در دو مثلث ABC و DEF داریم:</p>
        <div class="example-solution">
          AB = DE (ضلع) <br>
          BC = EF (ضلع) <br>
          ∠B = ∠E (زاویه بین دو ضلع) <br>
          ⇒ △ABC ≅ △DEF به حالت «ض ز ض»
        </div>
      </div>

      <h2>🎯 تعمیم</h2>
      <div class="box box-def">
        <div class="box-title">📖 اصل تعمیم</div>
        <p>اگر خاصیتی را برای <b>یک عضو</b> از یک مجموعه ثابت کنیم و در استدلال از ویژگی‌هایی استفاده کنیم که برای <b>همه اعضای</b> مجموعه برقرارند، می‌توان نتیجه را به همه تعمیم داد.</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>هم‌نهشتی مثلث‌ها ابزار اصلی اثبات تساوی‌ها در هندسه است.</p>
      </div>
    `
  },

  /* ===== درس ۳: نیمساز و عمودمنصف ===== */
  'ch3-l3': {
    title: 'نیمساز و عمودمنصف',
    chapter: 'ch3',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 عمودمنصف</div>
        <p>خطی که از <b>وسط</b> یک پاره‌خط می‌گذرد و <b>عمود</b> بر آن است.</p>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خاصیت عمودمنصف</div>
        <p>هر نقطه روی عمودمنصف یک پاره‌خط، از دو سر آن پاره‌خط <b>به یک فاصله</b> است.</p>
        <div class="formula-text">PA = PB</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 اثبات</div>
        <p>نقطه P روی عمودمنصف AB است. نشان دهید PA = PB.</p>
        <p><b>اثبات:</b></p>
        <div class="example-solution">
          نقطه M وسط AB است (فرض) <br>
          PM عمود بر AB است (فرض) <br>
          ⇒ ∠PMA = ∠PMB = 90° <br>
          ⇒ AM = BM (نصف AB) <br>
          ⇒ PM مشترک <br>
          ⇒ △PMA ≅ △PMB (ض ز ض) <br>
          ⇒ PA = PB ✅
        </div>
      </div>

      <h2>🎯 نیمساز</h2>
      <div class="box box-def">
        <div class="box-title">📖 نیمساز زاویه</div>
        <p>خطی که یک زاویه را به <b>دو زاویه مساوی</b> تقسیم می‌کند.</p>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خاصیت نیمساز</div>
        <p>هر نقطه روی نیمساز یک زاویه، از دو ضلع آن زاویه <b>به یک فاصله</b> است.</p>
      </div>

      <h2>🔺 نیمساز در مثلث متساوی‌الساقین</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قضیه طلایی</div>
        <p>در مثلث متساوی‌الساقین، نیمساز زاویه رأس، <b>هم‌زمان</b>:</p>
        <ul>
          <li>میانه قاعده است</li>
          <li>ارتفاع وارد بر قاعده است</li>
          <li>عمودمنصف قاعده است</li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 اثبات</div>
        <p>در مثلث متساوی‌الساقین ABC با AB = AC، نیمساز AD رسم شده. نشان دهید AD میانه است.</p>
        <p><b>اثبات:</b></p>
        <div class="example-solution">
          AB = AC (فرض) <br>
          ∠BAD = ∠CAD (چون AD نیمساز) <br>
          AD = AD (مشترک) <br>
          ⇒ △ABD ≅ △ACD (ض ز ض) <br>
          ⇒ BD = CD <br>
          ⇒ D وسط BC است <br>
          ⇒ AD میانه است ✅
        </div>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ توجه</div>
        <p>این خاصیت <b>فقط در مثلث متساوی‌الساقین</b> برقرار است. در مثلث دلخواه، نیمساز، میانه نیست!</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>قطرهای مربع، نیمساز زاویه‌ها هستند (چون مربع هم متساوی‌الساقین است).</p>
      </div>
    `
  },

  /* ===== درس ۴: حل مسئله در هندسه ===== */
  'ch3-l4': {
    title: 'حل مسئله در هندسه',
    chapter: 'ch3',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 مراحل حل مسئله هندسی</div>
        <ol>
          <li><b>صورت مسئله را بخوان</b> — مفاهیم را بشناس</li>
          <li><b>شکل رسم کن</b> — با دقت و دقیق</li>
          <li><b>فرض و حکم را جدا کن</b> — در جدول بنویس</li>
          <li><b>راه‌حل پیدا کن</b> — با هم‌نهشتی، تشابه، ...</li>
          <li><b>اثبات را بنویس</b> — با نمادهای ریاضی</li>
        </ol>
      </div>

      <h2>🎯 مثال کاربردی</h2>
      <div class="box box-example">
        <div class="box-title">📌 مسئله</div>
        <p>دو روستای A و B با یک جاده خاکی مستقیم به هم وصل هستند. جاده آسفالته‌ای ساخته شده که از وسط جاده خاکی (نقطه M) می‌گذرد. از A و B عمودهایی به جاده اصلی رسم شده (AH و BH'). نشان دهید AH = BH'.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 حل</div>
        <p><b>فرض:</b></p>
        <ul>
          <li>MA = MB (M وسط AB)</li>
          <li>∠H = ∠H' = 90°</li>
        </ul>
        <p><b>حکم:</b> AH = BH'</p>
        <p><b>اثبات:</b></p>
        <div class="example-solution">
          ∠AHM = ∠BH'M = 90° (فرض) <br>
          ∠AMH = ∠BMH' (زوایای متقابل به رأس) <br>
          AM = BM (فرض) <br>
          ⇒ △AMH ≅ △BMH' (ز ض ز) <br>
          ⇒ AH = BH' ✅
        </div>
      </div>

      <h2>📐 وترهای برابر در دایره</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 قضیه</div>
        <ul>
          <li>در یک دایره، اگر دو <b>کمان</b> برابر باشند، <b>وترهای</b> نظیرشان هم برابرند.</li>
          <li>و برعکس: اگر دو <b>وتر</b> برابر باشند، <b>کمان‌های</b> نظیرشان هم برابرند.</li>
        </ul>
      </div>

      <h2>🎯 مثال‌های کاربردی</h2>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱: دو مماس از یک نقطه</div>
        <p>از نقطه M خارج دایره، دو مماس MA و MB رسم شده. نشان دهید MA = MB.</p>
        <p><b>راهنما:</b> از مرکز O به A و B و M وصل کن.</p>
        <p><b>اثبات:</b></p>
        <div class="example-solution">
          OA = OB (شعاع) <br>
          ∠OAM = ∠OBM = 90° (خاصیت مماس) <br>
          OM مشترک <br>
          ⇒ △OAM ≅ △OBM (وتر و یک ضلع) <br>
          ⇒ MA = MB ✅
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: وسط‌های اضلاع متوازی‌الاضلاع</div>
        <p>در متوازی‌الاضلاع ABCD، M و N و P و Q وسط‌های اضلاع هستند. نشان دهید MN = PQ.</p>
        <p><b>راهنما:</b> از هم‌نهشتی مثلث‌ها استفاده کن.</p>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته طلایی</div>
        <p>برای اثبات تساوی دو پاره‌خط، معمولاً:</p>
        <ol>
          <li>دو مثلث مناسب پیدا کن که آن پاره‌خط‌ها ضلع باشند.</li>
          <li>هم‌نهشتی آن دو مثلث را ثابت کن.</li>
          <li>نتیجه بگیر که اضلاع متناظر برابرند.</li>
        </ol>
      </div>
    `
  },

  /* ===== درس ۵: شکل‌های متشابه ===== */
  'ch3-l5': {
    title: 'شکل‌های متشابه',
    chapter: 'ch3',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف تشابه</div>
        <p>دو چندضلعی <b>متشابه</b> هستند، اگر:</p>
        <ol>
          <li>همه <b>زاویه‌های</b> متناظرشان برابر باشند.</li>
          <li>همه <b>اضلاع</b> متناظرشان متناسب باشند.</li>
        </ol>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 نسبت تشابه</div>
        <p>نسبت اضلاع متناظر دو شکل متشابه، <b>نسبت تشابه</b> نام دارد.</p>
        <div class="formula-text">k = ضلع در شکل دوم / ضلع در شکل اول</div>
      </div>

      <h2>🎯 نکات مهم</h2>
      <ul>
        <li><b>هم‌نهشتی</b> حالت خاصی از تشابه است (k = 1).</li>
        <li>همه <b>مربع‌ها</b> با هم متشابه‌اند.</li>
        <li>همه <b>مثلث‌های متساوی‌الاضلاع</b> با هم متشابه‌اند.</li>
        <li>همه <b>دایره‌ها</b> با هم متشابه‌اند.</li>
      </ul>

      <div class="box box-warn">
        <div class="box-title">⚠️ هشدار</div>
        <p>همه <b>مستطیل‌ها</b> با هم متشابه نیستند! همونطور که همه <b>لوزی‌ها</b> با هم متشابه نیستند.</p>
      </div>

      <h2>📐 تشابه مثلث‌ها</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 سه حالت تشابه مثلث‌ها</div>
        <ol>
          <li><b>ز ز:</b> دو زاویه برابر</li>
          <li><b>ض ض ض:</b> سه ضلع متناسب</li>
          <li><b>ض ز ض:</b> دو ضلع متناسب و زاویه بین برابر</li>
        </ol>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>مثلثی با اضلاع ۴، ۵، ۸ با مثلثی با اضلاع ۷، ۱۰، x متشابه است. مقدار x را بیابید.</p>
        <div class="example-solution">
          4/x = 5/10 → x = 8 <br>
          بررسی: 4/8 = 5/10 = 8/16 = 1/2 ✅ <br>
          پس x = 16
        </div>
      </div>

      <h2>📏 کاربرد تشابه</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: نقشه</div>
        <p>مقیاس نقشه‌ای <span class="math">1/200</span> است. فاصله دو نقطه روی نقشه ۳/۵ سانتی‌متر است. فاصله واقعی چقدر است؟</p>
        <div class="example-solution">
          فاصله واقعی = 3/5 × 200 = 700 سانتی‌متر = 7 متر
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>آیا دو مثلث متساوی‌الساقین همیشه متشابه‌اند؟</p>
        <div class="example-solution">
          خیر ❌ — چون زاویه‌های رأسشان می‌تواند متفاوت باشد.
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>آیا دو مثلث متساوی‌الاضلاع همیشه متشابه‌اند؟</p>
        <div class="example-solution">
          بله ✅ — چون همه زاویه‌هایشان ۶۰ درجه است.
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته طلایی</div>
        <p>در هندسه، اثبات تشابه دو مثلث، راهی برای پیدا کردن طول‌های مجهول است.</p>
      </div>
    `
  }

};
