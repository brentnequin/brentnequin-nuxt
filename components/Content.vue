<template>
  <container>
    <section>
      <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </section>
  </container>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: {}
    }
  }
}
</script>