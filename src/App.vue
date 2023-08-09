<template>
  <button @click="showCom = !showCom">切换显隐</button>

  <!-- 自定义指令 -->
  <!-- <HoverDemo></HoverDemo> -->
  <!-- <InfiniteScrollDemo></InfiniteScrollDemo> -->
  <!-- <ClickOutsideDemo v-if="showCom"></ClickOutsideDemo> -->
  <!-- <ThrottleDemo v-if="showCom"></ThrottleDemo> -->
  <!-- <LazyDemo v-if="showCom"></LazyDemo> -->
  <!-- <PinDemo v-if="showCom"></PinDemo> -->
</template>

<script setup lang="ts">
/* 自定义指令 */
// import HoverDemo from "./demos/HoverDemo.vue";
// import InfiniteScrollDemo from "./demos/InfiniteScrollDemo.vue";
// import ClickOutsideDemo from "./demos/ClickOutsideDemo.vue";
// import ThrottleDemo from "./demos/ThrottleDemo.vue";
// import LazyDemo from "./demos/LazyDemo.vue";
// import PinDemo from "./demos/PinDemo.vue";

import { ref } from "vue";
const showCom = ref(true);
</script>

<style scoped>
</style>
