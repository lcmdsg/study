<template>
  <div class="contentcontainer">
    <div class="cart-head">
      <div class="cart-title">购物车</div>
      <router-link to="/user">
        <div class="cart-ticket">领券</div>
      </router-link>
    </div>
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
</template>
<script>
export default {};
</script>
<style>
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
</style>