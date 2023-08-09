<template>
  <div class="pin-demo-root">
    <h3>PinDemo</h3>

    <!-- 吸顶效果 -->
    <h3 v-pin="50" v-pin:left="500">吸顶效果</h3>

    <!-- 吸底效果 -->
    <h3 v-pin:bottom="10" v-pin:right="100">吸附底部</h3>
    <h3 v-pin:left="0">吸附左边</h3>
    <h3 v-pin:right="50">吸附右边</h3>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.pin-demo-root {
  width: 2000px;
  height: 2000px;
}
</style>
