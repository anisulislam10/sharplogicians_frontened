// vite.config.js
import { defineConfig } from "file:///var/www/Anis/sharplogicians_com_new/sharplogicians_frontened/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///var/www/Anis/sharplogicians_com_new/sharplogicians_frontened/frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import viteCompression from "file:///var/www/Anis/sharplogicians_com_new/sharplogicians_frontened/frontend/node_modules/vite-plugin-compression/dist/index.mjs";
import cssnano from "file:///var/www/Anis/sharplogicians_com_new/sharplogicians_frontened/frontend/node_modules/cssnano/src/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      // Or 'brotli' for Brotli compression
      ext: ".gz",
      // The extension for compressed files
      threshold: 10240,
      // Compress files that are larger than this size (in bytes)
      deleteOriginFile: false
      // Set to true to delete original uncompressed files after compression
    })
  ],
  base: "/old/",
  define: {
    global: {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        // or "modern"
        silenceDeprecations: ["import", "global-builtin"]
      }
    },
    postcss: {
      plugins: [
        cssnano({ preset: "default" })
        // Static import of cssnano
      ]
    }
  },
  build: {
    minify: "terser",
    // Ensures JavaScript minification using Terser
    terserOptions: {
      compress: {
        drop_console: true
        // Optional: Removes console logs in production
      }
    },
    cssCodeSplit: true
    // Optionally enable CSS code splitting
  },
  server: {
    port: 3001
    // Set the port to 3001
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdmFyL3d3dy9BbmlzL3NoYXJwbG9naWNpYW5zX2NvbV9uZXcvc2hhcnBsb2dpY2lhbnNfZnJvbnRlbmVkL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvdmFyL3d3dy9BbmlzL3NoYXJwbG9naWNpYW5zX2NvbV9uZXcvc2hhcnBsb2dpY2lhbnNfZnJvbnRlbmVkL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy92YXIvd3d3L0FuaXMvc2hhcnBsb2dpY2lhbnNfY29tX25ldy9zaGFycGxvZ2ljaWFuc19mcm9udGVuZWQvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuIGltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG4gaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG4gaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubyc7IC8vIEltcG9ydCBjc3NuXG4gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBPciAnYnJvdGxpJyBmb3IgQnJvdGxpIGNvbXByZXNzaW9uXG4gICAgICBleHQ6ICcuZ3onLCAvLyBUaGUgZXh0ZW5zaW9uIGZvciBjb21wcmVzc2VkIGZpbGVzXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBDb21wcmVzcyBmaWxlcyB0aGF0IGFyZSBsYXJnZXIgdGhhbiB0aGlzIHNpemUgKGluIGJ5dGVzKVxuICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsIC8vIFNldCB0byB0cnVlIHRvIGRlbGV0ZSBvcmlnaW5hbCB1bmNvbXByZXNzZWQgZmlsZXMgYWZ0ZXIgY29tcHJlc3Npb25cbiAgICB9KSxcbiAgXSxcbiAgYmFzZTogJy9vbGQvJyxcbiAgZGVmaW5lOiB7XG4gICAgZ2xvYmFsOiB7fSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6IFwibW9kZXJuLWNvbXBpbGVyXCIsIC8vIG9yIFwibW9kZXJuXCJcbiAgICAgICAgc2lsZW5jZURlcHJlY2F0aW9uczogW1wiaW1wb3J0XCIsIFwiZ2xvYmFsLWJ1aWx0aW5cIl0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjc3NuYW5vKHsgcHJlc2V0OiAnZGVmYXVsdCcgfSksIC8vIFN0YXRpYyBpbXBvcnQgb2YgY3NzbmFub1xuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogJ3RlcnNlcicsIC8vIEVuc3VyZXMgSmF2YVNjcmlwdCBtaW5pZmljYXRpb24gdXNpbmcgVGVyc2VyXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLCAvLyBPcHRpb25hbDogUmVtb3ZlcyBjb25zb2xlIGxvZ3MgaW4gcHJvZHVjdGlvblxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSwgLy8gT3B0aW9uYWxseSBlbmFibGUgQ1NTIGNvZGUgc3BsaXR0aW5nXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDEsIC8vIFNldCB0aGUgcG9ydCB0byAzMDAxXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1ksU0FBUyxvQkFBb0I7QUFDaGEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sYUFBYTtBQUNwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixnQkFBZ0I7QUFBQSxNQUNkLFdBQVc7QUFBQTtBQUFBLE1BQ1gsS0FBSztBQUFBO0FBQUEsTUFDTCxXQUFXO0FBQUE7QUFBQSxNQUNYLGtCQUFrQjtBQUFBO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLFFBQVEsQ0FBQztBQUFBLEVBQ1g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQTtBQUFBLFFBQ0wscUJBQXFCLENBQUMsVUFBVSxnQkFBZ0I7QUFBQSxNQUNsRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFFBQVEsRUFBRSxRQUFRLFVBQVUsQ0FBQztBQUFBO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
