import Image from "next/image";
import Link from "next/link";

const movies = [
  { title: "El Señor de los Anillos", image: "/lotr.jpg" },
  { title: "Pulp Fiction", image: "/pulp.jpg" },
  { title: "Fight Club", image: "/fightclub.jpg" },
  { title: "Avengers", image: "/avengers.jpg" },
  { title: "Game Of Thrones", image: "/gameofthrones.jpg" },
  { title: "Batman: El Caballero de la Noche", image: "/Batman.jpg" },
  { title: "Hereditary", image: "/Hereditary.jpg" },
  { title: "Breaking Bad", image: "/Breakingbad.jpg" },
];

export default function BeyondPage() {
  return (
    <div className="beyond-page">
      <header className="beyond-header">
        <Link href="/" className="beyond-back">
          <span aria-hidden="true">←</span>
          Volver al portfolio
        </Link>

        <span className="beyond-mark">MR<span>·</span></span>
      </header>

      <main>
        <section className="beyond-intro section-shell">
          <p className="eyebrow">Más allá del código</p>

          <h1>
            Hay una parte de mí que construye software.
            <br />
            Y otra que vive entre guitarras, videojuegos,
            <br />
            películas y conversaciones interminables sobre ellos.
          </h1>

          <p className="beyond-intro-text">
            Distintas formas de crear, explorar y disfrutar lo que me interesa.
          </p>
        </section>

        {/* MÚSICA */}
        <section className="beyond-section section-shell">
          <div className="beyond-section-heading">
            <span className="beyond-number">01</span>

            <div>
              <p className="eyebrow">Música</p>
              <h2>SYNCRO22</h2>
            </div>
          </div>

          <div className="music-grid">
            <div className="music-images">
              <div className="beyond-image music-logo">
                <Image
                  src="/syncrologo.png"
                  alt="Logo de SYNCRO22"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>

              <div className="beyond-image">
                <Image
                  src="/bata.png"
                  alt="Batería y equipamiento de la banda"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>

              <div className="beyond-image music-live">
                <Image
                  src="/live.png"
                  alt="SYNCRO22 en vivo"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="beyond-copy">
              <p className="beyond-kicker">Guitarra · Coros · Rock</p>

              <h3>
                Una parte importante de mi vida también pasa arriba de un
                escenario.
              </h3>

              <p>
                Formo parte de <strong>SYNCRO22</strong>, un proyecto de rock
                donde toco la guitarra y hago coros.
              </p>

              <p>
                La música es otra forma de hacer lo mismo que me gusta hacer
                programando: crear cosas, probar ideas y construir algo con
                otras personas.
              </p>

              <a
                className="beyond-button"
                href="https://www.instagram.com/syncro22_band/"
                target="_blank"
                rel="noreferrer"
              >
                Ver SYNCRO22
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
              <p className="eyebrow">Gaming</p>
              <h2>Pasión gamer</h2>
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
                Videojuegos · Mundos · Historias
              </p>

              <h3>
                No solamente juego videojuegos. Me gustan los mundos que
                construyen.
              </h3>

              <p>
                Soy gamer en general, pero tengo especial debilidad por
                experiencias como <strong>The Witcher</strong> y{" "}
                <strong>Red Dead Redemption</strong>.
              </p>

              <p>
                También participo como panelista en conversaciones sobre
                videojuegos en <strong>Amplificados</strong>.
              </p>

              <a
                className="beyond-button"
                href="https://www.instagram.com/amplificados.stream/"
                target="_blank"
                rel="noreferrer"
              >
                Ver Amplificados
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
              <p className="eyebrow">Cine</p>
              <h2>Una colección personal</h2>
            </div>
          </div>

          <div className="cinema-intro">
            <p>
              Cine y series que forman parte de mi colección personal. Ciencia
              ficción, fantasía, terror, thrillers y algunas historias que
              dejaron marca.
            </p>
          </div>

          <div className="movie-grid">
            {movies.map((movie, index) => (
              <article className="movie-card" key={movie.title}>
                <div className="movie-image">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw"
                  />
                </div>

                <div className="movie-info">
                  <span>0{index + 1}</span>
                  <h3>{movie.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="beyond-footer">
        <div className="section-shell">
          <span>Más allá del código</span>

          <Link href="/">
            Volver al portfolio <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}