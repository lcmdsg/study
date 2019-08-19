<template>
    <div class="goodthings-top">
        <div class="goodthings-head">
            <div class="goodthings-head-left"></div>
            <div class="goodthings-head-right">
                <div class="goodthings-head-right-top">
                    <div class="goodthings-reads">
                        <div class="goodthings-reads-nums">10400.8w</div>
                        <div class="goodthings-reads-category">阅读</div>
                    </div>
                    <div class="goodthings-reads">
                        <div class="goodthings-reads-nums"> 14.9w</div>
                        <div class="goodthings-reads-category">转发</div>
                    </div>
                    <div class="goodthings-reads">
                        <div class="goodthings-reads-nums">11.4w</div>
                        <div class="goodthings-reads-category">订阅</div>
                    </div>
                </div>
                <div class="goodthings-head-right-bottom">
                    + 订阅
                </div>
            </div>
        </div>
        <div class="goodthings-bottom-title">网易员工精选</div>
        <div class="goodthings-bottom-desc">在网易自家员工眼里，什么最值得买？订阅此专栏，每天发现一件精选好货，享受一个特惠福利！</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .goodthings-top{
        width: 100%;
        height: 248px;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9
    }
    .goodthings-head{
        width: 92%;
        margin: 27px auto 0;
        height: 90px;
        display: flex;
        justify-content: space-between
    }
    .goodthings-head-left{
        width: 88px;
        height: 88px;
        border-radius: 50%;
        background: url(https://yanxuan.nosdn.127.net/15625705586117441.png);
        background-size:88px;
    }
    .goodthings-head-right{
        height: 90px;
        width: 278px;
        position: relative;

    }
    .goodthings-head-right-top{
        display: flex;
    }
    .goodthings-reads{
        margin-left: 30px;
        text-align: center;
    }
    .goodthings-reads-nums{
        font-weight: 600;
    }
    .goodthings-reads-category{
        color: #999;
        font-size: 14px;
    }
    .goodthings-head-right-bottom{
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
    .goodthings-bottom-title{
        width: 92%;
        margin: 27px auto 0;
        font-size: 24px;
        font-weight: 600;
    }
    .goodthings-bottom-desc{
        width: 92%;
        margin: 5px auto 0;
        color: #666;
        font-size: 14px;
    }
</style>