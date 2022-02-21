<template>
  <div id="members" class="section">
      <h2>Notre équipe</h2>

      <div class="content">
        <MemberList v-for="[name, members] in memberList" :key="name" :lname="name">
            <Member v-for="member in members" :key="member.name" :info="member" />
        </MemberList>
      </div>
     
  </div>
</template>

<script>
import Member from '../components/Member.vue'
import MemberList from '../components/MemberList.vue'

export default {
    components: { MemberList, Member },

    data() {
        return {
            memberList: []
        }
    },

    mounted() {
        const requestUrl = process.env.VUE_APP_ROOT_API + "/members"
        fetch(requestUrl).then(res => res.json()).then(res_members => {
            this.memberList = Object.entries(res_members);
        })
    }
}
</script>

<style scoped>

    #members {
        min-height: 100%;
        /* background-color: var(--white); */
    }

    #members h2 {
        margin-bottom: 0;
        color: var(--white);
    }

    

</style>