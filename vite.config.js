import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecommerce_frontend/",
});

// server: {
//   // proxy: {
//   //   "/api/v1": {
//   //     target: "http://localhost:3000",
//   //     // changeOrigin: true,
//   //     // rewrite: (path) => path.replace(/^\/api/, "/api"),
//   //   },
//   // },
// },
