import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ["5386-117-232-11-184.ngrok-free.app"],
  },
});
