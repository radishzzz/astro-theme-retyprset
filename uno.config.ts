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
    'se': 'text-5 font-bold lh-7.5 m-0',
  },
  transformers: [
    transformerDirectives(), 
    transformerVariantGroup()
  ],
  rules: [
    // grid-x-y
    [/^grid-(\d+|\[.+?\])-(\d+|\[.+?\])$/, ([, cols, rows]) => {
        const isColsBracket = cols.startsWith('[') && cols.endsWith(']');
        const isRowsBracket = rows.startsWith('[') && rows.endsWith(']');
        return {
          display: 'grid',
          'grid-template-columns': isColsBracket
            ? cols.slice(1, -1).replace(/_/g, ' ')
            : `repeat(${cols}, 1fr)`,
          'grid-template-rows': isRowsBracket
            ? rows.slice(1, -1).replace(/_/g, ' ')
            : `repeat(${rows}, 1fr)`,
    }}],
    // se-1-2-3-4
    [/^se-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, startX, endX, startY, endY]) => ({
      'grid-column-start': startX,
      'grid-column-end': endX,
      'grid-row-start': startY,
      'grid-row-end': endY,
    })],
  ],
})