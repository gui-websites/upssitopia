<template>
  <div class="member" :style="colorSet">
      <img :src="pfp" :alt="pfp" :class="{ resp: isResp }">
      <h3 class="name">{{ pName }}</h3>
      <span class="role">{{ info.role }}</span>
  </div>
</template>

<script>
export default {
    props: [ "info", "color", "revealed" ],

    computed: {
        pName() {
            return this.revealed ? this.info.nom : "???"
        },

        pfp() {
            return this.revealed ? require(`../data/people/${this.info.img}`) : require("../assets/img/logo.png")
        },

        isResp() {
            return (this.info.responsable != undefined)
        },

        colorSet() {
            return `--color: ${this.color}`
        }
    }
}
</script>

<style scoped>
    .member img {
        width: 250px;
    }

    .member .resp {
        border: 2px solid var(--color);
    }
</style>