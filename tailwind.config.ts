import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [typography],
};
export default config;
