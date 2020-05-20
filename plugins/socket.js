import Vue from "vue";
import VueNativeSock from "vue-native-websocket";
// Vue.use(VueNativeSock, "wss://stream.binance.com:9443/ws/bnbbtc@depth");
// Vue.use(VueNativeSock, "wss://dex.binance.org/api/ws/$all@allTickers");
// Vue.use(VueNativeSock, "wss://dex.binance.org/api/ws");
Vue.use(VueNativeSock, "wss://dex.binance.org/api/ws/BNB_BTCB-1D@ticker");
