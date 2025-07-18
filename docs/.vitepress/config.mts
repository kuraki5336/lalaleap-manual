import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lalaleap",
  base: "/doc/",
  description: "Lalaleap的使用說明手冊",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "文件區", link: "/quick.html" }],

    sidebar: [
      {
        text: "目錄",
        items: [
          { text: "快速上手", link: "/quick" },
          {
            text: "專案管理",
            collapsed: false,
            items: [
              { text: "建立新專案", link: "/project_add" },
              { text: "設定", link: "/project_set" },
              { text: "wiki", link: "/wiki" },
              {
                text: "需求",
                collapsed: true,
                items: [
                  { text: "清單", link: "/project_request_list" },
                  { text: "牌卡", link: "/project_request_card" },
                ],
              },
              { text: "缺陷", link: "/project_bug" },
              { text: "報表", link: "/report" },
            ],
          },
          { text: "成員介紹", link: "/team" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
