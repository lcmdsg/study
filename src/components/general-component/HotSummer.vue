<template>
  <div class="middlecontent">
    <div class="hot-summer-head">
      <img src="../../assets/shengxia-1.jpeg" alt />
      <img src="../../assets/shengxia-2.jpg" alt />
      <img src="../../assets/shengxia-3.jpeg" alt />
    </div>
    <!-- 缩略图，还没做好 -->
    <summerswiper></summerswiper>
    <div class="hot-summer-head">
      <img src="../../assets/shengxia-4.jpeg" alt />
    </div>
    <!-- 组件 -->
    <div class="summer-buy">
      <div class="summer-buy-head">
        <img :src="summerbuy.imghead" alt />
      </div>
      <div class="widgets-content" style="background-color:#95d0a2">
        <summer-buy
          v-for="(item, index) in summerbuy.list"
          :key="index"
          :detail="item"
          :index="index"
        ></summer-buy>
        <div class="summer-buy-item-more" style="background-color:rgb(71, 121, 83)">
          <div class="summer-buy-item-a">查看更多</div>
          <div class="summer-buy-item-jiantou">></div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut-line"></div>
    <!-- 组件 -->
    <div class="summer-buy">
      <div class="summer-buy-head">
        <img :src="summerbuy2.imghead" alt />
      </div>
      <div class="widgets-content" style="background-color:#ff9d7d">
        <summer-buy
          v-for="(item, index) in summerbuy2.list"
          :key="index"
          :detail="item"
          :index="index"
        ></summer-buy>
        <div class="summer-buy-item-more" style="background-color:rgb(217, 80, 34)">
          <div class="summer-buy-item-a">查看更多</div>
          <div class="summer-buy-item-jiantou">></div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut-line"></div>
    <!-- 组件 -->
    <div class="summer-buy">
      <div class="summer-buy-head">
        <img :src="summerbuy3.imghead" alt />
      </div>
      <div class="widgets-content" style="background-color:#ed8ab9">
        <summer-buy
          v-for="(item, index) in summerbuy3.list"
          :key="index"
          :detail="item"
          :index="index"
        ></summer-buy>
        <div class="summer-buy-item-more" style="background-color:rgb(178, 61, 116)">
          <div class="summer-buy-item-a">查看更多</div>
          <div class="summer-buy-item-jiantou">></div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut-line"></div>
    <!-- 组件 -->
    <div class="summer-buy">
      <div class="summer-buy-head">
        <img :src="summerbuy4.imghead" alt />
      </div>
      <div class="widgets-content" style="background-color:#7ac7e3">
        <summer-buy
          v-for="(item, index) in summerbuy4.list"
          :key="index"
          :detail="item"
          :index="index"
        ></summer-buy>
        <div class="summer-buy-item-more" style="background-color:rgb(15, 121, 161)">
          <div class="summer-buy-item-a">查看更多</div>
          <div class="summer-buy-item-jiantou">></div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut-line"></div>
    <div class="hot-summer-head">
      <img src="../../assets/shengxia-5.jpeg" alt />
    </div>
    <div class="summer-commodity">
      <!-- 组件 -->
      <div class="summer-commodity-content">
        <div class="summer-commodity-content-head">
          <img :src="summergoods.imghead" alt />
        </div>
        <div class="summer-commodity-contents">
          <summer-goods
            v-for="(item, index) in summergoods.list"
            :key="index"
            :detail="item"
            :index="index"
          ></summer-goods>
        </div>
        <div class="summer-commodity-more">查看更多</div>
      </div>
    </div>
    <div class="summer-commodity">
      <div class="summer-commodity-content">
        <div class="summer-commodity-content-head">
          <img :src="summergoods2.imghead" alt />
        </div>
        <div class="summer-commodity-contents">
          <summer-goods
            v-for="(item, index) in summergoods2.list"
            :key="index"
            :detail="item"
            :index="index"
          ></summer-goods>
        </div>
        <div class="summer-commodity-more">查看更多</div>
      </div>
    </div>
    <div class="hot-summer-head">
      <img src="../../assets/shengxia-4.jpeg" alt />
    </div>
    <!-- 评论 -->
    <summer-user
      v-for="(item, index) in summeruser.list"
      :key="index"
      :detail="item"
      :index="index"
    ></summer-user>
  </div>
