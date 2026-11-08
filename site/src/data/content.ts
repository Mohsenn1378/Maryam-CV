// All site copy lives here, one object per language.
// METRICS: every number has `verified`. `false` = sample value waiting for Maryam's real figure
// (tracked in PROGRESS.md → PENDING-METRICS). In dev, unverified numbers get a dotted underline
// and a warning bar; nothing unverified should be deployed.

export type Lang = 'en' | 'fa';

export interface Metric { value: string; label: string; verified: boolean; id?: string }

export const metrics = {
  conversion: { verified: false, id: 'M1' },
  activation: { verified: false, id: 'M4' },
};

export const contact = {
  email: 'rajabianmaryam069@gmail.com',
  linkedin: 'https://www.linkedin.com/in/maryam-rajabian-1813a7225/',
  cv: '/cv/Maryam-Rajabian-CV.pdf',
  certificate: 'https://starcoach.ir/certificate/STC20264169',
};

const en = {
  meta: {
    title: 'Maryam Rajabian — Product Manager',
    description:
      'Product Manager for messaging SaaS and AI products. Shipped Mochat, WhatsApp Pro and modular pricing at Inboxino.',
  },
  nav: { work: 'Work', experience: 'Experience', how: 'How I work', contact: 'Contact', cv: 'Download CV', other: 'فارسی' },
  hero: {
    status: 'Open to Product Manager roles, in Mashhad or remote',
    title: 'I build messaging products businesses rely on.',
    lede:
      'Product Manager with 5 years across messaging SaaS and AI APIs. I shipped Mochat, WhatsApp Pro and a modular pricing model at Inboxino, and launched an API Playground at MagicalAPI.',
    ctaCv: 'Download CV',
    ctaWork: 'See my work',
    proof: [
      { value: '+25%', label: 'conversion after pricing redesign', verified: metrics.conversion.verified, id: 'M1' },
      { value: '5', label: 'features shipped at Inboxino', verified: true },
      { value: '10th / 74', label: 'Starcoach AI hackathon', verified: true },
    ] as Metric[],
    chat: {
      name: 'Maryam',
      presence: 'Usually replies within a day',
      label: 'Sample conversation with Maryam',
      q1: 'What have you built recently?',
      a1: 'Mochat, an AI chatbot for businesses, plus WhatsApp Pro and Number Finder at Inboxino.',
      q2: 'Did it move any numbers?',
      a2pre: 'I rebuilt pricing into modular packages. Conversion went up',
      a2num: '25%',
      a2post: '.',
      chips: { cv: 'Send me your CV', work: 'Show your work', email: 'Email Maryam' },
    },
  },
  work: {
    title: 'Selected work',
    sub: 'Three projects where I owned the product decisions.',
    read: 'Read case study',
    cases: [
      {
        meta: 'Inboxino, Product Manager, 2024–2025',
        title: 'Modular pricing and behaviour-based bundles for a messaging SaaS',
        body: 'Replaced fixed plans with pick-what-you-need services and phased payments, then bundled services around how customers actually used them. Conversion rose',
        num: '25%', verified: metrics.conversion.verified, after: '.',
      },
      {
        meta: 'MagicalAPI, Product Owner, remote',
        title: 'An API Playground so developers can try before they buy',
        body: 'A new product in the MagicalAPI portfolio for AI resume-parsing APIs, shaped by Hotjar sessions and Discord feedback. Activation',
        num: 'doubled', verified: metrics.activation.verified, after: '.',
      },
      {
        meta: 'Starcoach hackathon, team PM, 2026',
        title: 'Product lead for three agentic-AI challenges: Wallex, Torob, Liara',
        body: 'Framed the problem and priorities for three builds running in parallel. Our team placed',
        num: '10th of 74', verified: true, after: '.',
      },
    ],
    othersTitle: 'More projects',
    others: [
      { title: 'Mochat, AI chatbot', where: 'Inboxino' },
      { title: 'Full panel UX/UI redesign', where: 'Inboxino, led the design team' },
      { title: 'WhatsApp Pro and Number Finder', where: 'Inboxino' },
      { title: 'SMS platform and affiliate panel', where: 'Inboxino' },
    ],
  },
  experience: {
    title: 'Experience',
    roles: [
      {
        role: 'Product Manager', org: 'Inboxino', when: 'Dec 2024 – Nov 2025', where: 'Mashhad',
        points: [
          'Designed and launched Number Finder, WhatsApp Pro, the Mochat AI chatbot, an SMS platform and an affiliate panel.',
          'Redesigned pricing into modular services with phased payments, and launched behaviour-based bundles.',
          'Led the design team through a complete UX/UI redesign of the customer panel.',
        ],
      },
      {
        role: 'Product Owner', org: 'MagicalAPI', when: 'Jul 2023 – Mar 2024', where: 'Remote',
        points: [
          'Added the Playground product to round out the API portfolio.',
          'Set OKRs and the roadmap, and planned sprints around them.',
          'Improved the product from Hotjar sessions and Discord community feedback.',
        ],
      },
      {
        role: 'Associate Product Manager', org: 'Angizeh Negar Khavaran', when: 'Apr 2022 – Jul 2023', where: 'Mashhad',
        points: [
          'Wrote the product documentation used by customers and the engineering team.',
          'Ran Scrum ceremonies and triaged customer tickets to the right teams.',
        ],
      },
    ],
    earlierTitle: 'Earlier: process and project roles',
    earlier: [
      { role: 'Process expert', org: 'Mashhad Municipality', note: 'Freelance' },
      { role: 'Process expert', org: 'TOOSSAB', note: 'Freelance' },
      { role: 'Project Management Officer', org: 'Navosh', note: '2020 – 2021' },
    ],
    full: 'Full history in my CV',
  },
  how: {
    title: 'How I work',
    items: [
      { t: 'Talk to users first', d: 'Scenario design, interviews and behaviour analysis come before the roadmap, not after it.' },
      { t: 'Price for growth', d: 'Packaging and pricing are product decisions. I use the AARRR funnel to find where revenue leaks.' },
      { t: 'Decide with data', d: 'Google Analytics, Hotjar and cohort analysis tell me what people do, not just what they say.' },
      { t: 'Ship in small loops', d: 'OKRs set the direction; short Scrum sprints get real features in front of customers.' },
    ],
  },
  skills: {
    title: 'Skills and tools',
    skills: ['AI products', 'User research', 'Pricing & packaging', 'AARRR', 'Cohort analysis', 'OKR', 'User story mapping', 'Agile / Scrum', 'Product marketing'],
    toolsLabel: 'Tools',
    tools: ['Figma', 'Google Analytics', 'Tag Manager', 'Hotjar', 'Jira', 'Confluence', 'Notion', 'ClickUp', 'Grafana', 'Balsamiq'],
    eduTitle: 'Education and courses',
    edu: [
      { t: 'B.Sc. Industrial Engineering', s: 'Eqbal Lahoori University, Mashhad, 2019–2023' },
      { t: 'Agentic AI Hackathon certificate', s: 'Starcoach, 2026', link: true },
      { t: 'Digital Product Management · Product Marketing Management', s: 'Bozhan School' },
      { t: 'Agile Project Management', s: 'Google, Coursera' },
    ],
    langs: 'Languages: Persian (native), English (intermediate)',
  },
  contact: {
    title: 'Hiring a PM for a messaging or AI product? Let’s talk.',
    sub: 'I usually reply within a day, Tehran time.',
    copy: 'Copy email',
    copied: 'Email copied',
    linkedin: 'LinkedIn',
    cv: 'Download CV',
  },
  footer: { updated: 'Last updated November 2026', rights: '© 2026 Maryam Rajabian' },
  dev: { warn: 'Dev only: some numbers are samples (dotted underline). Replace them before deploying.' },
};

