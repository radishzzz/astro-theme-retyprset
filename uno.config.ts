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
    'post-title': 'text-5 font-bold lh-7.5 m-0',
  },
  transformers: [
    transformerDirectives(), 
    transformerVariantGroup()
  ],
  rules: [
    [
      /^grid-\[([\w\d\s_-]+)\]-\[([\w\d\s_-]+)\]$/,
      
      ([, cols, rows]) => ({
        display: 'grid',
        'grid-template-columns': cols.replace(/_/g, ' '),
        'grid-template-rows': rows.replace(/_/g, ' ')
      })
    ],
    [
      /^se-(\d+)-(\d+)-(\d+)-(\d+)$/,
      ([, colStart, colEnd, rowStart, rowEnd]) => ({
        'grid-column-start': colStart,
        'grid-column-end': colEnd,
        'grid-row-start': rowStart,
        'grid-row-end': rowEnd,
      }),
    ],
  ],
})