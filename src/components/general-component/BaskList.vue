<template>
  <div>
    <div class="bask-head">
      <div class="bask-head-title">让生活更好的N种方法</div>
      <div class="bask-head-desc">
        <div class="bask-head-left">
          <img src="../../assets/yinhao-1.png" alt />
        </div>
        <div class="bask-head-mid">5分钟吃到正宗日式拉面，快乐似神仙</div>
        <div class="bask-head-right">
          <img src="../../assets/yinhao-2.png" alt />
        </div>
      </div>
      <div class="swiper-content">
        <swiper :options="swiperOption">
          <div class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
            <img :src="item" alt />
          </div>
        </swiper>
      </div>
    </div>
    <div class="division"></div>
    <div class="bask-container">
      <div class="bask-container-title">TA们的严选生活</div>
      <div class="bask-container-nav">
        <div
          v-for="(item, i) in tablist"
          :key="i"
          @click="tab(i,$event)"
          :class="{'basknav-active':index==i}"
        >{{item}}</div>
      </div>
      <component :is="componentId"></component>
    </div>
  </div>
</template>
<script>
import Newest from "../basklist-component/Newest.vue";
import MonthHotest from "../basklist-component/MonthHotest.vue";
import Collection from "../basklist-component/Collection.vue";

export default {
  data() {
    return {
      componentId: "Newest",
      index: 0,
      tablist: ["最新", "本月最热", "晒单合辑"],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: false,
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 10
      },
      swiperlist: [
        "https://yanxuan.nosdn.127.net/c31cbfe6327f26c3eee89addf3e0b0ee.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/9a1022eda9e4d55970b2d05995eb5395.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/42dc0f0bb4328eaedff24e47a56cc4f0.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/c8ad7d518b4b0b63ac2a37a95a5bf6d7.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/baa81707c73b9a428085b185fb6038dd.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/1948d7d5b1cbfaf1651bf056181a4e06.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/120e753dfb455eabb0d862ca4c1b7ac6.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/411d204e81d10be4fdcf88ba68049ea3.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/422e6ea066db9f9e16fcb16a69d62014.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/cc7e8f2435bffcbbc2fbb6420ac64783.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/242bd04e0b95f3a71217531c55f39315.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/1ba9b0300270bf3785717fdb1f747f03.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/8d5d89748060c63fca079d33176acfa9.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/dd09fee06f7daca023e701f9ea408699.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/502556e36df622d261466a9b4e80ff55.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/752e2d032300bf3aa7c2e7ac01636d03.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/6c6b9fb896a0c17cbd6ab76e16dadfbc.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/0082037f20cec6945d1343176c064923.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/6b7ed12ea2b298dd8742823397b3b6dd.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/fa9d5704dd621771f6c8c48f39994afc.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/cd0b0b7e3ea571a3a92045229355d6b3.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/64492f4097ba6f52e5e40137725584fc.jpg?imageView&quality=70&thumbnail=240y240",
        "https://yanxuan.nosdn.127.net/c922bd653eb55ced2414bec545c2338c.jpg?imageView&quality=70&thumbnail=240y240"
      ]
    };
  },
  components: {
    Newest: Newest,
    MonthHotest: MonthHotest,
    Collection: Collection
  },
  methods: {
    tab(index) {
      this.index = index;
      switch (index) {
        case 0:
          this.componentId = "Newest";
          break;
        case 1:
          this.componentId = "MonthHotest";
          break;
        case 2:
          this.componentId = "Collection";
          break;
      }
    }
  }
};
</script>
<style>
.bask-head {
  width: 100%;
  height: 258px;
  padding-top: 15px;
  margin-bottom: 10px;
}
.bask-head-title {
  color: #7f7f7f;
  font-size: 15px;
  height: 22px;
  line-height: 25px;
  text-align: center;
}
.bask-head-desc {
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.bask-head-left {
  width: 83px;
  height: 52px;
  padding-left: 60px;
}
.bask-head-left img {
  width: 12px;
  height: 10px;
}
.bask-head-mid {
  width: 248px;
  height: 52px;
  text-align: center;
  font-size: 18px;
  line-height: 23px;
  color: #333;
  overflow: hidden;
}
.bask-head-right {
  width: 83px;
  height: 52px;
  padding-top: 28px;
}
.bask-head-right img {
  width: 12px;
  height: 10px;
}
.swiper-content {
  margin-top: 10px;
}
.swiper-slide img {
  border-radius: 6px;
}
.division {
  width: 100%;
  height: 12px;
  background: rgb(244, 244, 244);
}
.bask-container {
  width: 100%;
  padding-top: 30px;
}
.bask-container-title {
  height: 19px;
  color: #333;
  font-size: 17px;
  height: 25px;
  line-height: 20px;
  margin: 0 10px;
  font-weight: 700;
  text-align: center;
}
.bask-container-nav {
  display: flex;
  flex-direction: row;
  height: 72px;
  padding: 15px 40px;
}
.basknav-active {
  background-color: #ffe4af;
  color: #b0955f;
  font-weight: 700;
}
.bask-container-nav div {
  width: 95px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  line-height: 33px;
  font-size: 15px;
  margin: 10px;
}

</style>