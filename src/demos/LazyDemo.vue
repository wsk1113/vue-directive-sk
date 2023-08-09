<template>
  <div>
    <img
      v-lazy="'/vite.svg'"
      src="https://lekuzhima.club/cdn/images/kitty.gif"
      alt=""
    />

    <!-- <img src="/default.webp" alt="" /> -->

    <MyLazyImg
      class="mli"
      loading="/vite.svg"
      src="https://lekuzhima.club/cdn/images/dameizi.jpg"
    ></MyLazyImg>
  </div>
</template>

<script setup lang="ts">
import MyLazyImg from "@/components/MyLazyImg.vue";
</script>

<style lang="scss" scoped>
.mli {
  width: 100px;
}
</style>
