<template>
  <div ref="popupRef" class="popup" v-click-outside="closePopup"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const popupRef = ref(null);

const closePopup = () => {
  console.log("closePopup");
  (popupRef.value! as HTMLElement).classList.add("hidden");
};
</script>

<style lang="scss" scoped>
.popup {
  width: 600px;
  height: 400px;
  margin: 100px auto;
  border: 1px solid black;
}

.hidden {
  display: none;
}
</style>
