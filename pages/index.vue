<template>
  <container>
    <section>
      <h1 v-if="title">{{title}}</h1>
      <div v-if="text" v-html="$md.render(text)" />
    </section>
  </container>
</template>

<script>
import HomeQuery from "~/apollo/home";
export default {

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const response = await client.query({query: HomeQuery});
    return {
      ...response.data.home.data.attributes
    }
  }

}
</script>