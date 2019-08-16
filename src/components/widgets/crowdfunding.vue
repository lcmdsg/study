<template>
  <div class="crowdfunding-container">
    <div class="each-crowdfunding">
      <div class="each-crowdfunding-left">
        <img
          src="https://yanxuan.nosdn.127.net/721fd65889559e3ceff651c81c18685a.png?imageView&thumbnail=210x210&quality=75"
          alt
        />
      </div>
      <div class="each-crowdfunding-right">
        <div class="each-crowdfunding-right-title">来自地心的礼物</div>
        <div class="each-crowdfunding-right-price">899<span class="each-crowdfunding-right-price-font">起</span></div>
        <div class="each-crowdfunding-right-progress">
          <el-progress :percentage="4" :color="color" :format="format"></el-progress>
        </div>
        <div class="each-crowdfunding-right-person">2人已支持</div>
      </div>
    </div>
    <div class="each-crowdfunding">
      <div class="each-crowdfunding-left">
        <img
          src="https://yanxuan.nosdn.127.net/71134f6fcdefe050c24031d26d02fbad.png?imageView&thumbnail=210x210&quality=75"
          alt
        />
      </div>
      <div class="each-crowdfunding-right">
        <div class="each-crowdfunding-right-title">一把七亿岁的石瓢壶</div>
        <div class="each-crowdfunding-right-price">188<span class="each-crowdfunding-right-price-font">起</span></div>
        <div class="each-crowdfunding-right-progress">
          <el-progress :percentage="60" :color="color" :format="format"></el-progress>
        </div>
        <div class="each-crowdfunding-right-person">30人已支持</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            color:"orange",
        }
    },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>
<style>
.crowdfunding-container {
  width: 92%;
  margin: 0 auto;
}
.each-crowdfunding {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.each-crowdfunding-left {
  background: #f4f4f4;
  width: 30%;
}
.each-crowdfunding-left img {
  width: 100%;
}
.each-crowdfunding-right {
  padding: 10px 0;
  width: 66%;
}
.each-crowdfunding-right-title{
    font-size: 15px;
    margin-bottom: 2px;
}
.each-crowdfunding-right-price{
    font-size: 17px;
    color: #b4282d;
    margin-bottom: 2px;
}
.each-crowdfunding-right-price::before{
    content: "\A5"
}
.each-crowdfunding-right-price-font{
    font-size: 14px;
}
.each-crowdfunding-right-person{
    font-size: 13px;
    color: #7F7F7F;
    margin-top: 3px;
}
</style>