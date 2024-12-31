import type { ThemeConfig } from '@/types'
export const themeConfig: ThemeConfig = {

    site: {
        title: "Retyprset",
        subtitle: "重寻版式之美",
        url: "http://localhost:4321/",
        author: "radishzz",
        favicon: "https://image.radishzz.cc/image/favicon-round-48px.webp",
        language: "zh-CN",
    },

    theme: {
        color: "auto",
        light: {
            text: "#333",
            background: "#FFF",
            grid: "#F3F3F3",
        },
        dark: {
            text: "#DBDBDB", 
            background: "#121212",
            grid: "#1B1B1B",
        }
    },

    toc: {
        enable: true,
        depth: '2'
    },

    rss: {
        enabled: true,
        follow: {
            feedId: "68090849347654656",
            userId: "68014765825824768"
        },
    },

    analytics: {
        //google:
        umami: "https://analytics.example.com/script.js"
    },
  
    comment: {
        waline: {
            serverURL: "https://comment.radishzz.cc",
            emoji: [
                '//unpkg.com/@waline/emojis@1.2.0/bmoji',
                '//unpkg.com/@waline/emojis@1.2.0/weibo'],
            search: false,
            imageUploader: false
        }
    }
};

export default themeConfig;