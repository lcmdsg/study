<template>
  <div class="home-body">
    <div class="home-content" v-for="(item,index) in list" :key="index">
      <div v-if="item.type=='a'">
        <a href="javascript:void(0);">
          <div class="content-head">
            <img class="content-icon" :src="item.icon" alt />
            <span class="content-author">{{item.author}}</span>
          </div>
          <div class="content-title">{{item.title}}</div>
          <img class="content-img" :src="item.imgSrc" alt />
          <div class="content-foot">
            <img class="content-imgs" src="../../../public/icon-images/read.png" alt />
            <span class="content-read">{{item.read}}</span>
          </div>
        </a>
      </div>
      <div v-if="item.type=='b'">
        <a href="javascript:void(0);">
          <div class="content-flex">
            <div class="content-left">
              <div class="content-head">
                <img class="content-icon" :src="item.icon" alt />
                <span class="content-author">{{item.author}}</span>
              </div>
              <div class="content-title">{{item.title}}</div>
              <div class="content-desc">{{item.desc}}</div>
              <div class="content-foot">
                <img class="content-imgs" src="../../../public/icon-images/read.png" alt />
                <span class="content-read">{{item.read}}</span>
              </div>
            </div>
            <img class="content-right" :src="item.imgSrc" alt />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "goodperson",
  data() {
    return {
      list: []
    };
  },
  created() {
    let that = this;
    axios.get("../../../detail/goodperson.json").then(function(res) {
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
  position: relative;
}

.content-flex {
  display: flex;
  flex-direction: row;
}

.content-left {
  width: 220px;
  margin-right: 10px;
  position: relative;
}

.content-right {
  width: 150px;
  height: 150px;
  border-radius: 4px;
}

.content-head {
  height: 28px;
  margin-bottom: 12px;
}

.content-icon {
  width: 28px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  margin-right: 6px;
}

.content-author {
  display: inline-block;
  font-size: 14px;
  color: #333;
  line-height: 28px;
  position: absolute;
}

.content-title {
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
  line-height: 26px;
}

.content-desc {
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  padding-top: 4px;
  color: #7f7f7f;
}

.content-img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.content-foot {
  position: absolute;
  bottom: 0;
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