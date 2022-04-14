<template>
    <container class="header-wrapper">
        <SiteBrand site-title="Brent Nequin" />
        <SiteNav :links="links" />
        <BurgerMenu  :links="links" />
    </container>
</template>

<script>
export default {

    data() {
        return {
            links: [
                {
                    "name": "Home",
                    "to": "/"
                },
                {
                    "name": "About",
                    "to": "/about"
                },
                {
                    "name": "Blog",
                    "to": "/blog"
                },
                {
                    "name": "Projects",
                    "to": "/projects"
                }
            ],
        };
    },
    
}
</script>

<style>
.header-wrapper {
    display: flex;
    justify-content: space-between;
}

.header-wrapper a {
    color: inherit;
    text-decoration: none;
}

.header-wrapper a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 768px) {
    .burger-menu {display: block;}
    .site-nav.horizontal {display: none}
}

@media screen and (min-width: 768px) {
    .burger-menu {display: none}
    .site-nav.horizontal {display: flex}
}

</style>