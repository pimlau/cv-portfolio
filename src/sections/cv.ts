import i18next from "i18next";
import { sectionHeader } from "../components/sectionHeader";
import { tagRow } from "../components/tag";

interface CvEntry {
  range: string;
  title: string;
  location?: string;
  description: string;
  skills: string[];
}

interface SkillGroup {
  title: string;
  text: string;
}

interface Education {
  label: string;
  institution: string;
  degree: string;
  range: string;
  focus: string;
}

function entry({ range, title, location, description, skills }: CvEntry): string {
  return `<div class="cv-entry">
    <span class="ds-label cv-entry__range">${range}</span>
    <span class="cv-entry__title">${title}</span>
    ${location ? `<span class="cv-entry__location">${location}</span>` : ""}
    <p class="cv-entry__desc">${description}</p>
    ${tagRow(skills)}
  </div>`;
}

function skillsGroup({ title, text }: SkillGroup): string {
  return `<div class="skills-group">
    <span class="skills-group__title">${title}</span>
    <span class="skills-group__text">${text}</span>
  </div>`;
}

function educationPanel({ label, institution, degree, range, focus }: Education): string {
  return `<div class="cv-education">
    <span class="ds-label">${label}</span>
    <div class="panel">
      <div class="panel__row">
        <span class="ds-label panel__row-label">${range}</span>
        <div class="panel__row-body">
          <span class="panel__row-title">${institution}</span>
          <span class="panel__row-meta">${degree} — ${focus}</span>
        </div>
      </div>
    </div>
  </div>`;
}

export function renderCv(): string {
  const entries = i18next.t("cv.entries", { returnObjects: true }) as CvEntry[];
  const groups = i18next.t("cv.sidebar.groups", { returnObjects: true }) as SkillGroup[];
  const education = i18next.t("cv.education", { returnObjects: true }) as Education;

  return `<section id="cv" class="wrap section-grid">
    ${sectionHeader({ eyebrow: i18next.t("cv.eyebrow"), title: i18next.t("cv.title") })}
    <div class="split-cv">
      <div class="cv-timeline">${entries.map(entry).join("")}</div>
      <div class="skills-panel">
        <span class="ds-label skills-panel__label">${i18next.t("cv.sidebar.label")}</span>
          ${groups.map(skillsGroup).join(" ")}
      </div>
    </div>
    ${educationPanel(education)}
  </section>`;
}
