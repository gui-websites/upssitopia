<template>
  <div>
    <Header />
    <About />
    <Members />
  </div>
</template>

<script>
import About from '../sections/About.vue'
import Header from '../sections/Header.vue'
import Members from '../sections/Members.vue'

export default {
  components: { Header, About, Members },
  name: 'Home'
}
</script>

<style>

</style>