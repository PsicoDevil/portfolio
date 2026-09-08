import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDictionary } from "@/i18n";
import { localePath, pick, type Locale } from "@/i18n/config";

const movies = [
  { id: "lotr", title: { es: "El Señor de los Anillos", en: "The Lord of the Rings" }, image: "/lotr.jpg" },
  { id: "pulp-fiction", title: { es: "Pulp Fiction", en: "Pulp Fiction" }, image: "/pulp.jpg" },
  { id: "fight-club", title: { es: "Fight Club", en: "Fight Club" }, image: "/fightclub.jpg" },
  { id: "avengers", title: { es: "Avengers", en: "Avengers" }, image: "/avengers.jpg" },
  { id: "game-of-thrones", title: { es: "Game Of Thrones", en: "Game Of Thrones" }, image: "/gameofthrones.jpg" },
  { id: "batman", title: { es: "Batman: El Caballero de la Noche", en: "Batman: The Dark Knight" }, image: "/Batman.jpg" },
  { id: "hereditary", title: { es: "Hereditary", en: "Hereditary" }, image: "/Hereditary.jpg" },
  { id: "breaking-bad", title: { es: "Breaking Bad", en: "Breaking Bad" }, image: "/Breakingbad.jpg" },
];

/** Renderiza texto con segmentos **negrita** (nombres propios compartidos). */
function renderWithStrong(text: string) {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>,
  );
}

export function BeyondView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="beyond-page">
      <header className="beyond-header">
        <Link href={localePath("/", locale)} className="beyond-back">
          <span aria-hidden="true">←</span>
          {dict.beyond.back}
        </Link>

        <LocaleSwitcher locale={locale} ariaLabel={dict.a11y.langSwitcher} />

        <span className="beyond-mark">MR<span>·</span></span>
      </header>

      <main>
        <section className="beyond-intro section-shell">
          <p className="eyebrow">{dict.beyond.eyebrow}</p>

          <h1>
            {dict.beyond.introLines[0]}
            <br />
            {dict.beyond.introLines[1]}
            <br />
            {dict.beyond.introLines[2]}
          </h1>

          <p className="beyond-intro-text">
            {dict.beyond.introText}
          </p>
        </section>

        {/* MÚSICA */}
        <section className="beyond-section section-shell">
          <div className="beyond-section-heading">
            <span className="beyond-number">01</span>

            <div>
              <p className="eyebrow">{dict.beyond.music.eyebrow}</p>
              <h2>SYNCRO22</h2>
            </div>
          </div>

          <div className="music-grid">
            <div className="music-images">
              <div className="beyond-image music-logo">
                <Image
                  src="/syncrologo.png"
                  alt={dict.beyond.alts.syncroLogo}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>

              <div className="beyond-image">
                <Image
                  src="/bata.png"
                  alt={dict.beyond.alts.drums}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>

              <div className="beyond-image music-live">
                <Image
                  src="/live.png"
                  alt={dict.beyond.alts.live}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="beyond-copy">
              <p className="beyond-kicker">{dict.beyond.music.kicker}</p>

              <h3>
                {dict.beyond.music.heading}
              </h3>

              <p>
                {renderWithStrong(dict.beyond.music.paragraph1)}
              </p>

              <p>
                {renderWithStrong(dict.beyond.music.paragraph2)}
              </p>

              <a
                className="beyond-button"
                href="https://www.instagram.com/syncro22_band/"
                target="_blank"
                rel="noreferrer"
              >
                {dict.beyond.music.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* GAMING */}
        <section className="beyond-section section-shell">
          <div className="beyond-section-heading">
            <span className="beyond-number">02</span>

            <div>
              <p className="eyebrow">{dict.beyond.gaming.eyebrow}</p>
              <h2>{dict.beyond.gaming.title}</h2>
            </div>
          </div>

          <div className="gaming-grid">
            <div className="gaming-image beyond-image">
              <Image
                src="/witcher.webp"
                alt="The Witcher"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            <div className="beyond-copy gaming-copy">
              <p className="beyond-kicker">
                {dict.beyond.gaming.kicker}
              </p>

              <h3>
                {dict.beyond.gaming.heading}
              </h3>

              <p>
                {renderWithStrong(dict.beyond.gaming.paragraph1)}
              </p>

              <p>
                {renderWithStrong(dict.beyond.gaming.paragraph2)}
              </p>

              <a
                className="beyond-button"
                href="https://www.instagram.com/amplificados.stream/"
                target="_blank"
                rel="noreferrer"
              >
                {dict.beyond.gaming.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* CINE */}
        <section className="beyond-section beyond-cinema section-shell">
          <div className="beyond-section-heading">
            <span className="beyond-number">03</span>

            <div>
              <p className="eyebrow">{dict.beyond.cinema.eyebrow}</p>
              <h2>{dict.beyond.cinema.title}</h2>
            </div>
          </div>

          <div className="cinema-intro">
            <p>
              {dict.beyond.cinema.intro}
            </p>
          </div>

          <div className="movie-grid">
            {movies.map((movie, index) => (
              <article className="movie-card" key={movie.id}>
                <div className="movie-image">
                  <Image
                    src={movie.image}
                    alt={pick(movie.title, locale)}
                    fill
                    sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw"
                  />
                </div>

                <div className="movie-info">
                  <span>0{index + 1}</span>
                  <h3>{pick(movie.title, locale)}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="beyond-footer">
        <div className="section-shell">
          <span>{dict.beyond.footer.tagline}</span>

          <Link href={localePath("/", locale)}>
            {dict.beyond.footer.back} <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
