# PROGRESS — Maryam Rajabian resume site
(Resume point for Claude if session/tokens reset. Read this first, then 03-plan.md.)

## Context
- Owner: Mohsen builds a bilingual (EN/FA) personal resume site for colleague Maryam Rajabian (PM, Mashhad).
- Reference sample: abolfazlmohajeri.ir/en (single page, FA/EN, Vue).
- Work style: step-by-step, approval gate per stage, 3 critique rounds per stage, explain concepts in توضیح notes, reply in Persian, Vazirmatn font.
- Skills to use: frontend-design, persian-web, rtl-ready, impeccable (+ virastari for Persian copy edit).
- Stack decision (proposed): Astro + Tailwind, static, Liara hosting, /en + /fa routes.

## Status (2026-11-08)
- [x] Inputs reviewed: sample site (via user's browser), LinkedIn (via user's Chrome, logged in). PDF received → inputs/CV-maryam-rajabian-original.pdf; facts merged in content §8 (v0.4). PDF has NO metrics → ask Maryam.
- [x] Benchmark 52 sites → research/benchmark-raw.md, research/02-benchmark-synthesis.md
- [x] Criteria C1–C12, positioning, content v0.3 w/ 3 critique rounds → content/01-criteria-and-content.md (metrics = ⟦placeholders⟧)
- [x] Build plan + local setup → 03-plan.md
- [x] Wireframe v1 approved by Mohsen (structure OK)
- [x] Wireframe v2 → design/wireframe-v2.html: +'other projects' list & 'all work' link; 2-tier experience (3 product roles full, 3 earlier process roles one-line)
- [ ] Stage 0 decisions from Mohsen (see open questions in content file §7)
- [ ] ⚠️ PENDING-METRICS (Mohsen asked Maryam; must come back & replace) — see list below
- [~] Stage 5 visual design: design/05-visual-direction.md + design/mockup-v1.html (two directions A 'Khorasan' turquoise/saffron + BPMN untangle animation; B 'modeling canvas' dotted grid + career-as-BPMN-flow). REJECTED by Mohsen (no BPMN motif, palette unattractive).
- [~] Stage 5 round 2: design/mockup-v2-concepts.html — 4 product concepts: (1) گفتگو chat UI violet #6B4EF0 + mint #BDF2DA; (2) نسخه‌ها release-notes midnight #101B3D + peach #FFB38A; (3) داشبورد اثر cobalt #2457FF + lime #C6F432; (4) لانچ‌شده‌ها kanban board rose #FF6F86 + forest #0F3B30. Awaiting pick/mix.
- [ ] Stage-0 leftovers for Maryam: hackathon rank confirm, gap narrative, photo, contact visibility, domain

## ⚠️ PENDING-METRICS — sample values in use, MUST be replaced with Maryam's real answers
Rule: sample numbers are visibly flagged (⟦نمونه⟧ in docs; `verified:false` in site data file → shows a dev-only warning badge on localhost and blocks deploy checklist).
| id | where | question to Maryam | sample value used |
|---|---|---|---|
| M1 | S3 + Inboxino card | conversion/revenue change after pricing & bundles redesign | +۲۵٪ تبدیل (نمونه) |
| M2 | S3 + Mochat item | users/customers of Mochat / WhatsApp Pro | ۱,۰۰۰+ کسب‌وکار (نمونه) |
| M3 | Inboxino bullet | effect of panel UX/UI redesign (tickets / satisfaction) | −۳۰٪ تیکت (نمونه) |
| M4 | MagicalAPI card | Playground signups / activation | ۲x فعال‌سازی (نمونه) |
| M5 | S9/S6 | years of TOOSSAB & Municipality freelance roles | ⟦سال⟧ |
| M6 | How I work | does Maryam write SQL herself? | assumed yes |

## Decisions log
| date | decision | by |
|---|---|---|
| 11-08 | No skill-% bars, no vanity counters, no "More" collapses | Claude (benchmark) |
| 11-08 | 3 case studies: Inboxino, MagicalAPI, Starcoach hackathon | Claude — pending approval |
| 11-08 | Positioning "PM with process roots" (BPMN+SQL → products) | Claude — pending approval |
| 11-08 | Default language = ENGLISH (root /), Persian at /fa; no auto-redirect (changed from FA) | Mohsen ✅ |
| 11-08 | Contact v1 = email+copy, LinkedIn, CV; no form | Claude — pending approval |

## Next step
Topics queue (one at a time): (1) v2 ✅ (2) metrics → parked, sample values, see PENDING-METRICS (3) language ✅ EN default (changed) (4) hackathon rank + gaps (5) photo/contact/domain.
User folder connected: C:\Users\rajman\Desktop\Maryam CV — commit project files there.

