export interface MediaFrameOptions {
  ratio?: string;
  caption?: string;
  src?: string;
  alt?: string;
}

export function mediaFrame({ ratio = "4 / 5", caption, src, alt }: MediaFrameOptions): string {
  const label = alt ?? caption ?? "";
  const img = src ? `<img class="media-frame__img" src="${src}" alt="${label}" loading="lazy" />` : "";
  return `<figure class="media-frame">
    <div class="media-frame__box" style="--media-ratio:${ratio}" role="img" aria-label="${label}">${img}</div>
    ${caption ? `<figcaption class="media-frame__caption">${caption}</figcaption>` : ""}
  </figure>`;
}
