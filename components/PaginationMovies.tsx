"use client"

import { useMoviesContext } from "@/context/MoviesProvider";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";

export function PaginationMovies() {
    const { page, setPage, maxPages } = useMoviesContext();

    return (
        <>
            {maxPages !== 1 && (
                <Pagination>
                    <PaginationContent>
                        {page !== 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={() => setPage(page - 1)}
                                />
                            </PaginationItem>
                        )}

                        {page - 2 >= 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(1)}
                                >
                                    1
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {page - 3 >= 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {page !== 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationLink
                                    href="#"
                                    onClick={() => setPage(page - 1)}
                                >
                                    {page - 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                {page}
                            </PaginationLink>
                        </PaginationItem>

                        {page !== maxPages && (
                            <>
                                <PaginationItem className="hidden sm:block">
                                    <PaginationLink
                                        href="#"
                                        onClick={() => setPage(page + 1)}
                                    >
                                        {page + 1}
                                    </PaginationLink>
                                </PaginationItem>

                                {page !== maxPages - 1 && (
                                    <>
                                        {page !== maxPages - 2 && (
                                            <PaginationItem className="hidden sm:block">
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}

                                        <PaginationItem className="hidden sm:block">
                                            <PaginationLink
                                                href="#"
                                                onClick={() =>
                                                    setPage(maxPages)
                                                }
                                            >
                                                {maxPages}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </>
                                )}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={() => setPage(page + 1)}
                                    />
                                </PaginationItem>
                            </>
                        )}
                    </PaginationContent>
                </Pagination>
            )}
        </>
    );
}
