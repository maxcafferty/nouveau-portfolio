<template>
  <section>
  	<video v-if="error.statusCode === 404" autoplay muted>
  	  <source src="../assets/error.mp4" type="video/mp4">
	</video>
	<div class="msg has-text-left">
      <div v-if="error.statusCode === 404">
        <p>🕷 Cette page n'existe pas 🕸</p></br>
      </div>
      <span v-else>Une erreur s'est produite</span>
      <nuxt-link to="/">Retour</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'handleerror',
  props: ['error'],
  head(){
      return {
        title: 'Maxime Ploteau - Erreur',
        meta: [
          { hid: 'description', name: 'description', content: 'Une erreur est survenue' }
        ]
      }
    }
}
</script>

<style scoped>
video {
  position: fixed;
  right: 0;
  bottom:0;
  min-width:100%;
  min-height:100%;
  opacity: 0.3;
  z-index:0;
}
.msg {
	position:absolute;
	z-index:9999;
}
</style>