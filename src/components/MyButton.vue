<template>
  <a :href="href" class="my-button" :target="target">
      <slot />
  </a>
</template>

<script>
export default {
  props: [ "href", "newpage" ],

  computed: {
    target() {
      return (this.newpage == undefined) ? "_self" : "_blank"
    }
  }
}
</script>

<style scoped>

  .my-button {
    display: inline-block;
    padding: var(--s2) var(--s4);
    background-color: var(--primary);
    
    color: var(--black);
    font-size: 1.4em;
    letter-spacing: 0.1em;
    font-weight: bolder;
    text-decoration: none;

    cursor: pointer;

    border-radius: var(--s2);

    border: none;
    appearance: none;
    outline: none;
  }

  .my-button:hover, .my-button:active {
    filter: brightness(0.9);
  }

</style>