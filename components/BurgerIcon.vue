<template>
    <div class="burger-menu-trigger">
        <button class="burger-menu-button" v-on:click="$emit('toggle-burger-menu')">
            <b-icon class="burger-menu-icon" pack="fas" icon="bars" />
        </button>
    </div>
</template>

<style>
.burger-menu-trigger {
    display: flex;
    justify-content: flex-end;
}

.burger-menu-button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem 0.5rem;
    padding: 0
}

.burger-menu-icon {
    font-size: 24px;
}

</style>