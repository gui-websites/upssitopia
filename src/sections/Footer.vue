<template>
  <footer class="flex-between">
      <div class="left">
          Site réalisé par <a href="https://guillaume-prog.com" target="_blank">Guillaume Roussin</a><br>
          Avec l'aide de Arthur Vigouroux et Alexis Zemb
        </div>
      <div class="right">Copyright UPSSITOPIA 2022</div>
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

</style>