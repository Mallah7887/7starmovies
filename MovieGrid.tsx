import { MovieCard, type Movie } from "./MovieCard";

export const MovieGrid = ({ movies }: { movies: Movie[] }) => {
  return (
    <section aria-label="Movie list" className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </section>
  );
};
