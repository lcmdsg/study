<template>
  <div class="homeccc">
    <general-head v-on:navclick="navclick"></general-head>
    <div class="generalcontainer">
      <component :is="componentId"></component>
    </div>
  </div>
</template>
<script>
import GeneralHead from "../general-component/GeneralHead.vue";

import hotsummer from "../general-component/HotSummer.vue";
import recommend from "../general-component/Recommend.vue";
import goodthings from "../general-component/GoodThings.vue"
import backbuy from "../general-component/BackBuy.vue";
import basklist from "../general-component/BaskList.vue";
import developerdiary from "../general-component/DeveloperDiary.vue";
import goodperson from "../general-component/GoodPerson.vue";
import home from "../general-component/Home.vue";

export default {
  data: function() {
    return {
      componentId: "hotsummer"
    };
  },
  components: {
    "general-head": GeneralHead,
    hotsummer,
    recommend,
    goodthings,
    backbuy,
    basklist,
    developerdiary,
    goodperson,
    home
  },
  methods: {
    navclick(i) {
      // console.log(i);
      switch (i) {
        case 0:
          this.componentId = "hotsummer";
          break;
        case 1:
          this.componentId = "recommend";
          break;
        case 2:
          this.componentId = "goodthings";
          break;  
        case 3:
          this.componentId = "backbuy";
          break;
        case 4:
          this.componentId = "basklist";
          break;
        case 5:
          this.componentId = "developerdiary";
          break;
        case 6:
          this.componentId = "goodperson";
          break;
        case 7:
          this.componentId = "home";
          break;
        default:
          this.componentId = "hotsummer";
          break;
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
.generalcontainer {
  top: 95px;
  bottom: 54px;
  width: 100%;
  position: absolute;
  overflow: auto
}

</style>