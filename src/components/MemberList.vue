<template>
  <div class="member-list">
      <h3>{{ lname }}</h3>
      <div class="members">
          <slot />
      </div>
  </div>
</template>

<script>
export default {
    props: [ "lname" ],
}
</script>

<style scoped>

    .member-list {
        margin-top: var(--s4);
    }

    .member-list h3 {
        width: 100%;
        color: var(--primary);
        

        text-align: left;
        font-size: 1.5em;

        margin-bottom: var(--s4);
        padding-bottom: var(--s1);
        border-bottom: 2px solid var(--primary);
    }

    .members {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: var(--s2);
    }

</style>