<template>
  <Content :page="page" />
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('privacy').fetch()

    return {
      page
    }
  }
}
</script>