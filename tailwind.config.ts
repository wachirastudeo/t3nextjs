import { fontFamily } from "tailwindcss/defaultTheme";
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.sky,
        success: colors.green,
        danger: colors.red,
        info: colors.cyan,
        warn: colors.yellow,
        neutral: colors.gray,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' })],
} satisfies Config;
