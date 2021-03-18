<template>
  <div class="div1">
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li><router-link to="/example02">Data</router-link></li>
      <li><router-link to="/example03">Reverse</router-link></li>
      <li>
        <router-link to="/example03/students/45/homeworks/23">
          students/45/homeworks/23
        </router-link>
      </li>
      <li>
        <router-link to="/example03/students/18/homeworks/18">
          students/18/homeworks/18
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.div1 {
  border: 2px red solid;
  width: 300px;
}
</style>
