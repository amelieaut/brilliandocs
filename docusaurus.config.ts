import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BrillianDocs',
  tagline: 'IMBIT-Mannheim IT Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.brillianideas.com',
  baseUrl: '/',
  projectName: 'brilliandocs',
  organizationName: 'imbit-mannheim',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   contextualSearch: true,
    // },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BrillianDocs',
      logo: {
        alt: 'BrillianDocs Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {sidebarId: 'GeneralITSidebar', type: 'docSidebar', label: 'General IT', position: 'left'},
        // {sidebarId: 'BrillianIdeasSidebar', type: 'docSidebar', label: 'BrillianIdeas', position: 'left'},
        // {sidebarId: 'BrillianQuizSidebar', type: 'docSidebar', label: 'BrillianQuiz', position: 'left'},
        // {sidebarId: 'BrillianCRMSidebar', type: 'docSidebar', label: 'BrillianCRM', position: 'left'},
        // {sidebarId: 'BrillianICMSidebar', type: 'docSidebar', label: 'BrillianICM', position: 'left'},
        // {sidebarId: 'IMBITN3xtSidebar', type: 'docSidebar', label: 'IMBIT-N3xt', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'General IT', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'BrillianIdeas', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'BrillianQuiz', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'BrillianCRM', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'BrillianICM', position: 'left'},
        {sidebarId: 'mySidebar', type: 'docSidebar', label: 'IMBIT-N3xt', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General IT',
              to: '/docs/general_IT/',
            },
            {
              label: 'BrillianIdeas',
              to: '/docs/brillianideas/',
            },
            {
              label: 'BrillianQuiz',
              to: '/docs/brillianquiz/',
            },
            {
              label: 'BrillianCRM',
              to: '/docs/brilliancrm/',
            },
            {
              label: 'BrillianICM',
              to: '/docs/brillianicm/',
            },
            {
              label: 'IMBIT-N3xt',
              to: '/docs/imbit-n3xt/',
            },
          ],
        },
        {
          title: 'IMBIT Pages',
          items: [
            {
              label: 'Metaverse',
              href: 'https://www.spatial.io/s/IMBIT-Expo-636a219beea9af00012a5956?share=324222080615529969',
            },
            {
              label: 'BrillianIdeas',
              href: 'https://brillianideas.com',
            },
            {
              label: 'BrillianQuiz',
              href: 'https://brillianquiz.com',
            },
            {
              label: 'BrillianCRM',
              href: 'https://brilliancrm.com',
            },
            {
              label: 'BrillianICM',
              href: 'https://brillianicm.com',
            },
            {
              label: 'IMBIT-N3xt',
              href: 'https://imbit-n3xt.com',
            },
          ],
        },
        {
          title: 'Other Links',
          items: [
            {
              label: 'AWS Console',
              href: 'https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin',
            },
            {
              label: 'GitHub Organization',
              href: 'https://github.com/IMBIT-Mannheim',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/IMBIT-Mannheim/brilliandocs',
            },
            {
              label: 'Imprint',
              href: 'https://brillianideas.com/#impressum',
            },
            {
              label: 'Privacy Page',
              href: 'https://brillianideas.com/#impressum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BrillianDocs. Built by IMBIT21B with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
