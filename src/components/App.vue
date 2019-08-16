<template>
  <div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <common-foot></common-foot>
  </div>
</template>

<script>
import store from "../components/store/index.js"

import CommonFoot from "../components/footer/CommonFoot.vue";

export default {
  name: "app",
  store:store,
  components: {

    "common-foot": CommonFoot,
  
  },
  data: function() {
    return {
     
    };
  },
  computed:{
    index(){
            return store.state.homeTabIndex;
        }
  },
  
  methods: {
  
  }
};
</script>

<style>

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    
}
</style>
