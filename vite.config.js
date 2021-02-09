import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: [
    { find: '@', replacement: resolve(__dirname, 'src') }
  ],
  build: {
    assetsDir: "./static",
  },
  server:{
    proxy: {
      "/api": {
        target: "https://remons.gitee.io/feq",
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  }
};
