import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import { resolve } from 'node:path'
import { LibCSSPlugin } from './plugins/libcss'

export default defineConfig(({ command }): UserConfig => {
  return Object.assign({
    root: 'playground',
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './src') },
      ],
    },
    build: {
      cssCodeSplit: true,
      outDir: resolve(__dirname, './dist'),
      lib: {
        formats: ['es'],
        entry: resolve(__dirname, './src/index.js'),
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
      },
    },
    plugins: [
      vue(),
      command === 'serve' ? [
        unocss({
          presets: [
            presetWind(),
          ],
          include: ['playground/**/*'],
        }),
      ].flat() : [
        LibCSSPlugin(),
      ].flat(),
    ],
  })
})
