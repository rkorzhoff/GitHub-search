<template>
  <div class="main-container">
    <TheSearch v-model="items" />
    <CardsList v-if="items.length" :items="items" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CardsList from '@/components/cards/CardsList.vue'
import TheSearch from '@/components/TheSearch.vue'
import Item from '@/entities/Item'
@Component({
  components: { TheSearch, CardsList },
})
export default class Main extends Vue {
  items: Item[] = []
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  padding: 15px 0;
  width: 90vw;
  height: auto;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  box-shadow: 1px 1px 18px 0 rgba(34, 60, 80, 0.2);
  transition: all 1s ease;
}
</style>
