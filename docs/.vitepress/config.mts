import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lalaleap",
  base: '/',
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
        { text: "快速上手", link: "/quick" },
        { text: "專案管理",  
          collapsed: false,
          items: [ 
          { text: "建立新專案", link: "/project_add" },
          { text: "設定", link: "/project_set" },
          { text: "需求", items: [
            { text: "清單", link: "/project_request_list" },
            { text: "牌卡", link: "/project_request_card" },
          ]  },
          { text: "缺陷", link: "/project_bug" },
        ], 
        },
      
        
        
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
