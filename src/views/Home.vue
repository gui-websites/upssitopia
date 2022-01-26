<template>
  <div id="home">
    <Header />
    <About />
    <Members />
    <Footer />
  </div>
</template>

<script>
import About from '../sections/About.vue'
import Footer from '../sections/Footer.vue'
import Header from '../sections/Header.vue'
import Members from '../sections/Members.vue'


export default {
  components: { Header, About, Members, Footer },
  name: 'Home'
}
</script>

<style>
  html {
    background: url('../assets/img/space.png') center center repeat-y fixed;
    background-size: cover;
  }

  #home {
    height: 100%;
  }
</style>