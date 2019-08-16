import Vue from 'vue'
import App from './components/App.vue'
import routes from "./components/router/index.js"
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import {  Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Icon);
Vue.config.productionTip = false
import store from "./components/store/index.js"

const router = new VueRouter({
  routes 
})

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  if(to.path=="/"){
    store.commit("homeTabIndexChange",0)
  }
  else if(to.path=="/category"){
    store.commit("homeTabIndexChange",1)
  }
  else if(to.path=="/general"){
    store.commit("homeTabIndexChange",2)
  }
  else if(to.path=="/cart"){
    store.commit("homeTabIndexChange",3)
  }
  else if(to.path=="/user"){
    store.commit("homeTabIndexChange",4)
  }
  
  next()
})
new Vue({
  computed: {
    index(){
      return store.state.homeTabIndex
    }
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
