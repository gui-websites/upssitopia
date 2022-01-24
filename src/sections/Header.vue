<template>
  <header>
      <nav>
          <div class="left">
              <img src="@/assets/img/logo.png" alt="" id="logo">
              <h1>UPSSITOPIA</h1>
          </div>
          
          <div class="right">
              <a href="">Notre Programme</a>
              <a href="">L'équipe</a>
              <a href="">Évenements</a>
          </div>
      </nav>

      <div class="center">
          <MyButton>Click me</MyButton>
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

<style>

</style>