<template>
  <div v-if="!fetchError">
    <SiteSearch />
    <h1>Last 3 posts from the {{ fetchData.blogPostMeta.count }} published on the blog</h1>
    <ClientOnly>
      <QuerySubscrition />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

import { useGraphqlQuery } from '#imports'

const { data: fetchData, pending: fetchPending, error: fetchError, refresh: fetchRefresh } = await useGraphqlQuery({
  query: `
    query {
      blogPostMeta: _allBlogPostsMeta {
        count
      }
    }
  `
})

</script>
