<template>
  <header>
      <nav class="flex-between">
          <div class="left">
              <img src="@/assets/img/logo.png" alt="" id="logo">
          </div>
          
          <a :href="insta_link" target="_blank" id="cta-social">
                <img src="../assets/img/instagram.svg" />
                <span>Suivez-nous</span>
            </a>
      </nav>

      <div class="center">
          <div>
            <h1 ref="h1">UPSSITOPIA</h1>
            <h2 class="font-secondary">Embarquez à bord de l'UPSSITOPIA vers une année de rêve</h2>
          </div>
      </div>
  </header>
</template>

<script>

export default {
  name: "Header",

  data() {
      return {
          insta_link: process.env.VUE_APP_INSTA_LINK
      }
  },
}
</script>

<style scoped>
    
    header {
        height: 100%;
        color: var(--white);

        display: grid;
        grid-template-rows: auto 1fr;
    }

    header nav {
        background: var(--secondary);
        padding: var(--s1) var(--s2);
    }

    header nav #logo {
        height: 75px;
    }

    header nav .right {
        gap: var(--s2);
    }

    header nav a {
        color: var(--white);
        text-decoration: none;
        text-transform: uppercase;

        font-size: 1.5em;
    }

    header .center {
        display: grid;
        place-items: center;
    }

    header .center > div {
        width: 90%;
        max-width: 800px;
    }

    header .center h1 {
        font-size: 5em;
        margin: 0 0 var(--s2);
    }

    header .center h2 {
        color: var(--primary);
        font-size: 1.8em;
        line-height: 2;
        margin: 0 0 var(--s2);
    }

    header #cta-social {
        
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--s0);
    }

    /* Mobile view */
    @media only screen and (max-width: 480px) {
        nav .right {
            display: none;
        }

        header .center h1 {
            font-size: 15vw;
        }

        header .center h2 {
            font-size: 5vw;
        }

        header nav a {
            font-size: 1.2em;
        }
    }

</style>