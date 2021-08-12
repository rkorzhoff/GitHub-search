<template>
  <router-link :to="{ name: 'profile', params: { id: item.id } }" class="item">
    <div class="avatar-wrapper">
      <img :src="item.avatar_url" alt="user-avatar" class="avatar-img" />
    </div>
    <div class="info-wrapper">
      <div class="info-subgroup">
        <h3 class="subgroup-name">Login</h3>
        <span class="info-login">
          {{ item.login }}
        </span>
      </div>
      <div class="info-subgroup">
        <h3 class="subgroup-name">ID</h3>
        <span class="info-id">{{ item.id }}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Item from '@/entities/Item'

@Component
export default class CardsItem extends Vue {
  @Prop() readonly item!: Item
}
</script>

<style scoped>
.item {
  width: 300px;
  display: flex;
  align-items: center;
  height: 150px;
  margin: 25px;
  background-color: #fff;

  border-radius: 16px;
  box-shadow: 1px 1px 18px 0 rgba(34, 60, 80, 0.3);
  padding: 20px;
}
.avatar-wrapper {
  display: flex;
  height: 100px;
}
.avatar-img {
  height: 100%;
  border-radius: 10px;
}
.info-wrapper {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.info-subgroup:first-child {
  margin-bottom: 12px;
}
.info-login {
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
