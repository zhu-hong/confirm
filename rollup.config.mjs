import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default defineConfig({
  input: './src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js',
  },
  external: ['vue'],
  plugins: [
    commonjs(),
    nodeResolve({
      browser: true,
    }),
    vue(),
  ],
})