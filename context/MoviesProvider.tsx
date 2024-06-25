"use client"; // Indicates this file is intended for client-side usage

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";

import { IMovie, ISearchData } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

// Context definition for managing movie data and pagination
interface IMoviesContext {
    movies: IMovie[];
    setSearch: Dispatch<SetStateAction<string>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    maxPages: number;
}

// Context initialization with default values
const MoviesContext = createContext<IMoviesContext>({
    movies: [],
    setSearch: () => {},
    page: 1,
    setPage: () => {},
    maxPages: 1,
});

// Custom hook to use the movies context throughout the application
export const useMoviesContext = () => useContext(MoviesContext);

// API URL and API key obtained from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Component responsible for managing movie state and API interactions
export function MoviesProvider({ children }: { children: ReactNode }) {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [search, setSearch] = useState("avatar");
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    // useDebounce hook to wait a short time before make the request
    const debounce = useDebounce(search);

    // Effect to fetch movies from the API based on search and pagination
    useEffect(() => {
        if (debounce !== undefined) {
            axios
                .get(
                    `${API_URL}?apikey=${API_KEY}&t=movie&s=${search}&page=${page}`
                )
                .then((res: { data: ISearchData }) => {
                    if (res.data.Search && res.data.totalResults) {
                        setMovies(res.data.Search);
                        setMaxPages(Math.ceil(res.data.totalResults / 10));
                        setPage(1);
                    } else {
                        setMovies([]);
                        setMaxPages(1);
                    }
                })
                .catch((e) => console.log(e));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, debounce]);

    // Provides the movies context to all child components
    return (
        <MoviesContext.Provider
            value={{ movies, setSearch, page, setPage, maxPages }}
        >
            {children}
        </MoviesContext.Provider>
    );
}
