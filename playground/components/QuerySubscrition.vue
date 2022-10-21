<script setup lang="ts">

import { useQuerySubscription } from '#imports'

const RESPONSIVE_IMAGE_FRAGMENT = `
  aspectRatio
  base64
  height
  sizes
  src
  srcSet
  width
  alt
  title
`

const META_TAGS_FRAGMENT = `
  attributes
  content
  tag
`

const query = `
  query AppQuery($first: IntType) {
    page: blog {
      seo: _seoMetaTags {
        ${META_TAGS_FRAGMENT}
      }
    }

    site: _site {
      favicon: faviconMetaTags {
        ${META_TAGS_FRAGMENT}
      }
    }

    blogPosts: allBlogPosts(first: $first, orderBy: _firstPublishedAt_DESC) {
      id
      title
      slug
      excerpt { value }
      coverImage {
        responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 750 }) {
          ${RESPONSIVE_IMAGE_FRAGMENT}
        }
      }
      author {
        name
        avatar {
          responsiveImage(imgixParams: { fit: crop, ar: "1:1", w: 40 }) {
            ${RESPONSIVE_IMAGE_FRAGMENT}
          }
        }
      }
    }
  }
`

const { status: querySubscriptionStatus, error: querySubscriptionError, data: querySubscriptionData } = useQuerySubscription({
  enabled: true,
  query,
  variables: { first: 3 }
})

</script>

<template>
  <div v-if="querySubscriptionData === null">
    Loading...
  </div>
  <div v-else style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 1rem;">
    <div v-for="post in querySubscriptionData.blogPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <DatocmsImage :data="post.coverImage.responsiveImage" />
      <DatocmsStructuredText :data="post.excerpt" />
    </div>
  </div>
</template>
