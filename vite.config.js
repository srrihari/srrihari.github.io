import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true, // ← this exposes it to your local network (0.0.0.0)
    port: 5173, // ← optional, in case you want to make sure it stays on 5173
  },
});
