import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        homeTabIndex:0
    },
    mutations:{
        homeTabIndexChange(state,index){
            state.homeTabIndex=index
        }
    }
});
export default store