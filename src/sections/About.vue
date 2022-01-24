<template>
  <div id="about">
      <h2>Qui sommes-nous ?</h2>
      <div class="content">
          <VueShowdown :markdown="about_blurb" flavor="github" />
          <img src="@/assets/img/background.jpeg" alt="">
      </div>
  </div>
</template>

<script>
import about from "../data/about.md"
import { VueShowdown } from 'vue-showdown'

export default {
  components: { VueShowdown },

  data: () => ({
    about_blurb: about
  })
}
</script>

<style>

</style>