export interface MarqueeOptions {
  items: string[];
  tone?: string;
}

function set(items: string[]): string {
  return `<span class="marquee__set">${items
    .map((item) => `<span class="marquee__item">${item}</span><span class="marquee__sep">◆</span>`)
    .join("")}</span>`;
}

export function marquee({ items, tone = "var(--kon-1)" }: MarqueeOptions): string {
  return `<div class="marquee" style="--marquee-tone:${tone}">
    <div class="marquee__track">${set(items)}${set(items)}</div>
  </div>`;
}
