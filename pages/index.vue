<template></template>

<script>
export default {
  created() {
    // this.$socket.send(
    //   JSON.stringify({
    //     method: "subscribe",
    //     topic: "kline_1m",
    //     symbols: ["EOS_USDT"]
    //   })
    // );
    this.$options.sockets.onconnect = data =>
      console.log("this is connected to websocket server");
  }
};
</script>

<style>
</style>
