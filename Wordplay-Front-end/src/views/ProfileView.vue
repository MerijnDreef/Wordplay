<template>
    <div>
        <p>This is the start of profile, awaiting construction</p>
        <UserInfo />

        <UserData />

        <UserAchievements />
        <p>{{ this.userId }}</p>
        <button @click="removeSessionStorage">Remove session</button>
    </div>
</template>

<script lang="ts">
import UserInfo from "../components/ProfileUserInfoComponent.vue";
import UserData from "../components/ProfileUserDataComponent.vue";
import UserAchievements from "../components/ProfileUserAchievementsComponent.vue";
import router from '@/router';

export default {
  components: {
    UserInfo,
    UserData,
    UserAchievements,
  },
  data() {
    return {
      userId: sessionStorage.getItem('userLogin')
    }
  },
  methods:{
    removeSessionStorage(){
      sessionStorage.clear();
      router.push('/login')
    }
  }

}
</script>