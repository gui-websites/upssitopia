<template>
  <div class="member" :class="{ resp: info.resp }">
      <div class="image"><img :src="pfp" :alt="pfp"></div>
      <div class="details">
        <h3 class="name">{{ pName }}</h3>
        <span class="role">{{ info.role }}</span>
      </div>
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

        background: var(--white);
        width: var(--img-size);

        --img-size: 200px;
        
    }

    .member.resp {
        border: calc(var(--s0) / 2) solid var(--primary);
        /*border-color: var(--primary);*/
        margin: calc(var(--s0) / -2);
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

    .member .details {
        padding: var(--s2);
    }

    .member .details h3 {
        margin: 0 0 var(--s0);
        font-size: 0.9em;
    }

    .member .details .role {
        font-size: 0.9em;
    }

    @media only screen and (max-width: 480px) {
        .member {
            --img-size: 140px;
        }

        .member .details {
            padding: var(--s1) var(--s0);
        }

        .member .details h3 {
            font-size: 0.7em;
            margin: 0 0 calc(var(--s0) / 2);
        }

        .member .details .role {
            font-size: 0.7em;
        }
    }

</style>