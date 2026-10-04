import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  STORAGE_KEY,
  directionOf,
  isLanguage,
  translations,
  type Language,
  type Translation,
} from "./translations";

export interface LanguageContextValue {
  /** `null` until the visitor has picked a language (first visit). */
  language: Language | null;
  /** Active translation set; falls back to English while no language is chosen. */
  t: Translation;
  dir: "rtl" | "ltr";
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const readStored = (): Language | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLanguage(value) ? value : null;
  } catch {
    return null;
  }
};

const setMeta = (selector: string, attr: string, value: string) =>
  document.head.querySelector(selector)?.setAttribute(attr, value);

const LOCALES: Record<Language, string> = { en: "en_US", fr: "fr_FR", ar: "ar_DZ" };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(readStored);

  const setLanguage = useCallback((next: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — keep in memory only */
    }
    setLanguageState(next);
  }, []);

  const active: Language = language ?? "en";
  const dir = directionOf(active);
  const t = translations[active];

  // Keep <html>, <title> and SEO metadata in sync with the language.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = active;
    root.dir = dir;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', "content", t.meta.description);
    setMeta('meta[property="og:title"]', "content", t.meta.title);
    setMeta('meta[property="og:description"]', "content", t.meta.description);
    setMeta('meta[property="og:locale"]', "content", LOCALES[active]);
  }, [active, dir, t]);

  const value = useMemo(
    () => ({ language, t, dir, setLanguage }),
    [language, t, dir, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
