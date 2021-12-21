<template>
  <div id="center-main">
    <img src="@/assets/img/logo.png" alt="" id="logo">
    <h1 id="title">Coming soon</h1>
  </div>
</template>

<style>

#app {
  display: grid;
  place-items: center;

  background: url("../assets/img/background.jpeg") center center no-repeat;
  background-size: cover;
}

#center-main {
  padding: 20px;
}

#logo {
  width: 80%;
  max-width: 500px;
}

#title {
  font-family: 'Spartan', sans-serif;
  color: #fff;

  text-shadow: 0 0 5px #000;

  text-transform: uppercase;
  font-size: 3em;
}

</style>

<script>

export default {
  name: 'Home'
}
</script>
