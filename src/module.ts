import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtModule, addComponent, addImports, useLogger } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  token: string;
  environment: string;
  endpoint: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'datocms'
  },
  defaults: {
    token: process.env.NUXT_ENV_DATOCMS_API_TOKEN,
    environment: process.env.NUXT_ENV_DATOCMS_ENVIRONMENT,
    endpoint: 'https://graphql.datocms.com'
  },
  setup ({ token, environment, endpoint }, nuxt) {
    if (!token) {
      // Don't fail the build: the token can still be provided at runtime via
      // the `NUXT_PUBLIC_DATOCMS_TOKEN` environment variable.
      useLogger(name).warn('`datocms.token` is not set. Provide it in `nuxt.config` or via `NUXT_PUBLIC_DATOCMS_TOKEN`.')
    }

    nuxt.options.runtimeConfig.public.datocms = {
      token,
      environment,
      endpoint
    }

    addComponent({
      name: 'DatocmsImage', // name of the component to be used in vue templates
      export: 'Image', // (optional) if the component is a named (rather than default) export
      // filePath should be package name or resolved path
      // if the component is created locally, preferably in `runtime` dir
      filePath: 'vue-datocms' // resolve(runtimeDir, 'components', 'MyComponent.vue')
    })

    addComponent({
      name: 'DatocmsStructuredText', // name of the component to be used in vue templates
      export: 'StructuredText', // (optional) if the component is a named (rather than default) export
      // filePath should be package name or resolved path
      // if the component is created locally, preferably in `runtime` dir
      filePath: 'vue-datocms' // resolve(runtimeDir, 'components', 'MyComponent.vue')
    })

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)

    addImports([
      { name: 'useQuerySubscription', as: 'useQuerySubscription', from: resolve(runtimeDir, 'composables') },
      { name: 'useSiteSearch', as: 'useSiteSearch', from: resolve(runtimeDir, 'composables') },
      { name: 'useGraphqlQuery', as: 'useGraphqlQuery', from: resolve(runtimeDir, 'composables') },
      { name: 'toHead', as: 'toHead', from: resolve(runtimeDir, 'lib') }
    ])
  }
})
