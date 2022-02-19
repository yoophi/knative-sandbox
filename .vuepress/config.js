const { description } = require("../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Knative on EKS",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: "book",
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Installing",
        link: "/installing/",
      },
      {
        text: "Knative Serving",
        link: "/knative/serving/",
      },
      {
        text: "Knative Eventing",
        link: "/knative/eventing/",
      },
      {
        text: "Cookbook",
        link: "/cookbook/",
      },
      {
        text: "Links",
        link: "/links/",
      },
      {
        text: "Github",
        link: "https://github.com/yoophi/knative-workshop",
      },
    ],
    sidebar: {
      // "/links/": [
      //   {
      //     title: "Links",
      //     collapsable: false,
      //     children: [""],
      //   },
      // ],
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]],
        },
        // {
        //   title: "",
        //   collapsable: false,
        //   sidebarDepth: 0,
        //   children: [["/installing", "Installing 🔧"]],
        // },
        {
          // title: "Installing",
          title: "",
          collapsable: false,
          children: [
            ["/installing/", "Installing"],
            ["/installing/eks", "Installing EKS 💻"],
            ["/installing/knative", "Installing Knative 👌"],
            ["/installing/kong-for-k8s", "Installing Kong for Kubernetes 🌟"],
            ["/installing/cert-manager", "Installing cert-manager 😃"],
          ],
        },
        {
          title: "Knative",
          collapsable: false,
          children: [
            ["/knative/serving", "Knative Serving ✨"],
            ["/knative/eventing", "Knative Eventing 📚"],
          ],
        },
        {
          title: "",
          collapsable: false,
          children: [["/cookbook/", "Cookbook ✨"]],
        },
        {
          title: "",
          collapsable: false,
          children: [["/links/", "Links ✨"]],
        },
        // {
        //   title: "Extras",
        //   collapsable: false,
        //   children: [
        //     ["/extras/contributing", "Contributing ✨"],
        //     ["/extras/license", "License 📚"],
        //   ],
        // },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
