import i18next from "i18next";
import { sectionHeader } from "../components/sectionHeader";
import { galleryCard, type GalleryCardOptions } from "../components/galleryCard";

export function renderGraphics(): string {
  const items = i18next.t("graphics.projects", { returnObjects: true }) as GalleryCardOptions[];

  return `<section id="graphics" class="section--paper section--top">
    <div class="wrap section-grid">
      ${sectionHeader({ eyebrow: i18next.t("graphics.eyebrow"), title: i18next.t("graphics.title") })}
      <p class="u-copy u-copy--muted">${i18next.t("graphics.intro")}</p>
      <div class="card-grid">
        ${items.map((item) => galleryCard(item, "graphics")).join("")}
      </div>
    </div>
  </section>`;
}
