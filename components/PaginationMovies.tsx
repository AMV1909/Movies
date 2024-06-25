"use client"; // Indicates this file is intended for client-side usage

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

/**
 * A functional component that renders a pagination for movie listings.
 * It uses the `useMoviesContext` hook to access the current page, set page, and maximum pages.
 * The component renders a pagination UI with previous, next, and page number links.
 * It also handles the case when there is only one page.
 *
 * @returns {JSX.Element} - The JSX element representing the pagination component.
 */
export function PaginationMovies() {
    // Get the current page, set page, and maximum pages from the movies context
    const { page, setPage, maxPages } = useMoviesContext();

    return (
        <>
            {/* Only render pagination if there are more than one page */}
            {maxPages !== 1 && (
                <Pagination>
                    <PaginationContent>
                        {/* Render previous button if not on the first page */}
                        {page !== 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setPage(page - 1)}
                                />
                            </PaginationItem>
                        )}

                        {/* Render page number 1 if not already displayed */}
                        {page - 2 >= 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationLink onClick={() => setPage(1)}>
                                    1
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {/* Render ellipsis if there are more pages before the current page */}
                        {page - 3 >= 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {/* Render previous page number if not already displayed */}
                        {page !== 1 && (
                            <PaginationItem className="hidden sm:block">
                                <PaginationLink
                                    onClick={() => setPage(page - 1)}
                                >
                                    {page - 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        {/* Render current page number */}
                        <PaginationItem>
                            <PaginationLink isActive>{page}</PaginationLink>
                        </PaginationItem>

                        {/* Render next page number if not already displayed */}
                        {page !== maxPages && (
                            <>
                                <PaginationItem className="hidden sm:block">
                                    <PaginationLink
                                        onClick={() => setPage(page + 1)}
                                    >
                                        {page + 1}
                                    </PaginationLink>
                                </PaginationItem>

                                {/* Render ellipsis if there are more pages after the current page */}
                                {page !== maxPages - 1 && (
                                    <>
                                        {page !== maxPages - 2 && (
                                            <PaginationItem className="hidden sm:block">
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}

                                        {/* Render last page number if not already displayed */}
                                        <PaginationItem className="hidden sm:block">
                                            <PaginationLink
                                                onClick={() =>
                                                    setPage(maxPages)
                                                }
                                            >
                                                {maxPages}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </>
                                )}

                                {/* Render next button if not on the last page */}
                                <PaginationItem>
                                    <PaginationNext
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
