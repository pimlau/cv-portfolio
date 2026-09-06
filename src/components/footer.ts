import i18next from "i18next";
import { button } from "./button";

export function renderFooter(): string {
  const email = i18next.t("contact.email");
  return `<footer id="contact" class="site-footer ds-grain">
    <div class="wrap split-contact">
      <div class="site-footer__lead">
        <span class="ds-label site-footer__eyebrow">${i18next.t("contact.eyebrow")}</span>
        <h2 class="site-footer__heading">${i18next.t("contact.heading")}</h2>
        <p class="site-footer__text">${i18next.t("contact.text")}</p>
        <div class="actions">
          ${button({ label: email, variant: "accent", size: "lg", iconRight: "mail", href: `mailto:${email}` })}
        </div>
      </div>
      <div class="footer-links">
        <a class="footer-links__row" href="mailto:${email}">
          <span>${i18next.t("contact.rows.emailLabel")}</span>
          <span class="footer-links__value">${email}</span>
        </a>
        <a class="footer-links__row" href="${i18next.t("contact.rows.linkedinUrl")}">
          <span>${i18next.t("contact.rows.linkedinLabel")}</span>
          <span class="footer-links__value">${i18next.t("contact.rows.linkedin")}</span>
        </a>
      </div>
    </div>
  </footer>`;
}
