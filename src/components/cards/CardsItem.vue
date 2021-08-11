<template>
  <div class="item">
    <span>{{ item.id }}</span>
    <span>{{ item.login }}</span>
  </div>
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
  width: 60%;
  display: flex;
  align-items: center;
  height: 100px;
  margin-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  box-shadow: 1px 1px 18px 0 rgba(34, 60, 80, 0.2);
}
</style>
