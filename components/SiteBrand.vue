<template>
    <div class="brand">
        <a class="site-title" href="/">
            {{ siteTitle }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        siteTitle: String
    }
}
</script>

<style>
.brand {
    margin: 1rem 0;
}

.site-title {
    font-size: 26px;
}
</style>