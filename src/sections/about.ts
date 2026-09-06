import i18next from "i18next";
import { sectionHeader } from "../components/sectionHeader";
import { mediaFrame } from "../components/mediaFrame";
import { button } from "../components/button";

export function renderAbout(): string {
  return `<section id="about" class="section--paper ds-grain">
    <div class="wrap split-about">
      <div class="stack">
        ${mediaFrame({ ratio: "4 / 5", caption: i18next.t("about.photoCaption"), src: "/img/profile.png" })}
      </div>
      <div class="stack">
        ${sectionHeader({
          eyebrow: i18next.t("about.eyebrow"),
          title: i18next.t("about.title"),
          meta: i18next.t("about.meta"),
        })}
        <p class="u-copy u-copy--lg u-measure-52">${i18next.t("about.lead")}</p>
        <p class="u-copy u-copy--muted u-measure-58">${i18next.t("about.paragraph1")}</p>
        <p class="u-copy u-copy--muted u-measure-58">${i18next.t("about.paragraph2")}</p>
        <div class="actions">
          ${button({ label: i18next.t("about.ctaWork"), variant: "accent", size: "lg", iconRight: "arrow-down", href: "#work" })}
          ${button({ label: i18next.t("about.ctaContact"), variant: "ghost", size: "lg", iconRight: "mail", href: "#contact" })}
        </div>
      </div>
    </div>
  </section>`;
}
