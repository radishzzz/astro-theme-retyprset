import { defineConfig } from 'astro/config'
import { themeConfig } from './src/config'

export default defineConfig({
    site: themeConfig.site.url,
    prefetch: true,
    base: '/',
  })