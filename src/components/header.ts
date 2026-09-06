import i18next from "i18next";

const NAV_SECTIONS = ["work", "graphics", "hobby", "cv", "about", "contact"] as const;

export function renderHeader(): string {
  const links = NAV_SECTIONS.map(
    (id) => `<a href="#${id}" data-nav="${id}" class="site-nav__link">${i18next.t(`nav.${id}`)}</a>`
  ).join("");

  return `<header class="site-header">
    <div class="site-header__brand">
      <span class="site-header__name">${i18next.t("nav.name")}</span>
      <span class="ds-label site-header__role">${i18next.t("nav.role")}</span>
    </div>
    <nav class="site-nav">${links}</nav>
  </header>`;
}

export function initNavScrollSpy(root: ParentNode = document): void {
  const links = new Map<string, HTMLAnchorElement>();
  root.querySelectorAll<HTMLAnchorElement>(".site-nav__link").forEach((link) => {
    const id = link.dataset.nav;
    if (id) links.set(id, link);
  });

  const setActive = (id: string) => {
    links.forEach((link, linkId) => link.classList.toggle("is-active", linkId === id));
  };

  const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => el !== null
  );
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  sections.forEach((section) => observer.observe(section));
  setActive(sections[0].id);
}
