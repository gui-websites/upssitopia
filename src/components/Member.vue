<template>
  <div class="member" :class="{ resp: info.resp }">
      <div class="image"><img :src="pfp" :alt="pfp"></div>
      <h3 class="name">{{ pName }}</h3>
      <span class="role">{{ info.role }}</span>
  </div>
</template>

<script>
export default {
    props: [ "info" ],

    computed: {
        pName() {
            console.log(this.info)
            return this.info.revealed ? this.info.name : "???"
        },

        pfp() {
            let pfp = require("../assets/img/logo.png");
            
            if(this.info.revealed) {
                try {
                    pfp = require(`../data/people/${this.info.name}.png`);
                } catch(err) {
                    console.log("hello")
                }
            }

            return pfp;
        },
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
        border: calc(var(--s0) / 2) solid var(--primary);
    }

    .member img {
        width: var(--img-size);
        height: var(--img-size);
    }

    .member .image {
        position: relative;
        height: var(--img-size);
        background: var(--primary);
    }

    .member .image::after {
        content: "";
        box-shadow: inset 0 0 var(--s3) rgba(0, 0, 0, 0.5);
        
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0; left: 0;
    }

</style>