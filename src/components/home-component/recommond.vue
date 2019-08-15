<template>
  <div class="middlecontent">
    <!-- 轮播图 -->
    <div class="myswiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item) in swiperimglist" :key="item.imgurl">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
<<<<<<< HEAD
    <!-- 分割栏 -->
    
    <!-- 分割栏 -->
  
    <!-- 请求数据 -->
    
=======
    <!-- 网易自营... -->
    <div class="indexServicePolicy">
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img"><img src="three-icons/first.png" alt=""></div>
        <div class="indexServicePolicy-item-font">网易自营品牌</div>
      </div>
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img"><img src="three-icons/second.png" alt=""></div>
        <div class="indexServicePolicy-item-font">30天无忧退货</div>
      </div>
      <div class="indexServicePolicy-item">
        <div class="indexServicePolicy-item-img"><img src="three-icons/third.png" alt=""></div>
        <div class="indexServicePolicy-item-font">48小时快速退款</div>
      </div>
    </div>
     <!--十张小图片 -->
     <div class="carousel">
       <div class="eachcarousel" v-for="(item,index) in teniconsList" :key="index">
         <div class="eachcarousel-img"><img :src="item.imgurl" alt=""></div>
         <div class="eachcarousel-font">{{item.imgname}}</div>
       </div>
     </div>
     <!-- 一个GIF广告图 -->
     <div class="advergif">
       <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt="">
     </div>
     <!-- 9.9超值首发。。 -->
     <div>
       <div class="fourplate">
         <div class="eachplate" v-for="(item,index) in fourpicList" :key="index">
           <div class="eachplate-title">{{item.pictitle}}</div>
           <div class="eachplate-name">{{item.picname}}</div>
           <div class="eachplate-pic">
             <img :src="item.picurl1" alt="">
             <img :src="item.picurl2" alt="">
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
      <div class="timeshopping">
        <div class="timeshopping-head">
          <div class="timeshopping-head-left">
            <span>限时购</span>
            <timecoubttime></timecoubttime>
          </div>
          <div class="timeshopping-head-right">
              更多
          </div>
          <div class="timeshopping-head-right"></div>
        </div>
      </div>
      
>>>>>>> 8c889dea42ae7b4349036070906754aa3e0e52de
  </div>
</template>
<script>
import timecoubttime from "../widgets/timecoubttime.vue"
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
<<<<<<< HEAD
// import axios from 'axios'

=======
import axios from 'axios'
import recommendswiper from "../widgets/recommendswiper.vue"
>>>>>>> 8c889dea42ae7b4349036070906754aa3e0e52de
export default {
  
  components: {
    recommendswiper,
    swiper,
    swiperSlide,
    timecoubttime
  },
  methods: {
  countDownS_cb: function (x) {
    console.log(x)
  },
  countDownE_cb: function (x) {
    console.log(x)
  }
},
  data() {
    return {
        filllist:[],
      swiperimglist: [
        "https://yanxuan.nosdn.127.net/a4ee2a554b5b553e2165ef9a66766986.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/55ea3a83648f21c3add7db2ee4eb8553.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/f377290320aac364e5984ce70f6baaea.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/82a811bf9a93fe5775fa8e702695b193.jpg?imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/54a48c6de3477f6a908c46f34f08ff45.jpg?imageView&quality=75&thumbnail=750x0",
      ],
      swiperOption: {
        autoplay: false,
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      teniconsList:[
        {imgurl:"https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif",imgname:"新品首发"},
        {imgurl:"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",imgname:"居家生活"},
        {imgurl:"https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png",imgname:"服饰鞋包"},
        {imgurl:"https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png",imgname:"美食酒水"},
        {imgurl:"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",imgname:"个护清洁"},
        {imgurl:"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",imgname:"母婴亲子"},
        {imgurl:"https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",imgname:"运动旅行"},
        {imgurl:"https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",imgname:"数码家电"},
        {imgurl:"https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",imgname:"全球特色"},
        {imgurl:"https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif",imgname:"超级会员"},
        ],
      fourpicList:[
        {picurl1:"https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75",picurl2:"https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75",picname:"180款爆品新定价",pictitle:"9.9超值专区首发"},
        {picurl1:"https://yanxuan-item.nosdn.127.net/a8669df048c4de899f432c69502121ed.png?imageView&thumbnail=150x150&quality=75",picurl2:"https://yanxuan-item.nosdn.127.net/3321ee2d70b1e062422b40e4cb2cc74b.png?imageView&thumbnail=150x150&quality=75",picname:"汇聚每日新折扣",pictitle:"福利社"},
        {picurl1:"https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",picurl2:"https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75",picname:"严选必买爆款",pictitle:"断货补单王"},
        {picurl1:"https://yanxuan-item.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75",picurl2:"https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75",picname:"拔草不悔的凑单爆款",pictitle:"20元内种草好物"}
      ]
    };
  },
<<<<<<< HEAD
  mounted() {
      
    //   let that=this
    // axios.get("../../../homeheadimgs/minicomponent.json").then(function(res) {
    //   console.log(res.data.result);
    //   that.filllist=res.data.result;
    // });
  },
//   computed: {
//     swiper() {
//       return this.$refs.mySwiper.swiper;
//     }
//   }
=======

>>>>>>> 8c889dea42ae7b4349036070906754aa3e0e52de
};
</script>
<style>

.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  vertical-align: top;
  padding-bottom: 1px;
}
.swiper-pagination-bullet{
  width: 22px;
  height: 2px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  background: white;
}
.indexServicePolicy{
  width: 100%;
  background: white;
  border-bottom: 1px solid red;
  height: 38px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
.indexServicePolicy-item{
  margin-left: 10px;
  width: 30%;
  height: 24px;
  display: flex;
  align-items: center
}
.indexServicePolicy-item-img{
  width: 20px;
  height: 20px;
}
.indexServicePolicy-item-img>img{
  width: 100%;
}
.indexServicePolicy-item-font{
  font-size: 13px;
}
.carousel{
  display: flex;
  flex-wrap: wrap;
}
.eachcarousel{
  padding: 8px 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px
  
}
.eachcarousel-img{
  width: 75%;
}
.eachcarousel-img img{
  width: 100%;
}
.advergif{
  width: 100%;
}
.advergif img{
  width: 100%;
}
.fourplate{
  width: 92%;
  margin: 8px auto 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.eachplate{
  width: 49.8%;
  /* display: flex;
  flex-direction: column; */
  background: #F5F5F5;
  margin-bottom: 2px
}
.eachplate-title{
  padding: 14px 0 3px 20px;
  font-size: 17px
}
.eachplate-name{
  padding-left:20px;
  font-size: 13px;
  color: #7f7f7f;
}
.eachplate-pic{
  padding-left:15px;
  padding-bottom: 8px;
  width: 52%;
  display: flex;
}
.eachplate-pic img{
  width: 100%;
}
.dividerline {
  height: 11px;
  border-bottom: 11px solid rgb(245, 245, 245);
  background-color: rgb(245, 245, 245);
}
.timeshopping{
  background: white;
}
.timeshopping-head{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center
}
</style>