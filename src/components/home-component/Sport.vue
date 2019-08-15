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
      <!--  小组件-->
      <div class="content-block">
        <div class="content-title">{{sportlist.title}}</div>
        <div class="content-desc">{{sportlist.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in sportlist.list"
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
        "https://yanxuan.nosdn.127.net/edc892f49147830ebb2d81ec70227b34.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/d3cd565eb4fcb104bf6b916c898c7ca2.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/a2dac3eacd5fd7a0005ae3dd0a9637b7.jpg?imageView&quality=75&thumbnail=750x0"
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
      sportlist: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/sport.json").then(function(res) {
      that.sportlist = res.data.sport;
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
</style>