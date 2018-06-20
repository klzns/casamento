import React from 'react'
import axios from 'axios'
import gifts from './gifts'

export default {
  Document: (
    {
      Html,
      Head,
      Body,
      children,
      siteData,
      renderMeta,
    }
  ) => (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/vendor/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/css/bootstrap-responsive.css" />
        <title>Casamento de Brelisa</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/presentes',
      component: 'src/containers/Presentes',
      // getData: () => ({ gifts }),
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
}
