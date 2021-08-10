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

<style scoped></style>
