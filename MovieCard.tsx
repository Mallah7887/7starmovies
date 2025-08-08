import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export type Movie = {
  id: string;
  title: string;
  slug: string;
  year: number;
  format: string; // e.g., HDRip, 1080p
  categories: ("Bollywood" | "South" | "Dual Audio" | "Web Series")[];
  poster: string; // path to image
  info?: string;
};

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article className="group rounded-lg overflow-hidden bg-card border hover:border-primary/50 transition-colors" style={{boxShadow: "var(--shadow-elev)"}}>
      <Link to={`/movies/${movie.slug}.html`} aria-label={`${movie.title} (${movie.year})`}>
        <div className="relative">
          <img
            src={movie.poster}
            alt={`${movie.title} poster ${movie.format}`}
            loading="lazy"
            className="w-full aspect-[2/3] object-cover group-hover:opacity-95 transition-opacity"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="secondary">{movie.format}</Badge>
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium line-clamp-2">{movie.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{movie.year} • {movie.categories[0]}</p>
        </div>
      </Link>
    </article>
  );
};
