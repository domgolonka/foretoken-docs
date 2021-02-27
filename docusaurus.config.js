module.exports = {
  title: 'Foretoken',
  tagline: 'A customizable modern-day defence tool using REST/gRPC protocols.',
  url: 'https://foretoken.domgolonka.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'domgolonka', // Usually your GitHub org/user name.
  projectName: 'foretoken', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Foretoken',
      logo: {
        alt: 'Foretoken',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/domgolonka/foretoken',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start',
              to: 'docs/start/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/domgolonka/foretoken',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/domgolonka',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Foretoken, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/domgolonka/foretoken-docs/blob/main/docs',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/domgolonka/foretoken-docs/blob/main/docs',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
