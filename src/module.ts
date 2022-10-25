import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit'
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
      throw new Error(`[${name}]: token must be defined`)
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
      { name: 'useGraphqlQuery', as: 'useGraphqlQuery', from: resolve(runtimeDir, 'composables') }
    ])
  }
})
