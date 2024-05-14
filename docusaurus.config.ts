import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BrillianDocs',
  tagline: 'IMBIT-Mannheim IT Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.brillianideas.com',
  baseUrl: '/',
  projectName: 'brilliandocs',
  organizationName: 'imbit-mannheim',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        removeDefaultStemmer: true,
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BrillianDocs',
      logo: {
        alt: 'BrillianDocs Logo',
        src: 'img/logo.svg',
      },
      items: [
          {
            to: 'docs/category/general-it',
            label: 'General IT',
            position: 'left',
          },
          {
            to: 'docs/category/brillianideas',
            label: 'BrillianIdeas',
            position: 'left',
          },
          {
            to: 'docs/category/brillianquiz',
            label: 'BrillianQuiz',
            position: 'left',
          },
          {
            to: 'docs/category/brilliancrm',
            label: 'BrillianCRM',
            position: 'left',
          },
          {
            to: 'docs/category/brillianicm',
            label: 'BrillianICM',
            position: 'left',
          },
          {
            to: 'docs/category/imbit-n3xt',
            label: 'IMBIT-N3xt',
            position: 'left',
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
              to: '/docs/category/general-it/',
            },
            {
              label: 'BrillianIdeas',
              to: '/docs/category/brillianideas/',
            },
            {
              label: 'BrillianQuiz',
              to: '/docs/category/brillianquiz/',
            },
            {
              label: 'BrillianCRM',
              to: '/docs/category/brilliancrm/',
            },
            {
              label: 'BrillianICM',
              to: '/docs/category/brillianicm/',
            },
            {
              label: 'IMBIT-N3xt',
              to: '/docs/category/imbit-n3xt/',
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
          title: 'Helpful Links',
          items: [
            {
              label: 'AWS Console',
              href: 'https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin',
            },
            {
              label: 'Bitwarden',
              href: 'https://bitwarden.com',
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
