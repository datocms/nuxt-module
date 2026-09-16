import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

// When Nitro builds for Vercel it writes the Build Output API bundle to
// `<rootDir>/.vercel/output`, i.e. inside `playground/`. Vercel only looks for
// that directory at the repository root (where `vercel.json` lives), so point
// it there. Every other preset keeps the default `playground/.output`.
const isVercel = process.env.VERCEL === '1' || process.env.NITRO_PRESET?.startsWith('vercel')

export default defineNuxtConfig({
  compatibilityDate: '2026-09-16',

  modules: [
    '../src/module'
  ],

  datocms: {
    token: 'faeb9172e232a75339242faafb9e56de8c8f13b735f7090964'
  },

  nitro: isVercel
    ? { output: { dir: fileURLToPath(new URL('../.vercel/output', import.meta.url)) } }
    : {}
})
