import type { ThemeConfig } from '~/types'
export const themeConfig: ThemeConfig = {

    site: {
        title: "Retyprset",
        subtitle: "重寻版式之美",
        url: "http://localhost:4321/",
        author: "radishzz",
        favicon: "https://image.radishzz.cc/image/favicon-round-48px.webp",
        language: "zh-CN",
        footer: [
            "Built with Astro and radishzz",
            "Website Status and Views",
            "@radishzz 2023-2024"
        ]
    },

    theme: {
        color: "auto",
        light: {
            primary: "#000000",
            background: "#ffffff"
        },
        dark: {
            primary: "#ffffff", 
            background: "#000000"
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