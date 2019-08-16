<template>
  <div class="hotsell-container">
    <div class="hotsell-container-head">
      <div class="each-hotsell-head-left">
        <div class="each-hotsell-head-desc">
          <div >热销榜</div>
          <div class="hotsell-line"></div>
        </div>
        <div class="each-hotsell-head-left-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
        </div>
      </div>
      <div class="each-hotsell-head-right">
        <div class="each-hotsell-head-desc">
          <div>好评榜</div>
          <div class="hotsell-line"></div>
        </div>
        <div class="each-hotsell-head-right-img">
          <img
            src="https://yanxuan-item.nosdn.127.net/4717ea0609e155f7743a332ea9690824.png?imageView&quality=65&thumbnail=200x200"
            alt
          />
        </div>
      </div>
    </div>
    <div class="hotsell-container-bottom">
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                居家生活榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                美食酒水榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                服饰鞋包榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                个护清洁榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                运动旅行榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                数码家电榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                母婴亲子榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
        <div class="each-hotsell-bottom">
            <div class="each-hotsell-bottom-title">
                全球严选榜
            </div>
            <div class="each-hotsell-bottom-img">
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.hotsell-container {

  width: 92%;
  margin: 10px auto;
}
.hotsell-container-head {
  height: 106px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
}
.each-hotsell-head-left {
    display: flex;
    align-items: center;
  width: 49.3%;
  background: #f9f3e4;
}
.each-hotsell-head-right {
    align-items: center;
    display: flex;
  width: 49%;
  background: #ebeff6;
}
.each-hotsell-head-left-img {
  height: 106px;
  width: 106px;
}
.each-hotsell-head-left-img img{
    width: 100%;
}
.each-hotsell-head-right-img {
  height: 106px;
  width: 106px;
}
.each-hotsell-head-right-img img{
    width: 100%;
}
.hotsell-line{
    width: 30px;
    height: 3px;
    background: black;
    margin-top: 5px
}
.each-hotsell-head-desc{
    margin: 0 26px 0 10px;
    font-size: 14px
}
.hotsell-container-bottom{
    width: 100%;
    margin-bottom: 9px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.each-hotsell-bottom{
    margin-bottom: 5px;
    width: 24%;
    height: 100px;
    background: #f5f5f5;
}
.each-hotsell-bottom-img{
    width: 100%;
    padding-bottom: 13px;
    text-align: center;
}
.each-hotsell-bottom-img img{
     width: 90%;
}
.each-hotsell-bottom-title{
    text-align: center;
    padding-top: 7px;
font-size: 13px;
}
</style>