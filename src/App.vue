<template>
  App
  <div id="app">
    <sidebar id="sidebar" />
    <div>
      <router-view id="router" :key="$route.path" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "./views/Sidebar.vue";
export default defineComponent({
  components: { sidebar }
});
</script>
<style scoped>
#app {
  display: flex;
}
#router {
  padding: 20px;
  border: 2px red solid;
}
</style>
