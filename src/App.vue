<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {}
</script>
<style>
.container {
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
