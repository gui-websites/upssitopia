<template>
  <div id="members">
      <h1>Notre équipe</h1>

     <MemberList v-for="list in members.poles" :key="list.nom" :lname="list.nom" :color="list.couleur">
        <Member v-for="member in list.membres" :key="member.name" :info="member" :color="list.couleur" :revealed="revealed(member.nom)" />
     </MemberList>
  </div>
</template>

<script>
import Member from '../components/Member.vue'
import MemberList from '../components/MemberList.vue'
import members_yaml from "../data/people.yaml"

export default {
    components: { MemberList, Member },

    data() {
        return {
            members: members_yaml,
            reveals: []
        }
    },

    methods: {
        revealed(name) {
            const find = this.reveals.filter(r => r.name == name)
            return (find.length == 0) ? false : find[0].revealed
        }
    },

    mounted() {
        const requestUrl = process.env.VUE_APP_ROOT_API + "/reveals"
        fetch(requestUrl).then(res => res.json()).then(reveals => {
            this.reveals = reveals
        })
    }
}
</script>

<style>

</style>