import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

Vue.use(VueNativeSock, "wss://dex.binance.org/api/ws", {
  format: "json",
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000
});
