<template>
    <div>
        <p>This is the start of profile, awaiting construction</p>
        <UserInfo />

        <UserData />

        <UserAchievements />

    </div>
</template>

<script lang="ts">
import UserInfo from "../components/ProfileUserInfoComponent.vue";
import UserData from "../components/ProfileUserDataComponent.vue";
import UserAchievements from "../components/ProfileUserAchievementsComponent.vue";

export default {
  components: {
    UserInfo,
    UserData,
    UserAchievements,
  }
}
</script>