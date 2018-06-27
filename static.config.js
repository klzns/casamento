import React from 'react'

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
      <Body>
        {children}
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,fetch" />
        <script src="/vendor/js/formdata-polyfill.min.js" />
      </Body>
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
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
}
