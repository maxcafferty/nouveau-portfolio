<template>

  <section class="contact">
    <address>
      <p>ploteau&period;maxime&commat;gmail&period;com</p>
    </address></br>
    <span>Me retrouver sur : </span>
	<a href="https://github.com/maxcafferty" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/maxime-ploteau-b44103139/" target="_blank">Linkedin</a>
  </section>

</template>

<script>
  export default {
  	head () {
      return {
        title: 'Maxime Ploteau - Contact',
        meta: [
          { hid: 'description', name: 'description', content: 'Pour me contacter.' }
        ]
      }
    },
    computed: {
    }
  }
</script>

<style>

address {
  font-style: normal;
}

</style>