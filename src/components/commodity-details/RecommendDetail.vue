<template>
  <div>
    <div class="general-container">
      <div class="general-head">
        <div class="general-home">
          <router-link to="/">
            <img src="../../assets/general-home.png" alt />
          </router-link>
        </div>
        <div class="general-title">
          <img class="yanxuan-img" src="../../assets/wyyanxuan.png" alt />
        </div>
        <div class="general-icons">
          <router-link to="/search">
            <img src="../../assets/general-search.png" alt />
          </router-link>
          <router-link to="/cart">
            <img src="../../assets/general-cart.png" alt />
          </router-link>
        </div>
      </div>
      <div class="detail-container">
        <swiper :options="swiperOption">
          <div class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
            <img
              :src="swiperlist.swiperimg"
              alt
            />
          </div>
        </swiper>
        <div class="detail-content">
          <div class="derail-price">
            <span class="derail-price-now">{{swiperlist.nowprice}}</span>
            <span class="derail-price-origin">{{swiperlist.oldprice}}</span>
          </div>
          <div class="detail-exclusive">
            <span>{{swiperlist.special}}</span>
          </div>
        </div>
      </div>
      <div class="detail-footer">
        <div class="detail-contact-service">
          <img src="../../assets/kefu.png" alt />
        </div>
        <div class>
          <span>立即购买</span>
        </div>
        <div>
          <span>加入购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js";
import axios from "axios";

export default {
    props: ["item"],
  store:store,
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      swiperlist:[]
    };
  },
  methods: {
    // addCart(item) {
    //   this.$store.commit("addGood", item);
    // }
  },
  mounted() {
    let that = this;
    axios.get("../../../data/detail.json").then(function(res) {
    //   console.log(res.data.list[0].swiperimg);
    //   that.detaillist = res.data.firstlist.newlist;
      that.swiperlist=res.data.list[0];
    //   console.log(that.swiperlist.swiperimg)
    });
  }
};
</script>

<style>
.detail-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 54px;
  background: white;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  z-index: 9999;
}
</style>