</template>
<script>
import summerswiper from "../widgets/SummerSwiper.vue";
import axios from "axios";
import summerbuy from "../widgets/summerbuy.vue";
import summergoods from "../widgets/summergoods.vue";
import summeruser from "../widgets/summeruser.vue";
export default {
  data() {
    return {
      summerbuy: {},
      summerbuy2: {},
      summerbuy3: {},
      summerbuy4: {},
      summergoods: {},
      summergoods2: {},
      summeruser: {}
    };
  },
  created() {
    let that = this;
    axios.get("../../../data/summerspecial.json").then(function(res) {
      that.summerbuy = res.data.buy;
      that.summerbuy2 = res.data.buy2;
      that.summerbuy3 = res.data.buy3;
      that.summerbuy4 = res.data.buy4;
    });
    axios.get("../../../data/summergoods.json").then(function(res) {
      that.summergoods = res.data.goods;
      that.summergoods2 = res.data.goods2;
    });
    axios.get("../../../data/summeruser.json").then(function(res) {
      that.summeruser = res.data.user;
    });
  },
  components: {
    summerswiper,
    "summer-buy": summerbuy,
    "summer-goods": summergoods,
    "summer-user": summeruser
  }
};
</script>
<style>
.widgets-content {
  display: flex;
  flex-direction: row;
}
.cut-line {
  width: 100%;
  height: 5px;
  background: #fff;
}
.hot-summer-head {
  width: 100%;
}
.hot-summer-head img {
  width: 100%;
}
.summer-buy {
  padding: 5px 3px;
}
.summer-buy-head {
  width: 100%;
  height: 97px;
}
.summer-buy-head img {
  width: 100%;
  height: 100%;
}
.summer-buy-wrap {
  display: flex;
  flex-direction: row;
}
.summer-buy-wrap-item {
  width: 110px;
  height: 214px;
  margin: 5px 3px;
  background: #fff;
}
.summer-buy-item-img {
  width: 110px;
  height: 100px;
}
.summer-buy-item-img img {
  width: 100%;
  height: 100%;
}
.summer-buy-item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 110px;
  height: 25px;
  line-height: 26px;
  font-size: 13px;
  color: #3b3b3b;
  padding: 0 3px;
  margin-top: 3px;
}
.summer-buy-item-discount {
  width: 110px;
  height: 20px;
  text-align: center;
}
.summer-buy-item-span1 {
  line-height: 13px;
  font-size: 12px;
  color: #e98c29;
  border: 1px solid #e98c29;
  padding: 0 2px;
  margin: 0 2px;
  vertical-align: middle;
}
.summer-buy-item-span2 {
  line-height: 13px;
  font-size: 12px;
  color: #e36843;
  border: 1px solid #e36843;
  padding: 0 2px;
  margin: 0 2px;
  vertical-align: middle;
}
.summer-buy-item-price {
  margin: 6px auto;
  text-align: center;
  height: 20px;
}
.summer-buy-item-price-now {
  font-size: 17px;
  line-height: 20px;
  color: #d83535;
  font-weight: 500;
}
.summer-buy-item-price-now::before {
  content: "\A5";
  left: 0;
  top: 0;
  font-size: 14px;
  text-decoration: none;
}
.summer-buy-item-price-origin {
  font-size: 12px;
  line-height: 20px;
  color: #9b9b9b;
  text-decoration: line-through;
}
.summer-buy-item-price-origin::before {
  content: "\A5";
  left: 0;
  top: 0;
  font-size: 10px;
  text-decoration: none;
}
.summer-buy-item-buy {
  background-color: #dc4516;
  width: 88px;
  height: 23px;
  line-height: 24px;
  border-radius: 21px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin: 5px auto;
}
.summer-buy-item-more {
  width: 48px;
  height: 214px;
  position: relative;
  margin: 5px 3px;
}
.summer-buy-item-a {
  position: absolute;
  width: 33px;
  height: 40px;
  font-size: 14px;
  white-space: normal;
  text-align: center;
  left: 5px;
  top: 25%;
  color: #fff;
}
.summer-buy-item-jiantou {
  width: 30px;
  height: 30px;
  position: absolute;
  border: 1px solid #fff;
  font-size: 20px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  top: 48%;
  left: 7px;
}
.summer-commodity {
  width: 100%;
  height: 425px;
  padding: 0px 5px;
  background: rgb(244, 254, 255);
}
.summer-commodity-content {
  width: 100%;
  height: 365px;
  background: rgb(245, 179, 118);
  border-radius: 5px;
  padding: 4px 4px;
}
.summer-commodity-content-head {
  width: 392px;
  height: 176px;
  margin: auto;
}
.summer-commodity-content-head img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}
.summer-commodity-contents {
  display: flex;
  justify-content: space-around;
}
.summer-commodity-contents-item {
  width: 124px;
  height: 170px;
  margin: 5px 1px;
  background: #fff;
  position: relative;
}
.summer-plummet {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #c03329;
  color: #fff;
  font-size: 10px;
  top: 5px;
  right: 5px;
  text-align: center;
  padding-top: 5px;
  line-height: 13px;
}
.summer-commodity-contents-item img {
  width: 124px;
  height: 124px;
}
.summer-commodity-desc {
  font-size: 12px;
  line-height: 12px;
  height: 13px;
  color: #2f2f2f;
  text-align: center;
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.summer-commodity-price {
  height: 21px;
  color: #c33328;
  margin: 5px auto;
  text-align: center;
  overflow: hidden;
}
.summer-commodity-price-now {
  font-size: 16px;
  line-height: 10px;
}
.summer-commodity-price-now::before {
  content: "\A5";
  left: 0;
  top: 0;
  font-size: 14px;
  text-decoration: none;
}
.summer-commodity-price-origin {
  font-size: 12px;
  line-height: 10px;
  color: #b5b5b5;
  text-decoration: line-through;
  margin-left: 2px;
}
.summer-commodity-price-origin::before {
  content: "\A5";
  left: 0;
  top: 0;
  font-size: 12x;
  text-decoration: none;
}
.summer-commodity-more {
  width: 150px;
  height: 33px;
  color: #fff;
  font-size: 15px;
  line-height: 34px;
  text-align: center;
  background-image: url(https://yanxuan.nosdn.127.net/15585202823963314.png);
  background-size: 100%;
  margin: 20px auto;
}
.summer-evaluate {
  width: 100%;
  height: 350px;
  background-color: #fff;
  padding: 15px 20px;
}
.summer-evalute-goods {
  height: 181px;
  display: flex;
  flex-direction: row;
}
.summer-evalute-left {
  width: 181px;
  height: 181px;
  margin-right: 26px;
}
.summer-evalute-left img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.summer-evalute-right {
  width: 168px;
  height: 181px;
}
.summer-evalute-info {
  width: 168px;
  font-size: 17px;
  font-weight: 700;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.summer-evalute-price {
  display: flex;
  flex-direction: row;
  height: 30px;
  color: #ab0923;
  white-space: nowrap;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
}
.summer-evalute-originprice {
  font-size: 15px;
  color: #939393;
  margin-left: 4px;
  text-decoration: line-through;
  vertical-align: -3px;
  line-height: 25px;
}
.summer-evalute-originprice::before {
  content: "\A5";
  text-decoration: none;
}
.summer-evalute-pricenum::before {
  content: "\A5";
  text-decoration: none;
}
.summer-evalute-price img {
  width: 29px;
  height: 29px;
  margin-left: 10px;
}
.summer-evalute-img img {
  width: 94px;
  height: 94px;
  margin-top: 6px;
}
.summer-evalute-user {
  height: 117px;
  position: relative;
  margin-top: 15px;
  background: #f8f6ef;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
}
.summer-evalute-user::before {
  position: absolute;
  content: "\25BC";
  color: #f8f6ef;
  font-size: 14px;
  top: -11px;
  left: 20px;
  transform: rotate(180deg);
}
.summer-evalute-tag {
  height: 20px;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
}
.summer-evalute-tag span {
  display: inline-block;
  text-align: center;
  width: auto;
  height: 16px;
  line-height: 14px;
  padding: 0 3px;
  color: #ab0923;
  border: 1px solid #ab0923;
  font-size: 12px;
}
.summer-evalute-head {
  padding-top: 15px;
  padding-left: 9px;
  width: 70px;
  height: 75px;
}
.summer-evalute-head img {
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
.summer-evalute-user-info {
  width: 276px;
  height: 70px;
  margin-top: 30px;
  margin-left: 10px;
}
.summer-evalute-user-name {
  height: 20px;
  font-size: 10px;
  color: #777;
  padding-bottom: 3px;
  border-bottom: 1px solid #c0bfbc;
  overflow: hidden;
  white-space: nowrap;
}
.summer-evalute-user-name span {
  margin-right: 15px;
}
.summer-evalute-content {
  font-size: 12px;
  line-height: 20px;
  padding-top: 8px;
  height: 48px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.summer-evalute-division {
  width: 100%;
  height: 8px;
  background: rgb(255, 240, 229);
}
</style>