<template>
  <div>
    <h1>Last 3 posts from the blog</h1>
    <div v-if="pending">
      Loading...
    </div>
    <div v-else style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 1rem;">
      <div v-for="post in data.data.allBlogPosts">
        <h2>{{ post.title }}</h2>
        <DatocmsImage :data="post.coverImage.responsiveImage"/>
        <DatocmsStructuredText :data="post.excerpt" />
      </div>
    </div>
  </div>
</template>

<script setup>

import { useFetch, useRuntimeConfig } from '#app'

const config = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${config.datocms.datocmsReadOnlyToken}`
  },
  body: JSON.stringify({
    query: `
      query RecentBlogPosts {
        allBlogPosts(first: "3") {
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
  })
})

</script>
