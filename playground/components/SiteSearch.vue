<script setup lang="ts">

import { useSiteSearch } from '#imports'

const { state, error, data } = useSiteSearch({
  buildTriggerId: '7497',
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it you only have one locale, or you want to find results in every locale
  initialState: { locale: 'en' },
  // optional: defaults to 8 search results per page
  resultsPerPage: 10
})

</script>

<template>
  <div class="container mx-auto">
    <div class="py-8">
      <input v-model="state.query" class="w-full p-4 border border-solid border-gray-300 rounded" type="text" placeholder="Search... ">
    </div>
    <hr>
    <div v-if="data" class="py-8">
      <div v-for="result in data.pageResults" :key="result.id" class="py-4">
        <p class="py-1">
          <strong v-if="result.titleHighlights.length > 0">
            <span v-for="(highlight, index) in result.titleHighlights" :key="index">
              <span v-for="piece in highlight" :key="piece.text">
                <mark v-if="piece.isMatch">{{ piece.text }}</mark>
                <span v-else :key="piece.text">{{ piece.text }}</span>
              </span>
            </span>
          </strong>
          <strong v-else>{{ result.title }}</strong>
        </p>
        <p v-for="(highlight, index) in result.bodyHighlights" :key="index" class="py-1">
          <span v-for="piece in highlight" :key="piece.text">
            <mark v-if="piece.isMatch">{{ piece.text }}</mark>
            <span v-else>
              {{ piece.text }}
            </span>
          </span>
        </p>
        <div>
          <pre><code class="block whitespace-pre overflow-x-scroll">{{ JSON.stringify(result.raw, null, 2) }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
