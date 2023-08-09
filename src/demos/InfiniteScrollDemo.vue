<template>
  <div v-infinite-scroll="loadMoreData" class="box">
    <h3>InfiniteScrollDemo</h3>
  </div>
</template>

<script setup  lang="ts">
const loadMoreData = () => {
  console.log("loadMoreData");
};
</script>

<style lang="scss" scoped>
.box {
  width: 500px;
  height: 2000px;
  background-color: red;
}
</style>
