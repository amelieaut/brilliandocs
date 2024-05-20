import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import imageZoom from 'docusaurus-plugin-image-zoom';

const config: Config = {
  title: 'BrillianDOCS',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IMBIT-Mannheim/brilliandocs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
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
        docsRouteBasePath: '/',
        hashed: true,
        indexBlog: false,
        removeDefaultStemmer: true,
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],


  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    navbar: {
      title: 'BrillianDOCS',
      logo: {
        alt: 'BrillianDOCS Logo',
        src: 'img/logo.svg',
        href: '/start',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Amazon Web Services',
              to: 'aws',
            },
            {
              label: 'BrillianIDEAS',
              to: 'projects/brillianideas',
            },
            {
              label: 'BrillianQUIZ',
              to: 'projects/brillianquiz',
            },
            {
              label: 'BrillianCRM',
              to: 'projects/brilliancrm',
            },
            {
              label: 'BrillianICM',
              to: 'projects/brillianicm',
            },
            {
              label: 'IMBIT-N3XT',
              to: 'projects/imbit-n3xt',
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
              label: 'BrillianIDEAS',
              href: 'https://brillianideas.com',
            },
            {
              label: 'BrillianQUIZ',
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
              label: 'IMBIT-N3XT',
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
              label: 'BrillianDOCS Repository',
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
      copyright: `Copyright © ${new Date().getFullYear()} BrillianDOCS. Built by IMBIT21B with
      <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
