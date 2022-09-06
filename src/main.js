import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from "./router";
import app from "./App"


Vue.use(Vuetify,router)


Vue.component('examinationConsent', require('./components/ExaminationConsent.vue').default)

new Vue({
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  }),
  render: h => h(app)
}).$mount("#app");