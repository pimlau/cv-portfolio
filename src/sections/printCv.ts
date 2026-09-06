import i18next from "i18next";

interface PrintCvEntry {
  range: string;
  title: string;
  location?: string;
  description: string;
  skills: string[];
}

interface PrintSkillGroup {
  title: string;
  text: string;
}

function entry({ range, title, location, description, skills }: PrintCvEntry): string {
  return `<article class="pcv-entry">
    <div class="pcv-entry__head">
      <span class="pcv-entry__title">${title}</span>
      <span class="pcv-entry__range">${range}</span>
    </div>
    ${location ? `<span class="pcv-entry__location">${location}</span>` : ""}
    <p class="pcv-entry__desc">${description}</p>
    <p class="pcv-entry__skills">${skills.join(", ")}</p>
  </article>`;
}

function skillsGroup({ title, text }: PrintSkillGroup): string {
  return `<div class="pcv-group">
    <span class="pcv-group__title">${title}</span>
    <p class="pcv-group__text">${text}</p>
  </div>`;
}

export function renderPrintCv(): string {
  const entries = i18next.t("cv.entries", { returnObjects: true }) as PrintCvEntry[];
  const groups = i18next.t("cv.sidebar.groups", { returnObjects: true }) as PrintSkillGroup[];
  const aboutParagraphs = i18next.t("cv.about.paragraphs", { returnObjects: true }) as string[];

  const email = i18next.t("contact.email");
  const linkedin = i18next.t("contact.rows.linkedin");

  return `<section id="print-cv" class="print-cv">
    <header class="pcv-header">
      <h1 class="pcv-name">${i18next.t("nav.name")}</h1>
      <span class="pcv-role">${i18next.t("nav.role")}</span>
      <span class="pcv-contact">${email} · ${linkedin}</span>
    </header>
    <div class="pcv-about">
      <span class="pcv-about__label">${i18next.t("cv.about.label")}</span>
      ${aboutParagraphs.map((paragraph) => `<p class="pcv-about__text">${paragraph}</p>`).join("")}
    </div>
    <div class="pcv-body">
      <div class="pcv-timeline">${entries.map(entry).join("")}</div>
      <div class="pcv-sidebar">
        <span class="pcv-sidebar__label">${i18next.t("cv.sidebar.label")}</span>
        ${groups.map(skillsGroup).join("")}
      </div>
    </div>
  </section>`;
}
