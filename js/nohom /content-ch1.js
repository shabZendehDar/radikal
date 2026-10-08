/* ============================================
   📖 فصل ۱: مجموعه‌ها
   ============================================ */

const CONTENT_CH1 = {

  /* ===== درس ۱: معرفی مجموعه ===== */
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
        <p>اگر <span class="math">a</span> عضوی از مجموعه <span class="math">A</span> باشد:</p>
        <div class="formula-text">a ∈ A</div>
        <p>و اگر عضو نباشد:</p>
        <div class="formula-text">a ∉ A</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>مجموعه <span class="math">A = {1, 2, 3, 4}</span> را در نظر بگیرید:</p>
        <ul>
          <li><span class="math">2 ∈ A</span> ✅</li>
          <li><span class="math">5 ∉ A</span> ✅</li>
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
          <li><span class="math">{∅}</span> → یک عضو دارد</li>
        </ul>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲: کدام مجموعه تهی است؟</div>
        <ul>
          <li>عددهای طبیعی بین ۵ و ۶ → تهی ✅</li>
          <li>عددهای صحیح بین −۱ و ۱ → تهی ✅</li>
          <li>عددهای اول و زوج → تهی ✅</li>
        </ul>
      </div>

      <h2>📝 تعداد اعضای مجموعه</h2>
      <p>تعداد اعضای مجموعه <span class="math">A</span> را با <span class="math">n(A)</span> نمایش می‌دهیم.</p>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>اگر <span class="math">A = {2, 4, 6, 7}</span> باشد، <span class="math">n(A)</span> چقدر است؟</p>
        <div class="example-solution">n(A) = 4</div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>عبارت‌هایی مثل «چهار عدد فرد متوالی» مجموعه نیستند، چون اعضایشان مشخص نیستند.</p>
      </div>
    `
  },

  /* ===== درس ۲: مجموعه‌های برابر و نمایش ===== */
  'ch1-l2': {
    title: 'مجموعه‌های برابر و نمایش مجموعه‌ها',
    chapter: 'ch1',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 دو مجموعه برابر</div>
        <p>دو مجموعه <span class="math">A</span> و <span class="math">B</span> را برابر می‌نامیم، هرگاه همه اعضای <span class="math">A</span> عضو <span class="math">B</span> باشند و برعکس.</p>
        <div class="formula-text">A = B</div>
        <p>اگر حتی یک عضو در یکی باشد و در دیگری نباشد:</p>
        <div class="formula-text">A ≠ B</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>آیا <span class="math">A = {1, 2, 3}</span> با <span class="math">B = {3, 2, 1}</span> برابر است؟</p>
        <div class="example-solution">
          بله ✅ — چون ترتیب مهم نیست و اعضای یکسانی دارند.
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
        <p>اگر مجموعه‌ای <span class="math">n</span> عضو داشته باشد، تعداد زیرمجموعه‌هایش:</p>
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
        <div class="box-title">📖 عددهای طبیعی</div>
        <div class="formula-text">ℕ = {1, 2, 3, 4, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 عددهای حسابی</div>
        <div class="formula-text">𝕎 = {0, 1, 2, 3, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 عددهای صحیح</div>
        <div class="formula-text">ℤ = {..., −3, −2, −1, 0, 1, 2, 3, ...}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 عددهای گویا</div>
        <div class="formula-text">ℚ = {a/b | a, b ∈ ℤ , b ≠ 0}</div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 رابطه مجموعه‌ها</div>
        <div class="formula-text">ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ</div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>هر عدد صحیح، یک عدد گویاست؛ چون <span class="math">a = a/1</span>.</p>
      </div>
    `
  },

  /* ===== درس ۳: اجتماع، اشتراک و تفاضل ===== */
  'ch1-l3': {
    title: 'اجتماع، اشتراک و تفاضل مجموعه‌ها',
    chapter: 'ch1',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 اشتراک دو مجموعه</div>
        <p>اشتراک دو مجموعه <span class="math">A</span> و <span class="math">B</span>، مجموعه‌ای است شامل همه عضوهایی که <b>هم عضو A و هم عضو B</b> هستند.</p>
        <div class="formula-text">A ∩ B = {x | x ∈ A و x ∈ B}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 اجتماع دو مجموعه</div>
        <p>اجتماع دو مجموعه <span class="math">A</span> و <span class="math">B</span>، مجموعه‌ای است شامل همه عضوهایی که <b>حداقل در یکی</b> از دو مجموعه هستند.</p>
        <div class="formula-text">A ∪ B = {x | x ∈ A یا x ∈ B}</div>
      </div>

      <div class="box box-def">
        <div class="box-title">📖 تفاضل دو مجموعه</div>
        <p>تفاضل <span class="math">A</span> از <span class="math">B</span>، مجموعه‌ای است شامل همه عضوهایی که <b>عضو A هستند ولی عضو B نیستند</b>.</p>
        <div class="formula-text">A − B = {x | x ∈ A و x ∉ B}</div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>اگر <span class="math">A = {1, 2, 3, 4}</span> و <span class="math">B = {3, 4, 5, 6}</span> باشد:</p>
        <div class="example-solution">
          A ∩ B = {3, 4} <br>
          A ∪ B = {1, 2, 3, 4, 5, 6} <br>
          A − B = {1, 2} <br>
          B − A = {5, 6}
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>اگر <span class="math">A = {a, b, c, d, e, k}</span> و <span class="math">B = {f, s, t}</span> باشد:</p>
        <div class="example-solution">
          A ∩ B = ∅ <br>
          A − B = {a, b, c, d, e, k} <br>
          B − A = {f, s, t}
        </div>
      </div>

      <h2>🎯 نمودار ون</h2>
      <ul>
        <li><b>اشتراک (A ∩ B):</b> ناحیه مشترک دو دایره</li>
        <li><b>اجتماع (A ∪ B):</b> کل دو دایره</li>
        <li><b>تفاضل (A − B):</b> قسمتی از A که با B مشترک نیست</li>
      </ul>

      <div class="box box-formula">
        <div class="box-title">🔑 قوانین مهم</div>
        <ul>
          <li><span class="math">A ∩ B = B ∩ A</span></li>
          <li><span class="math">A ∪ B = B ∪ A</span></li>
          <li><span class="math">A ∩ ∅ = ∅</span></li>
          <li><span class="math">A ∪ ∅ = A</span></li>
          <li><span class="math">A ∩ A = A</span></li>
          <li><span class="math">A ∪ A = A</span></li>
        </ul>
      </div>

      <h2>📐 رابطه تعداد اعضا</h2>
      <div class="box box-formula">
        <div class="box-title">🔑 فرمول مهم</div>
        <div class="formula-text">n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</div>
        <p>چون اعضای مشترک، دوبار شمرده می‌شوند، یک بار کم می‌کنیم.</p>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>اگر <span class="math">n(A) = 12</span> ، <span class="math">n(B) = 8</span> و <span class="math">n(A ∩ B) = 3</span> باشد، <span class="math">n(A ∪ B)</span> چقدر است؟</p>
        <div class="example-solution">
          n(A ∪ B) = 12 + 8 − 3 = 17
        </div>
      </div>

      <div class="box box-note">
        <div class="box-title">💡 نکته</div>
        <p>اگر <span class="math">A ∩ B = ∅</span> باشد، دو مجموعه <b>جدا از هم</b> هستند.</p>
      </div>
    `
  },

  /* ===== درس ۴: مجموعه‌ها و احتمال ===== */
  'ch1-l4': {
    title: 'مجموعه‌ها و احتمال',
    chapter: 'ch1',
    content: `
      <div class="box box-def">
        <div class="box-title">📖 تعریف احتمال</div>
        <p>احتمال وقوع یک پیشامد، نسبت تعداد حالت‌های مطلوب به تعداد همه حالت‌های ممکن است.</p>
        <div class="formula-text">P(A) = n(A) / n(S)</div>
        <p>که در آن <span class="math">S</span> فضای نمونه و <span class="math">A</span> پیشامد مورد نظر است.</p>
      </div>

      <h2>💡 نکات کلیدی</h2>
      <ul>
        <li>احتمال همیشه عددی بین <span class="math">0</span> و <span class="math">1</span> است.</li>
        <li>احتمال پیشامد حتمی برابر <span class="math">1</span> است.</li>
        <li>احتمال پیشامد غیرممکن برابر <span class="math">0</span> است.</li>
        <li><span class="math">0 ≤ P(A) ≤ 1</span></li>
      </ul>

      <h2>🎲 مثال با تاس</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۱</div>
        <p>احتمال رو شدن عدد مضرب ۳ چقدر است؟</p>
        <div class="example-solution">
          S = {1, 2, 3, 4, 5, 6} → n(S) = 6 <br>
          A = {3, 6} → n(A) = 2 <br>
          P(A) = 2/6 = 1/3
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۲</div>
        <p>احتمال رو شدن عدد اول چقدر است؟</p>
        <div class="example-solution">
          B = {2, 3, 5} → n(B) = 3 <br>
          P(B) = 3/6 = 1/2
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۳</div>
        <p>احتمال رو شدن عدد بزرگ‌تر از ۶ چقدر است؟</p>
        <div class="example-solution">
          C = ∅ → n(C) = 0 <br>
          P(C) = 0/6 = 0 (غیرممکن)
        </div>
      </div>

      <div class="box box-example">
        <div class="box-title">📌 مثال ۴</div>
        <p>احتمال رو شدن عدد کمتر از ۷ چقدر است؟</p>
        <div class="example-solution">
          D = S → n(D) = 6 <br>
          P(D) = 6/6 = 1 (حتمی)
        </div>
      </div>

      <h2>🎨 مثال با مهره‌های رنگی</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۵</div>
        <p>در جعبه‌ای ۳ مهره قرمز، ۴ مهره آبی و ۵ مهره سبز وجود دارد.</p>
        <p><b>الف)</b> احتمال آبی بودن چقدر است؟</p>
        <div class="example-solution">
          n(S) = 12 <br>
          n(A) = 4 <br>
          P = 4/12 = 1/3
        </div>
        <p style="margin-top:15px;"><b>ب)</b> احتمال قرمز یا سبز بودن چقدر است؟</p>
        <div class="example-solution">
          n(B) = 3 + 5 = 8 <br>
          P = 8/12 = 2/3
        </div>
      </div>

      <h2>👨‍👩‍👧‍👦 مثال با خانواده</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۶</div>
        <p>خانواده‌ای سه فرزند دارد. احتمال دقیقاً دو دختر چقدر است؟</p>
        <div class="example-solution">
          S = {(د,د,د) , (د,د,پ) , (د,پ,د) , (د,پ,پ) , (پ,د,د) , (پ,د,پ) , (پ,پ,د) , (پ,پ,پ)} <br>
          n(S) = 8 <br>
          A = {(د,د,پ) , (د,پ,د) , (پ,د,د)} <br>
          n(A) = 3 <br>
          P(A) = 3/8
        </div>
      </div>

      <h2>🎲 مثال با دو تاس</h2>
      <div class="box box-example">
        <div class="box-title">📌 مثال ۷</div>
        <p>دو تاس را با هم می‌اندازیم. احتمال مجموع ۷ چقدر است؟</p>
        <div class="example-solution">
          n(S) = 36 <br>
          A = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} <br>
          n(A) = 6 <br>
          P(A) = 6/36 = 1/6
        </div>
      </div>

      <div class="box box-formula">
        <div class="box-title">🔑 خلاصه</div>
        <ul>
          <li><b>پیشامد حتمی:</b> <span class="math">P = 1</span></li>
          <li><b>پیشامد غیرممکن:</b> <span class="math">P = 0</span></li>
          <li><b>بقیه:</b> <span class="math">0 < P < 1</span></li>
        </ul>
      </div>
    `
  }

};
