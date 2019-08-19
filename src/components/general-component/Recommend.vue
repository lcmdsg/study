<template>
    <div>
        <!-- 分割栏 -->
      <div class="dividerline"></div>
      <!-- 顶部图片 -->
      <div class="up-img">
          <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
       <!-- 分割栏 -->
      <div class="dividerline"></div>
      <div class="gerneral-recommend-container" v-for="(item,index) in typeList" :key="index">
          <!-- type-a -->
          <div class="aa" v-if="item.type=='a'">
            <div class="gerneral-recommend-a">
                <div class="gerneral-recommend-a-top">
                    <div class="gerneral-recommend-a-top-via">
                        <img :src="item.via">
                    </div>
                    <div class="gerneral-recommend-a-top-author">{{item.auther}}</div>
                </div>
                <div class="gerneral-recommend-a-title">{{item.title}}</div>
                <div class="gerneral-recommend-a-img"><img :src="item.imgurl"></div>
                <div class="gerneral-recommend-a-person">
                    <div class="gerneral-recommend-a-person-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg=="></div>
                    <div class="gerneral-recommend-a-person-person">{{item.person}}</div>
                </div>
                
            </div>
            <!-- 分割栏 -->
            <div class="dividerline"></div>
          </div>
          <!-- type-b -->
          <div class="bb"  v-if="item.type=='b'">
            <div class="gerneral-recommend-b">
                <div class="gerneral-recommendb-left">
                    <div class="gerneral-recommend-a-top">
                        <div class="gerneral-recommend-a-top-via">
                            <img :src="item.via">
                        </div>
                        <div class="gerneral-recommend-a-top-author">{{item.auther}}</div>
                    </div>
                    <div class="gerneral-recommendb-left-title">
                        {{item.title}}
                    </div>
                    <div class="gerneral-recommendb-left-desc">{{item.desc}}</div>
                    <div class="gerneral-recommend-a-person">
                        <div class="gerneral-recommend-a-person-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg=="></div>
                        <div class="gerneral-recommend-a-person-person">{{item.person}}</div>
                    </div>
                </div>
                <div class="gerneral-recommendb-right">
                    <img :src="item.imgurl" alt="">
                </div>
            </div>
            <!-- 分割栏 -->
                <div class="dividerline"></div>
          </div>
          <!-- type-c -->
          <div class="cc"  v-if="item.type=='c'">
            <div class="gerneral-recommend-c">
                <div class="gerneral-recommend-a-title">{{item.title}}</div>
                <div class="gerneral-recommend-a-change">
                     
                        <div class="gerneral-recommend-a-changeimg" v-for="(item1) in item.imgurl" :key="item1">
                            <img :src="item1" alt="">
                        </div>
        
                </div>
                <div class="gerneral-recommend-a-person">
                    <div class="gerneral-recommend-a-person-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg=="></div>
                    <div class="gerneral-recommend-a-person-person">{{item.person}}</div>
                </div>
            </div>
          </div>
          
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
     components: {
    swiper,
    swiperSlide
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
   data() {
      return {
          typeList:[],
        swiperOption: {
           slidesPerView: 5,
            spaceBetween: 30,
            
            

        }
      }
    },
     mounted() {
      
      let that=this
      axios.get("../../../data/shiwurecommend.json").then(function(res) {
      console.log(res.data.list);
        that.typeList=res.data.list;
    });
     
  },
}
</script>
<style>
.swiper-slide{
    touch-action: none;
    display: block;
}
    .up-img{
        width: 92%;
        margin: 20px auto;
        border-radius: 5px;
    }
    .up-img img{
        width: 100%;
        border-radius: 5px;
    }
    .gerneral-recommend-a{
        width: 92%;
        margin: 0 auto;
        padding-top: 18px;
    }
    .gerneral-recommend-a-top{
       padding: 0;
    }
    .gerneral-recommend-a-top-via{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #d9d9d9;
    }
    .gerneral-recommend-a-top-via img{
        
        border-radius: 50%;
        width: 100%;
    }
    .gerneral-recommend-a-top-author{
        display: inline-block;
        height: 30px;
        vertical-align: top;
        padding-left: 5px;
        padding-top: 5px;
    }
    .gerneral-recommend-a-title{
        margin: 3px 0;
        font-size: 20px;
    }
    .gerneral-recommend-a-img{
        width: 100%;
        border-radius: 5px;
    }
    .gerneral-recommend-a-img img{
         width: 100%;
        border-radius: 5px;
    }
    .gerneral-recommend-a-person{
        display: flex;
    }
    .gerneral-recommend-a-person-icon{
        width: 18px;
    }
    .gerneral-recommend-a-person-icon img{
        width: 100%;
    }
    .gerneral-recommend-a-person-person{
        padding-top: 3px;
        padding-left: 3px;
        color: #999;
        font-size: 12px;
        padding-bottom: 15px;
    }
    .gerneral-recommend-b{
        display: flex;
        justify-content: space-between;
        width: 92%;
        margin: 0 auto;
        padding-top: 18px;
    }
    .gerneral-recommendb-left{
        width: 58%;
    }
    .gerneral-recommendb-left-title{
        padding-top: 15px;
        font-size: 20px;
    }
    .gerneral-recommendb-left-desc{
        padding-top: 3px;
        padding-bottom: 15px;
        font-size: 15px;
        color: #999
    }
    .gerneral-recommendb-right{
        padding-top: 5px;
        width: 38%
    }
    .gerneral-recommendb-right img{
        
        border-radius: 4px;
        width: 100%;
    }
     .gerneral-recommend-c{
       
        width: 92%;
        margin: 0 auto;
        padding: 18px 0;
    }
    .gerneral-recommend-a-change::-webkit-scrollbar {
        display: none;
    }
    .gerneral-recommend-a-change{
        display: flex;
        overflow-x: auto;
        height: 160px;
        width: 100%;
        padding: 10px 0;
        flex-shrink: 0;
    }
    .gerneral-recommend-a-changeimg{
        width: 140px;
        height: 140px;
        margin: 5px 10px;
        flex-shrink: 0;
    }
    .gerneral-recommend-a-changeimg img{
        width: 100%;
        flex-shrink: 0;
        border-radius: 8px;
    }
</style>