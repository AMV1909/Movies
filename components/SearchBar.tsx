"use client"; // Indicates this file is intended for client-side usage

import Image from "next/image";
import Link from "next/link";

import { useMoviesContext } from "@/context/MoviesProvider";
import logo from "@/public/logo.png";

/**
 * A functional component that renders a search bar with a logo and a search input field.
 * It uses the `useMoviesContext` hook to access and update the search state.
 *
 * @returns {JSX.Element} - A JSX element representing the search bar.
 */
export function SearchBar() {
    // Access the setSearch function from the MoviesContext
    const { setSearch } = useMoviesContext();

    return (
        // Navigation bar with logo and search input
        <nav className="h-[10vh] top-0 sticky bg-black flex justify-between items-center md:px-10 px-4">
            <Link
                href="/"
                className="text-white text-3xl flex items-center gap-4"
            >
                <Image src={logo} alt="logo" className="w-6 sm:w-12" />
                {/* Visible text "Movies" on larger screens */}
                <p className="hidden sm:block">Movies</p>
            </Link>

            {/* Search input field */}
            <input
                name="search"
                type="search"
                placeholder="Search for movies"
                className="rounded lg:w-96 p-1 sm:p-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 focus:outline-none"
                // Update the search state with the input value or default to "avatar"
                onChange={(e) => setSearch(e.target.value || "avatar")}
            />
        </nav>
    );
}