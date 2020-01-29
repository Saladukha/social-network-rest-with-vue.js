import Vue from 'vue'
import vuetify from "./plagins/vuetify"
import Vuetify from "vuetify"
import '@babel/polyfill'
import 'api/resource'
import router from "./router/router";
import App from 'pages/App.vue'
import store from "./store/store";
import {connect} from "./util/ws"

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    vuetify,
    store,
    router,
    render: a => a(App)
});