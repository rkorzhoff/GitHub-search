<template>
  <div class="search-container">
    <h2 class="search-header">Search user</h2>
    <div class="input-wrapper">
      <input type="text" v-model="searchQuery" class="search-input" />
      <button @click="searchUsers">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, VModel, Prop } from 'vue-property-decorator'
import Item from '@/entities/Item'
import { namespace } from 'vuex-class'
import IItems from '@/store/modules/items'
const Items = namespace('Items')
@Component
export default class TheSearch extends Vue {
  @VModel() items!: Item[]
  searchQuery: string = ''

  @Items.Action
  private APISearch!: (searchQuery: string) => Promise<IItems[]>

  searchUsers() {
    this.APISearch(this.searchQuery).then(() => {
      this.items = this.$store.state.Items.users
    })
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
}
</style>
