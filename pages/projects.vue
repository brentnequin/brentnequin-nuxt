<template>
    <container>
        <section>
            <h1 v-if="title">{{title}}</h1>
            <div v-for="group in projectsGroups" v-bind:key="Object.keys(group)[0]">
                <h2 class="category-title">{{Object.keys(group)[0]}}</h2>
                  <a class="project-item" v-for="item in group[Object.keys(group)[0]]" v-bind:key="Object.keys(item)[0]" :href="item.link">
                      <div class="project-item-wrapper">
                          <div class="project-item-title">
                              <b-icon class="project-language-icon" v-for="(language, index) in item.languages" v-bind:key="index" pack="fab" :icon="language.fa_icon" />
                              <strong>{{item.title}}</strong>
                          </div>
                          <div class="project-item-description">
                              <p>{{item.description}}</p>
                          </div>
                      </div>
                  </a>
            </div>
        </section>
    </container>
</template>

<script>
import ProjectsQuery from "~/apollo/projects";
export default {

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const response = await client.query({query: ProjectsQuery});
    // console.log(response.data.projectCategories.data.map((category) => {return {[category.attributes.name]: "hi"}}))
    console.log(response.data.projectCategories.data.map(
        (category) => {
          return {
            [category.attributes.name]: response.data.project.data.attributes.projects.filter(
              ({project_category}) => project_category.data.attributes.name == category.attributes.name
            )
          }
        }
      ))
    return {
      title: response.data.project.data.attributes.title,
      description: response.data.project.data.attributes.description,
      projectsGroups: response.data.projectCategories.data.map(
        (category) => {
          return {
            [category.attributes.name]: response.data.project.data.attributes.projects.filter(
              ({project_category}) => project_category.data.attributes.name == category.attributes.name
            )
          }
        }
      ),
      categories: response.data.projectCategories.data.map(({attributes}) => attributes.name) // categories
    }
  }

}
</script>

<style>
.project-item {
  color: inherit;
  text-decoration: none;
}

.project-item:hover {
    text-decoration: underline;
}

.project-item-wrapper > * {
  display: inline-block;
  text-decoration: inherit;
}

.project-item-wrapper:hover {
  text-decoration: inherit;
}

.project-item-title {
  min-width: 20rem;
}
</style>