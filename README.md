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

[DatoCMS](https://www.datocms.com/) is Headless CMS for the modern web. Trusted by 25,000+ businesses, agencies, and individuals, it gives your team one place to manage content and ship it to any website, app, or device via API.

**New here?** Start with [Create free account](https://dashboard.datocms.com/signup) and the [Documentation](https://www.datocms.com/docs). Stuck? Ask the [Community](https://community.datocms.com/). Curious what's new? [Product Updates](https://www.datocms.com/product-updates).

**Building with AI:** [Agent Skills](https://www.datocms.com/docs/agent-skills) turn coding assistants (Claude Code, Cursor) into expert DatoCMS developers, with full read/write via the auto-installed CLI. No local terminal? Use the [MCP Server](https://www.datocms.com/docs/mcp-server) instead.

**Talking to DatoCMS from code:**
- [Content Delivery API](https://www.datocms.com/docs/content-delivery-api) (CDA) — the fast, read-only GraphQL API your website/app uses to **fetch** published content.
- [Content Management API](https://www.datocms.com/docs/content-management-api) (CMA) — the REST API for **creating and updating** content, models, and project settings (think scripts, migrations, integrations).
- [CLI](https://www.datocms.com/docs/scripting-migrations/installing-the-cli) — terminal tool for schema migrations and importing from Contentful/WordPress.

**Framework guides:** end-to-end recipes for fetching content, rendering Structured Text, optimizing images/video, handling SEO, and setting up live preview with visual editing in [Next.js](https://www.datocms.com/docs/next-js), [Nuxt](https://www.datocms.com/docs/nuxt), [Svelte](https://www.datocms.com/docs/svelte), and [Astro](https://www.datocms.com/docs/astro).

**Want a head start?** Browse our [starter projects](https://www.datocms.com/marketplace/starters) — ready-to-deploy example sites for popular frameworks.


<!--datocms-autoinclude-footer end-->
