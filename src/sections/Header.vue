<template>
  <header>
      <nav class="flex-between">
          <div class="left">
              <img src="@/assets/img/logo.png" alt="" id="logo">
              
          </div>
          
          <div class="right flex-between">
              <a href="">Notre Programme</a>
              <a href="">L'équipe</a>
              <a href="">Évenements</a>
          </div>
      </nav>

      <div class="center">
          <div>
            <h1>UPSSITOPIA</h1>
            <h2 class="font-secondary">Embarquez à bord de l'UPSSITOPIA vers une année de rêve</h2>
            <MyButton href="https://instagram.com/liste_upssitopia?utm_medium=copy_link" newpage id="cta-social">
                <img src="../assets/img/instagram.svg" />
                Suivez-nous
            </MyButton>
          </div>
      </div>
  </header>
</template>

<script>
import MyButton from '../components/MyButton.vue'

export default {
  components: { MyButton },
  name: "Header",
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

    header .center #cta-social {
        display: inline-flex;
        gap: var(--s1);
        align-items: center;
        justify-content: center;

        margin-top: var(--s4);
    }

</style>