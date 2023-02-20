<template>
  <div class="profile" ref="root"
       :class="{selected: isSelected,
                blocked: selectedId && !isSelected,
                fixed: isAbsolutePosition}"
       :style="{top: `${currentTop}px`}"
       @click="selectProfile">

    <ProfileAvatar v-if="profile" :src="profile.photo" :status="profile.status"/>

    <div class="profile-info">
      <h2>{{profile.name}}</h2>
      <span>{{profile.description}}</span>
      <ProfileChart class="charts" v-if="isSelected" :statistics="profile.statistics" />
    </div>

    <CloseIcon v-if="isSelected" @click.stop="deselectProfile"/>
  </div>
</template>
<script>
import ProfileAvatar from '@/components/ProfileAvatar';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import ProfileChart from "@/components/ProfileChart";

export default {
  name: "ProfileItem",
  components: {
    ProfileAvatar,
    CloseIcon,
    ProfileChart
  },
  props: ['profile', 'selectedId'],
  data() {
    return {
      initialTop: 0,
      currentTop: 0,
      isSelected: this.selectedId === this.profile.messageId,
      isAbsolutePosition: false,
    }
  },

  methods: {
    selectProfile() {
      this.currentTop = 40;
      this.isSelected = true;
      this.isAbsolutePosition = true;

      this.$emit('selectProfile', this.profile.id);
    },

    deselectProfile() {
      this.currentTop = this.initialTop;
      this.isSelected = false;

      setTimeout(() => {
        this.isAbsolutePosition = false;
      }, 700);

      this.$emit('deselectProfile');
    }
  },

  mounted() {
    this.initialTop = this.currentTop = this.$refs.root?.offsetTop;
  }
}
</script>

<style>
.profile {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--white);
  cursor: pointer;
  width: 100%;
  min-height: 100px;
  transition: all 0.4s ease-in-out,
              width 1s ease-in-out,
              min-height 1s ease-in-out,
              top 1s ease-in-out;
}

.profile.selected {
  min-height: calc(100vh - 80px);
  background-color: var(--blue);
  color: var(--white);
  box-shadow: var(--hover-shadow);
}

.blocked {
  pointer-events: none;
}

.profile.fixed.selected {
  left: 40px;
  max-width: calc(100vw - 80px);
}

.profile.fixed {
  position: fixed;
  max-width: calc(100vw - 120px);
}

.profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 20px;
  transition: margin 1s;
}

.profile-info h2 {
  margin: 0;
  font-size: 20px;
  transition: font-size 1s;
}

.profile:not(.selected):hover {
  transform: translateX(10px);
  box-shadow: var(--hover-shadow);
  background-color: var(--blue);
  color: var(--white);
}

@keyframes show {
  0% {
    width: 2px;
    height: 1px;
  }

  100% {
    width: 100%;
    min-width: 100%;
    height: auto;
    min-height: auto;
  }
}

.charts {
  width: 0;
  height: 0;
  animation: show 1s ease-in-out 0.5s forwards;
}

.profile.selected .profile-avatar {
  width: 300px;
  height: 300px;
}

.profile.selected .profile-info {
  margin: 40px;
  gap: 40px;
}

.profile.selected .profile-info h2 {
  font-size: 30px;
}

@media screen and (max-width: 1000px) {
  .profile.selected .profile-avatar {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 850px) {
  .profile {
    flex-direction: column;
    gap: 20px;
  }

  .profile.selected .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

@media screen and (max-width: 600px) {
  .profile.selected .profile-info {
    margin: 0;
    gap: 20px;
    max-width: 100%;
    overflow: auto;
    justify-content: space-around;
  }

  .profile.selected .profile-info h2 {
    font-size: 24px;
  }

  .profile.selected .charts-wrapper {
    overflow: auto;
  }

  .profile.selected .profile-chart {
    min-width: 200px;
  }
}
</style>
