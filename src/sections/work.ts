import i18next from "i18next";
import { sectionHeader } from "../components/sectionHeader";
import { tagRow } from "../components/tag";
import { projectCard, type ProjectCardOptions } from "../components/projectCard";

export function renderWork(): string {
  const projects = i18next.t("work.projects", { returnObjects: true }) as ProjectCardOptions[];
  const skills = i18next.t("work.skills", { returnObjects: true }) as string[];

  return `<section id="work" class="wrap section-grid">
    ${sectionHeader({ eyebrow: i18next.t("work.eyebrow"), title: i18next.t("work.title") })}
    <div>
      <div class="stack">
        <p class="u-copy">${i18next.t("work.intro")}</p>
        ${tagRow(skills)}
      </div>
    </div>
    <div class="card-grid card-grid--flush">
      ${projects.map((project) => projectCard(project, "work")).join("")}
    </div>
  </section>`;
}
