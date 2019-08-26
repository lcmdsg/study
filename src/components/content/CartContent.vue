<template>
  <div class="contentcontainer">
    <!-- 无商品 -->
    <div class="cart-head" v-if="!goodList.length">
      <div class="cart-title">购物车</div>
      <router-link to="/user">
        <div class="cart-ticket">领券</div>
      </router-link>
    </div>
    <div v-if="!goodList.length">
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
    <div class="cart-head">
      <div class="cart-title">购物车</div>
      <div>
        <router-link to="/user">
          <span class="cart-ticket">领券</span>
        </router-link>
        <span class="cart-edit" @click="changecart">编辑</span>
      </div>
    </div>
    <div v-for="(item, index) in goodList" :key="index">
      <div class="cart-item-container">
        <div class="cart-item">
          <div class="cart-redsqure" @click="selectitem(item)">
            <img
              v-show="(item.checked)"
              class="delete-good-redsqure-img"
              src="images/cartyes.jpg"
              alt
            />
          </div>
          <div class="cart-item-body">
            <img class="cart-item-img" :src="item.imgurl" alt />
            <div class="cart-item-right">
              <div class="cart-item-title">
                <span class="cart-item-special">{{item.special}}</span>
                {{item.title}}
              </div>
              <div class="cart-item-price">
                <span class="cart-item-newprice">{{item.nowprice}}</span>
                <span class="cart-item-oldprice">{{item.oldprice}}</span>
              </div>
              <div class="cart-plus-minus">
                <span
                  class="cart-plus-minus-left"
                  :style="{borderColor:'#999'}"
                  @click="minus(index)"
                >-</span>
                <span class="cart-plus-minus-mid">{{item.count}}</span>
                <span class="cart-plus-minus-right" @click="add(index)">+</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 下单 -->
        <div class="delete-good" v-show="look">
          <div>
            <span class="delete-good-redsqure" @click="checkAll(true)">
              <img
                v-show="checkAllFlag"
                class="delete-good-redsqure-img"
                src="images/cartyes.jpg"
                alt
              />
            </span>
            <span class="delete-good-choose">已选{{count}}件</span>
          </div>
          <div class="allgoods-money">合计:{{money}}</div>
          <router-link to="/user">
            <div class="delete-good-del">下单</div>
          </router-link>
        </div>
        <!--编辑删除  -->
        <div class="delete-good" v-show="!look">
          <div>
            <span class="delete-good-redsqure" @click="checkAll(true)">
              <img
                v-show="checkAllFlag"
                class="delete-good-redsqure-img"
                src="images/cartyes.jpg"
                alt
              />
            </span>
            <span class="delete-good-choose">已选{{count}}件</span>
          </div>
          <div class="delete-good-del" @click="del(index)">删除所选</div>
        </div>
      </div>
    </div>
    <div class="kongbai"></div>
  </div>
