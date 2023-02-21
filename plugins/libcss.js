import fs from 'node:fs'
import { extname, resolve } from 'node:path'

/**
 * @type { import('vite').UserConfig }
 */
let viteConfig

/**
 * @returns { import('vite').Plugin }
 */
export function LibCSSPlugin() {
  return {
    name: 'lib-css',
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig
    },
    writeBundle(option, bundle) {
      if(!viteConfig?.build?.lib || option.format !== 'es') return

      const files = Object.keys(bundle)

      const outDir = viteConfig.build.outDir
      const csss = fs.readdirSync(outDir).filter((f) => extname(f) === '.css').map((f) => f.split('.')[0])
      
      files.forEach((file) => {
        const ext = extname(file)

        if(ext !== '.js') return

        let purgeName = file.split('.')[0].split('-')[0]

        if(!csss.includes(purgeName)) return

        const filePath = resolve(outDir, file)

        const data = fs.readFileSync(filePath, {
          encoding: 'utf8',
        })
        fs.writeFileSync(filePath, `import './${purgeName}.css'\n${data}`)
      })
    },
  }
}
