<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

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

---

# What is DatoCMS?

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60" alt="DatoCMS - The Headless CMS for the Modern Web"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agencies, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Why DatoCMS?**

- **API-First Architecture**: Built for both REST and GraphQL, enabling flexible content delivery
- **Just Enough Features**: We believe in keeping things simple, and giving you [the right feature-set tools](https://www.datocms.com/features) to get the job done
- **Developer Experience**: First-class TypeScript support with powerful developer tools

**Getting Started:**

- ⚡️ [Create Free Account](https://dashboard.datocms.com/signup) - Get started with DatoCMS in minutes
- 🔖 [Documentation](https://www.datocms.com/docs) - Comprehensive guides and API references
- ⚙️ [Community Support](https://community.datocms.com/) - Get help from our team and community
- 🆕 [Changelog](https://www.datocms.com/product-updates) - Latest features and improvements

**Official Libraries:**

- [**Content Delivery Client**](https://github.com/datocms/cda-client) - TypeScript GraphQL client for content fetching
- [**REST API Clients**](https://github.com/datocms/js-rest-api-clients) - Node.js/Browser clients for content management
- [**CLI Tools**](https://github.com/datocms/cli) - Command-line utilities for schema migrations (includes [Contentful](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [WordPress](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress) importers)

**Official Framework Integrations**

Helpers to manage SEO, images, video and Structured Text coming from your DatoCMS projects:

- [**React Components**](https://github.com/datocms/react-datocms)
- [**Vue Components**](https://github.com/datocms/vue-datocms)
- [**Svelte Components**](https://github.com/datocms/datocms-svelte)
- [**Astro Components**](https://github.com/datocms/astro-datocms)

**Additional Resources:**

- [**Plugin Examples**](https://github.com/datocms/plugins) - Example plugins we've made that extend the editor/admin dashboard
- [**Starter Projects**](https://www.datocms.com/marketplace/starters) - Example website implementations for popular frameworks
- [**All Public Repositories**](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)

<!--datocms-autoinclude-footer end-->
