<template>
  <div class="contentcontainer">
    <div class="cart-head">
      <div class="cart-title">购物车</div>
      <router-link to="/user">
        <div class="cart-ticket">领券</div>
      </router-link>
    </div>
    <!-- 无商品 -->
    <div v-if="seen">
      <div class="cart-desc">
        <div class="cart-safe">
          <div class="cart-span">。</div>
          <div class="cart-ensure">30天无忧退货</div>
        </div>
        <div class="cart-safe">
          <div class="cart-span">。</div>
          <div class="cart-ensure">48小时快速退款</div>
        </div>
        <div class="cart-safe">
          <div class="cart-span">。</div>
          <div class="cart-ensure">满88元免邮费</div>
        </div>
      </div>
      <div class="cart-content">
        <div class="cart-content-img">
          <img src="../../assets/big-cart.png" alt />
        </div>
        <div class="cart-content-add">去添加点什么吧</div>
        <router-link to="/user">
          <div class="cart-content-register">登录</div>
        </router-link>
      </div>
    </div>
    <!-- 有商品 -->
    <div class="cart-item"  v-for="(item, index) in goodList" :key="index">
      <div class="cart-redsqure"></div>
      <div class="cart-item-body">
        <img class="cart-item-img" :src="item.imgurl" alt="">
        <div class="cart-item-right">
          <div class="cart-item-title"><span class="cart-item-special">{{item.special}}</span>{{item.title}}</div>
          <div class="cart-item-price"><span class="cart-item-newprice">{{item.oldprice}}</span><span class="cart-item-oldprice">{{item.oldprice}}</span></div>
          <div class="cart-plus-minus">
            <span class="cart-plus-minus-left" @click="minus(index)">-</span>
            <span class="cart-plus-minus-mid">{{item.count}}</span>
            <span class="cart-plus-minus-right" @click="add(index)">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js"
export default {
  store:store,
  data(){
    return{
      seen:false
    }
  },
  computed:{
        goodList(){
            return this.$store.state.goodList
        }
  },
   methods:{
        minus(index){
            this.$store.commit("minus", index);
        },
        add(index){
            this.$store.commit("add", index);
        }
    }
};
</script>
<style>
.contentcontainer{
  background: #EEEEEE;
  height: 100%;
}
.cart-head {
  width: 100%;
  height: 50px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  line-height: 45px;
}
.cart-title {
  font-size: 20px;
  color: #333;
}
.cart-ticket {
  font-size: 16px;
  color: #b4282d;
}
.cart-desc {
  padding: 10px 15px;
  background: rgb(238, 238, 238);
  height: 40px;
  display: flex;
  flex-direction: row;
}
.cart-safe {
  width: 34%;
  color: #666;
  text-align: center;
  display: flex;
  flex-direction: row;
  position: relative;
}
.cart-span {
  position: absolute;
  top: -6px;
  color: rgb(200, 200, 200);
  font-size: 15px;
  padding-bottom: 20px;
}
.cart-ensure {
  position: absolute;
  font-size: 13px;
  left: 15px;
}

.cart-content {
  background: rgb(244, 244, 244);
  text-align: center;
  height: 600px;
  padding-top: 225px;
}
.cart-content-img {
  margin: 0 auto;
  width: 135px;
  height: 135px;
}
.cart-content-img img {
  width: 100%;
  height: 100%;
}
.cart-content-add {
  margin-bottom: 30px;
  font-size: 15px;
  color: #999;
}
.cart-content-register {
  margin: auto;
  width: 265px;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  color: #fff;
  background-color: #b4282d;
  border-radius: 2px;
}
.cart-item{
  display: flex;
  background: white;
  height: 124px;
}
.cart-redsqure{
  width: 48px;
}
.cart-item-body{
  padding-top: 12px;
  padding-right: 18px;
  display: flex;
}
.cart-item-img{
  width: 98px;
  height: 98px;
  background: #EEEEEE
}
.cart-item-right{
  position: relative;
  margin-left: 10px;
}
.cart-item-title{
  font-size: 15px;
}
.cart-item-price{
  margin-top: 60px;
  width: 78px;
  height: 16px;
}
.cart-item-newprice::before{
  content: "\A5"
}
.cart-item-oldprice{
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
.cart-item-oldprice::before{
  content: "\A5"
}
.cart-plus-minus{
  position: absolute;
  right: 0px;
  bottom: 10px;
}
.cart-plus-minus-left{
  display: inline-block;
  width: 33PX;
  height: 27PX;
  border: 1px solid #999;
  text-align: center;
}
.cart-plus-minus-right{
  display: inline-block;
  width: 33PX;
  height: 27PX;
  border: 1px solid #999;
  text-align: center;
  
}
.cart-plus-minus-mid{
  display: inline-block;
  width: 24PX;
  height: 27PX;
  border: 1px solid #999;
  text-align: center;
}
.cart-item-special{
  color: #f48f18
}
</style>