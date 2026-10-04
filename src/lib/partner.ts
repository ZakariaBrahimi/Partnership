import flexLogo from "@/assets/brands/flexdz-logo.png";
import ayorLogo from "@/assets/brands/ayor-logo.svg";

export type PartnerId = "flexdz" | "ayor";

export interface Partner {
  id: PartnerId;
  name: string;
  logo: string;
  site: string;
  /** Brand scale as "R G B" triplets, exposed to Tailwind as `flex-*` via CSS variables. */
  scale: Record<50 | 100 | 200 | 500 | 600 | 700, string>;
  /** Solid brand color (hex) for places that cannot use a Tailwind class. */
  primary: string;
}

export const PARTNERS: Record<PartnerId, Partner> = {
  flexdz: {
    id: "flexdz",
    name: "FlexDZ",
    logo: flexLogo,
    site: "https://flexdz.com",
    scale: {
      50: "255 241 244",
      100: "255 224 231",
      200: "255 191 205",
      500: "250 43 84",
      600: "217 26 76",
      700: "168 6 63",
    },
    primary: "#FA2B54",
  },
  ayor: {
    id: "ayor",
    name: "Ayor",
    logo: ayorLogo,
    site: "https://ayor.ai/",
    scale: {
      50: "241 240 254",
      100: "227 225 254",
      200: "198 194 253",
      500: "114 105 248",
      600: "91 80 224",
      700: "67 56 184",
    },
    primary: "#7269F8",
  },
};

/** Ayor on any host containing "ayor", on `/ayor`, or with `?partner=ayor`; FlexDZ otherwise. */
export function resolvePartner(): Partner {
  const { hostname, pathname, search } = window.location;
  const forced = new URLSearchParams(search).get("partner");
  if (forced === "ayor" || forced === "flexdz") return PARTNERS[forced];
  if (hostname.includes("ayor") || /^\/ayor(\/|$)/.test(pathname)) return PARTNERS.ayor;
  return PARTNERS.flexdz;
}

export const partner: Partner = resolvePartner();

export function applyPartnerTheme(p: Partner = partner) {
  const root = document.documentElement.style;
  for (const [k, v] of Object.entries(p.scale)) root.setProperty(`--flex-${k}`, v);
}

/** Replaces the default partner name inside every string of a translation tree. */
export function localize<T>(value: T, name: string): T {
  if (name === "FlexDZ") return value;
  if (typeof value === "string") return value.split("FlexDZ").join(name) as T;
  if (Array.isArray(value)) return value.map((v) => localize(v, name)) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localize(v, name)]),
    ) as T;
  return value;
}
