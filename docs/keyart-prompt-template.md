# Game key art generation prompt (ChatGPT image gen)

Used to generate the 16:9 banner/key-art image shown in `GameShowcaseRow`
(`bannerImage` field in `src/lib/mock-games.ts`). Validated on Nublox
(`public/images/games/nublox/banner.webp`) — result was approved.

## How to use

1. Attach the game's real screenshots (menu, gameplay, etc.).
2. Optionally attach a reference image for the background style (glossy 3D
   block-explosion look) if you want to nudge the aesthetic.
3. Replace `"Nublox"` / block colors below with the target game's name and
   palette, paste into ChatGPT, generate, save as
   `public/images/games/<slug>/banner.webp`.

## Prompt

```
Create a 16:9 wide banner/key-art image (1920x1080px) for the mobile puzzle
game "Nublox." I'm attaching two kinds of source material:
1. Real screenshots taken directly from the game (menu screen, gameplay
   grid, etc.) — use these AS-IS, unmodified, displayed inside phone screens.
2. Reference-only colors/shapes (glossy 3D isometric blocks in violet, teal,
   magenta, amber) to inspire the background style — do not copy this image
   itself, just its visual language.

COMPOSITION — two layers:

LAYER 1 (background, full frame): a dramatic abstract scene of glossy 3D
isometric game blocks (violet, teal/cyan, magenta/pink, amber/orange) mid-
explosion/bursting apart with glowing energy, sparks, and floating shard
particles, set against a deep near-black navy background with a faint
grid and scattered star bokeh — similar mood/energy to classic block-blast
key art.

LAYER 2 (foreground, in front of the background): 4-5 modern iPhone
(iPhone 17-style, thin bezels, flat sides, Dynamic Island) mockups, each
displaying one of the ATTACHED REAL GAME SCREENSHOTS on its screen exactly
as provided — do not redraw or reinterpret the screenshot content, just
render it accurately inside the phone's screen. Arrange the phones at
varied angles and depths (tilted left/right, slightly overlapping, some
larger/closer and some smaller/farther) for a dynamic 3D perspective —
NOT a flat straight-on row. Add soft drop shadows and a subtle colored
glow behind each phone matching the block colors near it.

CRITICAL LAYOUT CONSTRAINTS — this image goes inside a website card with
UI overlaid on top of it, so composition must respect these zones:

- LEFT ~40% of the width, top-to-bottom: this area WILL BE COVERED by an
  opaque blue info card (icon, title, description text) for most of its
  height, plus a large game-name text label near the bottom-left corner.
  Do NOT place any phones or important detail here — keep it as background-
  only (the exploding blocks / glow / dark space), no foreground phones
  crossing into this zone.
- Do NOT include any logo or wordmark as a separate overlay outside the
  phone screens — the website already overlays its own title text in the
  bottom-left corner. (The game's own logo appearing naturally INSIDE a
  phone screenshot, e.g. on the menu screen, is fine — that's real
  screenshot content, not a duplicate overlay.)
- RIGHT ~60% of the width, full height: this is the primary visible zone —
  place the cluster of phones here, angled and layered for depth.
- Bottom edge: a soft dark gradient fades in near the very bottom ~10-15%
  of the image for text legibility — avoid critical detail right at the
  bottom edge, keep phone bases/shadows simple there.
- Keep meaningful content at least 5% inset from all four edges (rounded
  corners will clip the very corners slightly).

STYLE: premium mobile-game key art — dynamic, glossy, high-contrast, dark
background with vivid saturated block colors and phone screens that pop
with real gameplay content. No flat/static grid of phones; feels like an
energetic hero banner, not an app store screenshot lineup.

OUTPUT: 1920x1080px, PNG, no added text or logos outside the phone screens.
```

## Layout constraints reference (why these zones exist)

From `src/components/ui/GameShowcaseRow.tsx`:
- Key art container: `aspect-[16/9]`, `object-cover`, `rounded-3xl` clipping.
- Info card: absolutely positioned top-left, `max-w-md`, covers roughly the
  left 35-40% width for most of the height.
- Game title text: `absolute bottom-6 left-6`, large bold uppercase.
- Bottom gradient: `bg-gradient-to-t from-background via-background/20
  to-transparent` — soft fade near the bottom edge only.
