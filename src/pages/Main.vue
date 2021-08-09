<template>
  <div>
    <h2>Search user</h2>
    <input type="text" v-model="searchQuery">
    <button @click="getUser">Search</button>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import APISearch from '@/network/APISearch';
import {AxiosResponse} from 'axios';
@Component
export default class Main extends Vue{
searchQuery: string = ''
  getUser(){
    new APISearch(this.searchQuery).APICall().then((res:AxiosResponse) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  created(){
    this.getUser()
  }
}
</script>

<style>


</style>
