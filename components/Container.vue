<template>
    <div class="container" >
        <slot></slot>
    </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
    .container {
    margin: 0 2rem
}
}

@media screen and (min-width: 768px) and (max-width: 992px) {
    .container {
        margin: 0 auto;
        width: 720px;
    }
}
  
@media screen and (min-width: 992px) {
    .container {
        margin: 0 auto;
        width: 960px;
    }
}
</style>