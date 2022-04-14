<template>
    <nav 
        class="site-nav" 
        v-bind:class="{vertical: vertical, horizontal: !vertical}"
    >
        <a 
            class="site-link" 
            v-bind:class="{vertical: vertical, horizontal: !vertical}" 
            v-for="(link, index) in links" 
            v-bind:key="index" 
            :href="link.to">
            {{ link.name }}
        </a>
    </nav>
</template>

<script>
export default {
    props: {
        links: Array,
        vertical: Boolean,
    },
}
</script>

<style scoped>
.site-nav.horizontal {
    align-items: center;
}

.site-nav.vertical {
    display: block;
    margin: 0.5rem 0;
}

.site-link.horizontal {
    display: inline-block; 
}

.site-link.vertical {
    display: block;
    margin: 0rem 0.5rem 0.5rem 2rem; 
}
</style>