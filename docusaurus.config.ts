import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BrillianDocs',
  tagline: 'IMBIT-Mannheim IT Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IMBIT-Mannheim', // Usually your GitHub org/user name.
  projectName: 'brilliandocs', // Usually your repo name.

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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BrillianDocs',
      logo: {
        alt: 'BrillianDocs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {sidebarId: 'GeneralITSidebar', type: 'docSidebar', label: 'General IT', position: 'left'},
        {sidebarId: 'BrillianIdeasSidebar', type: 'docSidebar', label: 'BrillianIdeas', position: 'left'},
        {sidebarId: 'BrillianQuizSidebar', type: 'docSidebar', label: 'BrillianQuiz', position: 'left'},
        {sidebarId: 'BrillianCRMSidebar', type: 'docSidebar', label: 'BrillianCRM', position: 'left'},
        {sidebarId: 'BrillianICMSidebar', type: 'docSidebar', label: 'BrillianICM', position: 'left'},
        {sidebarId: 'IMBITN3xtSidebar', type: 'docSidebar', label: 'IMBIT-N3xt', position: 'left'},
        {
          href: 'https://github.com/IMBIT-Mannheim/brilliandocs',
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
              label: 'GitHub Repositories',
              href: 'https://github.com/IMBIT-Mannheim',
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
