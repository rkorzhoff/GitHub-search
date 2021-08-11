<template>
  <div class="search-container">
    <h2 class="search-header">Search user</h2>
    <div class="input-wrapper">
      <input type="text" v-model="searchQuery" class="search-input" />
      <button @click="searchUsers" class="search-btn">Search</button>
      <button v-if="isFilled" @click.prevent="sortResults()" class="sort-btn">
        SORT
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'
@Component
export default class TheSearch extends Vue {
  @Prop() readonly sortResults!: Function
  searchQuery: string = ''
  isFilled = false
  @Emit('search-users')
  searchUsers() {
    this.isFilled = true
    return this.searchQuery
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100px;
  margin-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  box-shadow: 1px 1px 18px 0 rgba(34, 60, 80, 0.2);
}
.search-header {
  margin-bottom: 10px;
}
.search-btn,
.sort-btn {
  background-color: #fff;
  border: 1px solid #666666;
  padding: 2px 5px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.search-btn:hover,
.sort-btn:hover {
  background-color: #53d0ff;
  color: #fff;
  border-color: #53d0ff;
}
</style>
