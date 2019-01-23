<template>
  <div class="work-list container">
    <div class="columns is-multiline">
      <div class="column is-half" v-for="(project, index) in projects" :key="index">
        <nuxt-link :to="{ name: 'workdetail-slug', params: {slug: project.fields.slug }}">
          <img :src="project.fields.image1.fields.file.url">
          <p>{{project.fields.name}}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
  export default  {
    name: 'work-list',
    head () {
      return {
        title: 'Maxime Ploteau - Projets',
        meta: [
          { hid: 'description', name: 'description', content: 'Quelques-uns de mes projets.' }
        ]
      }
    },
    asyncData() {
    return client
      .getEntries({
        content_type: 'project',
        order: 'sys.createdAt'
      })
      .then(entries => {
        return { projects : entries.items };
      })
      .catch(e => console.log(e));
    },
}
</script>

<style scoped>

 ul {
    width: 100%; 
  }

 section {
    display: flex;
    flex-direction: column;
  }

  img {
    width:auto;
    height:420px;
  }

</style>