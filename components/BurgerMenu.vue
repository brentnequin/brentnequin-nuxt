<template>
    <div class="burger-menu">
        <BurgerIcon v-on:toggle-burger-menu="showBurgerMenu=!showBurgerMenu" />
        <SiteNav class="burger-menu-nav" v-if="showBurgerMenu" :links="links" vertical />
    </div>
</template>

<script>
import BurgerIcon from "./BurgerIcon.vue";
export default {
    props: {
        links: {
            type: Array,
            default: []
        }
    },

    data() {
        return {
            showBurgerMenu: false
        }
    },
    components: { BurgerIcon }
}
</script>

<style>
.burger-menu {
    border: 1px solid #e8e8e8;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    right: 2rem;
    top: 1rem;
}

.site-link {
    display: block;
    text-align: right;
    margin: 0 1rem;
    padding: 0;
}
</style>