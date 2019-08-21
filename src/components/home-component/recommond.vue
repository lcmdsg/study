<template>
  <div class="middlecontent">
    <!-- 轮播图 -->
    <a href="#backtotop"><img class="backtop" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png"></a>
    <div class="myswiper" id="backtotop">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item) in swiperimglist" :key="item.imgurl">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 分割栏 -->

    <!-- 分割栏 -->

    <!-- 请求数据 -->

    <!-- 网易自营... -->
    <div class="indexServicePolicy">
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img">
          <img src="three-icons/first.png" alt />
        </div>
        <div class="indexServicePolicy-item-font">网易自营品牌</div>
      </div>
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img">
          <img src="three-icons/second.png" alt />
        </div>
        <div class="indexServicePolicy-item-font">30天无忧退货</div>
      </div>
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img">
          <img src="three-icons/third.png" alt />
        </div>
        <div class="indexServicePolicy-item-font">48小时快速退款</div>
      </div>
    </div>
    <!--十张小图片 -->
    <div class="carousel">
      <div class="eachcarousel" v-for="(item,index) in teniconsList" :key="index">
        <div class="eachcarousel-img">
          <img :src="item.imgurl" alt />
        </div>
        <div class="eachcarousel-font">{{item.imgname}}</div>
      </div>
    </div>
    <!-- 一个GIF广告图 -->
    <div class="advergif">
      <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt />
    </div>
    <!-- 9.9超值首发。。 -->
    <div>
      <div class="fourplate">
        <div class="eachplate" v-for="(item,index) in fourpicList" :key="index">
          <div class="eachplate-title">{{item.pictitle}}</div>
          <div class="eachplate-name">{{item.picname}}</div>
          <div class="eachplate-pic">
            <img :src="item.picurl1" alt />
            <img :src="item.picurl2" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 轮播 -->
    <recommendswiper></recommendswiper>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 限时抢购 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>限时购</span>
          <timecoubttime></timecoubttime>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="timeshopping-body">
        <div class="eachshopping-item" v-for="(item,index) in timeshopList" :key="index">
          <img :src="item.imgurl" alt />
          <div class="eachshopping-item-font">
            <span class="eachshopping-item-newprice">{{item.newprice}}</span>
            <span class="eachshopping-item-oldprice">{{item.oldprice}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 新品首发 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>新品首发</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="timeshopping-body">
        <!-- 详情跳转 -->
          <recommendmini v-for="(item,index) in newproductList" :key="index" :item="item" :index="index" :newproductList="newproductList"></recommendmini>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 人气推荐 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>人气推荐</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="popular-big">
        <div class="popular-big-left">
          <img
            src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280"
          />
        </div>
        <div class="popular-big-right">
          <div class="popular-big-right-special">抄底特惠</div>
          <div class="popular-big-right-title">新色 奢华植鞣头层水牛皮席 凉席三件套</div>
          <div class="popular-big-right-desc">三峡水牛头层皮，高端夏凉必备</div>
          <div class="popular-big-right-price">1949</div>
        </div>
      </div>
      <div class="populai-bottom">
        <recommendmini v-for="(item,index) in popularList" :key="index" :item="item" :index="index" :newproductList="newproductList"></recommendmini>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 类目热销榜 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>类目热销榜</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="timeshopping-body">
        <hotsell></hotsell>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 四个图 -->
    <div class="walfare-body">
      <walfare></walfare>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 品牌制造直供 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>品牌制造直供</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="manufacturing-body">
        <manufacturing></manufacturing>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 专题精选 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>专题精选</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="manufacturing-body">
        <projectselection></projectselection>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 众筹 -->
    <div class="timeshopping">
      <div class="timeshopping-head">
        <div class="timeshopping-head-left">
          <span>众筹</span>
        </div>
        <div class="timeshopping-head-right">更多></div>
      </div>
      <div class="crowdfunding-body">
        <crowdfunding></crowdfunding>
      </div>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 最后四个相同组件部分 -->

    <div class="recommendlast-head">
      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg" alt />
    </div>
    <div class="recommendlast-bottom">
      <recommendlastfour v-for="(item,index) in lastfourlist1" :key="index" :item="item"></recommendlastfour>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <div class="recommendlast-head">
      <img src="https://yanxuan.nosdn.127.net/4b09ac57ed87b992e40aad42c197fec6.jpg" alt />
    </div>
    <div class="recommendlast-bottom">
      <recommendlastfour v-for="(item,index) in lastfourlist2" :key="index" :item="item"></recommendlastfour>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <div class="recommendlast-head">
      <img src="https://yanxuan.nosdn.127.net/37449fc9cea8f248ab9d06cbb048fe99.jpg" alt />
    </div>
    <div class="recommendlast-bottom">
      <recommendlastfour v-for="(item,index) in lastfourlist3" :key="index" :item="item"></recommendlastfour>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <div class="recommendlast-head">
      <img src="https://yanxuan.nosdn.127.net/8179e09266b10cfc55d0c99dcfcc4f8e.jpg" alt />
    </div>
    <div class="recommendlast-bottom">
      <recommendlastfour v-for="(item,index) in lastfourlist4" :key="index" :item="item"></recommendlastfour>
    </div>
    <!-- 分割栏 -->
    <div class="dividerline"></div>
    <!-- 底部黑色 -->
    <div class="bottom-black">
      <div class="bottom-black-top">
        <div class="bottom-black-download">下载APP</div>
        <div class="bottom-black-download">电脑版</div>
      </div>
      <p class="bottom-bottom">网易公司版权所有 © 1997-2019</p>
      <p class="bottom-bottom-bottom">食品经营许可证：JY13301080111719</p>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js"
import recommendlastfour from "../widgets/recommendlastfour.vue";
import crowdfunding from "../widgets/crowdfunding.vue";
import projectselection from "../widgets/projectselection.vue";
import manufacturing from "../widgets/manufacturing.vue";
import walfare from "../widgets/walfare.vue";
import hotsell from "../widgets/hotsell.vue";
import recommendmini from "../widgets/recommendmini.vue";
import timecoubttime from "../widgets/timecoubttime.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import axios from 'axios'

import axios from "axios";
import recommendswiper from "../widgets/recommendswiper.vue";

export default {
  store,
  components: {
    recommendlastfour,
    crowdfunding,
    projectselection,
    manufacturing,
    walfare,
    recommendswiper,
    swiper,
    swiperSlide,
    timecoubttime,
    recommendmini,
    hotsell
  },
    computed:{
   
  },
  methods: {
   scrollTop(){
      this.scroll = document.documentElement.scrollTop ;
      // console.log(this.scroll);
    }
  },
  data() {
    return {
      scroll:0,
      lastfourlist1: [],
      lastfourlist2: [],
      lastfourlist3: [],
      lastfourlist4: [],
      popularList: [],
      newproductList: [],
      timeshopList: [],
      filllist: [],
      swiperimglist: [
        "https://yanxuan.nosdn.127.net/a4ee2a554b5b553e2165ef9a66766986.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/55ea3a83648f21c3add7db2ee4eb8553.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/f377290320aac364e5984ce70f6baaea.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/82a811bf9a93fe5775fa8e702695b193.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/54a48c6de3477f6a908c46f34f08ff45.jpg?imageView&quality=75&thumbnail=750x0"
      ],
      swiperOption: {
        autoplay: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      teniconsList: [
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif",
          imgname: "新品首发"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
          imgname: "居家生活"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png",
          imgname: "服饰鞋包"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png",
          imgname: "美食酒水"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
          imgname: "个护清洁"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
          imgname: "母婴亲子"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
          imgname: "运动旅行"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
          imgname: "数码家电"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
          imgname: "全球特色"
        },
        {
          imgurl:
            "https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif",
          imgname: "超级会员"
        }
      ],
      fourpicList: [
        {
          picurl1:
            "https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75",
          picurl2:
            "https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75",
          picname: "180款爆品新定价",
          pictitle: "9.9超值专区首发"
        },
        {
          picurl1:
            "https://yanxuan-item.nosdn.127.net/a8669df048c4de899f432c69502121ed.png?imageView&thumbnail=150x150&quality=75",
          picurl2:
            "https://yanxuan-item.nosdn.127.net/3321ee2d70b1e062422b40e4cb2cc74b.png?imageView&thumbnail=150x150&quality=75",
          picname: "汇聚每日新折扣",
          pictitle: "福利社"
        },
        {
          picurl1:
            "https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",
          picurl2:
            "https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75",
          picname: "严选必买爆款",
          pictitle: "断货补单王"
        },
        {
          picurl1:
            "https://yanxuan-item.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75",
          picurl2:
            "https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75",
          picname: "拔草不悔的凑单爆款",
          pictitle: "20元内种草好物"
        }
      ]
    };
  },
  mounted() {
    let that = this;
    axios.get("../../../data/recommendtimeshopping.json").then(function(res) {
      // console.log(res.data.list);
      that.timeshopList = res.data.list;
    });
    axios.get("../../../data/newproduct.json").then(function(res) {
      // console.log(res.data.newlist);
      that.newproductList = res.data.newlist;
    });
    axios.get("../../../data/popularrecommend.json").then(function(res) {
      // console.log(res.data.newlist);
      that.popularList = res.data.newlist;
    });
    axios.get("../../../data/recommendlastfour.json").then(function(res) {
      // console.log(res.data.firstlist.newlist);
      that.lastfourlist1 = res.data.firstlist.newlist;
      that.lastfourlist2 = res.data.secondlist.newlist;
      that.lastfourlist3 = res.data.thirdlist.newlist;
      that.lastfourlist4 = res.data.forthlist.newlist;
    });
  }
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // }
};
</script>
<style>
.swiper-slide {
  display: flex;
  flex-shrink: 0;
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  vertical-align: top;
  padding-bottom: 1px;
}
.swiper-pagination-bullet {
  width: 22px;
  height: 2px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  background: white;
}
.indexServicePolicy {
  width: 100%;
  background: white;
  height: 38px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
.indexServicePolicy-item {
  margin-left: 10px;
  width: 30%;
  height: 24px;
  display: flex;
  align-items: center;
}
.indexServicePolicy-item-img {
  width: 20px;
  height: 20px;
}
.indexServicePolicy-item-img > img {
  width: 100%;
}
.indexServicePolicy-item-font {
  font-size: 13px;
}
.carousel {
  display: flex;
  flex-wrap: wrap;
}
.eachcarousel {
  padding: 8px 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
}
.eachcarousel-img {
  width: 75%;
}
.eachcarousel-img img {
  width: 100%;
}
.advergif {
  width: 100%;
}
.advergif img {
  width: 100%;
}
.fourplate {
  width: 92%;
  margin: 8px auto 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.eachplate {
  width: 49.8%;
  /* display: flex;
  flex-direction: column; */
  background: #f5f5f5;
  margin-bottom: 2px;
}
.eachplate-title {
  padding: 14px 0 3px 20px;
  font-size: 17px;
}
.eachplate-name {
  padding-left: 20px;
  font-size: 13px;
  color: #7f7f7f;
}
.eachplate-pic {
  padding-left: 15px;
  padding-bottom: 8px;
  width: 52%;
  display: flex;
}
.eachplate-pic img {
  width: 100%;
}
.dividerline {
  height: 11px;
  border-bottom: 11px solid rgb(245, 245, 245);
  background-color: rgb(245, 245, 245);
}
.timeshopping {
  background: white;
}
.timeshopping-head {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.timeshopping-head-left {
  margin-left: 15px;
  font-size: 18px;
}
.timeshopping-head-right {
  margin-right: 20px;
}
.timeshopping-body {
  display: flex;
  flex-wrap: wrap;
}
.eachshopping-item {
  width: 29%;
  display: flex;
  flex-direction: column;
  margin-left: 3.3%;
  padding-bottom: 14px;
}
.eachshopping-item img {
  width: 100%;
  background: #f5f5f5;
}
.eachshopping-item-font {
  padding-left: 10px;
  padding-top: 8px;
}
.eachshopping-item-newprice {
  color: #b4282d;
  font-size: 16px;
}
.eachshopping-item-newprice::before {
  content: "\A5";
}
.eachshopping-item-oldprice {
  color: #7f7f7f;
  font-size: 14px;
  text-decoration: line-through;
}
.eachshopping-item-oldprice::before {
  content: "\A5";
}
.popular-big {
  display: flex;
  width: 92%;
  margin: 0 auto;
  height: 150px;
  background: #fef0df;
}
.popular-big-left {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  background: url(https://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png);
}
.popular-big-left img {
  width: 100%;
}
.popular-big-right {
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.popular-big-right-special {
  padding: 2px;
  transform: scale(0.9);
  font-size: 11px;
  background: white;
  color: #b4282d;
  border: 1px solid red;
  border-radius: 2px;
  width: 56px;
}
.popular-big-right-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 190px;
  font-size: 15px;
  margin-top: 8px;
}
.popular-big-right-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 190px;
  color: #7f7f7f;
  font-size: 13px;
  margin-top: 2px;
}
.popular-big-right-price {
  color: #b4282d;
}
.popular-big-right-price::before {
  content: "\A5";
  font-size: 15px;
}
.populai-bottom {
  margin: 14px auto;
  padding-left: 5px;
}
.walfare-body {
  margin: 15px 0;
}
.manufacturing-body {
  margin-bottom: 15px;
}
.crowdfunding-body {
  border-top: 1px solid #f5f5f5;
  padding-bottom: 18px;
}
.recommendlast-lastfour {
  display: flex;
  overflow: auto;
}
.bottom-black {
  width: 100%;
  height: 130px;
  background: #414141;
}
.bottom-black-top {
  margin: 0 auto;
  width: 220px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.bottom-black-download {
  text-align: center;
  width: 100px;
  height: 36px;
  line-height: 36px;
  margin-top: 30px;
  border: 1px solid #999;
  color: white;
  font-size: 15px;
  border-radius: 3px;
}
.bottom-bottom {
  text-align: center;
  font-size: 13px;
  color: #999;
  margin-top: 45px;
}
.bottom-bottom-bottom {
  text-align: center;
  font-size: 13px;
  color: #999;
}
</style>