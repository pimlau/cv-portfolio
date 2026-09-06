import i18next from "i18next";
import { sectionHeader } from "../components/sectionHeader";
import { projectCard, type ProjectCardOptions } from "../components/projectCard";

export function renderHobby(): string {
  const projects = i18next.t("hobby.projects", { returnObjects: true }) as ProjectCardOptions[];

  return `<section id="hobby" class="wrap section-grid">
    ${sectionHeader({ eyebrow: i18next.t("hobby.eyebrow"), title: i18next.t("hobby.title") })}
    <p class="u-copy u-copy--muted">${i18next.t("hobby.intro")}</p>
    <div class="card-grid">
      ${projects.map((project) => projectCard(project, "hobby")).join("")}
    </div>
  </section>`;
}
