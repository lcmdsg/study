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
    <!-- ??? -->
    <div class="family-cut"></div>
    <!-- ?? -->
    <div class="family-container">
      <!--  ???-->
      <div class="content-block">
        <div class="content-title">{{featurelist.title}}</div>
        <div class="content-desc">{{featurelist.desc}}</div>
        <div class="content-goods-wrap">
          <family-card
            v-for="(item, index) in featurelist.list"
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
        "https://yanxuan.nosdn.127.net/0e1a59a94b1e83db3a95931ecb05906f.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/173668443ae31eeb52fce3bc89f443d2.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/6f4b9216cef47063f04c9560176183e1.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/d26262479120da9f8badd183ee02f177.png?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/86c02b6dbeca35fb8e1e070a4ef3bccc.jpg?imageView&quality=75&thumbnail=750x0"
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
      featurelist: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/feature.json").then(function(res) {
      that.featurelist = res.data.feature;
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
/* ?????????? */
.family-swiper-img img {
  height: 221px;
}
.family-container {
  width: 100%;
}
/* ??? */
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