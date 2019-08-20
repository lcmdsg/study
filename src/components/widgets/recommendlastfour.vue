<template>
  <div class="each-recommendlast-item">
    <div class="each-recommendlast-item-golden" v-if="(item.goldfont)">{{item.goldfont}}</div>
    <div class="each-recommendlast-item-pic">
      <img :src="item.imgurl" alt />
    </div>
    <div class="each-recommendlast-item-title">{{item.title}}</div>
    <div class="each-recommendlast-item-price">{{item.price}}</div>
    <span class="each-recommendlast-item-special" v-if="(item.special)">{{item.special}}</span>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style>
.recommendlast-container {
  width: 100%;
  display: flex;
}
.recommendlast-head {
  width: 100%;
  margin-bottom: 10px;
}
.recommendlast-head img {
  width: 100%;
}
.recommendlast-bottom {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
.recommendlast-bottom::-webkit-scrollbar {
  display: none;
}
.each-recommendlast-item {
  position: relative;
  flex-shrink: 0;
  width: 27%;
  margin-left: 15px;
  height: 202px;
}
.each-recommendlast-item-pic {
  width: 100%;
  background: #f5f5f5;
  margin-bottom: 1px;
}
.each-recommendlast-item-pic img {
  width: 100%;
}
.each-recommendlast-item-title {
  font-size: 13px;
  margin-bottom: 1px;
}
.each-recommendlast-item-price {
  color: #b4282d;
  font-size: 13px;
  margin-bottom: 1px;
}
.each-recommendlast-item-price::before {
  content: "\A5";
}
.each-recommendlast-item-special {
  border: 1px solid #ce2424;
  color: #ce2424;
  font-size: 12px;
  border-radius: 6px;
  padding: 1px 5px;
}
.each-recommendlast-item-golden {
  width: 18px;
  /* height: 66px; */
  border: 1px solid #b4a078;
  position: absolute;
  left: 6px;
  top: 8px;
  color: #b4a078;
  text-align: center;
  font-size: 12px;
}
</style>