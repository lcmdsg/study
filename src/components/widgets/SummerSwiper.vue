<template>
  <div class="swiper-box">
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide">
        <img src="https://yanxuan.nosdn.127.net/15656878289625347.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://mimg.127.net/hz/uploader/20190802/15647346338570519.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://mimg.127.net/hz/uploader/20190802/15647346580140522.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://mimg.127.net/hz/uploader/20190802/15647346335080518.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="https://yanxuan.nosdn.127.net/15651700346213301.jpg" alt />
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-small">
        <img src="../../assets/suoluetu-1.png" alt />
      </swiper-slide>
      <swiper-slide class="slide-small">
        <img src="../../assets/suoluetu-2.png" alt />
      </swiper-slide>
      <swiper-slide class="slide-small">
        <img src="../../assets/suoluetu-3.png" alt />
      </swiper-slide>
      <swiper-slide class="slide-small">
        <img src="../../assets/suoluetu-4.png" alt />
      </swiper-slide>
      <swiper-slide class="slide-small">
        <img src="../../assets/suoluetu-5.png" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      let swiperTop = this.$refs.swiperTop.swiper;
      let swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.gallery-top {
  width: 100%;
}

.slide img{
    width: 100%;
    height: 100%;
}
.slide-small{
    width: 70px;
    height: 70px;
}
.slide-small img{
    width: 100%;
    height: 101%;
}
.gallery-thumbs {
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide-active {
  background-color: rgb(255, 104, 110)
}
</style>