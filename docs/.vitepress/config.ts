import type { UserConfig } from "vitepress";
import type { YouTheme } from "vitepress-theme-you";

// import baseConfig from '../node_modules/vitepress-theme-you/src/vitepress/config/baseConfig.js'
import baseConfig from 'vitepress-theme-you/config'

import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";

import { head } from "./configs/head";

import Components from "unplugin-vue-components/vite";
import path from "path";

const config: UserConfig<YouTheme.Config> = {
  extends: baseConfig,

  vite: {
    //   alias: {
    //     "~/": `${(path.resolve(__dirname), ".")}/`,
    //   },
    // },

    plugins: [
      Components({
        dirs: [path.resolve(__dirname, "theme/components")],
        extensions: ["vue", "ts"],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: true,
      })
      // VitePWA({
      //   registerType: "autoUpdate",
      // })
    ]

  },

  head,

  title: "Hexo-Theme-Yun",
  shortTitle: "Yun",

  locales: {
    "/": {
      lang: "zh-CN",
      description:
        "A powerful & simple & fast theme for Hexo. 一个对可爱自以为是的 Hexo 主题。",
    },
    "/en/": {
      lang: "en-US",
      description: "A powerful & simple & fast theme for Hexo.",
    },
  },

  themeConfig: {
    // iconClass: "i-ri-cloud-line",
    shortTitle: "Yun",

    nextLinks: true,
    prevLinks: true,
    repo: "YunYouJun/hexo-theme-yun",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "dev",

    editLinkText: "帮助改善此页面",

    locales: {
      "/": {
        label: "简体中文",
        selectText: "简体中文",
        lastUpdated: "上次更新",
        editLinkText: "帮助改善此页面！( ￣□￣)/",
        nav: navbar.zh,
        sidebar: sidebar.zh,
      },
      "/en/": {
        label: "English",
        selectText: "English",
        lastUpdated: "Last Updated",
        nav: navbar.en,
        sidebar: sidebar.en,
      },
    },

    algolia: {
      // todo: new api key
      apiKey: "",
      indexName: "yunyoujun",
    },
  },

  // plugins: [
  //   [
  //     "@vuepress/google-analytics",
  //     {
  //       id: "UA-121354150-9",
  //     },
  //   ],
  // ],
};

export default config;