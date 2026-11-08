// Case-study content (draft v0.1 — see maryam-site/content/02-case-studies-draft.md).
// Strings wrapped in ⟦ ⟧ are placeholders only Maryam can answer; they render as highlighted "to fill" notes.
import type { Lang } from './content';

export interface Case {
  slug: string;
  art: 'pricing' | 'playground' | 'agents';
  org: string;
  logo: string;
  meta: string;
  title: string;
  tldr: string;
  context: string[];
  problem: string[];
  did: { t: string; d: string }[];
  notBuilt: string;
  outcome: string[];
  again: string;
}

const en: Case[] = [
  {
    slug: 'inboxino-pricing', art: 'pricing', org: 'Inboxino', logo: 'inboxino',
    meta: 'Product Manager · Dec 2024 – Nov 2025 · Mashhad',
    title: 'Modular pricing and behaviour-based bundles for a messaging SaaS',
    tldr: 'Fixed plans did not fit how customers actually used Inboxino. I moved pricing to pick-what-you-need modules with phased payments, then bundled services around real usage. ⟦Maryam: real conversion result⟧',
    context: [
      'Inboxino is a business messaging platform: WhatsApp and SMS sending, the Mochat AI chatbot, and an affiliate panel.',
      'My role: Product Manager, owning roadmap, research and pricing. ⟦Maryam: team size and roles⟧',
      '⟦Maryam: typical customers, e.g. online shops, clinics, schools⟧',
    ],
    problem: ['⟦Maryam: what customers needed that fixed plans did not give them⟧', '⟦Maryam: the data that showed the problem⟧'],
    did: [
      { t: 'Discovery', d: 'Scenario design, customer interviews and usage analysis. ⟦Maryam: number of interviews and the key insight⟧' },
      { t: 'Decision', d: 'Modular service selection with phased payments, so small customers can start small and grow.' },
      { t: 'Bundles', d: 'Packages built from services customers already used together. ⟦Maryam: one example bundle⟧' },
    ],
    notBuilt: '⟦Maryam: an option you considered and rejected, and why⟧',
    outcome: ['⟦Maryam: change in conversion, revenue or order value⟧', '⟦Maryam: effect on churn or renewals, if known⟧'],
    again: '⟦Maryam: one sentence⟧',
  },
  {
    slug: 'magicalapi-playground', art: 'playground', org: 'MagicalAPI', logo: 'magicalapi',
    meta: 'Product Owner · Jul 2023 – Mar 2024 · Remote',
    title: 'An API Playground so developers can try before they buy',
    tldr: 'Developers had no easy way to try the AI resume-parsing APIs before paying. I added Playground to the MagicalAPI portfolio so they could test calls without writing code. ⟦Maryam: real activation result⟧',
    context: [
      'MagicalAPI sells AI APIs for resume and career data to developers worldwide.',
      'My role: Product Owner, remote. I set OKRs, owned the roadmap and ran the team’s agile process.',
    ],
    problem: ['⟦Maryam: how many sign-ups reached a first API call⟧', '⟦Maryam: what Discord and Hotjar feedback said⟧'],
    did: [
      { t: 'Discovery', d: 'Watched sessions in Hotjar and collected feedback from the Discord community.' },
      { t: 'Decision', d: 'Playground as a product in the portfolio, not just a docs page. ⟦Maryam: why⟧' },
      { t: 'Goals', d: '⟦Maryam: the OKR for that quarter⟧' },
    ],
    notBuilt: '⟦Maryam: e.g. SDKs for every language, or an unlimited free tier⟧',
    outcome: ['⟦Maryam: activation, sign-ups or paid conversion⟧'],
    again: '⟦Maryam: one sentence⟧',
  },
  {
    slug: 'starcoach-agentic-ai', art: 'agents', org: 'Starcoach', logo: 'starcoach',
    meta: 'Team Product Manager · October 2026',
    title: 'Product lead for three agentic-AI challenges: Wallex, Torob, Liara',
    tldr: 'At the Starcoach Agentic AI Hackathon I was the team’s product manager across all three challenges: Wallex (algorithmic trading), Torob (shopping and price comparison) and Liara (cloud infrastructure). Our team placed 10th of 74.',
    context: ['A hackathon built on real company challenges, focused on AI agents.', '⟦Maryam: team size, roles and hackathon length⟧'],
    problem: ['Three challenges at once, with a small team and little time. We had to decide where to focus.'],
    did: [
      { t: 'Framing', d: 'Defined the problem and success criteria for each challenge. ⟦Maryam: one line on what you built for each⟧' },
      { t: 'Prioritising', d: 'Split the team and time across the three builds. ⟦Maryam: how you decided⟧' },
    ],
    notBuilt: '⟦Maryam⟧',
    outcome: ['10th of 74 teams.'],
    again: '⟦Maryam: one sentence⟧',
  },
];

