"use client";

import Image from "next/image";
import Link from "next/link";

import { useMoviesContext } from "@/context/MoviesProvider";
import logo from "@/public/logo.png";

export function SearchBar() {
    const { setSearch } = useMoviesContext();

    return (
        <nav className="h-[10vh] top-0 sticky bg-black flex justify-between items-center md:px-10 px-4">
            <Link
                href="/"
                className="text-white text-3xl flex items-center gap-4"
            >
                <Image src={logo} alt="logo" className="w-6 sm:w-12" />
                <p className="hidden sm:block">Movies</p>
            </Link>

            <input
                name="search"
                type="search"
                placeholder="Search for movies"
                className="rounded lg:w-96 p-1 sm:p-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 focus:outline-none"
                onChange={(e) => setSearch(e.target.value || "avatar")}
            />
        </nav>
    );
}
