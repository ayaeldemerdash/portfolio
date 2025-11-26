import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // ده اللي بيفعّل Tailwind

export default defineConfig({
  plugins: [react(), tailwindcss()],
});