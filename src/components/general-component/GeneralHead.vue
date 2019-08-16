<template>
  <div class="topcontainer">
    <div class="general-container">
      <div class="general-head">
        <div class="general-home">
          <router-link to="/">
            <img src="../../assets/general-home.png" alt />
          </router-link>
        </div>
        <div class="general-title">
          <div class="general-find">发现</div>
          <div class="general-choose">甄选家</div>
        </div>
        <div class="general-icons">
          <router-link to="/search">
            <img src="../../assets/general-search.png" alt />
          </router-link>
          <router-link to="/cart">
            <img src="../../assets/general-cart.png" alt />
          </router-link>
        </div>
      </div>
    </div>
    <div class="general-wrap">
      <div
        class="general-item"
        v-for="(item,i) in tabList"
        :key="i"
        @click="navclick(i)"
        :class="{'active2':i==index}"
      >{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      tabList: [
        "盛夏特别版",
        "推荐",
        "好货内部价",
        "回购榜",
        "晒单",
        "开发者日记",
        "达人",
        "HOME"
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
    navclick(i) {
      this.index = i;
      this.$emit("navclick", i);
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
.general-container {
  width: 100%;
  height: 55px;
  background: rgb(250, 250, 250);
  border-bottom: 1px solid #d9d9d9;
}
.general-head {
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  height: 55px;
}
.general-home {
  width: 55px;
  height: 55px;
}
.general-home img {
  width: 50%;
  height: 50%;
  margin-top: 15px;
}
.general-title {
  width: 70%;
  display: flex;
  flex-direction: row;
}
.general-find {
  line-height: 55px;
  font-size: 22px;
  color: #b4282d;
  font-weight: bold;
  margin-left: 85px;
}
.general-choose {
  line-height: 55px;
  font-size: 15px;
  color: #7f7f7f;
  margin-left: 15px;
}
.general-icons {
  width: 70px;
  height: 55px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.general-icons img {
  width: 25px;
  height: 25px;
  margin-top: 15px;
}
.general-wrap::-webkit-scrollbar {
  display: none;
}
.general-wrap {
  position: fixed;
  top: 55px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  background: #fafafa;
  border-bottom: 0.01rem solid #d9d9d9;
  overflow: auto;
}
.general-item {
  color: #7f7f7f;
  line-height: 36px;
  height: 40px;
  margin: 0 13px;
  font-size: 15px;
  flex-shrink: 0;
}
.active2 {
  color: #b4282d;
  border-bottom: 1px solid #b4282d;
}
</style>