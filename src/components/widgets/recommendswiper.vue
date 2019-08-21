<template>
  <div>
    <div class="recommendswipertitle">私人订制</div>
    <div class="myswiper">
      <swiper :options="swiperOption" ref="mySwiper" id="recommendswiper">
        <!-- slides -->
        <swiper-slide>
            <div><recommendmini v-for="(item,index) in newproductList" :item="item" :key="index"  :index="index" :newproductList="newproductList"></recommendmini></div>
        </swiper-slide> 
        <swiper-slide> 
            <div><recommendmini v-for="(item,index) in newproductList" :item="item" :key="index"  :index="index" :newproductList="newproductList"></recommendmini></div>
        </swiper-slide> 
        <swiper-slide>
            <div><recommendmini v-for="(item,index) in newproductList" :item="item" :key="index"  :index="index" :newproductList="newproductList"></recommendmini></div>
        </swiper-slide> 
        <swiper-slide> 
            <div><recommendmini v-for="(item,index) in newproductList" :item="item" :key="index"  :index="index" :newproductList="newproductList"></recommendmini></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div id="swiper-pagination1" class="swiper-pagination1" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js"
import axios from 'axios'
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import recommendmini from "./recommendmini.vue";
export default {
  store:store,
 
 mounted() {
      
      let that=this
    axios.get("../../../data/recommendmini.json").then(function(res) {
      // console.log(res.data.list1);
      that.newproductList=res.data.list1;
      // that.recommendswiperList2=res.data.list2;
      // that.recommendswiperList3=res.data.list3;
      // that.recommendswiperList4=res.data.list4;
    });
  },
  components: {
    recommendmini,
    swiper,
    swiperSlide
  },
  data() {
    return {
        newproductList:[],
        // recommendswiperList2:[],
        // recommendswiperList3:[],
        // recommendswiperList4:[],
        swiperOption: {
        autoplay: false,
        loop: true,
        loopAdditionalSlides: 4,
        pagination: {
          el: ".swiper-pagination1"
        }
      }
    };
  }
};
</script>
<style scoped>
.recommendswipertitle {
  font-size: 18px;
  margin: 15px 0 15px 12px
}
#recommendswiper>.swiper-slide{
    background: white;
    display: flex;
}
#swiper-pagination1{
  margin: 5px 130px;
   
}


</style>