<template>
  <div class="homeccc">
    <content-tab v-on:navclick="navclick"></content-tab>
    <div class="homecontainer">
      
        <component :is="componentId"></component>
     
      
    </div>
  </div>
</template>
<script>
import ContentTab from "../home-component/ContentTab.vue";
import recommond from "../../components/home-component/recommond.vue";
import mobile from "../../components/home-component/mobile.vue";
import presell from "../../components/home-component/presell.vue";
export default {
  data: function() {
    return {
      componentId: "recommond",
      transcontent:"left"
    };
  },
  components: {
    "content-tab": ContentTab,
    recommond: recommond,
    presell: presell,
    mobile: mobile
  },
  methods: {
    navclick(i) {
      console.log(i);
      switch (i) {
        case 0:
          this.componentId = "recommond";
          break;
        case 1:
          this.componentId = "mobile";
          break;
        case 2:
          this.componentId = "presell";
          break;
        default:
          this.componentId = "recommond";
          break;
      }
      if(this.i<i){
        this.transcontent="left"
      }else{
        this.transcontent="right";
      }
      this.i=i;
    }
  }
};
</script>
<style >
.homeccc{
  position:fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
.homecontainer {
  top: 74px;
  bottom: 54px;
  width: 100%;
  position: absolute;
overflow: auto
}


.left-enter-active,.right-enter-active{
  transition: transform .5s;
}
.left-leave-active,.right-leave-active{
  transition: transform .5s;
}
/* .left-enter, .left-leave-active,.right-enter, .right-leave-active {
  opacity: 0;
} */
.left-enter ,.right-leave-to{
  transform: translateX(100%);
}
.left-leave-to,.right-enter {
  transform: translateX(-100%);
}
</style>