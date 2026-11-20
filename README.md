[![News Image 20 November 2026 — make.fun bounty](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![News Image 20 November 2026 rank on make.fun](https://make.fun/badge/news-image-20261120/HeyRdzy/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![News Image 20 November 2026 reward on make.fun](https://make.fun/badge/news-image-20261120/HeyRdzy/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

# The World in One Day — Friday, 20 November 2026

One image summing up the world's news of Friday 20 November 2026,
in the style of a newspaper front page.

## The day's stories

- **Missiles strike Kyiv** — ballistic missiles hit the capital;
  Austrian and Dutch embassies damaged.
- **Houthis hit Saudi targets** — four targets struck; a tanker hits
  a mine near the Strait of Hormuz.
- **Trump, Xi & Putin issue a peace declaration** — after the
  first-ever trilateral summit in Shenzhen.
- **Taiwan stocks plunge 2,200 points** — the index breaks below
  37,000.
- Also today: the UK pledges 1,000+ drones for Ukraine, Cyclone
  Akvan nears India's east coast, the US sanctions Comancheros and
  the 'Ndrangheta, and Trump pardons Pete Rose.

## How it runs

`main.ts` copies `entry.png` to the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`). It clears only the
contents of that directory, never the directory itself.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a JPEG (1024×1024, about 233 KiB), named `entry.png`
as the competition requires.
