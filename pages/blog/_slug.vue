<template>
  <container class="post">
    <section>
      <h1 class="post-title">{{post.title}}</h1>
      <small class="post-date-created">{{new Date(post.date_created).toLocaleDateString('en-us', dateOptions)}}</small>
      <p class="post-excerpt">{{post.excerpt}}</p>
      <div class="post-body" v-html="$md.render(post.body)"/>
      <small class="post-categories">{{"tags: " + post.categories.map(({name}) => name).join(' - ')}}</small>
      <div v-html="$md.render('If you have any feedback on this post or see any errors, please let me know by sending me an [email](mailto:brentnequin@gmail.com).')" />
    </section>
  </container>
</template>

<script>
import PostQuery from "~/apollo/post";
export default {

  data() {
    return {
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  },

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const response = await client.query({query: PostQuery, variables: {slug: context.route.params.slug}});
    return {
      post: response.data.posts.data[0].attributes
    }
  }

}
</script>

<style scoped>
.post-body img {
  width: 100px
}
</style>