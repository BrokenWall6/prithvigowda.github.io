// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://brokenwall6.github.io',
  base: '/prithvigowda.github.io',
  vite: {
    base: '/prithvigowda.github.io/'
    plugins: [tailwindcss()],
  },
});
