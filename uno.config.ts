import presetTheme from 'unocss-preset-theme';
import { 
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';
import type { Theme } from 'unocss/preset-uno'
import { themeConfig } from '@/config';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: { ...themeConfig.theme.dark }
        },
      },
    }),
  ],
  theme: {
    colors: { ...themeConfig.theme.light },
  },
  shortcuts: {
    'title': 'text-5 font-bold lh-7.5 m-0',
  },
  transformers: [
    transformerDirectives(), 
    transformerVariantGroup()
  ],
  rules: [
    [
      /^row-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-row': `${start}/${end}` }),
    ],
    [
      /^column-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-column': `${start}/${end}` }),
    ],
  ],
})