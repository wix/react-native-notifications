/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'React Native Notifications',
  tagline: 'Documentation',
  url: 'https://wix.github.io',
  baseUrl: '/react-native-notifications/',
  projectName: 'react-native-notifications',
  organizationName: 'wix',
  favicon: undefined,
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      additionalLanguages: ['java'],
      theme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Wix`,
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started (or other categories)',
              to: 'docs/getting-started',
            },
            {
              label: 'Guides',
              to: 'docs/installation-ios',
            },
            {
              label: 'API Reference',
              to: 'docs/general-api',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wix/react-native-notifications',
            },
          ],
        },
      ],
    },
    sidebarCollapsible: false,
    navbar: {
      title: 'React Native Notifications',
      links: [
        {
          to: 'docs/installation-ios',
          label: 'Docs',
          position: 'right',
          activeBasePath: 'docs',
        },
        {
          to: 'docs/general-api',
          label: 'API',
          position: 'right',
          activeBasePath: 'api',
        },
        {
          href: 'https://github.com/wix/react-native-notifications',
          position: 'right',
          className: 'header-github-link navbar_item navbar_link',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          routeBasePath: 'docs',
          path: '../docs',
          editUrl:
            'https://github.com/wix/react-native-notifications/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          path: './blog',
          routeBasePath: 'blog',
        }
      },
    ],
  ],
};

module.exports = siteConfig;
