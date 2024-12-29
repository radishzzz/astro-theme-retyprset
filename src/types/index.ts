import { type LanguageList } from '../i18n';
export interface ThemeConfig {
    site: {
      title: string;
      subtitle: string;
      url: string;
      author: string;
      favicon: string;
      language: LanguageList;
      footer: string[];
    };
    
    theme: {
      color: 'light' | 'dark' | 'auto';
      light: {
        primary: string;
        background: string;
      };
      dark: {
        primary: string;
        background: string;
      };
    };
    
    toc: {
      enable: boolean;
      depth: '1' | '2' | '3';
    };

    rss?: {
      enabled: boolean;
      follow?: {
        feedId: string;
        userId: string;
      };
    };
    
    analytics?: {
      google?: string;
      umami?: string;
    };
    
    comment?: {
      waline?: {
        serverURL: string;
        emoji?: string[];
        search?: boolean;
        imageUploader?: boolean;
        //lang
      };
    };
  }