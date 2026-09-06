export function tag(label: string): string {
  return `<span class="tag">${label}</span>`;
}

export function tagRow(labels: string[]): string {
  return `<div class="tag-row">${labels.map(tag).join("")}</div>`;
}
