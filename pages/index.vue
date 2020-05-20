<template></template>

<script>
export default {
  created() {
    this.$options.sockets.onconnect = data =>
      console.log("websocket is connected");
    this.$options.sockets.onerror = data => console.log(data);
    this.$options.sockets.onmessage = evt => console.log(evt.data);
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    }
  }
};
</script>

<style>
</style>
