import Vue from 'vue'
import App from './components/App.vue'
import routes from "./components/router/index.js"
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import { Image, Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueSwiper from 'vue-awesome-swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
// lanjiazai
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
});
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Icon);
Vue.use(Image);
Vue.use(vueSwiper)
Vue.config.productionTip = false
import store from "./components/store/index.js"

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  if (to.path == "/") {
    store.commit("homeTabIndexChange", 0)
  }
  else if (to.path == "/category") {
    store.commit("homeTabIndexChange", 1)
  }
  else if (to.path == "/general") {
    store.commit("homeTabIndexChange", 2)
  }
  else if (to.path == "/cart") {
    store.commit("homeTabIndexChange", 3)
  }
  else if (to.path == "/user") {
    store.commit("homeTabIndexChange", 4)
  }

  next()
})
new Vue({
  computed: {
    index() {
      return store.state.homeTabIndex
    }
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
