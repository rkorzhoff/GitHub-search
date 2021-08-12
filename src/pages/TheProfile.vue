<template>
  <div class="profile-container">
    <div class="first-card">
      <div class="avatar-wrapper">
        <img
          :src="currentUser.avatar_url"
          alt="user-avatar"
          class="avatar-img"
        />
      </div>
      <div class="name-wrapper">
        <div class="name-subgroup">
          <h3 class="subgroup-name">Login</h3>
          <span class="info-login">
            {{ currentUser.login }}
          </span>
        </div>
        <div class="name-subgroup">
          <h3 class="subgroup-name">ID</h3>
          <span class="info-id">{{ currentUser.id }}</span>
        </div>
      </div>
    </div>

    <div class="second-card">
      <div class="info-subgroup">
        <h3 class="subgroup-name">Score</h3>
        <span class="info-score"> {{ currentUser.score }} </span>
      </div>
      <div class="info-subgroup">
        <h3 class="subgroup-name">Type</h3>
        <span class="info-score"> {{ currentUser.type }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Item from '@/entities/Item'
import { namespace } from 'vuex-class'
const Items = namespace('Items')
@Component
export default class TheProfile extends Vue {
  @Prop() readonly id!: number
  currentUser!: Item
  getProfileFromStore() {
    this.currentUser = this.$store.state.Items.users.filter(
      (item: Item) => item.id === +this.id
    )[0]
  }
  created() {
    this.getProfileFromStore()
  }
}
</script>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto 0;
}
.first-card,
.second-card {
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
  min-height: 0;
  min-width: 0;
  box-shadow: 1px 1px 18px 0 rgba(34, 60, 80, 0.3);
}

.first-card {
  flex-direction: column;
  width: 60%;
}
.second-card {
  width: 30%;
  margin-left: 20px;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
}
.avatar-wrapper {
  display: flex;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  height: 200px;
  width: 100%;
}
.avatar-img {
  height: 100%;
  border-radius: 10px;
}

.name-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.name-subgroup:first-child {
  margin-right: 40px;
}
.info-login {
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
