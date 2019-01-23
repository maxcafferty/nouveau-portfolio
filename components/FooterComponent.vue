<template>

  <section class="footer-component">
    <footer>
      <div>
        <strong>Portfolio - Maxime Ploteau</strong></br> 
        <p>Fait avec Nuxt.js</p>
      </div>
    </footer>
  </section>

</template>

<style scoped>
  .footer-component {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: calc(15vh - 3rem);
  }
  strong {
    font-weight:bold;
  }
  p {
    font-size:0.8rem;
  }
</style>
