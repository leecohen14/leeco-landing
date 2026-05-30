# מדבקת מילואים — עסק של מילואימניק

הוסף מדבקה עגולה "עסק של מילואימניק" לאזור ה-Hero או הפרופיל באתר.

## כללים לאינטראקציה

**כל הטקסט שאתה מציג למשתמש בסקיל הזה — בעברית.** השאלות, ההודעות, הדיווח בסוף — הכול בעברית, גם אם שאר השיחה התנהלה באנגלית. הקוד והתגובות הפנימיות שלך (לתוך כלים) יכולים להישאר באנגלית.

## שלבים

### 1. סריקת הקוד (בשקט, בלי לדבר עם המשתמש)
- זיהוי הפריימוורק: Next.js, React (Vite/CRA), Vue, Astro, SvelteKit, HTML רגיל, או אחר
- מציאת אזור ה-Hero או האזור הוויזואלי הבולט בראש העמוד
- חיפוש: תמונת פרופיל, תמונת Hero, איור ראשי, או אזור כותרת בולט

### 2. החלטה על מיקום

סדר עדיפויות לעוגן:
1. **תמונת פרופיל** — פינה עליונה (שמאל/ימין), מעט חורגת מקצה התמונה
2. **תמונת Hero או איור** — פינה של מסגרת התמונה
3. **אין תמונה בולטת** — פינה עליונה של אזור ה-Hero עצמו

חוקים:
- גודל: **68–80px** (גדול יותר על תמונות Hero גדולות, קטן יותר על לייאאוטים צפופים)
- סיבוב: בין **-12° ל--6°** (נגד כיוון השעון)
- מיקום: חורג מעט מקצה העוגן (למשל `-left-4 -top-2` ב-Tailwind או `left: -16px; top: -8px` inline)
- **אתרי RTL** (בדוק `dir="rtl"` או `lang="he"` או `lang="ar"`): העדף מיקום משמאל
- אסור שיחפוף: קישורי ניווט, כפתורי CTA, טקסט כותרת, או כל אלמנט אינטראקטיבי
- ה-container ההורה חייב להיות `position: relative` — הוסף אם חסר

### 3. שאלה למשתמש על מקור התמונה

שאל בעברית, בדיוק בנוסח הבא (קצר, בלי הסברים טכניים):

> **איך אתה רוצה שאשים את התמונה?**
>
> 1. קישור מוכן (הכי פשוט)
> 2. קובץ מקומי בפרויקט שלך
> 3. תחליט בשבילי
>
> תענה 1, 2, או 3.

מיפוי תשובות:
- **1** או "קישור" → השתמש ב-CDN: `https://raw.githubusercontent.com/leecohen14/miluim-sticker/main/assets/miluim-sticker.png`
- **2** או "מקומי" → העתק את `assets/miluim-sticker.png` מהריפו של הסקיל לתיקיית ה-assets המתאימה בפרויקט (`public/assets/`, `public/images/`, `static/`, וכו') והפנה לנתיב המקומי
- **3** או "תחליט" / "מה שאתה חושב" / כל תשובה לא ברורה → בחר 1 (CDN), והודע למשתמש בעברית: "בחרתי בקישור המוכן — הכי פשוט ולא מוסיף קבצים לפרויקט."

### 4. ביצוע השינוי

**React / Next.js עם `next/image`:**
```tsx
<div className="absolute -left-4 -top-2 w-[72px] h-[72px] rounded-full overflow-hidden shadow-lg rotate-[-8deg]">
  <Image src="ASSET" alt="עסק של מילואימניק" fill className="object-cover" />
</div>
```

**React / Next.js עם `<img>` רגיל:**
```tsx
<img
  src="ASSET"
  alt="עסק של מילואימניק"
  className="absolute -left-4 -top-2 w-[72px] h-[72px] rounded-full object-cover shadow-lg rotate-[-8deg]"
/>
```

**Vue / Astro / HTML רגיל (inline styles):**
```html
<img
  src="ASSET"
  alt="עסק של מילואימניק"
  style="position:absolute;left:-16px;top:-8px;width:72px;height:72px;border-radius:50%;object-fit:cover;transform:rotate(-8deg);box-shadow:0 4px 12px rgba(0,0,0,.2)"
/>
```

החלף `ASSET` בקישור או בנתיב המקומי לפי הבחירה בשלב 3.

### 5. צילום מסך לתצוגה מקדימה

נסה להציג למשתמש תוצאה ויזואלית. כל שלב הוא best-effort — אם נכשל, עבור לבא בתור, ואם הכול נכשל דווח על כך בעברית בלי לעצור את הסקיל.

**א. זיהוי שרת פיתוח:**
- בדוק `package.json` עבור scripts: `dev`, `start`, `serve` (לפי סדר העדיפויות הזה)
- זהה את ה-URL הצפוי: Next.js → `http://localhost:3000`, Vite → `http://localhost:5173`, Astro → `http://localhost:4321`, SvelteKit → `http://localhost:5173`, CRA → `http://localhost:3000`. אם לא בטוח — נסה 3000.
- עבור HTML סטטי בלי `package.json`: דלג ישירות לסעיף ד'.

**ב. הפעלת השרת ברקע:**
- הרץ את ה-script המתאים עם `run_in_background: true`
- חכה עד 15 שניות שהשרת יעלה (poll עם `curl -s -o /dev/null -w "%{http_code}" <URL>` עד שמקבלים 200)

**ג. צילום מסך עם Chromium headless:**

אתר binary מותקן ובצע צילום. **אל תתקין שום דבר חדש** (אסור `npx playwright install`, `npm install puppeteer`, וכו'). אם אין Chromium/Chrome מותקן — דלג לסעיף ד' עם הודעת fallback.

```bash
CHROME_BIN="$(command -v chromium || command -v chromium-browser || command -v google-chrome || command -v google-chrome-stable || true)"
if [ -z "$CHROME_BIN" ] && [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
fi
if [ -z "$CHROME_BIN" ] && [ -x "/Applications/Chromium.app/Contents/MacOS/Chromium" ]; then
  CHROME_BIN="/Applications/Chromium.app/Contents/MacOS/Chromium"
fi

if [ -n "$CHROME_BIN" ]; then
  "$CHROME_BIN" --headless --disable-gpu --hide-scrollbars \
    --window-size=1280,800 --virtual-time-budget=3000 \
    --screenshot=/tmp/miluim-preview.png "<URL>"
fi
```

**ד. הצגה למשתמש:**
- אם הצילום הצליח: השתמש בכלי Read עם הנתיב `/tmp/miluim-preview.png` כדי שהתמונה תוצג בשיחה. הוסף בעברית: "ככה זה נראה עכשיו באתר שלך 👇"
- אם נכשל הכול: הודע בעברית "לא הצלחתי לצלם תצוגה אוטומטית — תפתח את `<URL>` בדפדפן ובדוק שהמדבקה במקום הנכון."
- בכל מקרה: סגור את שרת הפיתוח שהפעלת ברקע (kill ל-PID).

### 6. דיווח סופי (בעברית)

ספר למשתמש:
- איזה קובץ ערכת ולאן עיגנת את המדבקה
- מקור התמונה (קישור או נתיב מקומי)
- שינויים מבניים שהיו (למשל הוספת `position:relative` להורה)
- אם השרת הופעל וצומצם, או אם המשתמש צריך לבדוק ידנית
