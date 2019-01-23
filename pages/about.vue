<template>

  <section class="about">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter has-text-left">
          <h2 class="has-text-weight-light"> Actuellement à la recherche d'un emploi dans l'<strong class="has-text-link">intégration / développement front-end</strong> 🙇‍♂️ </h2>
          </br>
          <p>
            <strong @mouseover="mouseOver" @mouseleave="mouseLeave" class="has-text-link"> Maxime Ploteau</strong>, tout juste diplômé du Master PSM (Produits et Services Multimédia) 👨🏻‍🎓
          </p></br>
          <p> 
            D'une nature polyvalente et autodidacte, je pense m'être constitué une base de connaissances plus ou moins importante au cours du temps, en partie grâce à ma soif d'apprendre 🍺
          </p></br>
          <p> 
            Fort de plusieurs expériences professionnelles dans des domaines variés et complémentaires, je suis un vrai couteau suisse 🛠 
          </p></br>
          <p>Mon <nuxt-link to="/myresume">CV</nuxt-link></p></br>
          <div class="tags">
            <span class="tag">Angular 5/6</span>
            <span class="tag">Bootstrap 3/4</span>
            <span class="tag">Bulma</span>
            <span class="tag">CSS 3</span>
            <span class="tag">HTML 5</span>
            <span class="tag">Javascript ES5/ES6</span>
            <span class="tag">SASS</span>
            <span class="tag">Vue.js 2</span>
          </div>
        </div>
      </div>
      <div v-show="active">
        <img src="../assets/gon.jpg">
      </div>
    </div>
  </section>

</template>

<script>
  export default  {
    head () {
      return {
        title: 'Maxime Ploteau - A propos',
        meta: [
          { hid: 'description', name: 'description', content: 'Maxime Ploteau, intégrateur et développeur front-end.' }
        ]
      }
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      mouseOver: function(){
        this.active = !this.active;   
      },
      mouseLeave: function(){
        this.active = false;   
      },
    },
    computed: {

    }
}
</script>

<style scoped>
  .about {

  }
  h2 {
    font-size:1rem;
  }
  strong {
    font-weight: normal;
    cursor:default;
    /*color:#7957d5;*/
  }
  img {
   position: absolute;
   margin-top: 0px;
   left: 0px;
  }
</style>
