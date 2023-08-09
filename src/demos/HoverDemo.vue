<template>
  <div>
    <div class="box1" v-hover="{ backgroundColor: 'green', color: 'white' }">
      失败乃你之母
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.box1 {
  background-color: red;
  color: black;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
}
</style>
