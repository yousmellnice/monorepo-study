import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      dts: true,
      eslintrc: {
        enabled: true, // <-- this
      },
      imports: [
        'vue',
        'vue-router',
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
