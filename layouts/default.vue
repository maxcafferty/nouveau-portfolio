<template>
  <div class="section">
    <div class="container is-fluid">
  	  <HeaderComponent/>
  	  <div class="main-content">
        <nuxt/>
  	  </div>
  	  <FooterComponent/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
export default {
	components: {
		HeaderComponent,
		FooterComponent
	}
}
</script>

<style>

html {
  /*font-family: 'Sylfaen',serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, p, span, a, strong {
  font-weight: normal;
  font-family: 'Sylfaen',serif;
}

h1 {
  font-size:2rem;
}

h2 {
  font-size:1.2rem;
}
a {
 text-decoration: none;
 color: #42b983;
 transition:color 0.8s;
}
a:hover, a.nuxt-link-active {
 color:#7957d5;
}
.main-content {
 min-height: 45vh;
}
</style>
