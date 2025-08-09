import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Critters from 'critters'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

function criticalPlugin() {
  let outDir = 'dist'
  return {
    name: 'critical-css',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    async closeBundle() {
      const htmlPath = join(outDir, 'index.html')
      let html = await readFile(htmlPath, 'utf8')
      const critters = new Critters({ path: outDir, preload: 'swap', noscript: true })
      html = await critters.process(html)
      html = html.replace(
        /<link rel="stylesheet"([^>]*index-[^>]*\.css"[^>]*)onload="this.rel='stylesheet'">/,
        '<link rel="preload" as="style"$1onload="this.rel=\'stylesheet\'">',
      )
      await writeFile(htmlPath, html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    criticalPlugin(),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
  },
})