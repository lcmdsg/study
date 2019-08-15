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
      <!-- yifu 小组件-->
      <div class="content-block">
        <div class="content-title">{{hotlist.title}}</div>
        <div class="content-desc">{{hotlist.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in hotlist.list"
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
        "https://yanxuan.nosdn.127.net/ce1d15526689060938a801161e724ebf.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/8153809e8b1a143abbe22b984832d074.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e083c995ed9c369c4abbb19800a4e95c.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/eb21981deb26338dfc2b1047f55ae734.jpg?imageView&quality=75&thumbnail=750x0"
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
      hotlist: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/cloths.json").then(function(res) {
      that.hotlist = res.data.hot;
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