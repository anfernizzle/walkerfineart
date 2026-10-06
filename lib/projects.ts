export type ProjectSlug =
  | "adventures-of-the-kimono-cowboy"
  | "unplugged"
  | "far-west-days"
  | "crt"
  | "eyes"
  | "japan"
  | "cambodia"
  | "rise-and-fall"
  | "life101"
  | "sky-exchange"
  | "borders";

export type GalleryKey =
  | "kc"
  | "unplugged"
  | "fwd"
  | "crt"
  | "eyes"
  | "japan"
  | "cambodia"
  | "sky-exchange";

export type PageDefinition = {
  slug: string;
  title: string;
  bodyId: "home" | "interior";
  bodyClass?: string;
  contentFile: string;
  gallery?: GalleryKey;
  thumbnails?: boolean;
  loadOwl: boolean;
};

export const SITE_DESCRIPTION =
  "Anthony Cannon Walker – MFA 2007, Tokyo National University of Fine Arts and Music – Moving and Still Image Design – Artist Portfolio. MFA Thesis: Adventures of the Kimono Cowboy in the Far-West";

export const SITE_KEYWORDS =
  "Anthony Cannon Walker, MFA, Anthony C. Walker, Tokyo Geidai, Tokyo National University of Fine Arts and Music, Adventures of the Kimono Cowboy in the Far-West, artist, photograhy, conceptual, portfolio, Tokyo, Japan, Japon, New York";

export const NAV_PROJECTS: {
  href: string;
  label: string;
  kind: "photo" | "video" | "inter";
  disabled?: boolean;
}[] = [
  {
    href: "/adventures-of-the-kimono-cowboy",
    label: "Adventures of the Kimono Cowboy in the Far-West",
    kind: "photo",
  },
  { href: "/unplugged", label: "Unplugged", kind: "photo" },
  { href: "#", label: "MOMU System", kind: "inter", disabled: true },
  { href: "/far-west-days", label: "Far-West Days", kind: "photo" },
  { href: "/crt", label: "CRT", kind: "photo" },
  { href: "/eyes", label: "Eyes", kind: "photo" },
  { href: "/japan", label: "Japan", kind: "photo" },
  { href: "/cambodia", label: "Cambodia", kind: "photo" },
  { href: "/rise-and-fall", label: "Rise and Fall", kind: "video" },
  { href: "#", label: "Seasons", kind: "video", disabled: true },
  { href: "/life101", label: "Life-101", kind: "photo" },
  { href: "/sky-exchange", label: "Sky Exchange", kind: "photo" },
  { href: "/borders", label: "Borders", kind: "photo" },
];

export const PAGES: Record<string, PageDefinition> = {
  home: {
    slug: "",
    title: "Portfolio : ANTHONY CANNON WALKER",
    bodyId: "home",
    contentFile: "hp-content",
    loadOwl: false,
  },
  profile: {
    slug: "profile",
    title: "ANTHONY CANNON WALKER : Profile",
    bodyId: "interior",
    bodyClass: "overlay profile",
    contentFile: "profile",
    loadOwl: false,
  },
  "adventures-of-the-kimono-cowboy": {
    slug: "adventures-of-the-kimono-cowboy",
    title: "ANTHONY CANNON WALKER : Adventures of the Kimono Cowboy in the Far-West",
    bodyId: "interior",
    bodyClass: "overlay kimono-cowboy",
    contentFile: "kc",
    gallery: "kc",
    thumbnails: true,
    loadOwl: true,
  },
  unplugged: {
    slug: "unplugged",
    title: "ANTHONY CANNON WALKER : Unplugged",
    bodyId: "interior",
    bodyClass: "overlay unplugged",
    contentFile: "unplugged",
    gallery: "unplugged",
    thumbnails: true,
    loadOwl: true,
  },
  "far-west-days": {
    slug: "far-west-days",
    title: "ANTHONY CANNON WALKER : Far-West Days",
    bodyId: "interior",
    bodyClass: "overlay far-west-days",
    contentFile: "fwd",
    gallery: "fwd",
    thumbnails: true,
    loadOwl: true,
  },
  crt: {
    slug: "crt",
    title: "ANTHONY CANNON WALKER : CRT",
    bodyId: "interior",
    bodyClass: "overlay crt",
    contentFile: "crt",
    gallery: "crt",
    thumbnails: true,
    loadOwl: true,
  },
  eyes: {
    slug: "eyes",
    title: "ANTHONY CANNON WALKER : EYES",
    bodyId: "interior",
    bodyClass: "overlay eyes",
    contentFile: "eyes",
    gallery: "eyes",
    thumbnails: true,
    loadOwl: true,
  },
  japan: {
    slug: "japan",
    title: "ANTHONY CANNON WALKER : Japan",
    bodyId: "interior",
    bodyClass: "overlay japan",
    contentFile: "japan",
    gallery: "japan",
    thumbnails: true,
    loadOwl: true,
  },
  cambodia: {
    slug: "cambodia",
    title: "ANTHONY CANNON WALKER : Cambodia",
    bodyId: "interior",
    bodyClass: "overlay cambodia",
    contentFile: "cambodia",
    gallery: "cambodia",
    thumbnails: true,
    loadOwl: true,
  },
  "rise-and-fall": {
    slug: "rise-and-fall",
    title: "ANTHONY CANNON WALKER : Rise and Fall",
    bodyId: "interior",
    bodyClass: "overlay rise-and-fall",
    contentFile: "rise-and-fall",
    loadOwl: false,
  },
  life101: {
    slug: "life101",
    title: "ANTHONY CANNON WALKER : Life-101",
    bodyId: "interior",
    bodyClass: "overlay life101",
    contentFile: "life101",
    loadOwl: false,
  },
  "sky-exchange": {
    slug: "sky-exchange",
    title: "ANTHONY CANNON WALKER : Sky Exchange",
    bodyId: "interior",
    bodyClass: "overlay sky-exchange",
    contentFile: "sky-exchange",
    gallery: "sky-exchange",
    thumbnails: false,
    loadOwl: true,
  },
  borders: {
    slug: "borders",
    title: "ANTHONY CANNON WALKER : Borders",
    bodyId: "interior",
    bodyClass: "overlay borders",
    contentFile: "borders",
    loadOwl: false,
  },
};

export const PROJECT_SLUGS = Object.keys(PAGES).filter((k) => k !== "home");
