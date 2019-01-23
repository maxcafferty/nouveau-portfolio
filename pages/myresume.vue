<template>
  <div class="columns is-multiline">
    <div class="column is-full has-text-left">
      <h1>Maxime Ploteau</h1>
	  <h2>Développeur web Front-End</h2>
	  <p>24 ans</p>
	  <p>Permis B</p>
	</div>
	<div class="column is-half has-text-left animated fadeInLeft">
	  <h4 class="has-text-primary">Formation</h4></br>
	  <h3 class="has-text-primary"><span class="date">2016-2018 - </span> Master Produits et Services Multimédia, parcours Environnements Numériques et Interactifs <span class="mention">(Mention Bien)</span> </h3>
	  <p class="place">Université de Franche-Comté, Montbéliard</p></br>
	  <h3 class="has-text-primary"><span class="date">2015-2016 - </span> Licence 3 Sciences du Langage, de l'Information et de la Communication</h3>
	  <p class="place">Université de Franche-Comté, Montbéliard</p></br>
	  <h3 class="has-text-primary"><span class="date">2013-2015 - </span> DUT Information-Communication,option publicité</h3>
	  <p class="place">IUT du Havre</p></br>
	  <h3 class="has-text-primary"><span class="date">2012 - </span> Bac S</h3>
	  <p class="place">Lycée Alain, Alençon</p>
	</div>
	<div class="column is-half has-text-left animated fadeInRight delay-1s">
	  <h4 class="has-text-primary">Expériences</h4></br>
	  <h3 class="has-text-primary"><span class="date">Février-Juillet 2018 - </span> Développeur Front-End </h3>
	  <p class="place">wenabi, Editeur de logiciels, Paris - Secteur d’activité : Amélioration de la démarche RSE</p></br>
	  <p>-Intégration de la landing page</p>
	  <p>-Refonte et intégration des modules de messagerie / interfaces personnalisées</p> 
	  <p>-Migration de la plateforme depuis AngularJS vers Angular 5</p></br>
	  <p>Technos : <span class="has-text-primary"> HTML5, CSS3, Bootstrap, AngularJS, Angular 5</span></p>
	  <p>Env. et utilitaires : <span class="has-text-primary"> Windows, Spring Tool Suite, Gulp, Bower, Webpack, Github, Slack</span></p>
	</div>
	<div class="column is-offset-half is-half has-text-left animated fadeInRight delay-2s">
	  <h4 class="has-text-primary">Compétences</h4></br>
	  <div class="progress-container"><progress class="progress progress-one is-primary" value="0" max="100"></progress><p>HTML</p></div>
	  <div class="progress-container"><progress class="progress progress-two is-primary" value="0" max="100"></progress><p>CSS, Sass, Bootstrap</p></div>
	  <div class="progress-container"><progress class="progress progress-three is-primary" value="0" max="100"></progress><p>JS ES5/ES6, JQuery</p></div>
	  <div class="progress-container"><progress class="progress progress-four is-primary" value="0" max="100"></progress><p>Angular 2+</p></div>
	  <div class="progress-container"><progress class="progress progress-five is-primary" value="0" max="100"></progress><p>Vue.js, Nuxt.js</p></div>
	</div>
	<div class="column is-full has-text-center">
	  <nuxt-link to="/about">Retour</nuxt-link>
	</div>
  </div>
</template>

<script>
  var $ = require("jquery");
  export default {
    layout: 'resume',
    mounted() {
      setTimeout(function() {
      $('.progress-one').val(80);}, 2500);
      setTimeout(function() {
      $('.progress-two').val(70);}, 3000);
      setTimeout(function() {
      $('.progress-three').val(60);}, 3500);
      setTimeout(function() {
      $('.progress-four').val(65);}, 4000);
      setTimeout(function() {
      $('.progress-five').val(40);}, 4500);
      
    },
    head(){
      return {
        title: 'Maxime Ploteau - Mon CV',
        meta: [
          { hid: 'description', name: 'description', content: 'Mes formations, expériences et compétences' }
        ]
      }
    }
  }
</script>

<style scoped>
  h4 {
   font-size:1.2rem;
  }
  .mention {
  	font-size:0.8rem;
  	font-style: italic;
  }
  .date {
  	font-size:0.7rem;
  	color: #2c3e50;
  }
  .place {
  	font-size:0.9rem;
  }
  .progress-container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap-reverse;
  }
  .progress {
  	width:360px;
  	margin:0;
    border-radius: 0px;
  }
  .progress::-webkit-progress-value {
    transition: all 0.5s ease;
  }
 /*progress[value] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  width: 360px;
}
progress::-webkit-progress-bar {
  background-color: rgba(0,0,0,0.1);
}
progress::-webkit-progress-value {
  background-color: rgb(73,179,129);
}
progress::-webkit-progress-value {
    transition: all 0.5s ease;
}
progress::-moz-progress-bar {
  background-color: rgba(0,0,0,0.1);
}
progress::-moz-progress-bar {
    transition: all 0.5s ease;
}*/
</style>