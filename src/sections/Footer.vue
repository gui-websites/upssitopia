<template>
  <footer class="flex-between">
      <div class="left">
          <span>Site réalisé par <a href="https://guillaume-prog.com" target="_blank">Guillaume Roussin</a></span>
          <br>
          <span>Avec l'aide de Julian Trani, Arthur Vigouroux, Alexis Zemb</span>
        </div>
      <div class="line"></div>
      <div class="right">© Copyright UPSSITOPIA 2022</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

    footer {
        padding: var(--s2);

        background: var(--black);
        color: var(--white);

        align-items: flex-start;
    }

    footer .left {
        text-align: left;
        line-height: 1.8;
    }

    footer a {
        color: var(--white);
        text-decoration: none;
        padding: 2px;
        border-bottom: 1px solid var(--white);
    }

    @media only screen and (max-width: 480px) {
        footer {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            gap: var(--s2);
        }

        footer .left {
            text-align: center;
        }

        footer .line {
            display: block;
            width: 40%;
            border-top: 1px solid var(--white);
        }
    }

</style>