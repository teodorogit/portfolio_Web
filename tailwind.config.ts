import { Montserrat, Nunito, Mona_Sans, Underdog } from 'next/font/google';

import type { Config } from 'tailwindcss';

const { heroui } = require('@heroui/react');

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            // backgroundImage: {
            //     'custom-gradient': 'linear-gradient(to right, #ffffff, #8275FF, #ffffff)',
            // },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                nunito: ['Nunito'],
                mona_sans: ['Mona_Sans'],
                underdog: ['Underdog'],
            },
        },
    },
    plugins: [heroui()],
} satisfies Config;
