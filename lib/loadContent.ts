import { readFileSync } from "fs";
import path from "path";
import type { GalleryKey } from "./projects";

export type Work = {
  sold: string;
  image: string;
  seriesTitle: string;
  seriesTitle2: string;
  title: string;
  year: string;
  dimensions: string;
  medium: string;
  description: string;
  price: string;
};

export function loadHtmlContent(name: string): string {
  const filePath = path.join(process.cwd(), "lib", "content", `${name}.html`);
  return readFileSync(filePath, "utf8");
}

export function loadGallery(key: GalleryKey): Work[] {
  const filePath = path.join(process.cwd(), "lib", "galleries", `${key}.json`);
  return JSON.parse(readFileSync(filePath, "utf8")) as Work[];
}

export function workAlt(work: Work): string {
  return `Image from ${work.seriesTitle}${work.seriesTitle2}${work.title}`;
}

export function workCaptionLines(work: Work): string[] {
  const lines: string[] = [];
  if (work.seriesTitle) lines.push(work.seriesTitle);
  if (work.seriesTitle2) lines.push(work.seriesTitle2);
  const titleYear = [work.title, work.year].filter(Boolean).join(" ");
  if (titleYear.trim()) lines.push(titleYear.trim());
  if (work.medium) lines.push(work.medium);
  return lines;
}
