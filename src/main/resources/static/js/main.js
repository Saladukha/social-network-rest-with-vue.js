import Vue from 'vue'
import 'api/resource'
import App from 'pages/App.vue'
import {connect} from "./util/ws";
import vuetify from "./plagins/vuetify";
import Vuetify from "vuetify";

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    vuetify,
    render: a => a(App)
});