<template>
    <div class="walfare-container">
        <div class="walfare-first">
            <div class="walfare-left">
                <div class="walfare-title">福利社</div>
                <div class="walfare-desc">抢超值神券</div>
                <div class="walfare-special">享今日特价</div>
            </div>
            <div class="walfare-right">
                <div class="walfare-square">
                    <div class="walfare-square-newprice">16</div>
                    <div class="walfare-square-oldprice">23</div>
                </div>
                <img src="https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
        </div>
        <div class="walfare-second">
            <div class="walfare-left">
                <div class="walfare-title">严选一起拼</div>
                <div class="walfare-desc">超值一元团</div>
                <span class="walfare-golden">全场包邮</span>
            </div>
            <div class="walfare-right">
                <div class="walfare-square">
                    <div class="walfare-square-newprice">1</div>
                    <div class="walfare-square-oldprice">13.9</div>
                </div>
                <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
        </div>
        <div class="walfare-third">
            <div class="walfare-left">
                <div class="walfare-title">会员俱乐部</div>
                <div class="walfare-desc">领取每月礼券</div>
            </div>
            <div class="walfare-right">
                <img src="https://yanxuan.nosdn.127.net/fb59be6fcbbf5c494a0a92d71369e3ef.gif?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
        </div>
        <div class="walfare-forth">
            <div class="walfare-left">
                <div class="walfare-title">积分兑换</div>
                <div class="walfare-desc">限时限量0元享</div>
            </div>
            <div class="walfare-right">
                <img src="https://yanxuan.nosdn.127.net/15addf04475e65e0c0eb854f8a7c27aa.gif?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .walfare-container{
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .walfare-first{
        position: relative;
        display: flex;
        height: 120px;
        margin-bottom: 2px;
        border-radius: 2px;
        width: 49.7%;
        background: #ebeff6;
        padding-left: 15px;
        padding-top: 10px
    }
    .walfare-second{
        position: relative;
        display: flex;
        width: 49.7%;
        height: 120px;
        background: #EAF3E7;
        margin-bottom: 2px;
        border-radius: 2px;
        padding-left: 15px;
        padding-top: 10px
    }
    .walfare-third{
        display: flex;
        width: 49.7%;
        height: 120px;
        background: #F8EFEE;
        margin-bottom: 2px;
        border-radius: 2px;
        padding-left: 15px;
        padding-top: 10px
    }
    .walfare-forth{
        display: flex;
        width: 49.7%;
        height: 120px;
        background: #F9F3E4;
        margin-bottom: 2px;
        border-radius: 2px;
        padding-left: 15px;
        padding-top: 10px
    }
    .walfare-title{
        font-size: 17px;
        
    }
    .walfare-desc{
        font-size: 13px;
        color: #7F7F7F
    }
    .walfare-special{
        font-size: 14px;
        color: #b4282d;
    }
    .walfare-golden{
        display: inline-block;
        padding: 2px;
        border-radius: 2px;
        background: #CBB693;
        font-size: 12px;
        color: white;
    }
    .walfare-right{
        width: 89px;
    }
     .walfare-right img{
         width: 100%;
     }
     .walfare-square{
         width: 42px;
         height: 42px;
         border-radius: 50%;
         background: #F59524;
         opacity: .8;
         right: 26px;
         color: white;
         position: absolute;
     }
     .walfare-square-newprice{
         font-size: 14px;
         text-align: center;
         padding-top: 3px;
     }
     .walfare-square-oldprice{
         font-size: 12px;
         text-align: center;
        text-decoration: line-through;
     }
     .walfare-square-newprice::before{
         content: "\A5"
     }
     .walfare-square-oldprice::before{
         content: "\A5"
     }
</style>