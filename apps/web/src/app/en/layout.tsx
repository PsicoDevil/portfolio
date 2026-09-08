import type { ReactNode } from "react";
import { HtmlLangSync } from "@/components/html-lang-sync";

/**
 * Layout del árbol en inglés (/en).
 *
 * El layout raíz único renderiza <html lang="es"> (no puede variar por ruta
 * sin recurrir a múltiples root layouts). HtmlLangSync (client, mínimo)
 * sincroniza document.documentElement.lang = "en" vía useEffect, sin
 * convertir las páginas en Client Components ni perder el prerenderizado.
 */
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HtmlLangSync lang="en" />
      {children}
    </>
  );
}