const fa: typeof en = {
  meta: {
    title: 'مریم رجبیان — مدیر محصول',
    description: 'مدیر محصول در حوزه پیام‌رسانی کسب‌وکار و هوش مصنوعی؛ سازنده Mochat، WhatsApp Pro و قیمت‌گذاری ماژولار در Inboxino.',
  },
  nav: { work: 'نمونه‌کارها', experience: 'سوابق', how: 'روش کار', contact: 'تماس', cv: 'دانلود رزومه', other: 'English' },
  hero: {
    status: 'آماده همکاری در نقش مدیر محصول، حضوری در مشهد یا دورکار',
    title: 'محصولات پیام‌رسانی می‌سازم که کسب‌وکارها به آن تکیه می‌کنند.',
    lede: 'مدیر محصول با پنج سال تجربه در نرم‌افزارهای پیام‌رسانی و APIهای هوش مصنوعی. در Inboxino چت‌بات Mochat، سرویس WhatsApp Pro و مدل قیمت‌گذاری ماژولار را لانچ کردم و در MagicalAPI محصول Playground را ساختم.',
    ctaCv: 'دانلود رزومه',
    ctaWork: 'دیدن نمونه‌کارها',
    proof: [
      { value: '۲۵٪', label: 'افزایش نرخ تبدیل بعد از بازطراحی قیمت‌گذاری', verified: metrics.conversion.verified, id: 'M1' },
      { value: '۵', label: 'فیچر لانچ‌شده در Inboxino', verified: true },
      { value: '۱۰ از ۷۴', label: 'رتبه تیم در هکاتون هوش مصنوعی استارکوچ', verified: true },
    ],
    chat: {
      name: 'مریم',
      presence: 'معمولاً ظرف یک روز جواب می‌دهد',
      label: 'نمونه گفتگو با مریم',
      q1: 'اخیراً چه چیزهایی ساخته‌ای؟',
      a1: 'چت‌بات هوش مصنوعی Mochat، و سرویس‌های WhatsApp Pro و Number Finder در Inboxino.',
      q2: 'روی عددها هم اثری داشت؟',
      a2pre: 'قیمت‌گذاری را به پکیج‌های ماژولار تبدیل کردم و نرخ تبدیل',
      a2num: '۲۵٪',
      a2post: ' بالا رفت.',
      chips: { cv: 'رزومه‌ات را بفرست', work: 'نمونه‌کارهایت را ببینم', email: 'ایمیل بزنم' },
    },
  },
  work: {
    title: 'نمونه‌کارهای منتخب',
    sub: 'سه پروژه که تصمیم‌های محصولی‌شان با من بود.',
    read: 'خواندن نمونه‌کار',
    cases: [
      {
        meta: 'Inboxino، مدیر محصول، ۱۴۰۳ تا ۱۴۰۴',
        title: 'قیمت‌گذاری ماژولار و پکیج‌های رفتارمحور در یک پلتفرم پیام‌رسانی',
        body: 'پلن‌های ثابت را با انتخاب آزاد سرویس و پرداخت مرحله‌ای جایگزین کردم و پکیج‌ها را بر اساس رفتار واقعی مشتری‌ها چیدم. نرخ تبدیل',
        num: '۲۵٪', verified: metrics.conversion.verified, after: ' بالا رفت.',
      },
      {
        meta: 'MagicalAPI، مالک محصول، دورکار',
        title: 'Playground؛ جایی که توسعه‌دهنده‌ها قبل از خرید، API را امتحان می‌کنند',
        body: 'محصولی تازه در سبد APIهای هوش مصنوعی تحلیل رزومه، بر پایه داده‌های Hotjar و بازخورد کامیونیتی دیسکورد. فعال‌سازی',
        num: 'دو برابر', verified: metrics.activation.verified, after: ' شد.',
      },
      {
        meta: 'هکاتون استارکوچ، مدیر محصول تیم، ۱۴۰۵',
        title: 'مدیریت محصول سه چالش ایجنت هوش مصنوعی برای والکس، ترب و لیارا',
        body: 'تعریف مسئله و اولویت‌بندی برای سه ساخت هم‌زمان. تیم ما رتبه',
        num: '۱۰ از ۷۴', verified: true, after: ' را گرفت.',
      },
    ],
    othersTitle: 'پروژه‌های دیگر',
    others: [
      { title: 'Mochat، چت‌بات هوش مصنوعی', where: 'Inboxino' },
      { title: 'بازطراحی کامل UX/UI پنل', where: 'Inboxino، رهبری تیم طراحی' },
      { title: 'WhatsApp Pro و Number Finder', where: 'Inboxino' },
      { title: 'پلتفرم SMS و پنل همکاری در فروش', where: 'Inboxino' },
    ],
  },
  experience: {
    title: 'سوابق',
    roles: [
      {
        role: 'مدیر محصول', org: 'Inboxino', when: 'آذر ۱۴۰۳ تا آبان ۱۴۰۴', where: 'مشهد',
        points: [
          'طراحی و لانچ Number Finder، WhatsApp Pro، چت‌بات Mochat، پلتفرم SMS و پنل همکاری در فروش.',
          'بازطراحی قیمت‌گذاری به سرویس‌های ماژولار با پرداخت مرحله‌ای و لانچ پکیج‌های رفتارمحور.',
          'رهبری تیم طراحی در بازطراحی کامل UX/UI پنل مشتری.',
        ],
      },
      {
        role: 'مالک محصول (Product Owner)', org: 'MagicalAPI', when: 'تیر ۱۴۰۲ تا اسفند ۱۴۰۲', where: 'دورکار',
        points: [
          'اضافه‌کردن محصول Playground برای تکمیل سبد APIها.',
          'تدوین OKR و رودمپ و برنامه‌ریزی اسپرینت‌ها بر اساس آن.',
          'بهبود محصول بر پایه داده‌های Hotjar و بازخورد کامیونیتی دیسکورد.',
        ],
      },
      {
        role: 'دستیار مدیر محصول (APM)', org: 'انگیزه نگار خاوران', when: 'فروردین ۱۴۰۱ تا تیر ۱۴۰۲', where: 'مشهد',
        points: [
          'نوشتن مستندات محصول، مرجع اصلی مشتری‌ها و تیم فنی.',
          'اجرای جلسات اسکرام و ارجاع تیکت‌های مشتری به تیم‌های مربوط.',
        ],
      },
    ],
    earlierTitle: 'سوابق پیشین: نقش‌های فرایندی و پروژه‌ای',
    earlier: [
      { role: 'کارشناس فرایند', org: 'شهرداری مشهد', note: 'فریلنس' },
      { role: 'کارشناس فرایند', org: 'TOOSSAB', note: 'فریلنس' },
      { role: 'کارشناس دفتر مدیریت پروژه (PMO)', org: 'ناوش', note: '۱۳۹۹ تا ۱۴۰۰' },
    ],
    full: 'جزئیات کامل در رزومه',
  },
  how: {
    title: 'روش کار من',
    items: [
      { t: 'اول با کاربر حرف می‌زنم', d: 'طراحی سناریو، مصاحبه و تحلیل رفتار، قبل از رودمپ می‌آید، نه بعد از آن.' },
      { t: 'قیمت‌گذاری برای رشد', d: 'بسته‌بندی و قیمت، تصمیم محصولی است. با قیف AARRR پیدا می‌کنم درآمد کجا نشت می‌کند.' },
      { t: 'تصمیم با داده', d: 'Google Analytics، Hotjar و تحلیل کوهورت نشان می‌دهند کاربر چه می‌کند، نه فقط چه می‌گوید.' },
      { t: 'تحویل در چرخه‌های کوتاه', d: 'OKR جهت را تعیین می‌کند و اسپرینت‌های کوتاه اسکرام فیچر واقعی را به دست مشتری می‌رسانند.' },
    ],
  },
  skills: {
    title: 'مهارت‌ها و ابزارها',
    skills: ['محصولات هوش مصنوعی', 'تحقیق کاربر', 'قیمت‌گذاری و بسته‌بندی', 'AARRR', 'تحلیل کوهورت', 'OKR', 'User Story Mapping', 'اجایل و اسکرام', 'بازاریابی محصول'],
    toolsLabel: 'ابزارها',
    tools: ['Figma', 'Google Analytics', 'Tag Manager', 'Hotjar', 'Jira', 'Confluence', 'Notion', 'ClickUp', 'Grafana', 'Balsamiq'],
    eduTitle: 'تحصیلات و دوره‌ها',
    edu: [
      { t: 'کارشناسی مهندسی صنایع', s: 'دانشگاه اقبال لاهوری مشهد، ۱۳۹۸ تا ۱۴۰۲' },
      { t: 'گواهی هکاتون ایجنت هوش مصنوعی', s: 'استارکوچ، ۱۴۰۵', link: true },
      { t: 'مدیریت محصول دیجیتال و مدیریت بازاریابی محصول', s: 'مدرسه بوژان' },
      { t: 'Agile Project Management', s: 'گوگل، کورسرا' },
    ],
    langs: 'زبان‌ها: فارسی (مادری)، انگلیسی (متوسط)',
  },
  contact: {
    title: 'دنبال مدیر محصول برای یک محصول پیام‌رسانی یا هوش مصنوعی هستید؟ صحبت کنیم.',
    sub: 'معمولاً ظرف یک روز جواب می‌دهم.',
    copy: 'کپی ایمیل',
    copied: 'ایمیل کپی شد',
    linkedin: 'لینکدین',
    cv: 'دانلود رزومه',
  },
  footer: { updated: 'آخرین به‌روزرسانی: آبان ۱۴۰۵', rights: '© ۱۴۰۵ مریم رجبیان' },
  dev: { warn: 'فقط در حالت توسعه: بعضی عددها نمونه‌اند (زیرخط نقطه‌چین). قبل از انتشار جایگزین شوند.' },
};

export const t = { en, fa };
export const hasUnverified = Object.values(metrics).some((m) => !m.verified);
