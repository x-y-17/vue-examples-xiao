<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  created() {
    console.log("3 created");
  },
  beforeMount() {
    console.log("3 beforeMount");
  },
  mounted() {
    console.log("3 mounted");
  }
});
</script>
<style scoped></style>
