<template>
  <div>
    <h1>Last {{ fetchData.blogPosts.length }} posts from the blog</h1>
    <ClientOnly>
      <QuerySubscrition />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

import { useRuntimeConfig, useFetch } from '#app'

import { useSiteSearch } from '#imports'

const { state: siteSearchState, error: siteSearchError, data: siteSearchData } = useSiteSearch({
  buildTriggerId: '7497',
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it you only have one locale, or you want to find results in every locale
  initialState: { locale: 'en' },
  // optional: defaults to 8 search results per page
  resultsPerPage: 10
})

const runtimeConfig = useRuntimeConfig()

const { data: fetchData, pending: fetchPending, error: fetchError, refresh: fetchRefresh } = await useFetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${runtimeConfig.public.datocms.datocmsReadOnlyToken}`
  },
  body: JSON.stringify({
    query: `
      query RecentBlogPosts {
        blogPosts: allBlogPosts(first: "3") {
          title
          excerpt {
            value
          }
          coverImage {
            responsiveImage {
              alt
              aspectRatio
              base64
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
      }
    `
  }),
  transform: ({ data }) => data
})

</script>
