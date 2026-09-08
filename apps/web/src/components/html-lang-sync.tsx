"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

type HtmlLangSyncProps = { lang: string };

/**
 * Sincroniza <html lang> para las rutas /en.
 *
 * El layout raíz único renderiza <html lang="es"> y no puede variar por ruta
 * sin recurrir a múltiples root layouts. Este componente client mínimo
 * sincroniza document.documentElement.lang vía useEffect (React no ejecuta
 * <script> inline al hidratar/navegar en cliente).
 */
export function HtmlLangSync({ lang }: HtmlLangSyncProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      // Al navegar de vuelta a rutas ES (que no montan este componente),
      // se restaura el idioma por defecto del documento.
      document.documentElement.lang = defaultLocale;
    };
  }, [lang]);

  return null;
}
