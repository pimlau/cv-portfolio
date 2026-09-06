import { projectCardBody, projectCardThumb, staticThumb, type ProjectCardOptions } from "./projectCard";

export type GalleryCardOptions = ProjectCardOptions;

export function galleryCard(item: GalleryCardOptions, gallery: string): string {
  const thumb = item.image ? projectCardThumb(item, gallery) : staticThumb(item.title);

  return `<article class="project-card gallery-card">
    ${thumb}
    ${projectCardBody(item)}
  </article>`;
}
