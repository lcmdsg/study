<template>
  <div class="middlecontent">
    <div class="family-myswiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in swiperimglist" :key="item" class="family-swiper-img">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 分割线 -->
    <div class="family-cut"></div>
    <!-- 内容 -->
    <div class="family-container">
      <!-- food中秋 小组件-->
      <div class="content-block">
        <div class="content-title">{{midautumnlist.title}}</div>
        <div class="content-desc">{{midautumnlist.desc}}</div>
        <div class="content-goods-wrap food-img">
          <family-card
            v-for="(item, index) in midautumnlist.list"
            :key="index"
            :detail="item"
            :index="index"
          ></family-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import FamilyCard from "../widgets/FamilyCard.vue";
export default {
  data() {
    return {
      swiperimglist: [
        "https://yanxuan.nosdn.127.net/e00b063c1fa098ad3ec95e6c1473b151.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/676ba1c1a7830b1e2f270d154a8b56bd.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/84398a718d6ae26eee187c47228c4e57.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/2407c4c41a5ef8c86fcfd51c4ebfa296.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/fa896a677b34dbd9ca3862974ef4ef6f.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/4107c470c177ad36f4a6728e78a4fed2.jpg?imageView&quality=75&thumbnail=750x0"
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1000
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      midautumnlist: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/food.json").then(function(res) {
      that.midautumnlist = res.data.midautumn;
    });
  },
  components: {
    swiper,
    swiperSlide,
    "family-card": FamilyCard
  },
  mounted() {}
};
</script>
<style>
.middlecontent {
  overflow-y: auto;
}
/* 居家轮播图，高不一样 */
.family-swiper-img img {
  height: 221px;
}
.family-container {
  width: 100%;
}
/* 分割线 */
.family-cut {
  width: 100%;
  height: 10px;
  background-color: rgb(238, 238, 238);
}
.content-block {
  padding: 8px 10px;
}
.content-title {
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  color: #333;
}
.content-desc {
  text-align: center;
  font-size: 10px;
  line-height: 25px;
  color: #999;
}
.content-goods-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.food-img img{
    background-color: #f4f4f4;
}
</style>