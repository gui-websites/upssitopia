<template>
  <div class="member" :style="colorSet" :class="{ resp: isResp }">
      <div class="image"><img :src="pfp" :alt="pfp"></div>
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
    .member {
        border-radius: var(--s2);
        overflow: hidden;

        padding-bottom: var(--s2);
        background: var(--white);

        --img-size: 200px;
    }

    .member.resp {
        border: calc(var(--s0) / 2) solid var(--color);
    }

    .member img {
        width: var(--img-size);
        height: var(--img-size);
    }

    .member .image {
        position: relative;
        height: var(--img-size);
    }

    .member .image::after {
        content: "";
        box-shadow: inset -2px 0 var(--s2) var(--secondary);
        
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0; left: 0;
    }

</style>