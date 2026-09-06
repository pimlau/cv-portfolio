import { icon, type IconName } from "./icon";

export interface ButtonOptions {
  label: string;
  variant?: "accent" | "ghost";
  size?: "lg" | "md";
  iconRight?: IconName;
  href?: string;
}

export function button({ label, variant = "accent", size = "lg", iconRight, href }: ButtonOptions): string {
  const classes = `btn btn--${variant} btn--${size}`;
  const inner = `<span>${label}</span>${iconRight ? icon(iconRight) : ""}`;
  return href
    ? `<a class="${classes}" href="${href}">${inner}</a>`
    : `<button type="button" class="${classes}">${inner}</button>`;
}
