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
        <div class="each-goodthing"  v-for="(item,index) in goodtingslist" :key="index">
            <div class="each-goodthing-top">
                <div class="each-goodthing-top-via"><img :src="item.via"></div>
                <div class="each-goodthing-top-via-right">
                    <div class="each-goodthing-top-auther">{{item.auther}}</div>
                    <div class="each-goodthing-top-date">{{item.date}}</div>
                </div>
            </div>
            <div class="each-goodthing-middle">
                <img :src="item.imgurl">
                <div class="each-goodthing-middle-buy" :style="{color:item.color}">
                    <div>立即购买</div>
                    <div>></div>
                </div>
            </div>
            <div class="each-goodthing-artical">
                <div class="each-goodthing-artical-title">{{item.title}}</div>
                <div class="each-goodthing-artical-desc">{{item.desc}}</div>
                <div class="each-goodthing-bottom">
                    <div class="each-goodthing-bottom-zan"><span class="each-goodthing-bottom-zan-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA/1BMVEVHcEzf39/Nzc3Pz8/Ozs7Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3S0tLMzMzNzc3MzMzOzs7Ozs7MzMzNzc3Nzc3Nzc3Ozs7MzMzMzMz////MzMzMzMzNzc3R0dHNzc3MzMzT09PNzc3Nzc3MzMzR0dH////Nzc3Nzc3Nzc3MzMzNzc3MzMzX19fNzc3MzMzNzc3MzMzNzc3MzMzNzc3////Nzc3Pz8/MzMzNzc3MzMzPz8/Nzc3MzMzMzMzOzs7MzMzOzs7Pz8/Ozs7MzMzOzs7Q0NDOzs7MzMzOzs7MzMzOzs7Ozs7MzMzMzMzNzc3MzMzOzs7MzMzMzMzMzMzNzc3MzMyWePkGAAAAVHRSTlMACFswH9v9oouAvRGw5KBUXh4pLvRJ/C0E5utRFnX6F6PHfgsDrZO3c+DPE7uR/tTA3ukByjvj86pF+A/3bb4vOjQjWCs5KF3NQ4bXN4VkWQXYGXGePlLIAAABHUlEQVRIx93Vx07DQBSF4Ys9BJweUugtoffeewmht/P+z8LCM7YjBflciRVnaf3fwpY8I/J3+3r7rn8o+vcagM9hur9vAAAOTlmwgnBLZP9oe2RJMONAP9e3ag4UOPDgeuxw4CIC21Q/tBGBWQoUox7zTF/NxGCdAWtxj0mi9xI9btP76bEk2E/tdxeTPSq9qwljzKqI5Ey72NXj2thVRuK8XACAAREZxO87y97ZvhQ+SAPAyUsIOizAcwimaIAbEREBD+pa4CtBpk8J7P/Kg7wWPGmBpwW+EtiPxAN3qNEgrwWvWuBpga8E7iPRIDr5GyQ4cmCTBCUHFjiw7F5BcqMMOKwmroO9dLDVdWPPXZ0HwbiIHAc91yxfyj/aD+jlY8aC0iyDAAAAAElFTkSuQmCC" alt=""></span>{{item.zan}}</div>
                    <div class="each-goodthing-bottom-speak"><span class="each-goodthing-bottom-zan-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABiVBMVEVHcEzMzMzNzc3MzMzNzc3Nzc3X19fQ0NDNzc3MzMzMzMzMzMzMzMz////Nzc3////Nzc3MzMzNzc3MzMzQ0NDOzs7MzMzMzMzNzc3MzMzNzc3Nzc3Nzc3MzMzNzc3MzMzNzc3Y2NjOzs7Nzc3Nzc3MzMzOzs7Nzc3Nzc3R0dHT09PNzc3////b29vNzc3Nzc3MzMzNzc3Nzc3MzMzNzc3MzMzNzc3Nzc3S0tLNzc3Nzc3MzMzNzc3V1dXNzc3Nzc3Nzc3Nzc3MzMzMzMzNzc3Nzc3MzMzMzMzNzc3Nzc3////MzMzNzc3MzMzPz8/Q0NDMzMzMzMzV1dXMzMzPz8/Ozs7MzMzf39/R0dHMzMzNzc3R0dHPz8/MzMzOzs7MzMzPz8/Ozs7MzMzOzs7Nzc3MzMzS0tLOzs7Ozs7R0dHNzc3MzMzNzc3MzMzNzc3Nzc3Nzc3b29vMzMzMzMzNzc3MzMzOzs7Nzc3T09PNzc3Nzc3MzMzQ0NDNzc3MzMzOzs7MzMzNzc3MzMwU1f0TAAAAgnRSTlMA8vT1TP4TJpRuRmpVA6cC2tTF7TFjFPF73Irk/S1g3kgNVHC9jU6umRYdqQQOj7NLuFZvelDCoxHHqF/MGNG86suhptW2z5Hf6QEF+ApKNg+0BvcwaNgIJxlnLDriUyMgWMgaUs0igR8cOPY9N6RChQfT+0d4XnEXu3bhK2WMRMmytgnXTwAAAXBJREFUGBndwfc7VWEAB/Dvnbj25V57c1GJQlaDKFuZRciobNmrQd+/vEfn8J7xnnPensdPPh/gDtSXn5welx6V7EPFZl0Bdf7a0jg8LGfTZKQmDhdTUdrk5afDSWuAMq/CkKsqplxZCWQe09HgEuy66CK7AVbffHTTCIv0KN0lYJZCDzOPYDS8QC/TMKqkpxUYdVIT+pNsUfeDmtAqhEwfNb9hUx+gJhXCR+p+wa6ImgwIadSVXSZZ/Cyk7hmEVCoogNBCBVsQmqnAB+EpFQxA2KaCDgizNKhJBIXKc97oh8Fb3qqGScUhdWkwWOOtK5icFVMz2Q6DXAq1VSnCxQF1r2Hyhl52YJIborsMWPTSlX8DFu+z6CYGm09+OtuFxFiATl6OQuZdN+X6XkDucw9lnofhJHMuhzbVFXARzs+i2cMJeJgvfFLEG6G9IagopyanCWoi/OfrOhQFea3tA1QtksyLQd13cvwB/seXCO6xvxFi7BZjn8zYAAAAAElFTkSuQmCC" alt=""></span>留言</div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            goodtingslist:[]
        }
    },
    mounted(){
     let that=this
      axios.get("../../../data/goodthings.json").then(function(res) {
        that.goodtingslist=res.data.list;
  })
    }
}
</script>
<style>
    .goodthings-top{
        width: 100%;
        height: 248px;
        border-top: 1px solid #d9d9d9;
       
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
        padding-bottom: 25px;
    }
    .each-goodthing{
        width: 100%;
        border-top: 1px solid #d9d9d9;
    }
    .each-goodthing-top{
        padding-top: 25px;
        padding-bottom: 10px;
        width: 90%;
        margin: 0 auto;
        height: 76px;
        display: flex;
    }
    .each-goodthing-top-via{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .each-goodthing-top-via img{
        width: 100%;
        border-radius: 50%;
    }
    .each-goodthing-top-auther{
        font-weight: 700;
        font-size: 15px;
    }
    .each-goodthing-top-date{
        font-size: 13px;
        color: #666;
    }
    .each-goodthing-top-via-right{
        margin-left: 8px;
    }
    .each-goodthing-middle{
        width: 100%;
    }
    .each-goodthing-middle img{
        width: 100%;
    }
    .each-goodthing-middle-buy{
        height: 42px;
        
        padding: 0 14px;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .each-goodthing-artical{
        width: 92%;
        margin: 0 auto;
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
    }
    .each-goodthing-artical-title{
        font-size: 20px;
        padding: 20px 0 14px 0;
        font-weight: 700;
    }
    /* .each-goodthing-artical-desc{
        padding-bottom: 25px;
    } */
    .each-goodthing-bottom{
        display: flex;
        height: 60px;
        align-items: center;
    }
    .each-goodthing-bottom-zan{
        width: 72px;
        font-size: 15px;
    }
    .each-goodthing-bottom-speak{
        width: 72px;
        font-size: 15px;
    }
    .each-goodthing-bottom-zan-img{
        width: 17px;
        height: 17px;
        margin-right: 3px;
        display: inline-block;
    }
    .each-goodthing-bottom-zan-img img{
        width: 100%;
    }
</style>