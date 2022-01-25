<template>
  <div id="members" class="section">
      <h2>Notre équipe</h2>

      <div class="content">
        <MemberList v-for="list in members.poles" :key="list.nom" :lname="list.nom" color="var(--primary)">
            <Member v-for="member in list.membres" :key="member.name" :info="member" color="var(--primary)" :revealed="revealed(member.nom)" />
        </MemberList>
      </div>
     
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

<style scoped>

    #members {
        min-height: 100%;
        padding: var(--s4);
    }

    #members h2 {
        color: var(--white);
    }

    

</style>