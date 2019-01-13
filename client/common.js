import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueRosource from 'vue-resource'
import { store } from './store/store.js'
import { router } from './router.js'
import App from './App.vue'
import { L } from 'vue2-leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(Vuex)
Vue.use(VueRosource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')