import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  datocmsReadOnlyToken: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'datocms'
  },
  defaults: {
    datocmsReadOnlyToken: undefined
  },
  setup ({ datocmsReadOnlyToken }, nuxt) {
    if (!datocmsReadOnlyToken) {
      throw new Error(`[${name}]: datocmsReadOnlyToken must be defined`)
    }

    nuxt.options.runtimeConfig.public.datocms = {
      datocmsReadOnlyToken
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
      { name: 'toHead', as: 'toHead', from: resolve(runtimeDir, 'lib') }
    ])
  }
})
