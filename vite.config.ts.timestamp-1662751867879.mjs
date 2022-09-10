// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetify from "vite-plugin-vuetify";
var __vite_injected_original_dirname = "/mnt/e/workspace/jw/uno-gen";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
  resolve: {
    alias: {
      "@def": path.resolve(__vite_injected_original_dirname, "./src/def")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2Uvd29ya3NwYWNlL2p3L3Vuby1nZW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZS93b3Jrc3BhY2UvancvdW5vLWdlbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2Uvd29ya3NwYWNlL2p3L3Vuby1nZW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS1sb2FkZXIvdHJlZS9uZXh0L3BhY2thZ2VzL3ZpdGUtcGx1Z2luXG5pbXBvcnQgdnVldGlmeSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdHZ1ZXRpZnkoeyBhdXRvSW1wb3J0OiB0cnVlIH0pLFxuXHRdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGRlZlwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9zcmMvZGVmXCIpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUSxTQUFTLG9CQUFvQjtBQUNoUyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBR2pCLE9BQU8sYUFBYTtBQUxwQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDVCxJQUFJO0FBQUEsSUFDSixRQUFRLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxFQUM3QjtBQUFBLEVBQ0MsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUSxLQUFLLFFBQVEsa0NBQVUsV0FBVztBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==