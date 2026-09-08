"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { localePath, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
};

const options: { id: Locale; label: string }[] = [
  { id: "es", label: "ES" },
  { id: "en", label: "EN" },
];

export function LocaleSwitcher({ locale, ariaLabel }: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav className="lang-switch" aria-label={ariaLabel}>
      {options.map((option, index) => (
        <Fragment key={option.id}>
          {index > 0 ? <span aria-hidden="true">|</span> : null}
          <Link
            href={localePath(pathname, option.id)}
            hrefLang={option.id}
            lang={option.id}
            aria-current={option.id === locale ? "true" : undefined}
            className={option.id === locale ? "is-active" : undefined}
          >
            {option.label}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
