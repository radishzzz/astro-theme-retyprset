import type { Theme } from 'unocss/preset-uno'
import { 
  defineConfig,
  presetUno, // 默认预设
  presetAttributify, // 为其他规则启用属性化模式
  presetTypography, // 排版规则预设
  transformerVariantGroup, // Windi CSS变体组转换器
  transformerDirectives, // CSS指令转换器（@apply ）
} from 'unocss';
import presetTheme from 'unocss-preset-theme';
import themeConfig from '@/config';

const cssExtend = {
  'li': {
    'white-space': 'normal',
    'word-wrap': 'break-word',
  },
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({ cssExtend }),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: { ...themeConfig.theme.dark },
        },
      },
    }),
  ],
  theme: {
    dark: {
      colors: { ...themeConfig.theme.light },
    },
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
});
