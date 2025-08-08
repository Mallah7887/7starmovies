import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MOVIES } from "@/data/movies";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

const MovieDetail = () => {
  const { slugHtml } = useParams();
  const slug = (slugHtml || "").replace(/\.html$/, "");
  const movie = MOVIES.find((m) => m.slug === slug);

  if (!movie) {
    return (
      <>
        <Header />
        <main className="container py-10">
          <h1 className="text-2xl font-semibold mb-2">Movie Not Found</h1>
          <p className="text-muted-foreground">The movie you are looking for does not exist.</p>
          <Link className="inline-block mt-4 text-primary" to="/">← Back to Home</Link>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.title,
    datePublished: String(movie.year),
    image: movie.poster,
    genre: movie.categories.join(", "),
  };

  return (
    <>
      <SEO
        title={`${movie.title} — 7StarMovies`}
        description={`${movie.title} ${movie.format} (${movie.year}). Explore details on 7StarMovies.`}
        canonical={`https://7starmovies.xyz/movies/${movie.slug}.html`}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container py-8">
        <nav className="text-sm mb-4 text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <span>{movie.title}</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img src={movie.poster} alt={`${movie.title} poster`} className="w-full rounded-lg border" />
          </div>
          <article className="md:col-span-2">
            <h1 className="text-3xl font-semibold mb-2">{movie.title}</h1>
            <p className="text-muted-foreground mb-4">{movie.year} • {movie.format}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.categories.map((c) => (
                <Badge key={c} variant="secondary">{c}</Badge>
              ))}
            </div>
            <section className="prose prose-invert max-w-none">
              <p>
                {movie.info || `Enjoy ${movie.title} in ${movie.format}. This is a sample detail page demonstrating layout and SEO.`}
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetail;
