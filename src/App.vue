<template>
  <div id="app">
    <keep-alive :include="['Detail']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  mounted() {
  }
}
</script>

<style lang="less" scoped>
#app {
  min-height: 100vh;
  background: #f5f6f7;
}
</style>
