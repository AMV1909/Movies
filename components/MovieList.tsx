"use client"; // Indicates this file is intended for client-side usage

import { useMoviesContext } from "@/context/MoviesProvider";
import { Movie } from "./Movie";
import { PaginationMovies } from "./PaginationMovies";

/**
 * MovieList component displays a list of movies fetched from the context.
 * It renders each movie using the Movie component and handles pagination.
 * If no movies are found, it displays a message indicating no results found.
 *
 * @returns {JSX.Element} - The JSX element representing the MovieList component.
 */
export function MovieList() {
    // Fetch movies from the context using the useMoviesContext hook
    const { movies } = useMoviesContext();

    return (
        <section className="flex flex-wrap justify-center sm:justify-start gap-8 w-full">
            {/* If movies exist, render each movie using the Movie component */}
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))
            ) : (
                // If no movies exist, display a message indicating no results found
                <h1 className="text-center text-3xl w-full font-semibold">No results found</h1>
            )}

            {/* Render the PaginationMovies component */}
            <PaginationMovies />
        </section>
    );
}