import i18next from "i18next";
import { initI18n } from "./i18n";
import { renderHeader, initNavScrollSpy, initExportCv } from "./components/header";
import { renderFooter } from "./components/footer";
import { marquee } from "./components/marquee";
import { renderAbout } from "./sections/about";
import { renderWork } from "./sections/work";
import { renderGraphics } from "./sections/graphics";
import { renderHobby } from "./sections/hobby";
import { renderCv } from "./sections/cv";
import { renderPrintCv } from "./sections/printCv";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/utilities.css";
import "./styles/print.css";
import "lightbox2/dist/css/lightbox.css";
import "./styles/lightbox-theme.css";
import "lightbox2/dist/js/lightbox-plus-jquery.js";

async function render(): Promise<void> {
  await initI18n();

  document.documentElement.lang = i18next.language;
  document.title = i18next.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18next.t("meta.description"));

  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  const tickerItems = i18next.t("ticker.items", { returnObjects: true }) as string[];

  app.innerHTML = `
    <div class="page">
      ${renderHeader()}
      <main>
        ${renderAbout()}
        ${marquee({ items: tickerItems })}
        ${renderWork()}
        ${renderGraphics()}
        ${renderHobby()}
        ${renderCv()}
      </main>
      ${renderFooter()}
      ${renderPrintCv()}
    </div>
  `;

  initNavScrollSpy(app);
  initExportCv(app);
}

render();
