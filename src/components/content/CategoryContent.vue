<template>
  <div class="container">
    <!-- 搜索框 -->
    <router-link to="/search">
      <div class="header">
        <div class="header-wrap">
          <img
            src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png"
            alt
          />
          <span>搜索商品, 共21849款好物</span>
        </div>
      </div>
    </router-link>

    <div class="content">
      <!-- 导航栏 -->
      <ul class="content-nav">
        <li class="content-item" v-for="(item, i) in tabList" :key="i" @click="tabClick(i,$event)">
          <span class="content-item-text" :class="{'active':index==i}">{{item}}</span>
        </li>
      </ul>

      <!-- 内容 -->
      <div class="content-wrap">
        <component :is="componentId">
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Recommend from "../category-component/Recommend.vue";
import Cool from "../category-component/Cool.vue";
import Vogue from "../category-component/Vogue.vue";
import New from "../category-component/New.vue";

export default {
  name: "categroyContent",
  data() {
    return {
      componentId: "Recommend",
      tabList: [
        "推荐专区",
        "夏凉专区",
        "爆品专区",
        "新品专区",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
      index: 0
    };
  },

  components: {
    Cool: Cool,
    Vogue: Vogue,
    New: New,
    Recommend: Recommend
  },

  methods: {
    tabClick(index, event) {
      this.index = index;
      switch (index) {
        case 0:
          this.componentId = "Recommend";
          break;
        case 1:
          this.componentId = "Cool";
          break;
        case 2:
          this.componentId = "Vogue";
          break;
        case 3:
          this.componentId = "New";
          break;
        default:
          this.componentId = "Recommend";
          break;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 414px;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 44px;
  padding: 8px 15px;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid rgb(237, 237, 237);
}

.header-wrap {
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: rgb(237, 237, 237);
}

.header-wrap img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}

.header-wrap span {
  color: #666;
  font-size: 14px;
}

.content {
  width: 100%;
  height: 736px;
  padding-top: 44px;
  display: flex;
  flex-direction: row;
}

.content-nav {
  width: 81px;
  height: 100%;
}

.content-item {
  padding-top: 22px;
  margin: 0 auto;
}

.content-item-text {
  padding-left: 11px;
  border-left: 3px solid rgba(237, 91, 0, 0);
  line-height: 27px;
  font-size: 14px;
  color: #333;
}

.active {
  color: #ab2b2b;
  border-color: #ab2b2b;
}
</style>