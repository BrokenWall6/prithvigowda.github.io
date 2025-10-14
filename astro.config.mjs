// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/BrokenWall6/prithvigowda.github.io.git',
  vite: {
    plugins: [tailwindcss()],
  },
});
