import Image from "next/image";
import { HiOutlineEmojiSad } from "react-icons/hi";

import type { IMovie } from "@/types";

export function Movie({ movie }: { movie: IMovie }) {
    return (
        <div className="flex-col w-[200px]">
            {movie.Poster === "N/A" ? (
                <div className="h-[300px] bg-black rounded-t-lg text-white flex flex-col justify-center items-center">
                    <HiOutlineEmojiSad size={128} />
                    <h1>No image found.</h1>
                </div>
            ) : (
                <Image
                    src={movie.Poster}
                    alt={movie.Title}
                    width={200}
                    height={300}
                    className="rounded-t-lg h-[300px] object-cover"
                    priority
                />
            )}

            <div className="flex flex-col bg-black w-full p-2 text-white rounded-b-lg">
                <p className="truncate text-xl font-semibold">{movie.Title}</p>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}
