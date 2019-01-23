<template>
  <section class="work-detail">
    <h2>Projet #{{ project.fields.id }} - {{project.fields.name}}</h2>
    <div class="columns">
      <div class="column is-one-third animated slideInLeft">
        <img :src="imgTab[counter]" :alt="altTab[counter]">
      </div>
      <div class="column is-offset-one-third is-one-third has-text-left-desktop">
        <button class="button is-primary is-outlined" v-on:click="previous" :disabled="counter==0"><</button>
        <button class="button is-primary is-outlined" v-on:click="next" :disabled="counter==2">></button></br></br>
        <p class="has-text-left-touch">{{project.fields.description}}</p></br>
        <div class="tags">
          <span class="tag" v-for="techno in project.fields.technos">{{techno}}</span>
        </div>
        <nuxt-link :to="{name: 'worklist'}">Retour</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
export default  {
  name: 'work-detail',
  head () {
    return {
      title: 'Maxime Ploteau - ' + this.project.fields.name,
      meta: [
        { hid: 'description', name: 'description', content: this.project.fields.description  }
      ]
    }
  },
  mounted() {
    this.firstImg = this.project.fields.image1.fields.file.url,
    this.secondImg = this.project.fields.image2.fields.file.url,
    this.thirdImg = this.project.fields.image3.fields.file.url,
    this.firstAlt = this.project.fields.image1.fields.file.title,
    this.secondAlt = this.project.fields.image2.fields.file.title,
    this.thirdAlt = this.project.fields.image3.fields.file.title,
    this.imgTab = [this.firstImg,this.secondImg,this.thirdImg],
    this.altTab = [this.firstAlt,this.secondAlt,this.thirdAlt]
  },
  data() {
    return {
      counter:0,
      imgTab : [],
      altTab : [],
      firstImg :'',
      secondImg : '',
      thirdImg : '',
      firstAlt :'',
      secondAlt : '',
      thirdAlt : '',
      disabled:false
    }
  },
  methods: {
    next : function() {
      if (this.counter < (this.imgTab.length-1)) {
        this.counter +=1;
      }else {
        this.counter = (this.imgTab.length-1);
      }
    },
    previous : function() {
      if (this.counter > 0) {
        this.counter -=1;
      }else {
        this.counter = 0;
      }
    }
  },
  asyncData({params}) {
    return client
    .getEntries({
      content_type: 'project',
      'fields.slug' : params.slug,
    })
    .then(entries => {
      return { project : entries.items[0] };
    })
    .catch(e => console.log(e));
  },
}
</script>

<style scoped>
  .work-detail {

  }
  .columns {
    margin-top:10px;
  }
  .active{
   display: none;
  }
  .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {
    background-color: unset;
    border-color:#7957D5;
    color:#7957D5;
  }
  .button.is-primary:focus:not(:active) {
    box-shadow: unset;
  }
</style>