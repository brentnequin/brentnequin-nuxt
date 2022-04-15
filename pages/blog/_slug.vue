<template>
    <container class="post">
        <section>
            <h1 v-if="title">{{title}}</h1>
            <small>{{date_created}}</small>
            <p>{{excerpt}}</p>
            <!-- <div v-for="(item, index) in body" v-bind:key="index"> -->
                <div v-html="$md.render(body)"/>
                <!-- <div v-else-if="item.__typename == 'ComponentArticleCodeBlock'" v-html="$md.render(item.text)"></div>
                
            </div> -->
        </section>
    </container>
</template>

<script>
import PostQuery from "~/apollo/post";
export default {

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const response = await client.query({query: PostQuery, variables: {slug: context.route.params.slug}});
    return {
      ...response.data.posts.data[0].attributes
    }
  }

}
</script>