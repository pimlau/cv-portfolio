# /img

Drop graphic design artwork here. Anything in this folder is served as-is from the site
root — a file at `public/img/desucon-2026-can.jpg` is reachable at `/img/desucon-2026-can.jpg`.

To hook a piece up to its card, set `image` on the matching entry in
[`src/i18n/locales/en.json`](../../src/i18n/locales/en.json) under `graphics.projects`,
`work.projects` or `hobby.projects`:

```json
{
  "index": "01",
  "title": "Desucon 2026 beer can label",
  "image": "/img/desucon-2026-can.jpg",
  ...
}
```

A `graphics` entry with no `image` keeps showing the halftone placeholder and stays
non-interactive; `work` and `hobby` entries simply render without an image. Add the file and
the field together and the card becomes clickable, opening the piece in the lightbox.

Set `"disableLightbox": true` on an entry to show the image as-is, with no link, no
magnifier hint and no lightbox — useful for a screenshot that gains nothing from being
enlarged.
