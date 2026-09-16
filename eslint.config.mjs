import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false
  }
}).append({
  ignores: ['dist', '.output', '.vercel', '**/.nuxt', '**/.output']
}, {
  rules: {
    // The composables intentionally accept/return loosely typed GraphQL payloads.
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
