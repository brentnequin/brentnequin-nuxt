<template>
    <div class="education-item">
        <div class="education-bullet">
            <b-icon class="education-bullet-icon" pack="fas" icon="graduation-cap" />
        </div>
        <div class="education-detail">
            <p class="education-degree">{{degree}} in {{field}}, {{year}}</p>
            <p class="education-university">{{university}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        degree: String,
        field: String,
        year: Number,
        university: String
    }
}
</script>

<style scoped>
.education-item > * {
    display: inline-block;
    vertical-align: top;
}

.education-bullet {
    padding-right: 0.25rem;
}

.education-detail {
    padding-bottom: 1rem;
}

.education-detail > * {
    margin: 0
}

.education-university {
    color: grey;
}
</style>
