import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import { SearchBar } from "@/components/SearchBar";
import { MoviesProvider } from "@/context/MoviesProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Movies",
    description: "Search for movies",
    authors: [
        {
            name: "Axel",
            url: "https://axel-amv.pages.dev",
        },
    ],
    icons: [
        {
            rel: "icon",
            url: "/favicon.png",
            href: "/favicon.png",
            type: "image/png",
            sizes: "16x16",
        },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MoviesProvider>
                    <SearchBar />
                    {children}
                </MoviesProvider>
            </body>
        </html>
    );
}
