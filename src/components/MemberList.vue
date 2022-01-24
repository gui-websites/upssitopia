<template>
  <div class="member-list">
      <h3 :style="bgRule">{{ lname }}</h3>
      <div class="members">
          <slot />
      </div>
  </div>
</template>

<script>
export default {
    props: [ "lname", "color" ],

    computed: {
        bgRule() {
            return `color: ${this.color}`
        }
    }
}
</script>

<style>

</style>