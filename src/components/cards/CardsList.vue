<template>
  <div class="list-container">
    <CardsItem v-for="(item, index) in items" :item="item" :key="index" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, VModel } from 'vue-property-decorator'
import CardsItem from './CardsItem.vue'
import Item from '@/entities/Item'
@Component({
  components: { CardsItem },
})
export default class CardsList extends Vue {
  @VModel() page!: number
  @Prop() readonly items!: Item[]

  scrollToLastEl(ev: any) {
    if (
      ev.target.scrollingElement.scrollTop +
        ev.target.scrollingElement.clientHeight >=
      ev.target.scrollingElement.scrollHeight
    ) {
      this.page++
    }
  }
  created() {
    window.addEventListener('scroll', this.scrollToLastEl)
  }
  destroyed() {
    window.removeEventListener('scroll', this.scrollToLastEl)
  }
}
</script>
<style>
.list-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
