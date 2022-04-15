<template>
    <container class="posts">
        <a v-for="(post, index) in posts" v-bind:key="index" :href="'blog/' + post.slug">
            <div class="post-container" :id="post.title">
                <h2>{{post.title}}</h2>
                <small>{{post.date_created}}</small>
                <p>{{post.excerpt}}</p>
            </div>
        </a>
    </container>
</template>

<script>
import BlogQuery from "~/apollo/blog";
export default {

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const response = await client.query({query: BlogQuery});
    console.log(response.data.posts.data)
    return {
      posts: response.data.posts.data.map(({attributes}) => attributes)
    }
  }

}
</script>