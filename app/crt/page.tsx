import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PAGES, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/projects";

const page = PAGES["crt"];

export const metadata: Metadata = {
  title: page.title,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Anthony Cannon Walker" }],
};

export default function Page() {
  return <SitePage page={page} />;
}
