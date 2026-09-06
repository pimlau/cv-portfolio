export interface SectionHeaderOptions {
  eyebrow: string;
  title: string;
  meta?: string;
}

export function sectionHeader({ eyebrow, title, meta }: SectionHeaderOptions): string {
  return `<div class="section-header">
    <span class="ds-label section-header__eyebrow">${eyebrow}</span>
    <h2 class="section-header__title">${title}</h2>
    ${meta ? `<span class="section-header__meta">${meta}</span>` : ""}
  </div>`;
}
