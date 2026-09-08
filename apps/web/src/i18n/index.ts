import { en } from "@/i18n/dictionaries/en";
import { es, type Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
