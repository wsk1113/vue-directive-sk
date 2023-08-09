<template>
  <form action="#" v-throttle:submit="{ delay: 3000, handler: onSubmit }">
    <input type="text" placeholder="please enter username"/>
    <input type="password" placeholder="please enter password"/>
    <button>submit</button>
  </form>

  <button v-throttle:click="{ delay: 3000, handler: onClick }">click me</button>
</template>

<script setup  lang="ts">
const onSubmit = () => console.log("onSubmit");
const onClick = () => console.log("onClick");
</script>

<style lang="scss" scoped></style>
