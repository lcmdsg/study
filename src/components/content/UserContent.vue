<template>
  <div class="user-contain">
    <!-- 网易严选（登录） -->
    <!-- 头部样式都是识物的 -->
    <div class="general-container">
      <div class="general-head">
        <div class="general-home">
          <router-link to="/">
            <img src="../../assets/general-home.png" alt />
          </router-link>
        </div>
        <div class="general-title">
          <img class="yanxuan-img" src="../../assets/wyyanxuan.png" alt />
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
    <component :is="componentId"></component>
  </div>
</template>
<script>
import user from "../user-component/User.vue";
import userphone from "../user-component/UserPhone.vue";
import usermail from "../user-component/UserMail.vue";

export default {
  data: function() {
    return {
      index: 0,
      componentId: "user"
    };
  },
  components: {
    user,
    userphone,
    usermail
  },
  methods: {
    
  }
};
</script>
<style>
.user-contain {
  width: 100%;
  height: 100%;
}
.user-head {
  width: 100%;
  height: 50px;
}
.yanxuan-img {
  width: 80px;
  height: 25px;
  margin: auto;
}
.user-content {
  background: rgb(245, 245, 245);
  height: 681px;
  text-align: center;
}

.user-content-icon img {
  width: 150px;
  height: 50px;
  margin: 0 auto;
  margin-top: 88px;
  margin-bottom: 140px;
}
.user-phone-login {
  border: 0 solid #dd1a21;
  background-color: #dd1a21;
  width: 370px;
  height: 54px;
  margin: auto;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  line-height: 50px;
}
.user-email-login {
  border: 1px solid #dd1a21;
  color: #dd1a21;
  width: 370px;
  height: 54px;
  margin: auto;
  text-align: center;
  border-radius: 2px;
  line-height: 50px;
  margin-top: 20px;
}
.user-footer {
  display: flex;
  flex-direction: row;
  height: 22px;
  padding: 0 50px;
  margin-top: 200px;
}
.user-footer-wrap {
  display: flex;
  flex-direction: row;
  width: 100px;
  color: #7f7f7f;
  font-size: 15px;
  padding-left: 30px;
}
.user-footer-border {
  border-right: 1px solid #979797;
}
.user-footer-wrap img {
  width: 22px;
  height: 22px;
}
</style>