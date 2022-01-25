<template>
  <div id="about" class="section"><div>
      <h2>Qui sommes-nous ?</h2>
      <div class="content">
          <div class="flex-between sbs">
            <VueShowdown :markdown="about_blurb" flavor="github" class="about-blurb" />
            <img src="@/assets/img/background.jpeg" alt="">
          </div>
          <MyButton href="" id="cta-about">En savoir plus</MyButton>
      </div>
  </div></div>
</template>

<script>
import about from "../data/about.md"
import { VueShowdown } from 'vue-showdown'
import MyButton from '../components/MyButton.vue'

export default {
  components: { VueShowdown, MyButton },

  data: () => ({
    about_blurb: about
  })
}
</script>

<style scoped>

  #about {
    background-color: var(--white);
  }

  #about h2 {
    margin-bottom: calc(2 * var(--s4));
  }

  #about .content .sbs {
    align-items: flex-start;
  }

  #about .content .sbs > * {
    width: 45%;
  }

  #about .content .about-blurb {
    text-align: justify;
  }

  #about .content .about-blurb :first-child {
    margin-top: 0;
  }

  #about .content img {
    border-radius: var(--s2);
  }

  #about #cta-about {
    font-size: 1em;
    margin-top: var(--s2);
  }

</style>