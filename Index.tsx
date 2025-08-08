import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MovieGrid } from "@/components/movies/MovieGrid";
import { Pagination } from "@/components/movies/Pagination";
import { MOVIES } from "@/data/movies";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";

const PER_PAGE = 20;

const useQuery = () => new URLSearchParams(useLocation().search);

const Index = () => {
  const q = useQuery();
  const page = Number(q.get("page") || 1);
  const query = (q.get("q") || "").toLowerCase();
  const category = q.get("category") || undefined;

  const filtered = MOVIES.filter((m) =>
    (!category || m.categories.includes(category as any)) &&
    (!query || m.title.toLowerCase().includes(query))
  );

  const start = (page - 1) * PER_PAGE;
  const current = filtered.slice(start, start + PER_PAGE);

  return (
    <>
      <SEO
        title="7StarMovies — Latest Bollywood, South, Dual Audio & Web Series"
        description="Browse 7StarMovies for fresh 1080p HDRip, 720p WEB-DL releases. Search, filter by category, and open movie details."
        canonical="https://7starmovies.xyz/"
      />
      <Header />
      <main className="container py-6">
        {category ? (
          <h1 className="text-2xl font-semibold mb-4">{category}</h1>
        ) : (
          <h1 className="text-2xl font-semibold mb-4">Latest Updates</h1>
        )}

        <MovieGrid movies={current} />
        <Pagination total={filtered.length} perPage={PER_PAGE} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
