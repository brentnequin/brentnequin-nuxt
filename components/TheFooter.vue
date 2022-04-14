<template>
    <container class="footer-wrapper">
        <div class="footer-desc">
            <small>© Brent Nequin. <a href="/privacy">Privacy.</a></small>
        </div>
        <div class="social-icons">
            <a v-for="icon in icons" v-bind:key=icon.name class="social-icon" :href="icon.to">
                <b-icon
                    :pack="icon.pack"
                    :icon="icon.icon"
                />
            </a>
        </div>
    </container>
</template>

<script>
export default {

    data() {
        return {
            icons: [
                {"name": "email", "pack": "fas", "icon": "envelope", "to": "mainto:brentnequin@gmail.com"},
                {"name": "linkedin", "pack": "fab", "icon": "linkedin", "to": "https://www.linkedin.com/in/brentnequin"},
                {"name": "codepen", "pack": "fab", "icon": "codepen", "to": "https://codepen.io/bnequin"},
                {"name": "github", "pack": "fab", "icon": "github", "to": "https://github.com/brentnequin"}
            ]
        }
    }

}
</script>

<style>
.footer-wrapper > * {
    text-align: center;
    margin-top: 2rem;
}

.social-icon {
    display: inline-block;
    font-size: 32px;
    color: inherit;
}

.social-icon:hover {
    color: #267CB9;
}

.social-icon:not(:last-child) {
    padding-right: 1rem;
}
</style>