import { defineConfig } from 'astro/config'
import { themeConfig } from './src/config'
import UnoCSS from 'unocss/astro';

export default defineConfig({
    site: themeConfig.site.url,
    trailingSlash: "always", // url是否以斜杠结尾
    prefetch: true, // 空闲时预加载
    base: '/',
    integrations: [
      UnoCSS({ injectReset: true }),
    ],
  })