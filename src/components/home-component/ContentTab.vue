<template>
  <div class="topcontainer">
    <div class="top">
      <div class="search-bar">
        <div class="searchimg">
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          />
        </div>
        <router-link to="/search">
          <div class="search-click">
            <img src="../../assets/search.png" id="tab-bar-item-img" />

            <div class="search-text">搜索商品, 共21849款好物</div>
          </div>
        </router-link>
        <div class="search-my">
          <router-link to="/user">
            <div class="register">登录</div>
          </router-link>
        </div>
      </div>
      <!-- <content-tab></content-tab> -->
    </div>
    <div class="nav-wrap" ref="navwrap">
      <div
        class="nav-item"
        v-for="(item,i) in tabList"
        :key="i"
        @click="navclick(i,$event)"
        :class="{'active1':i==index}"
      >{{item}}</div>
      <div class="nav-item-empty"></div>
    </div>
    <div class="xiala" @click="xiala">
      <img
        src="../../assets/jian-tou.png"
        :class="[rotate?'fa fa-arrow-down go':'fa fa-arrow-down aa']"
      />
    </div>
    <div class="shade" v-if="shadeshow">
      <div class="misscontent" v-if="seen">
        <!-- <div class="xiala" @click="xiala">
        <img src="../../assets/jian-tou.png" :class="[rotate?'fa fa-arrow-down go':'fa fa-arrow-down aa']"/>
        </div>-->
        <div class="misscontent-title">全部</div>
        <div class="misscontent-content">
          <div
            class="misscontent-each"
            v-for="(item,i) in tabList"
            :key="i"
            @click="navclick(i,$event)"
            :class="{'active2':i==index}"
          >{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      tabList: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
      index: 0,
      seen: false,
      rotate: false,
      shadeshow: false
    };
  },
  methods: {
    xiala() {
      this.seen = !this.seen;
      this.rotate = !this.rotate;
      this.shadeshow = !this.shadeshow;
    },
    navclick(i, event) {
      this.index = i;
      this.$emit("navclick", i);
      if (this.index > 0) {
        let a=event.clientX-event.target.offsetLeft;
        this.$refs.navwrap.scrollLeft = (event.clientX-a);
      }
    }
  }
};
</script>
<style>
.topcontainer {
  width: 100%;
  position: fixed;
  z-index: 21;
}
.top {
  display: flex;
  flex-direction: column;
  /* position: fixed; */
  top: 0;
  width: 100%;
  z-index: 21;
}
.search-bar {
  height: 44px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: #fff;
}
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
.router-link-active {
  text-decoration: none;
}
.searchimg {
  margin-left: 8px;
  width: 78px;
  height: 44px;
  margin-top: 22px;
  /* height: 17px; */
}
.searchimg > img {
  width: 100%;
}
.search-click {
  padding: 0 30px;
  width: 270px;
  height: 33px;
  background: #ededed;
  color: #666;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  display: flex;
  align-items: center;
}
.register {
  width: 38px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #b4282d;
  border: 1px solid #b4282d;
  border-radius: 5px;
  font-size: 13px;
}
.search-my {
  width: 40px;
}
.active1 {
  border-bottom: 2px solid #b4282d;
}
.misscontent-content > .active2 {
  border-color: #b4282d;
  color: #b4282d;
  border: 1px solid #b4282d;
}
.nav-wrap::-webkit-scrollbar {
  display: none;
}
.nav-wrap {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 44px;
  width: 100%;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  background: #fff;
  overflow: auto;
}
.nav-item {
  line-height: 28px;
  height: 30px;
  margin: 0 13px;
  font-size: 14px;
  flex-shrink: 0;
}
.nav-item-empty {
  line-height: 28px;
  height: 30px;
  margin: 0 13px;
  font-size: 14px;
  flex-shrink: 0;
  width: 10px;
}
.xiala {
  z-index: 9999;
  width: 8%;
  height: 30px;
  position: fixed;
  right: 0px;
  background: #fff;
  text-align: center;
  line-height: 35px;
}
.xiala img {
  width: 50%;
  height: 60%;
}
.misscontent {
  z-index: 9999;
  position: fixed;
  overflow: hidden;
  background-color: #fff;
}
.el-collapse,
.el-collapse-item {
  z-index: 1;
}
.misscontent-title {
  padding-left: 20px;
  height: 30px;
  line-height: 30px;
}
.misscontent-content {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-shrink: 0;
  width: 100%;
}
.misscontent-each {
  width: 87px;
  height: 32px;
  margin-bottom: 14px;
  text-align: center;
  line-height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 14px;
  background: white;
}
.aa {
  transition: all 0.5s;
}
.go {
  transform: rotate(180deg);
  transition: all 0.5s;
}
.shade {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 47px;
  bottom: 0;
  left: 0;
  z-index: 2000;
}
</style>