const fa: Case[] = [
  {
    slug: 'inboxino-pricing', art: 'pricing', org: 'Inboxino', logo: 'inboxino',
    meta: 'مدیر محصول · آذر ۱۴۰۳ تا آبان ۱۴۰۴ · مشهد',
    title: 'قیمت‌گذاری ماژولار و پکیج‌های رفتارمحور در یک پلتفرم پیام‌رسانی',
    tldr: 'پلن‌های ثابت با شکل واقعی استفاده مشتری‌ها از Inboxino جور نبود. قیمت‌گذاری را به انتخاب ماژولار سرویس با پرداخت مرحله‌ای تبدیل کردم و پکیج‌ها را بر اساس استفاده واقعی چیدم. ⟦مریم: نتیجه واقعی نرخ تبدیل⟧',
    context: [
      'Inboxino پلتفرم پیام‌رسانی کسب‌وکار است: ارسال در واتس‌اپ و SMS، چت‌بات هوش مصنوعی Mochat و پنل همکاری در فروش.',
      'نقش من: مدیر محصول، مسئول رودمپ، تحقیق کاربر و قیمت‌گذاری. ⟦مریم: اندازه و ترکیب تیم⟧',
      '⟦مریم: نوع مشتری‌ها، مثلاً فروشگاه آنلاین، کلینیک، آموزشگاه⟧',
    ],
    problem: ['⟦مریم: مشتری‌ها چه می‌خواستند که پلن ثابت نمی‌داد⟧', '⟦مریم: داده‌ای که مشکل را نشان داد⟧'],
    did: [
      { t: 'کشف', d: 'طراحی سناریو، مصاحبه با مشتری‌ها و تحلیل رفتار استفاده. ⟦مریم: تعداد مصاحبه‌ها و مهم‌ترین یافته⟧' },
      { t: 'تصمیم', d: 'انتخاب ماژولار سرویس با پرداخت مرحله‌ای، تا مشتری کوچک هم بتواند کوچک شروع کند و رشد کند.' },
      { t: 'پکیج‌ها', d: 'ترکیب سرویس‌هایی که مشتری‌ها در عمل با هم استفاده می‌کردند. ⟦مریم: یک مثال پکیج⟧' },
    ],
    notBuilt: '⟦مریم: گزینه‌ای که بررسی و رد شد، و دلیلش⟧',
    outcome: ['⟦مریم: تغییر نرخ تبدیل، درآمد یا ارزش سفارش⟧', '⟦مریم: اثر روی ریزش یا تمدید، اگر داده هست⟧'],
    again: '⟦مریم: یک جمله⟧',
  },
  {
    slug: 'magicalapi-playground', art: 'playground', org: 'MagicalAPI', logo: 'magicalapi',
    meta: 'مالک محصول · تیر تا اسفند ۱۴۰۲ · دورکار',
    title: 'Playground؛ جایی که توسعه‌دهنده‌ها قبل از خرید، API را امتحان می‌کنند',
    tldr: 'توسعه‌دهنده‌ها راه ساده‌ای برای امتحان API تحلیل رزومه قبل از پرداخت نداشتند. محصول Playground را به سبد MagicalAPI اضافه کردم تا بدون کدنویسی API را تست کنند. ⟦مریم: نتیجه واقعی فعال‌سازی⟧',
    context: [
      'MagicalAPI مجموعه‌ای از APIهای هوش مصنوعی برای داده‌های رزومه و شغلی است، برای توسعه‌دهنده‌های بین‌المللی.',
      'نقش من: مالک محصول، دورکار. تدوین OKR، مالکیت رودمپ و اجرای فرایند اجایل تیم.',
    ],
    problem: ['⟦مریم: چند درصد ثبت‌نامی‌ها به اولین فراخوانی API می‌رسیدند⟧', '⟦مریم: بازخورد دیسکورد و Hotjar چه می‌گفت⟧'],
    did: [
      { t: 'کشف', d: 'بررسی جلسه‌های کاربران در Hotjar و جمع‌آوری بازخورد کامیونیتی دیسکورد.' },
      { t: 'تصمیم', d: 'Playground به‌عنوان یک محصول مستقل در سبد، نه فقط یک صفحه مستندات. ⟦مریم: چرا⟧' },
      { t: 'هدف‌گذاری', d: '⟦مریم: OKR آن فصل⟧' },
    ],
    notBuilt: '⟦مریم: مثلاً SDK برای همه زبان‌ها، یا پلن رایگان نامحدود⟧',
    outcome: ['⟦مریم: فعال‌سازی، ثبت‌نام یا تبدیل به پلن پولی⟧'],
    again: '⟦مریم: یک جمله⟧',
  },
  {
    slug: 'starcoach-agentic-ai', art: 'agents', org: 'Starcoach', logo: 'starcoach',
    meta: 'مدیر محصول تیم · مهر ۱۴۰۵',
    title: 'مدیریت محصول سه چالش ایجنت هوش مصنوعی برای والکس، ترب و لیارا',
    tldr: 'در هکاتون Agentic AI استارکوچ، مدیر محصول تیم در هر سه چالش بودم: والکس (معاملات الگوریتمی)، ترب (خرید و مقایسه قیمت) و لیارا (زیرساخت ابری). تیم ما بین ۷۴ تیم رتبه ۱۰ را گرفت.',
    context: ['هکاتونی بر پایه چالش‌های واقعی شرکت‌ها، با موضوع ایجنت‌های هوش مصنوعی.', '⟦مریم: تعداد و نقش اعضای تیم، و مدت هکاتون⟧'],
    problem: ['سه چالش هم‌زمان با تیم کوچک و زمان کم؛ باید تصمیم می‌گرفتیم روی چه چیزی تمرکز کنیم.'],
    did: [
      { t: 'تعریف مسئله', d: 'تعریف مسئله و معیار موفقیت هر چالش. ⟦مریم: برای هر چالش یک خط که چه ساختید⟧' },
      { t: 'اولویت‌بندی', d: 'تقسیم تیم و زمان بین سه ساخت. ⟦مریم: چطور تصمیم گرفتید⟧' },
    ],
    notBuilt: '⟦مریم⟧',
    outcome: ['رتبه ۱۰ از ۷۴ تیم.'],
    again: '⟦مریم: یک جمله⟧',
  },
];

export const cases: Record<Lang, Case[]> = { en, fa };

export const caseUi = {
  en: { back: 'All work', context: 'Context', problem: 'The problem', did: 'What I did', notBuilt: 'What we chose not to build', outcome: 'Outcome', again: 'If I did it again', next: 'Next case', cta: 'Want the full story? Let’s talk.', cv: 'Download CV', email: 'Email Maryam', todo: 'To fill' },
  fa: { back: 'همه نمونه‌کارها', context: 'زمینه', problem: 'مسئله', did: 'کاری که کردم', notBuilt: 'چیزی که تصمیم گرفتیم نسازیم', outcome: 'نتیجه', again: 'اگر دوباره بود', next: 'نمونه‌کار بعدی', cta: 'جزئیات بیشتر می‌خواهید؟ صحبت کنیم.', cv: 'دانلود رزومه', email: 'ایمیل بزنم', todo: 'تکمیل شود' },
};
