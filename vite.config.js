import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/sportSee_front/',
    plugins: [react()],
});
