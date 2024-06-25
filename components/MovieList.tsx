"use client";

import { useMoviesContext } from "@/context/MoviesProvider";
import { Movie } from "./Movie";
import { PaginationMovies } from "./PaginationMovies";

export function MovieList() {
    const { movies } = useMoviesContext();

    return (
        <section className="flex flex-wrap justify-center sm:justify-start gap-8 w-full">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))
            ) : (
                <h1 className="text-center text-3xl w-full font-semibold">No results found</h1>
            )}

            <PaginationMovies />
        </section>
    );
}
