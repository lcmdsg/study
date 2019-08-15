<template>
  <div class="middlecontent">
    <div class="myswiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in swiperimglist" :key="item">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 分割栏 -->
    
    <!-- 分割栏 -->
  
    <!-- 请求数据 -->
    
  </div>
</template>
<script>

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import axios from 'axios'

export default {
  
  components: {
 
    swiper,
    swiperSlide
  },
  data() {
    return {
        filllist:[],
      swiperimglist: [
        "https://yanxuan.nosdn.127.net/a4ee2a554b5b553e2165ef9a66766986.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/55ea3a83648f21c3add7db2ee4eb8553.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/f377290320aac364e5984ce70f6baaea.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/82a811bf9a93fe5775fa8e702695b193.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/54a48c6de3477f6a908c46f34f08ff45.jpg?imageView&quality=75&thumbnail=750x0",
      ],
      swiperOption: {
        autoplay: false,

        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
      
    //   let that=this
    // axios.get("../../../homeheadimgs/minicomponent.json").then(function(res) {
    //   console.log(res.data.result);
    //   that.filllist=res.data.result;
    // });
  },
//   computed: {
//     swiper() {
//       return this.$refs.mySwiper.swiper;
//     }
//   }
};
</script>
<style>

.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  vertical-align: top;
  padding-bottom: 1px;
}
.swiper-pagination-bullet{
  width: 15px;
  height: 3px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  background: white;
}

</style>