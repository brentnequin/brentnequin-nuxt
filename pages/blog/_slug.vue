<template>
    <container class="post">
        <section>
            <h1 v-if="title" class="post-title">{{title}}</h1>
            <small v-if="date_created" class="post-date-created">{{new Date(date_created).toLocaleDateString('en-us', dateOptions)}}</small>
            <p v-if="excerpt" class="post-excerpt">{{excerpt}}</p>
            <div v-if="body" class="post-body" v-html="$md.render(body)"/>
            <small v-if="categories" class="post-categories">{{"tags: " + categories.map(({name}) => name).join(' - ')}}</small>
            <div v-if="body" v-html="$md.render('If you have any feedback on this post or see any errors, please let me know by sending me an [email](mailto:brentnequin@gmail.com).')" />
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
      ...response.data.posts.data[0].attributes
    }
  }

}
</script>

<style scoped>
.post-body img {
  width: 100px
}
</style>