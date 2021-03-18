<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  created() {
    console.log("1 created");
  },
  beforeMount() {
    console.log("1 beforeMount");
  },
  mounted() {
    console.log("1 mounted");
  }
  // beforeDestroy() {
  //   console.log("1 beforeDestroy");
  // },
  // destroyed() {
  //   console.log("1 destroyed");
  // }
});
</script>
<style scoped>
h1 {
  color: red;
}
</style>
