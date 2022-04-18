<template>
  <container>
    <a class="post" v-for="(post, index) in posts" v-bind:key="index" :href="'/blog/' + post.slug">
      <div class="post-container" :id="post.title">
        <h2>{{post.title}}</h2>
        <small class="post-date-created">{{new Date(post.date_created).toLocaleDateString('en-us', dateOptions)}}</small>
        <p>{{post.excerpt}}</p>
      </div>
    </a>
  </container>
</template>

<script>
import BlogQuery from "~/apollo/blog";
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
    const response = await client.query({query: BlogQuery});
    return {
      posts: response.data.posts.data.map(({attributes}) => attributes)
    }
  }

}
</script>

<style>
.post {
    color: inherit;
    text-decoration: none;
}

.post:hover {
    text-decoration: underline;
}
</style>