import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lalaleap",
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
          { text: "專案", link: "/api-examples" },
          { text: "專案介紹", link: "/api-examples" },
          { text: "自訂欄位", link: "/api-examples" },
          { text: "狀態更新", link: "/api-examples" },
        ], 
        },
        { text: "報表功能",  
          collapsed: false,
          items: [ 
          { text: "報表儀表板", link: "/api-examples" },
        ], 
        },
        { text: "系統管理",  
          collapsed: false,
          items: [ 
          { text: "權限控管", link: "/api-examples" },
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
