"use client";

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

interface IMoviesContext {
    movies: IMovie[];
    setSearch: Dispatch<SetStateAction<string>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    maxPages: number;
}

const MoviesContext = createContext<IMoviesContext>({
    movies: [],
    setSearch: () => {},
    page: 1,
    setPage: () => {},
    maxPages: 1,
});

export const useMoviesContext = () => useContext(MoviesContext);

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export function MoviesProvider({ children }: { children: ReactNode }) {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [search, setSearch] = useState("avatar");
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    const debounce = useDebounce(search);

    useEffect(() => {
        if (debounce !== undefined) {
            axios
                .get(
                    `${API_URL}?apikey=${API_KEY}&t=movie&s=${search}&page=${page}`
                )
                .then((res: { data: ISearchData }) => {
                    console.log(res.data);

                    if (res.data.Search && res.data.totalResults) {
                        setMovies(res.data.Search);
                        setMaxPages(Math.ceil(res.data.totalResults / 10));
                    } else {
                        setMovies([]);
                        setMaxPages(1);
                    }
                })
                .catch((e) => console.log(e));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, debounce]);

    return (
        <MoviesContext.Provider
            value={{ movies, setSearch, page, setPage, maxPages }}
        >
            {children}
        </MoviesContext.Provider>
    );
}
