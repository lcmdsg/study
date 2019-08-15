
<template>
<!-- 小组件，居家生活，服饰鞋包等。。。-->
  <div class="family-card" :class="[index%2==0?'padding-right':'padding-left']">
    <img :src="detail.imgSrc" alt />
    <div class="family-card-imgdesc">{{detail.imgDesc}}</div>
    <div class="family-card-describe">{{detail.describe}}</div>
    <div class="family-card-price">
      <span class="price-now">{{detail.price}}</span>
      <span class="price-origin" v-if="detail.originPrice">{{detail.originPrice}}</span>
    </div>
    <span class="family-discounts" v-if="detail.discounts">{{detail.discounts}}</span>
    <span class="family-empty" v-if="detail.empty">{{detail.empty}}</span>
    <span class="family-discounts" v-if="detail.overflow">{{detail.overflow}}</span>
    <div class="family-select" v-if="detail.select">{{detail.select}}</div>
  </div>
</template>

<script>
export default {
  props: ["detail", "index"]
};
</script>

<style>
.family-card {
  width: 50%;
  flex-shrink: 0;
  position: relative;
}
.family-card img {
  width: 100%;
  vertical-align: top;
}
.padding-right {
  margin-top: 5px;
  padding-right: 5px;
}

.padding-left {
  margin-top: 5px;
  padding-left: 5px;
}
.price-now {
  font-size: 18px;
  color: #b4282d;
  height: 24px;
  line-height: 24px;
  position: relative;
  display: inline-block;
  position: relative;
  padding-left: 10px;
}

.price-origin {
  display: inline-block;
  margin: 0 6px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  position: relative;
  padding-left: 7px;
}
.price-now::before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 18px;
  text-decoration: none;
}

.price-origin::before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  text-decoration: none;
}

.family-card-describe {
  margin-top: 4px;
  line-height: 30px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.family-card-imgdesc {
  bottom: 0;
  width: 100%;
  background: #f1ece2;
  font-size: 14px;
  color: #9f8a60;
  letter-spacing: 0;
  line-height: 18px;
  padding: 1px 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.family-discounts {
  margin-top: 5px;
  margin-bottom: 6px;
  padding: 0 7px;
  line-height: 13px;
  height: 16px;
  text-align: center;
  color: #ce2424;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ce2424;
  font-size: 11px;
  border-radius: 8px;
  display: inline-block;
  vertical-align: middle;
}
.family-empty {
  margin-top: 5px;
  margin-bottom: 6px;
  padding: 0 7px;
  line-height: 13px;
  height: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #7f7f7f;
  font-size: 11px;
  border-radius: 8px;
  display: inline-block;
  vertical-align: middle;
  color: #7f7f7f;
}
.family-select {
  position: absolute;
  border-width: 0.5px;
  border-radius: 2px;
  border-style: solid;
  border-color: #b4a078;
  width: 16px;
  top: 0;
  margin-top: 4px;
  margin-left: 4px;
  padding: 2px 0;
  color: #b4a078;
  background-color: #f4f4f4;
  font-size: 10px;
  text-align: center;
}
span{
  margin-right: 3px;
}
</style>