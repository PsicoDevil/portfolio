import { LocaleSwitcher } from "@/components/locale-switcher";
import { navigation } from "@/data/portfolio";
import { getDictionary } from "@/i18n";
import { localePath, pickText, type Locale } from "@/i18n/config";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return <header className="site-header"><nav className="nav-shell" aria-label={dict.a11y.mainNav}><a className="brand" href="#top" aria-label={dict.a11y.goTop}><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>FULL STACK · IT</span></a><div className="nav-links">{navigation.map((item) => <a key={item.href} href={localePath(item.href, locale)}>{pickText(item.label, locale)}</a>)}</div><LocaleSwitcher locale={locale} ariaLabel={dict.a11y.langSwitcher} /></nav></header>;
}
