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
          <div class="swiper-slide" v-for="(item,index) in productnewlist.swiperimg" :key="index">
            <img
             
              :src="item"
            />
          </div>
        </swiper>
        <div class="detail-content">
          <div class="derail-price">
            <span class="derail-price-now">{{productnewlist.nowprice}}</span>
          </div>
          <div class="detail-exclusive">
            <span class="detail-exclusive-special" v-if="(productnewlist.special)">{{productnewlist.special}}</span>
          </div>
        </div>
      </div>
      <div class="detail-footer">
        <div class="detail-contact-service">
          <img src="../../assets/kefu.png" alt />
        </div>
        <div class>
          <span class="detail-contact-buy">立即购买</span>
        </div>
        <div>
          <span class="detail-contact-cart"  @click="addGood(productnewlist)">加入购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js";
import axios from "axios";

export default {
    props: ["index"],
  store:store,
 computed:{
   productnewlist(){
     return this.$store.state.productnewlist;
   }
 },
 methods:{
   addGood(productnewlist) {
      this.$store.commit("addGood", productnewlist);
    }
 },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
     
    
    };
  },
 
  mounted() {
    // let that = this;
    // axios.get("../../../data/detail.json").then(function(res) {
    //   console.log(res.data.list[0].swiperimg);
    //   that.detaillist = res.data.firstlist.newlist;
      // that.swiperlist=res.data.list;
      // console.log(that.swiperlist.swiperimg);
      // console.log(res.data.list);
      console.log(this.productnewlist.swiperimg)
    // });
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
  align-items: center;
  z-index: 9999;
}
.derail-price-now{
  height: 40px;
  padding-left: 20px;
  font-size: 24px;
  color: #B4282D
}
.derail-price-now::before{
  content: "\A5"
}
.detail-exclusive-special{
  margin-left: 20px;
  font-size: 15px;
  border: 1px solid #B4282D;
  color: #B4282D
}
.detail-contact-service{
  width: 87px;
  text-align: center;
  border-right: 1px solid #f5f5f5
}
.detail-contact-service img{
  padding-top: 10px;
  width: 32px;
}
.detail-contact-buy{
  display: inline-block;
  width: 163px;
  height: 100%;
  text-align: center;
}
.detail-contact-cart{
  display: inline-block;
  width: 163px;
  height: 55px;
  padding-top: 15px;
  text-align: center;
  background: #B4282D;
  color: white;
}
</style>