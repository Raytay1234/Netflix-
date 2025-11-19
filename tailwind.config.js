/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // Make sure it scans all your components
    ],
    theme: {
        extend: {},
    },
    plugins: [
        lineClamp, // optional, for truncating text
    ],
};
