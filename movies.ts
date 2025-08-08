import type { Movie } from "@/components/movies/MovieCard";
import wednesdayPoster from "@/assets/posters/wednesday.jpg";
import tigerPoster from "@/assets/posters/tiger.jpg";
import stormPoster from "@/assets/posters/storm.jpg";
import vikramPoster from "@/assets/posters/vikram.jpg";
import genericPoster from "@/assets/posters/generic.jpg";

export const MOVIES: Movie[] = [
  {
    id: "1",
    title: "Wednesday (2025) Season 2",
    slug: "wednesday-2025",
    year: 2025,
    format: "1080p HDRip",
    categories: ["Web Series"],
    poster: wednesdayPoster,
    info: "Mystery, Comedy, Supernatural",
  },
  {
    id: "2",
    title: "Tiger's Path (2024) Hindi",
    slug: "tigers-path-2024",
    year: 2024,
    format: "720p HDRip",
    categories: ["Bollywood"],
    poster: tigerPoster,
  },
  {
    id: "3",
    title: "Storm Chase (2023) Dual Audio",
    slug: "storm-chase-2023",
    year: 2023,
    format: "1080p WEB-DL",
    categories: ["Dual Audio"],
    poster: stormPoster,
  },
  {
    id: "4",
    title: "Vikram 2 (2022) South Hindi Dub",
    slug: "vikram-2-2022",
    year: 2022,
    format: "HDRip",
    categories: ["South"],
    poster: vikramPoster,
  },
  // More sample movies to exceed 20 for pagination
  ...Array.from({ length: 24 }, (_, i) => ({
    id: String(5 + i),
    title: `Sample Movie ${i + 1} (2024)`,
    slug: `sample-movie-${i + 1}-2024`,
    year: 2024,
    format: i % 2 === 0 ? "1080p HDRip" : "720p WEB-DL",
    categories: [ (i % 4 === 0 ? "Bollywood" : i % 4 === 1 ? "South" : i % 4 === 2 ? "Dual Audio" : "Web Series") as Movie["categories"][number] ],
    poster: genericPoster,
  }))
];
