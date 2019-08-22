<template>
  <div class="content-wrap">
    <div class="content-block">
      <img
        class="content-title-img"
        src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196"
        alt
      />
      <div class="content-list-wrap">
        <div class="content-card" v-for="(item,index) in list" :key="index">
          <img class="card-img" :src="item.imgSrc" alt />
          <div class="card-title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recommend",
  data() {
    return {
      list: []
    };
  },
  created() {
    let that = this;
    axios.get("../../../detail/recommend.json").then(function(res) {
      that.list = res.data.result;
    });
  }
};
</script>

<style>
.content-wrap {
  position: static;
  margin-left: 40px;
  width: 333px;
  height: 100%;
}

.content-block {
  padding: 16px;
  margin-bottom: 54px;
}

.content-title-img {
  width: 100%;
  margin-bottom: 10px;
}

.content-list-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.content-card {
  width: 80px;
  margin: 0 10px;
  margin-bottom: 20px;
}

.card-img {
  width: 100%;
}

.card-title {
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>