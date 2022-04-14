<template>
  <container>
    <section>
      <h1>{{page.title}}</h1>
      <div v-html="$md.render(page.body[0].text)" />
    </section>
    <section>
      <EducationList :list="page.education_list" />
    </section>
  </container>
</template>

<script>
import AboutQuery from "~/apollo/about";
export default {
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient;
        const response = await client.query({ query: AboutQuery });
        console.log(response.data.about.data);
        return {
            page: response.data.about.data.attributes
        };
    },
    components: { EducationList }
}
</script>