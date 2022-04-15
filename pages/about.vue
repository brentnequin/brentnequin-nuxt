<template>
  <container>
    <section>
      <h1 v-if="title">{{ title }}</h1>
      <div v-if="body" v-html="$md.render(body[0].text)" />
    </section>
    <section>
      <EducationList v-if="education_list" :list="education_list" />
    </section>
  </container>
</template>

<script>
import AboutQuery from "~/apollo/about";
export default {
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient;
        const response = await client.query({ query: AboutQuery });
        return {
            ...response.data.about.data.attributes
        };
    },
}
</script>