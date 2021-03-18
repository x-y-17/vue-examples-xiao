<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }}</p>
    <button @click="change">change username</button>
    <p>{{ user.address }}</p>
    <button @click="addAddress">change address</button>
    <p>{{ user.insertTime }}</p>
    <p>{{ myDate }}</p>
    <p>{{ myReplace(user.insertTime) }}</p>
    <h1>Computed</h1>
    {{ number + 1 }}
    {{ isShow ? "为True显示" : "为False显示" }}
    <hr />
    <br />
    {{
      message
        .split("")
        .reverse()
        .join("")
    }}
    <hr />
    {{ reversMessage }}
    <hr />
    <button @click="isShow = !isShow">isShow</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    msg: "hello",
    user: {
      name: "Xiao",
      insertTime: "2021-03-14T10:28:27",
      address: "东北林业大学"
    },
    number: 10,
    message: "hello",
    message2: "World",
    isShow: false
  }),
  methods: {
    change() {
      this.user.name = "潇";
    },
    addAddress() {
      this.user.address = "第九公寓";
    }
  },
  computed: {
    myDate(): string {
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      return (date: string) => date.replace("T", " ");
    },
    reversMessage(): string {
      return this.message2
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    isShow(newValue, oldValue) {
      alert(`新值为${newValue}`);
    }
  }
});
</script>
<style scoped></style>
