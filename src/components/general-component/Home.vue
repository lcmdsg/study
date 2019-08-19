<template>
  <div class="home-body">
    <div class="home-content" v-for="(item,index) in list" :key="index">
      <a href="javascript:void(0);">
        <div class="content-title">{{item.title}}</div>
        <img class="content-img" :src="item.imgSrc" alt />
        <div>
          <img class="content-imgs" src="../../../public/icon-images/read.png" alt />
          <span class="content-read">{{item.read}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  created() {
    let that = this;
    axios.get("../../../detail/home.json").then(function(res) {
      that.list = res.data.result;
    });
  }
};
</script>

<style scope>
.home-body {
  position: absolute;
  background: #eee;
}

.home-content {
  background: #fff;
  width: 100%;
  margin: 10px 0;
  padding: 18px 15px;
}

.content-title {
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
  line-height: 26px;
}

.content-img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}
.content-imgs {
  width: 14px;
  margin-right: 4px;
}

.content-read {
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
</style>