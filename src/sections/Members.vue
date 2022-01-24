<template>
  <div id="members">
      <h1>Notre équipe</h1>

     <MemberList v-for="list in members.poles" :key="list.nom" :lname="list.nom" :color="list.couleur">
        <Member v-for="member in list.membres" :key="member.name" :info="member" />
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
            members: members_yaml
        }
    }
}
</script>

<style>

</style>