import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  return <header className="site-header"><nav className="nav-shell" aria-label="Navegación principal"><a className="brand" href="#top" aria-label="Ir al inicio"><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>FULL STACK · IT</span></a><div className="nav-links">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div></nav></header>;
}
