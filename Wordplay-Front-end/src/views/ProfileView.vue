<template>
    <div>
        <p>This is the start of profile, awaiting construction</p>
        <UserInfo />
        

        <UserData />

        <UserAchievements />
        <!-- <p>{{ this.userId }}</p> -->
        
    </div>
</template>

<script lang="ts">
import UserInfo from "../components/ProfileUserInfoComponent.vue";
import UserData from "../components/ProfileUserDataComponent.vue";
import UserAchievements from "../components/ProfileUserAchievementsComponent.vue";
import axios from 'axios';

export default {
  components: {
    UserInfo,
    UserData,
    UserAchievements,
  },
  

}
</script>

<style>
  .userDataStyling{
    background-color: #EBEBEB;
  }
</style>