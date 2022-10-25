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
  datocms: {
    /* module options */
  }
}
```

## Options

### token

- Type: `String`
- Default: `robots.config`

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## License

[MIT License](./LICENSE)

Copyright (c) - DatoCMS


