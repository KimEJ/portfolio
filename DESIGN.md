# Design

World: **an airport terminal at night.** The visitor is a passenger reading the boards. User-pinned direction (2026-11-05): airport concept, pushed strong, with destination split-flap animation.

## Mapping

| Site | Airport artifact |
|---|---|
| Featured and company projects (home) | Departures board (FIDS): flight code, destination, since, gate (platform), status |
| Archive | Arrivals board |
| Career | Boarding pass: legs `TPX → IPS → WDL`, with a stub for role, years, and education |
| Project page | Boarding-pass header, metrics strip, "baggage claim" screenshot belt, then a reading column |
| Contact | Yellow wayfinding sign (the only full-yellow surface) |
| Nav | Wayfinding bar with pictograms: 출발 / 여정 / 도착 / 안내 |

## Tokens (`app/assets/css/main.css` `@theme`)

- Concourse `#0a0c0f` (page); board `#13171c` / `#1a1f25`; flap cell `#20262d`; seam `#262d35`.
- Ink `#eceff2`, ink-2 `#a3acb5`, ink-3 `#78828c`.
- Flap amber `#f7c548` for codes and figures. Sign yellow `#ffcd00` is reserved for wayfinding pictograms, focus, selection, and the contact sign.
- Status tones: go `#46d98a`, wait `#f7c548` (blinking dot), hold `#a3acb5`.
- Paper `#f3f1ec` is used only for boarding passes.
- Fonts (self-hosted via npm): Pretendard Variable (Korean and UI), Atkinson Hyperlegible (Latin labels; a legibility-first humanist face in the airport-signage lineage), JetBrains Mono (codes, dates, figures only).

## Signature motion

`SplitFlap.vue`: Solari cells, each a top and a bottom leaf at 75 ms per half. Every cell cycles through random glyphs of its own script (Hangul, Latin, digits) before landing. Rows are staggered 140 ms apart, and hovering or focusing a row re-flaps its destination. The server renders the final text; the animation is client-only and disabled under `prefers-reduced-motion`. On widths ≤960px the destination flap is swapped for plain text.

## Rules

- No eyebrow labels above headings. The Latin sub-label sits after the heading on its baseline.
- Monospace only for codes, dates, and figures.
- Projects without screenshots (Hitoeki) are fine: the board and pass carry the page.
