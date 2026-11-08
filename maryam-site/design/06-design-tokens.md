# Design tokens — final (approved 2026-11-08)
Concept: «گفتگو» (Chat). Palette: Deep sea background + Indigo/Teal accents (mockup-v4, variant 4).

## Color
| token | value | use |
|---|---|---|
| --bg | #0E1923 | page background |
| --bg2 | #12212E | chat bubbles (Maryam), insets |
| --surf | #182A39 | cards, chat window |
| --line | #264052 | borders, dividers |
| --ink | #F2F6F8 | main text |
| --mute | #A3B5C2 | secondary text (≥7:1 on bg) |
| --a1 | #8B7CFF | violet text accent (status chip) — 5.4:1 on bg |
| --a2 | #22D3B8 | teal accent: links, numbers, chips — 9.4:1 on bg |
| --g1→--g2 | #5B54E8 → #6C63FF | primary buttons, visitor bubbles, avatar (white text ≥4.3:1) |
| --glow | #6C63FF @28% | single radial glow behind hero |

## Type
- EN: Plus Jakarta Sans 400/500/700/800 (self-hosted via @fontsource). h1 54/1.1, −0.025em; body 17/1.65.
- FA: Vazirmatn (self-hosted), letter-spacing 0, h1 line-height ≥1.4, body 18/1.9.

## Shape & motion
- Radius: buttons 12, cards 22, chat window 24, bubbles 18 (6 on tail corner), chips 999.
- One orchestrated motion: chat sequence with typing indicator on load (~4.3s). Everything else = response to user (hover lift 1–2px). prefers-reduced-motion → static.

## Copy
- Hero headline (EN): "I build messaging products businesses rely on." (FA to write natively in build stage)
