<template>
  <div class="profiles-wrapper">
    <ProfileItem v-for="profile in profiles"
                 @select-profile="selectProfile"
                 @deselect-profile="deselectProfile"
                 :key="profile.id"
                 :profile="profile"
                 :selectedId="selectedProfileId"/>
  </div>
</template>

<script>
import {PROFILES} from "@/constants/profiles";
import ProfileItem from "@/components/ProfileItem";

export default {
  name: 'ListProfiles',
  components: {
    ProfileItem
  },
  data() {
    return {
      profiles: PROFILES,
      selectedProfileId: null,
    }
  },
  methods: {
    selectProfile(profileId) {
      this.selectedProfileId = profileId;
    },

    deselectProfile() {
      this.selectedProfileId = null;
    }
  }
}
</script>

<style scoped>
.profiles-wrapper {
  display: flex;
  flex-direction: column;
  background-color: var(--background-gray);
  padding: 40px;
  gap: 20px;
  min-height: 100vh;
}
</style>
