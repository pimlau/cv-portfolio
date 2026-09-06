import { tagRow } from "./tag";
import { mediaFrame } from "./mediaFrame";
import { icon } from "./icon";

export interface ProjectCardOptions {
  index: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  image?: string;
  disableLightbox?: boolean;
}

const THUMB_RATIO = "4 / 3";

export function staticThumb(alt: string, src?: string): string {
  return `<div class="gallery-thumb gallery-thumb--static">${mediaFrame({ ratio: THUMB_RATIO, src, alt })}</div>`;
}

export function projectCardThumb(item: ProjectCardOptions, gallery: string): string {
  if (!item.image) return "";
  if (item.disableLightbox) return staticThumb(item.title, item.image);

  return `<a class="gallery-thumb" href="${item.image}" data-lightbox="${gallery}" data-title="${item.title} — ${item.role}, ${item.year}" aria-label="View ${item.title} larger">
      ${mediaFrame({ ratio: THUMB_RATIO, src: item.image, alt: item.title })}
      <span class="gallery-thumb__hint" aria-hidden="true">${icon("zoom-in", "gallery-thumb__icon")}</span>
    </a>`;
}

export function projectCardBody({ index, title, role, year, summary, tags }: ProjectCardOptions): string {
  return `<div class="project-card__head">
      <span class="ds-label project-card__index">${index}</span>
      <span class="ds-label project-card__year">${year}</span>
    </div>
    <h3 class="project-card__title">${title}</h3>
    <p class="project-card__role">${role}</p>
    <p class="project-card__summary">${summary}</p>
    ${tags ? tagRow(tags) : ""}`;
}

export function projectCard(item: ProjectCardOptions, gallery = "projects"): string {
  return `<article class="project-card">
    ${projectCardThumb(item, gallery)}
    ${projectCardBody(item)}
  </article>`;
}
