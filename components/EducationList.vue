<template>
    <div class="education-list">
        <EducationItem
            v-for="(item, index) in list"
            v-bind:key="index"
            :degree="item.degree"
            :field="item.field"
            :year="item.year"
            :university="item.university"
        />
    </div>
</template>

<script>
import EducationItem from "./EducationItem.vue";
export default {
    props: {
        list: Array
    }
}
</script>

<style>
.education-list {
    padding-left: 2rem;
}

</style>