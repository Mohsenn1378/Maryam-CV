# سایت رزومه مریم رجبیان (Astro)

## اجرا روی سیستم خودت
1. Node.js نسخه LTS نصب باشد (`node -v` در cmd).
2. در cmd به همین پوشه برو، مثلاً:
   cd "C:\Users\rajman\Desktop\Maryam CV\site"
3. یک بار وابستگی‌ها را نصب کن:
   npm install
4. اجرا:
   npm run dev
5. در مرورگر باز کن:  http://localhost:4321  (انگلیسی) و  http://localhost:4321/fa/  (فارسی)
برای توقف: Ctrl + C در cmd.

## کجا چی هست
- همه متن‌ها و عددها: src/data/content.ts  (عدد با verified:false یعنی نمونه است)
- چیدمان و استایل صفحه: src/components/Home.astro
- رنگ‌ها و فونت‌ها (توکن‌ها): src/styles/global.css
- رزومه PDF: public/cv/Maryam-Rajabian-CV.pdf

## انتشار روی GitHub Pages
- فایل `.github/workflows/deploy.yml` هر بار که روی شاخه `main` چیزی push شود، سایت را می‌سازد و منتشر می‌کند.
- یک بار: در GitHub → Settings → Pages → Source را روی **GitHub Actions** بگذار.
- آدرس: `https://<نام‌کاربری>.github.io/<نام‌ریپو>/` (مسیر پایه خودکار تنظیم می‌شود). با دامنه اختصاصی، سایت روی ریشه دامنه می‌آید.
