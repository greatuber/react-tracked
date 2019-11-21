/* eslint global-require: off */

module.exports = {
  title: 'React Tracked',
  tagline: 'Super fast React global/shared state with context and hooks',
  organizationName: 'dai-shi',
  projectName: 'react-tracked',
  url: 'https://react-tracked.js.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  themes: [
    '@docusaurus/theme-live-codeblock',
    require.resolve('./custom_modules/docusaurus-theme-ts2js-codeblock'),
  ],
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            require('./custom_modules/docusaurus-remark-plugin-ts2js'),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/react-tracked-logo.png',
    navbar: {
      title: 'React Tracked',
      logo: {
        alt: 'React Tracked Logo',
        src: 'img/react-tracked-logo.svg',
      },
      links: [
        { to: 'docs/introduction', label: 'Getting Started', position: 'left' },
        { to: 'docs/tutorial-01', label: 'Tutorial', position: 'left' },
        { to: 'docs/api', label: 'Reference', position: 'left' },
        {
          href: 'https://github.com/dai-shi/react-tracked',
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
              label: 'Getting Started',
              to: 'docs/introduction',
            },
            {
              label: 'Tutorial',
              to: 'docs/tutorial-01',
            },
            {
              label: 'Reference',
              to: 'docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/MrQdmzd',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dai-shi/react-tracked',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/react-tracked',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dai_shi',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2019 Daishi Kato',
    },
  },
};