## Mohsen's taste notes on benchmark (for palette/design)
- Loved: aiali.ir (color, design, UI/UX, animations, icons — best), farnood.github.io (creativity & design), behnambakhsh.ir (very good)
- Good: raminkhaligh.ir, m2gh.ir
- maedeh-olyaee.ir: palette bad, animations good
- Disliked: sajjadaslani.com (low contrast), imanahmadii.ir, aminarjmand.com (trash)
- Concept direction: #1 'chat' liked, but palettes v1/v2 rejected as unattractive.

## Stage 5 round 3 (current)
- Concept chosen: #1 Chat. Default language now EN → mockups in English (FA mirrors later with Vazirmatn).
- design/mockup-v3-chat-palettes.html: dark themes derived from Mohsen's favourites — P1 Aurora (#060B17, emerald #34D399, cyan #22D3EE, violet glow; from aiali.ir), P2 Indigo night (#0C0D14, #6C63FF→#22D3B8; from behnambakhsh/raminkhaligh), P3 Deep sea (#0E1923, #52B3D9→#68C3A3, saffron glow; from farnood). Latin font: Plus Jakarta Sans (to self-host in build).
- Hero = headline + chat window (typing indicator, quick-reply chips = real CTAs) + 3 proof stats; Selected work = 1 lead case (tall) + 2 cases + 'others' list. Tested 1280/390, no overflow.
- Awaiting: palette pick.

## Stage 5 round 4
- Mohsen: liked P3 (Deep sea) because background is lighter; replace green with P2's indigo; shorten hero headline.
- design/mockup-v4-final-palette.html: P4 = Deep sea bg #0E1923/#182A39 + buttons #5B54E8→#6C63FF (white text ≥4.3:1) + text accents violet #8B7CFF & teal #22D3B8, violet glow. P5 = same bg + violet #A78BFA & sky #7FC8E8 (no green/teal).
- Headline v2: "I build messaging products businesses rely on." (was 10 words → 7). Alternatives offered.
- ✅ APPROVED: P4 (Deep sea + indigo/teal). Tokens → design/06-design-tokens.md. Headline 7-word version in use (not explicitly confirmed).
## Next: Stage 6 — scaffold Astro project (EN default /, FA /fa), build full homepage in approved design; user runs locally (needs Node LTS).

