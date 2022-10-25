import { defineNuxtConfig } from 'nuxt/config'

import NuxtModule from '../'

export default defineNuxtConfig({
  modules: [
    NuxtModule
  ],
  datocms: {
    token: 'faeb9172e232a75339242faafb9e56de8c8f13b735f7090964'
  }
})
