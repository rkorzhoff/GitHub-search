<template>
  <div>
    <h2>Search user</h2>
    <input type="text" v-model="searchQuery">
    <button @click="getUser">Search</button>
    <div class="item" v-if="items.length" v-for="item in items">
      <span>{{item.id}}</span>
      <span>{{item.login}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import APISearch from '@/network/APISearch';
import {AxiosResponse} from 'axios';
@Component
export default class Main extends Vue{
searchQuery: string = ''
  items:any = []
  getUser(){
    new APISearch(this.searchQuery).APICall().then((res:AxiosResponse) => {
      // console.log(res)
      this.items.push(...res.data.items)
      console.log(this.items)
    }).catch(err => {
      console.log(err)
    })
  }

}
</script>

<style>


</style>
