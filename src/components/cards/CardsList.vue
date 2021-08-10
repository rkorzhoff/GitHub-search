<template>
  <div class="list-container" :class="{ filled: items.length }">
    <CardsItem v-for="(item, index) in items" :item="item" :key="index" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CardsItem from './CardsItem.vue'
import Item from '@/entities/Item'
@Component({
  components: { CardsItem },
})
export default class CardsList extends Vue {
  @Prop() items!: Item[]
}
</script>
<style>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
