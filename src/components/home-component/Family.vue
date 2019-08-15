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
      <!-- 夏凉热卖 小组件-->
      <div class="content-block">
        <div class="content-title">{{familysummer.title}}</div>
        <div class="content-desc">{{familysummer.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in familysummer.list"
            :key="index"
            :detail="item"
            :index="index"
          ></family-card>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="family-cut"></div>
      <!-- 主题床品 -->
      <div class="content-block">
        <div class="content-title">{{familythemebed.title}}</div>
        <div class="content-desc">{{familythemebed.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in familythemebed.list"
            :key="index"
            :detail="item"
            :index="index"
          ></family-card>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="family-cut"></div>
      <!-- 北欧原木 -->
      <div class="content-block">
        <div class="content-title">{{familynordiclog.title}}</div>
        <div class="content-desc">{{familynordiclog.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in familynordiclog.list"
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
        "https://yanxuan.nosdn.127.net/81f78c1f9cb37469617cd6cc055412f5.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/03ec91cbb8484f24529ee38fa2349df0.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/79b2dbf762217e6e532f335bda4c85b3.jpg?imageView&quality=75&thumbnail=750x0"
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
      familysummer: {},
      familythemebed: {},
      familynordiclog: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/family.json").then(function(res) {
      that.familysummer = res.data.summer;
      that.familythemebed = res.data.themebed;
      that.familynordiclog = res.data.nordiclog;
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