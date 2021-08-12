<template>
  <div class="main-container">
    <TheSearch @search-users="setSearchQuery" :sort-results="sortResults" />
    <CardsList v-if="items.length" :items="items" v-model="page" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import CardsList from '@/components/cards/CardsList.vue'
import TheSearch from '@/components/TheSearch.vue'
import Item from '@/entities/Item'
import IItems from '@/store/modules/items'
import { namespace } from 'vuex-class'
const Items = namespace('Items')

@Component({
  components: { TheSearch, CardsList },
})
export default class Main extends Vue {
  items: Item[] = []
  searchQuery = ''
  page: number = 1
  sort: string = ''
  @Items.Action
  private APISearch!: (params: {
    searchQuery: string
    page: string
    sort: string
  }) => Promise<IItems[]>

  setSearchQuery(option: string) {
    this.searchQuery = option
    this.page = 1
    this.sort = ''
    this.getList()
  }
  sortResults() {
    this.sort === '' ? (this.sort = 'repositories') : (this.sort = '')
    this.getList()
  }
  getList() {
    this.APISearch({
      searchQuery: this.searchQuery,
      page: this.page.toString(),
      sort: this.sort,
    }).then(() => {
      this.items = this.$store.state.Items.users
    })
  }
  @Watch('page')
  updateList() {
    this.APISearch({
      searchQuery: this.searchQuery,
      page: this.page.toString(),
      sort: this.sort,
    }).then(() => {
      this.items.push(...this.$store.state.Items.users)
    })
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;
  padding: 15px 0;
  max-width: 1200px;
  height: auto;
}
</style>
