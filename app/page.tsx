import { MovieList } from "@/components/MovieList";

export default function Home() {
    return (
        <main className="px-4 sm:px-20 py-10 bg-gray-100 min-h-[90vh]">
            <MovieList />
        </main>
    );
}