## Stage 6–7 (build) — 2026-11-08
- Astro 5.18.2 project built in cloud (/home/claude/site) and delivered to C:\Users\rajman\Desktop\Maryam CV\site (no node_modules). Also staged at outputs/maryam-site/site.
- Plain CSS tokens (no Tailwind — simpler for this one-page site). Fonts self-hosted via @fontsource (Plus Jakarta Sans, Vazirmatn). Zero external requests verified.
- Pages: / (EN default), /fa/ (RTL). Sections: header, hero+chat+chips, selected work (lead + 2 + more list), experience (3 full + earlier 3 one-line), how I work, skills/tools/education, contact (copy email, LinkedIn, CV), footer.
- Dev-only: yellow bar + dotted underline on unverified metrics (content.ts `metrics.*.verified`).
- QA passed (persian-web checklist): EN/FA × 1280/390 no overflow, lang/dir ok, no Arabic ي/ك, no letter-spacing/italic on FA, fonts loaded, no console errors.
- Known TODO: case-study pages (/work/*) not built (cards not linked yet); phone/Telegram not shown (pending Maryam); domain TBD; real photo not used (avatar initial); bidi polish for Latin brand names inside FA chat text.
- Next: Mohsen runs `npm install` + `npm run dev`, reviews. Then Stage 8 motion polish, Stage 10 case-study pages, Stage 11 full QA, Stage 12 deploy (Liara).

## Work section v2 — 2026-11-08
- Mohsen: case cards looked weak; suggested company logos redrawn in our colors.
- Done: original product illustrations per case (src/components/CaseArt.astro): pricing modules + phased-payment timeline (Inboxino), API playground editor w/ resume→JSON (MagicalAPI), orchestrator + 3 agent nodes trading/shopping/cloud (hackathon). Company name shown as small text badge.
- Logos: Claude does not redraw/recolor company logos. Plan: Maryam/Mohsen supplies OFFICIAL logo files (SVG/PNG, ideally the company's own monochrome/white version) → public/logos/, replace text badge. Pending.

## Deploy plan (answered 2026-11-08) — Liara Static, no VPS
- Liara credit topped up by Mohsen. Steps: create app (platform Static) → `npm i -g @liara/cli` → `liara login` → `npm run build` → in dist/: `liara deploy --platform=static --app <name>`. Docs: docs.liara.ir/paas/static/related-apps/astro/
- Domain: buy (.ir via nic.ir / reseller; .com via Iranian reseller) → add domain in app → use Liara DNS (auto records) or set ALIAS/CNAME + TXT + CNAME(DNS-01) → issue SSL in Liara. Docs: docs.liara.ir/paas/domains/add-domain/
- DO NOT deploy publicly until sample metrics replaced (PENDING-METRICS).
- Logos: Mohsen says take from companies' LinkedIn pages → use official files unmodified (ask download confirmation when doing it).

## Lesson
- Never run cp-to-outputs and device_commit_files in parallel: commit can read the old staged copy. Always cp first, then commit, then verify size via device_list_dir.

## Work section v3 — 2026-11-08
- Mohsen: illustrations too big / page deformed; wants official logos + 2–3 images per case with auto-paging slider.
- Done: 3 equal cards (16:10 slider each), 3 original slides per case (CaseArt kind+n), auto-advance 4.5s staggered, pause on hover/focus/off-screen, swipe (RTL-aware), dots w/ aria-labels, no autoplay on reduced-motion.
- Official logos taken unmodified from companies' LinkedIn pages (200px PNG) → public/logos/{inboxino,magicalapi,starcoach}.png, shown in round white chip inside badge.
- Verified 1920/1280(FA)/390: no overflow, sliders rotate, no console errors.

## Hosting cost review — 2026-11-08 (Mohsen asked for cheaper options; Liara app NOT created)
- Liara Static (Earth + base bundle + VAT) ≈ 825k toman/month (pricing page: Earth 750k/mo; download traffic 2,500 toman/GB).
- Liara Object Storage 20GB ≈ 475k/mo — static-site support (index.html on sub-paths like /fa/) NOT verified.
- Iranian shared Linux/cPanel host: e.g. technocloud economic 216k/mo or 2.16M/yr (seen on Google snippet); upload dist/ via File Manager; free SSL usually.
- GitHub Pages: free; good abroad; access from Iran usually OK but not guaranteed.
- Awaiting Mohsen's choice.

## Photo + slides check — 2026-11-08
- Mohsen saw identical images across 3 slides → cause: his dev server kept the OLD CaseArt (external write not picked up). Code has 9 distinct slides (design/case-slides-preview.png). Fix = restart `npm run dev`.
- Photo: extracted from CV PDF (256px) → public/maryam.jpg; used in chat avatar, contact block (72px) and og:image. TODO: ask for a higher-res photo (≥600px) for sharper display.
- Next steps queue: (1) case-study pages /work/* (cards currently promise "Read case study" but link nowhere) (2) hosting choice (3) final QA (4) domain + deploy (5) replace PENDING-METRICS.

## Hosting decision: GitHub Pages (Mohsen ✅ 2026-11-08)
- Code made base-path aware (src/data/url.ts `u()`; astro.config reads SITE_URL/BASE_PATH env). Verified build under /maryam-cv/: no 404s, all paths prefixed, CV 200, og:image absolute.
- .github/workflows/deploy.yml: checkout@v4, setup-node@v4 (22), configure-pages@v5 → env, npm ci, build, upload-pages-artifact@v3, deploy-pages@v4.
- User steps: GitHub account (Maryam's preferred) → GitHub Desktop → add local repo `Maryam CV\site` → publish public repo `maryam-cv` → Settings › Pages › Source = GitHub Actions.
- Reminder: sample metrics go public on deploy; OK for unshared test, replace before sharing.

## 2026-11-08 later
- .github/workflows/deploy.yml is PROTECTED on device → delivered as site/deploy-workflow.yml; user must create `.github/workflows/deploy.yml` (GitHub web: Add file › Create new file, paste).
- Hero v2: large portrait card (4:5, 400px) on the visual side like behnambakhsh.ir; chat card overlaps lower-left; quick-reply chips moved inside chat (now accessible: chat is role=group, typing dots aria-hidden). Placeholder photo = 256px CV crop (circle mask, grey corners) → need real vertical photo from Maryam (≥1200px tall, 4:5, plain bg, shoulders-up).
- Case study draft v0.1 → content/02-case-studies-draft.md (⟦مریم⟧ markers + question list). Awaiting Mohsen review + Maryam answers before building /work/* pages.

- 2026-11-08: Mohsen published repo maryam-cv on HIS GitHub (to transfer to Maryam later via Transfer ownership), made public, added .github/workflows/deploy.yml via web, set Pages source = Actions. Live URL: (ask).

- Workflow fix: repo root = "Maryam CV" folder (site in /site) → defaults.run.working-directory: site, cache path site/package-lock.json, artifact site/dist; bumped checkout/setup-node v5, upload-pages-artifact v4. Note: repo also contains maryam-site docs + "Claude outputs" (public).
- Mohsen approved case-study draft structure/tone + confirmed hackathon 10th/74 is their team.

- ✅ LIVE: https://mohsenn1378.github.io/Maryam-CV/ (verified from user browser in Iran: EN/FA load, CV 200, images 200). Cloud proxy blocks github.io so outside-Iran check not done from here.
- Case pages built: src/data/cases.ts (EN+FA, ⟦⟧ placeholders render as yellow "to fill" marks), components/CasePage.astro, routes /work/[slug] + /fa/work/[slug]; home cards link to them. Verified under /Maryam-CV base: no 404s, no overflow.
