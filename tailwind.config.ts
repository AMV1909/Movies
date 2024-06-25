import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
    prefix: "",
    theme: {},
} satisfies Config;

export default config;
