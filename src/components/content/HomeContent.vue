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
import family from "../../components/home-component/Family.vue";
import cloths from "../../components/home-component/Cloths.vue";
import food from "../../components/home-component/Food.vue";
import clean from "../../components/home-component/Clean.vue";
import mother from "../../components/home-component/Mother.vue";
import sport from "../../components/home-component/Sport.vue";
import digital from "../../components/home-component/Digital.vue";
import feature from "../../components/home-component/Feature.vue";
export default {
  data: function() {
    return {
      componentId: "recommond",
      transcontent:"left"
    };
  },
  components: {
    "content-tab": ContentTab,
     recommond,
    cloths,
     family,
    food,
    clean,
    mother,
    sport,
    digital,
    feature
  },
  methods: {
    navclick(i) {
      console.log(i);
      switch (i) {
        case 0:
          this.componentId = "recommond";
          break;
        case 1:
          this.componentId = "family";
          break;
        case 2:
          this.componentId = "cloths";
          break;  
        case 3:
          this.componentId = "food";
          break;
        case 4:
          this.componentId = "clean";
          break;
        case 5:
          this.componentId = "mother";
          break;
        case 6:
          this.componentId = "sport";
          break;
        case 7:
          this.componentId = "digital";
          break;
        case 8:
          this.componentId = "feature";
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