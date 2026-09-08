export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Campo traducido completo (obligatorio en ambos idiomas). */
export type Localized<T> = Record<Locale, T>;

/** Texto que puede ser compartido (string) o traducido ({ es, en }). */
export type LocalizedText = string | Localized<string>;

/** Lista de textos que pueden mezclar items compartidos y traducidos. */
export type LocalizedItems = readonly LocalizedText[];

/** Lista que puede ser mixed (item por item) o traducida en bloque ({ es: [...], en: [...] }). */
export type LocalizedList = LocalizedItems | Localized<string[]>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function pickText(value: LocalizedText, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

export function pickItems(items: LocalizedItems, locale: Locale): string[] {
  return items.map((item) => pickText(item, locale));
}

function isLocalizedItems(value: LocalizedList): value is LocalizedItems {
  return Array.isArray(value);
}

export function pickList(value: LocalizedList, locale: Locale): string[] {
  return isLocalizedItems(value) ? pickItems(value, locale) : value[locale];
}

/**
 * Convierte una ruta interna a su equivalente en el locale dado.
 * - "#hash" no se toca.
 * - "/beyond" -> "/en/beyond" | "/en/beyond" -> "/beyond".
 * - "/" -> "/en" | "/en" -> "/".
 * - Preserva hashes de ruta: "/#projects" -> "/en/#projects".
 */
export function localePath(path: string, locale: Locale): string {
  if (path.startsWith("#")) return path;
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  let pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  pathname = pathname.replace(/^\/en(?=\/|$)/, "");
  if (pathname === "") pathname = "/";
  if (locale === defaultLocale) return `${pathname}${hash}`;
  return `${pathname === "/" ? "/en" : `/en${pathname}`}${hash}`;
}
