import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Telegent mPaaS Documentation</span>,
  project: {
    link: 'https://github.com/telegent/mpaas-documentation',
  },
  docsRepositoryBase: 'https://github.com/telegent/mpaas-documentation/tree/main',
  footer: {
    text: '© 2024 Telegent Corporation. All rights reserved.',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Telegent mPaaS'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Telegent mPaaS Documentation" />
      <meta property="og:description" content="Comprehensive documentation for Telegent mPaaS Core APIs" />
    </>
  ),
}

export default config; 