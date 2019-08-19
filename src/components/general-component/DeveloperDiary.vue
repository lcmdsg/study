<template>
  <div>
    <div class="goodthings-top">
      <div class="goodthings-head">
        <div class="goodthings-head-left"></div>
        <div class="goodthings-head-right">
          <div class="goodthings-head-right-top">
            <div class="goodthings-reads">
              <div class="goodthings-reads-nums">18.4</div>
              <div class="goodthings-reads-category">阅读</div>
            </div>
            <div class="goodthings-reads">
              <div class="goodthings-reads-nums">107</div>
              <div class="goodthings-reads-category">转发</div>
            </div>
            <div class="goodthings-reads">
              <div class="goodthings-reads-nums">1148</div>
              <div class="goodthings-reads-category">订阅</div>
            </div>
          </div>
          <div class="goodthings-head-right-bottom">+ 订阅</div>
        </div>
      </div>
      <div class="goodthings-bottom-title">开发者日记</div>
      <div
        class="goodthings-bottom-desc"
      >选品专家，更是生活达人。这里是严选商品开发者们的大型好物种草现场， 独家收录商品诞生的幕后花絮、开发者们的心路纪实，以及新品好货的一手资料。</div>
    </div>
    <div class="diary-bottom">
      <div class="diary-wrap" v-for="(item,index) in list" :key="index">
        <div class="diary-bottom-head">
          <img class="diary-icon" :src="item.icon" alt />
          <div class="diary-bottom-center">
            <div class="diary-author">{{item.author}}</div>
            <div class="diary-bottom-content">
              <div class="diary-desc">{{item.desc}}</div>
              <div class="diary-date">{{item.date}}</div>
            </div>
          </div>
        </div>
        <a href="javascript:void(0);">
          <img class="diary-img" :src="item.imgSrc" alt />
          <div class="diary-img-foot">
            <div>立即购买</div>
            <span>></span>
          </div>
          <div class="diary-title">{{item.title}}</div>
          <div class="diary-content" v-for="(i,index) in item.contents" :key="index">{{i}}</div>
        </a>
        <div class="diary-bottom-foot">
          <div class="diary-read">
            <img src="../../../public/icon-images/read.png" alt />
            {{item.read}}
          </div>
          <div class="diary-fabulous">
            <img src="../../../public/icon-images/fabulous.png" alt />
            {{item.fabulous}}
          </div>
          <div class="diary-comment">
            <img src="../../../public/icon-images/comment.png" alt />
            {{item.comment}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
import axios from "axios";

export default {
  name: "developerdiary",
  data() {
    return {
      list: [],
      contents:[]
    };
  },
  created() {
    let that = this;
    axios.get("../../../detail/developerdiary.json").then(function(res) {
      that.list = res.data.result;
    });
  }
};
</script>

<style scope>
.diary-bottom {
  width: 100%;
}

.diary-wrap {
  width: 380px;
  padding: 28px 0 14px 0;
  margin: 0 auto;
  border-bottom: 1px solid #f4f4f4;
}

.diary-bottom-head {
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
}

.diary-icon {
  width: 35px;
  height: 35px;
  border-radius: 100%;
}

.diary-bottom-center {
  flex-grow: 1;
  margin-left: 10px;
}

.diary-author {
  font-size: 16px;
  color: #333;
  text-align: left;
  font-weight: 700;
}

.diary-bottom-content {
  font-size: 14px;
  color: #666;
  text-align: left;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
}

.diary-desc {
  position: absolute;
  left: 0;
}

.diary-date {
  position: absolute;
  right: 0;
}

.diary-img {
  width: 100%;
  margin-top: 12px;
  border-radius: 8px 8px 0 0;
}

.diary-img-foot {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #3897f0;
  color: #fff;
  border-radius: 0 0 8px 8px;
  position: relative;
  top: -10px;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
  font-weight: 700;
}

.diary-title {
  margin-top: 18px;
  color: #333;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
}

.diary-content {
  margin: 10px 0;
}

.diary-bottom-foot {
  display: flex;
  flex-direction: row;
}

.diary-read,
.diary-fabulous,
.diary-comment {
  width: 83px;
  font-size: 14px;
}

.diary-read img {
  width: 18px;
}

.diary-fabulous img {
  width: 18px;
}

.diary-comment img {
  width: 18px;
}

.goodthings-top {
  width: 100%;
  height: 248px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}

.goodthings-head {
  width: 92%;
  margin: 27px auto 0;
  height: 90px;
  display: flex;
  justify-content: space-between;
}

.goodthings-head-left {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: url(https://yanxuan.nosdn.127.net/15516679017596603.png);
  background-size: 88px;
}

.goodthings-head-right {
  height: 90px;
  width: 278px;
  position: relative;
}

.goodthings-head-right-top {
  float: right;
}

.goodthings-reads {
  margin-left: 50px;
  text-align: center;
}

.goodthings-reads-nums {
  font-weight: 600;
}

.goodthings-reads-category {
  color: #999;
  font-size: 14px;
}

.goodthings-head-right-bottom {
  width: 80px;
  background: #ce2424;
  height: 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  line-height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.goodthings-bottom-title {
  width: 92%;
  margin: 27px auto 0;
  font-size: 24px;
  font-weight: 600;
}

.goodthings-bottom-desc {
  width: 92%;
  margin: 5px auto 0;
  color: #666;
  font-size: 14px;
}
</style>