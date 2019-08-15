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
        <div class="content-title">{{digitallist.title}}</div>
        <div class="content-desc">{{digitallist.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in digitallist.list"
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
        "https://yanxuan.nosdn.127.net/fbb75aa5dfea5242193b16beb6c112a3.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/b46e713ecc6d129a6e11f232d9deb189.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/6bd10dbe35dc6d75e241e3e139963fa9.jpg?imageView&quality=75&thumbnail=750x0"
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
      digitallist: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/digital.json").then(function(res) {
      that.digitallist = res.data.digital;
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