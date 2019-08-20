<template>
  <div>
    <div class="user-content">
      <div class="user-content-icon">
        <img src="../../assets/yanxuan-icon.png" alt />
      </div>
      <div
        class="user-email-login"
        v-for="(item, i) in tabList"
        :key="i"
        @click="tabClick(i,$event)"
      >
        <div class="el-icon-message" :class="{'active':index==i}">{{item}}</div>
      </div>
      <div class="user-footer">
        <div class="user-footer-wrap user-footer-border">
          <img src="../../assets/user-wx.png" alt />
          <div>微信</div>
        </div>
        <div class="user-footer-wrap user-footer-border">
          <img src="../../assets/user-qq.png" alt />
          <div>QQ</div>
        </div>
        <div class="user-footer-wrap">
          <img src="../../assets/user-wb.png" alt />
          <div>微博</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  props: ["componentId"],
  data() {
    return {
      index: 0,
      tabList: ["手机号快速登录", "邮箱账号登录"]
    };
  },
  methods: {
    tabClick(index) {
      this.index = index;
      switch (index) {
        case 0:
          this.$emit.componentId = "user";
          break;
        case 1:
          this.$emit.componentId = "usermail";
          break;
        case 2:
          this.$emit.componentId = "userphone";
          break;
      }
      this.$emit("sindex", this.$emit.componentId);
    }
  }
};
</script>

<style>
</style>