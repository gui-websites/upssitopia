<template>
  <div class="member">
      <img :src="pfp" :alt="pfp" :class="{ resp: isResp }">
      <h3 class="name">{{ info.nom }}</h3>
      <span class="role">{{ info.role }}</span>
  </div>
</template>

<script>
export default {
    props: [ "info" ],

    computed: {
        pfp() {
            return require(`../data/people/${this.info.img}`)
        },

        isResp() {
            return (this.info.responsable != undefined)
        }
    }
}
</script>

<style scoped>
    .member img {
        width: 250px;
    }

    .member .resp {
        border: 2px solid #000;
    }
</style>