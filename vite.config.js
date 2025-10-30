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
      try {
        let html = await readFile(htmlPath, 'utf8')
        const critters = new Critters({ path: outDir, preload: 'swap', noscript: true })
        html = await critters.process(html)
        html = html.replace(
          /<link rel="stylesheet"([^>]*index-[^>]*\.css"[^>]*)onload="this.rel='stylesheet'">/,
          '<link rel="preload" as="style"$1onload="this.rel=\'stylesheet\'">',
        )
        await writeFile(htmlPath, html)
      } catch (err) {
        console.warn('Critical CSS generation skipped:', err.message)
      }
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
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
  },
})