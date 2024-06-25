import { MovieList } from "@/components/MovieList";

/**
 * The Home component is the main entry point for the application.
 * It renders the MovieList component within a main container with specific styles.
 *
 * @returns {JSX.Element} - The JSX element representing the Home component.
 */
export default function Home() {
    return (
        /**
         * The main container with specific styles.
         * It contains the MovieList component.
         */
        <main className="px-4 sm:px-20 py-10 bg-gray-100 min-h-[90vh]">
            <MovieList />
        </main>
    );
}