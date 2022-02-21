<template>
  <div id="events" class="section"><div>
      <h2>Évenement Bowling</h2>

      <div class="content">
        <img id="flyer" src="@/assets/img/event.jpg" alt="">
        <div>
            <VueShowdown :markdown="event_blurb" flavor="github" class="event-blurb" />
            <MyButton href="https://forms.gle/ZRobZ6jMyD6Fszxr5" newpage="_blank">Inscrivez-vous</MyButton>
        </div>
      </div>
  </div></div>
</template>

<script>
import event from "@/data/event.md"
import MyButton from '../components/MyButton.vue'
import { VueShowdown } from 'vue-showdown'

export default {
    components: { VueShowdown, MyButton },

    data() {
        return {
            event_blurb: event
        }
    }
}
</script>

<style>
#events {
    background: var(--black);
    color: var(--white);
}

#events .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: var(--s4);
}

#flyer {
    width: 90%;
    max-width: 400px;
}

.event-blurb {
    line-height: 1.5;
    text-align: justify;
    margin-bottom: var(--s2);
}

@media only screen and (max-width: 480px) {
    #events .content {
        flex-direction: column;
    }
}
</style>