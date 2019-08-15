<template>
  <div>
    
   
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    
  <transition name="fade">
    <common-foot></common-foot>
   </transition>
    

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



.aaa-enter-active {
  transition: all .3s 
}
.aaa-leave-active {
  transition: all .3s 
}
.aaa-enter,.aaa-leave-to
{
  transform: translateY(-50px);
 
}


</style>