</template>
<script>
import store from "../store/index.js";
export default {
  store: store,
  data() {
    return {
      look: true,
      choose: true,
      // aa:false,
      pricelist: [],
      checkAllFlag: false,
      money: 0,
      count: 0
    };
  },
  computed: {
    productnewlist() {
      return this.$store.state.productnewlist;
    },
    goodList() {
      return this.$store.state.goodList;
    },
    seen() {
      return this.$store.state.seen;
    },
    // totalMoney() {
    //   return this.$store.getters.totalMoney;
    // },
    // totalcount() {
    //   return this.$store.getters.totalcount;
    // }
  },

  methods: {
    computemoney() {
      this.money = 0;
      this.count = 0; 
      this.goodList.forEach(item => {
        //遍历商品，如果选中就进行加个计算，然后累加
        if (item.checked) {
          this.money += item.nowprice * item.count;
          this.count += item.count; //累加的
        }
      });
    },
    selectitem(item) {
      if (typeof item.checked == "undefined") {
        this.$set(item, "checked", true); //局部注册
      } else {
        item.checked = !item.checked; //状态取反
      }
      //如果取消一个商品的选中，全选也取消
      var itemisChecked = [];
      this.goodList.forEach(function(item) {
        if (item.checked === true) {
          itemisChecked.push(item);
        }
      });
      if (itemisChecked.length === this.goodList.length) {
        this.checkAllFlag = true;
      } else {
        this.checkAllFlag = false;
      }
      this.computemoney();
      // console.log(this.totalMoney)
      // console.log(this.checkAllFlag)
    },
    checkAll: function() {
      this.checkAllFlag = !this.checkAllFlag;
      this.goodList.forEach(item => {
        if (typeof item.checked == "undefined") {
          //检测属性是否存在
          this.$set(item, "checked", this.checkAllFlag); //局部注册
        } else {
          item.checked = this.checkAllFlag; //状态取反
        }
      });
      this.computemoney();
    },
    changechoose() {
      this.choose = !this.chooose;
    },
    changecart() {
      this.look = !this.look;
    },
    minus(index) {
      this.$store.commit("minus", index);
      this.computemoney();
    },
    add(index) {
      this.$store.commit("add", index);
      this.computemoney();
    },
    del(index) {
      this.$store.commit("del", index);
    }
  }
};
</script>
<style>
.kongbai {
  width: 100%;
  height: 110px;
}
.contentcontainer::-webkit-scrollbar {
    display: none;
}
.contentcontainer {
  overflow: auto;
  flex-grow: 1;
}
.cart-item-container {
  background: #eeeeee;
  margin-top: 50px;
  /* height: 630px; */
}
.cart-item {
  height: 116px;
  position: relative;
  margin-bottom: 8px;
  width: 100%;
}
.cart-item-title {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart-head {
  padding-bottom: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  line-height: 45px;
  border-bottom: 1px solid #eeeeee;
  z-index: 9999;
}
.cart-title {
  font-size: 20px;
  color: #333;
}
.cart-ticket {
  font-size: 16px;
  color: #b4282d;
  margin-right: 7px;
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
  height: 650px;
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
.cart-item {
  display: flex;
  align-items: center;
  background: white;
  height: 124px;
}
.cart-redsqure {
  width: 20px;
  height: 20px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  margin: 10px;
}
.cart-item-body {
  padding-top: 12px;
  padding-right: 18px;
  display: flex;
}
.cart-item-img {
  width: 98px;
  height: 98px;
  background: #eeeeee;
}
.cart-item-right {
  margin-left: 10px;
}
.cart-item-title {
  font-size: 15px;
}
.cart-item-price {
  margin-top: 60px;
  width: 78px;
  height: 16px;
}
.cart-item-newprice::before {
  content: "\A5";
}
.cart-item-oldprice {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
.cart-item-oldprice::before {
  content: "\A5";
}
.cart-plus-minus {
  position: absolute;
  right: 24px;
  bottom: 10px;
}
.cart-plus-minus-left {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 33px;
  height: 27px;
  border: 1px solid #eeeeee;
  text-align: center;
}
.cart-plus-minus-right {
  display: inline-block;
  width: 33px;
  height: 27px;
  margin: 0;
  padding: 0;
  border: 1px solid #eeeeee;
  text-align: center;
}
.cart-plus-minus-mid {
  display: inline-block;
  width: 24px;
  margin: 0;
  padding: 0;
  height: 27px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
}
.cart-item-special {
  color: #f48f18;
}
.delete-good {
  background: white;
  width: 100%;
  height: 53px;
  bottom: 54px;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delete-good-del {
  width: 126px;
  background: #b4282d;
  color: white;
  text-align: center;
  height: 100%;
  line-height: 53px;
}
.delete-good-redsqure {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  margin-left: 15px;
}
.delete-good-choose {
  font-size: 14px;
  color: #999;
}
.allgoods-money {
  color: #b4282d;
  margin-left: 40px;
  font-size: 15px;
}
.delete-good-redsqure-img {
  width: 100%;
}
</style>