<template>
  <div class="content-wrap">
    <div class="content-block">
      <div class="my-swiper-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in swiperList" :key="index">
            <img class="my-swiper-img" :src="item" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="content-list-wrap">
        <div class="content-card" v-for="(item,index) in list" :key="index">
          <img class="card-img" :src="item.imgSrc" alt />
          <div class="card-title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "cool",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: "swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      },
      swiperList: [],
      list: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    let that = this;
    axios.get("../../../detail/cool-swiper.json").then(function(res) {
      that.swiperList = res.data.result;
    });
    axios.get("../../../detail/cool.json").then(function(res) {
      that.list = res.data.result;
    });
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.content-wrap {
  position: static;
  margin-left: 40px;
  width: 333px;
  height: 100%;
}

.content-block {
  padding: 16px;
}

.content-title-img {
  width: 100%;
  margin-bottom: 10px;
}

.content-list-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.content-card {
  width: 80px;
  margin: 0 10px;
  margin-bottom: 20px;
}

.card-img {
  width: 100%;
}

.card-title {
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>