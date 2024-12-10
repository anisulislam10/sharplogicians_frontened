import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react-swc";
 import viteCompression from 'vite-plugin-compression';
 import cssnano from 'cssnano'; // Import cssn
 export default defineConfig({
  plugins: [



    react(),
cssInjectedByJsPlugin(),


   ViteSitemap({
      hostname: 'https://yourwebsite.com',
    }),  


 viteCompression({
        algorithm: 'gzip', // Or 'brotli' for Brotli compression
      ext: '.gz', // The extension for compressed files
      threshold: 10240, // Compress files that are larger than this size (in bytes)
      deleteOriginFile: false, // Set to true to delete original uncompressed files after compression
    }),
  ],
  base: '/old/',
  define: {
    global: {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
    postcss: {
      plugins: [
        cssnano({ preset: 'default' }), // Static import of cssnano
      ],
    },
  },
  build: {
    minify: 'terser', // Ensures JavaScript minification using Terser
    terserOptions: {
      compress: {
        drop_console: true, // Optional: Removes console logs in production
      },
    },
    cssCodeSplit: true, // Optionally enable CSS code splitting
  },
  server: {
    port: 3001, // Set the port to 3001
  },
});
