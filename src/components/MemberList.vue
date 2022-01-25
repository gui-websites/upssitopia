<template>
  <div class="member-list" :style="bgRule">
      <h3>{{ lname }}</h3>
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
            return `--color: ${this.color}`
        }
    }
}
</script>

<style scoped>

    .member-list {
        margin-top: var(--s4);
    }

    .member-list h3 {
        width: 100%;
        color: var(--color);
        

        text-align: left;
        font-size: 1.5em;

        margin-bottom: var(--s4);
        padding-bottom: var(--s1);
        border-bottom: 2px solid var(--color);
    }

    .members {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: var(--s2);
    }

</style>