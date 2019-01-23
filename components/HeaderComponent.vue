<template>
	<section class="header-component">
    <header>
      <img src="../assets/logo.gif">
      <h1>Maxime Ploteau</h1>
      <nav class="navbar" role="navigation" aria-label="main navigation">
         
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
       
        <div class="navbar-menu">
        <ul>
          <li>
            <nuxt-link to="/worklist">
            Projets
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
            A propos
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
            Contact
            </nuxt-link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
  var $ = require("jquery");
  export default  {
    name: 'header-component',
    props: [],
    mounted() {
      $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        $(".navbar-menu").addClass("animated slideInDown");
        $(".navbar-menu ul").addClass("animated slideInDown 1s");
      });
      $(".navbar-menu").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
    },
    data() {
      return {
        //isActive:false
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
  .header-component {
    padding-bottom: 2em;
    height: calc(40vh - 3rem);
  }
  img {
    height:150px;
  }
  .navbar{
    background-color:unset;
  }
  .navbar-menu {
    justify-content: center;
    box-shadow:none;
    background-color:unset;
  }
  .navbar-burger {
   /* margin:auto;*/
    color:#42b983;
  }
  .navbar-burger:hover {
    background-color: unset;
    color:#7957d5;
  }
  ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
  @media screen and (max-width: 1087px) {
    .navbar {
      background-color:#ffffff;
      position: fixed;
      top:0;
      left: 0;
      width:100%;
    }
    .navbar-menu {
      padding-bottom: 2rem;
      border-bottom: 1px solid #7957d5;
    }
  }
</style>