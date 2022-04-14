<template>
  <container>
    <section>
      <h1>{{page.title}}</h1>
      <div v-html="$md.render(page.text)" />
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
      page: response.data.home.data.attributes
    }
  }

}
</script>