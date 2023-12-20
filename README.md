<!--datocms-autoinclude-header start-->
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)
<!--datocms-autoinclude-header end-->

# DatoCMS Nuxt Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

[npm-version-src]: https://img.shields.io/npm/v/@datocms/nuxt-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@datocms/nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@datocms/nuxt-module.svg
[npm-downloads-href]: https://npmjs.com/package/@datocms/nuxt-module

[license-src]: https://img.shields.io/npm/l/@datocms/nuxt-module.svg
[license-href]: https://npmjs.com/package/@datocms/nuxt-module

> A Nuxt.js module that helps you to work faster with [DatoCMS](https://www.datocms.com/) with Nuxt.

## Features

This module makes components and composables from [vue-datocms](https://github.com/datocms/vue-datocms) easily available in Nuxt.

This module takes care of authentication for you: once the module is installed and properly configured, you're free to use components and composables without worrying about the token. Refer to `vue-datocms` documentation for usage.

[Components](https://vuejs.org/guide/essentials/component-basics.html):

- [`<DatocmsImage />`](https://github.com/datocms/vue-datocms/tree/master/src/components/Image)
- [`<DatocmsStructuredText />`](https://github.com/datocms/vue-datocms/tree/master/src/components/StructuredText)

[Composables](https://vuejs.org/guide/reusability/composables.html):

- [`useQuerySubscription`](https://github.com/datocms/vue-datocms/tree/master/src/composables/useQuerySubscription)
- [`useSiteSearch`](https://github.com/datocms/vue-datocms/tree/master/src/composables/useSiteSearch)

## Setup

1. Add `@datocms/nuxt-module` dependency to your project

```bash
npm install @datocms/nuxt-module # or yarn add @datocms/nuxt-module
```

2. Add `@datocms/nuxt-module` to the `modules` section of `nuxt.config.js`

```js
export default {
  modules: [
    // Simple usage
    '@datocms/nuxt-module',

    // With options
    ['@datocms/nuxt-module', { /* module options */ }]
  ]
}
```

### Using top level options

```js
export default {
  modules: [
    '@datocms/nuxt-module'
  ],
  /* DatoCMS module options */
  datocms: {
    /* The token is mandatory: you find the token in the settings of your DatoCMS project */
    datocmsReadOnlyToken: 'YOUR TOKEN',
  }
}
```

## Options

### token

- Type: `String`
- Default: `process.env.NUXT_ENV_DATOCMS_API_TOKEN`

### environment

- Type: `String`
- Default: `process.env.NUXT_ENV_DATOCMS_ENVIRONMENT`

### endpoint

- Type: `String`
- Default: `https://graphql.datocms.com`

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## License

[MIT License](./LICENSE)

Copyright (c) - DatoCMS



<!--datocms-autoinclude-footer start-->
-----------------
# What is DatoCMS?
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agency partners, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Quick links:**

- ⚡️ Get started with a [free DatoCMS account](https://dashboard.datocms.com/signup)
- 🔖 Go through the [docs](https://www.datocms.com/docs)
- ⚙️ Get [support from us and the community](https://community.datocms.com/)
- 🆕 Stay up to date on new features and fixes on the [changelog](https://www.datocms.com/product-updates)

**Our featured repos:**
- [datocms/react-datocms](https://github.com/datocms/react-datocms): React helper components for images, Structured Text rendering, and more
- [datocms/js-rest-api-clients](https://github.com/datocms/js-rest-api-clients): Node and browser JavaScript clients for updating and administering your content. For frontend fetches, we recommend using our [GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api) instead.
- [datocms/cli](https://github.com/datocms/cli): Command-line interface that includes our [Contentful importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [Wordpress importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress)
- [datocms/plugins](https://github.com/datocms/plugins): Example plugins we've made that extend the editor/admin dashboard
- [datocms/gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms): Our Gatsby source plugin to pull data from DatoCMS
- Frontend examples in different frameworks: [Next.js](https://github.com/datocms/nextjs-demo), [Vue](https://github.com/datocms/vue-datocms) and [Nuxt](https://github.com/datocms/nuxtjs-demo), [Svelte](https://github.com/datocms/datocms-svelte) and [SvelteKit](https://github.com/datocms/sveltekit-demo), [Astro](https://github.com/datocms/datocms-astro-blog-demo), [Remix](https://github.com/datocms/remix-example). See [all our starter templates](https://www.datocms.com/marketplace/starters).

Or see [all our public repos](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)
<!--datocms-autoinclude-footer end-->
