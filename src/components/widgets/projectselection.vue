<template>
  <div class="projectselection-container">
    <div class="each-projectselection">
        <div class="each-projectselection-img"><img src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt=""></div>
        <div class="each-projectselection-bottom">
            <div class="each-projectselection-bottom-title">直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</div>
            <div class="each-projectselection-bottom-desc">女士精选礼物大赏</div>
        </div>
    </div>
    <div class="each-projectselection">
        <div class="each-projectselection-img"><img src="https://yanxuan.nosdn.127.net/bd2b2c7a026a9b1e00d2bae2907789c1.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt=""></div>
        <div class="each-projectselection-bottom">
            <div class="each-projectselection-bottom-title">喝了这杯酸梅汤, 再也不想喝奶茶了</div>
            <div class="each-projectselection-bottom-desc">还原儿时好味道</div>
        </div>
    </div>
    <div class="each-projectselection">
        <div class="each-projectselection-img"><img src="https://yanxuan.nosdn.127.net/2959418ae75389a86f28bcd73358d7fc.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt=""></div>
        <div class="each-projectselection-bottom">
            <div class="each-projectselection-bottom-title">无负担椰子水, 新鲜得跟现开一样</div>
            <div class="each-projectselection-bottom-desc">椰子水限时6.9折</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.projectselection-container {
  width: 100%;
  height: 208px;
  display: flex;
  overflow-x: auto;
}
.projectselection-container::-webkit-scrollbar {
  display: none;
}
.each-projectselection {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 260px;
  margin-left: 17px;
  border-radius: 5px;
  height: 100%;
  background: #F5F5F5;
}
.each-projectselection-img{
    width: 100%;
}
.each-projectselection-img img{
    width: 100%;
    border-radius: 5px;
}
.each-projectselection-bottom-title{
    width: 222px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 0 3px 10px;
    font-size: 15px;
}
.each-projectselection-bottom-desc{
    padding: 2px 0 3px 10px;
    font-size: 12px;
    color: #7F7F7F
}
</style>