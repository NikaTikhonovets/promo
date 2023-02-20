<template>
  <div class="profile-info-wrapper" :class="{
    'pending': status === statuses.PENDING,
    'approved': status === statuses.APPROVED,
  }">
    <div class="profile-avatar" >
      <img :src="src" alt="profile-avatar">
    </div>

    <span class="profile-status">{{status}}</span>
  </div>
</template>

<script>
const {STATUS} = require("@/constants/status");

export default {
  name: "ProfileAvatar",
  props: ['src', 'status'],
  data() {
    return {
      statuses: STATUS
    }
  }
}
</script>

<style scoped>
.profile-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--red);
  overflow: hidden;
  transition: all 1s;
}

img {
  width: 100%;
}

.profile-info-wrapper.pending .profile-avatar {
  border-color: var(--yellow);
}

.profile-info-wrapper.approved .profile-avatar{
  border-color: var(--green);
}

.profile-status {
  display: flex;
  padding: 3px 8px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 5px;
  background-color: var(--red);
  color: var(--white);
}

.profile-info-wrapper.pending .profile-status {
  background-color: var(--yellow);
  color: var(--blue);
}

.profile-info-wrapper.approved .profile-status{
  background-color: var(--green);
}
</style>
