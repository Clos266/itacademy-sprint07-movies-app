/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👉 permite usar describe, test, expect sin importarlos
    environment: "jsdom", // 👉 simula un navegador (necesario para Testing Library)
    setupFiles: [], // 👉 opcional: para inicializaciones globales
  },
});
