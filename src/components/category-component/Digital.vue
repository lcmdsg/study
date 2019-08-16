<template>
  <div class="content-wrap">
    <div class="content-block">
      <img
        class="content-title-img"
        src="https://yanxuan.nosdn.127.net/f9c8a5d0f52faebad2f0cf647a057cd8.jpg?imageView&thumbnail=0x196"
        alt
      />
      <div v-for="(item,index) in completeList" :key="index">
        <div class="content-list-head">{{item.head}}</div>
        <div class="content-list-wrap">
          <div class="content-card" v-for="(i,index) in item.list" :key="index">
            <img class="card-img" :src="i.imgSrc" alt />
            <div class="card-title">{{i.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "digital",
  data() {
    return {
      completeList: [],
      list:[]
    };
  },
  created() {
    let that = this;
    axios.get("../../../detail/digital.json").then(function(res) {
      that.completeList = res.data.completeList;
    });
  }
};
</script>

<style>
.content-wrap {
  position: static;
  margin-left:40px;
  width: 333px;
  height: 100%;
}

.content-block {
  padding: 16px;
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

.content-list-head {
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 700;
  color: #333;
  border-bottom: 1px solid #d9d9d9;
}
</style>