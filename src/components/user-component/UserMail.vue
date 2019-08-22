<template>
  <div>
    <div class="user-container">
      <div class="user-content-img">
        <img src="../../assets/yanxuan-icon.png" alt />
      </div>
      <div class="user-content-login">
        <div class="user-content-number">
          <input class="user-content-input1" type="number" placeholder="请输入手机号" v-model="message" />
        </div>
        <div class="user-content-number">
          <input
            class="user-content-input2"
            type="number"
            placeholder="请输入短信验证码"
            v-model="message1"
          />
          <button class="user-content-button">获取验证码</button>
        </div>
        <div class="user-content-wrap">
          <span class="user-content-item1">遇到问题</span>
          <span class="user-content-item2">使用密码验证登录</span>
        </div>

        <div class="user-content-go" @click="login">登录</div>
        <div class="user-content-diquir">
          <img src="//yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png" alt />
          <div>
            我同意
            <span>《服务条款》</span>和
            <span>《网易隐私政策》</span>
          </div>
        </div>
      </div>
      <div class="user-content-other" @click="backtoindex">其他登录方式></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermail",
  data() {
    return {
      message: "",
      message1: ""
    };
  },
  methods: {
    backtoindex() {
      this.$emit("sindex", "user");
    },
    login() {
      if (this.message && this.message1) {
        this.$router.push("/");
      } else {
        alert("请输入");
      }
    }
  }
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.user-container {
  width: 100%;
  height: 403px;
}

.user-content-img {
  width: 100%;
  height: 35px;
  margin: 30px 0;
}

.user-content-img img {
  width: 104px;
  height: 100%;
  position: relative;
  left: 155px;
}

.user-content-login {
  padding: 0 22px;
  margin-bottom: 32px 0;
}

.user-content-number {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 52px;
}

.user-content-input1 {
  width: 100%;
  line-height: 52px;
  border: none;
}

.user-content-input2 {
  width: 100%;
  line-height: 52px;
  border: none;
  border-top: 1px solid #c5cddb;
  border-bottom: 1px solid #c5cddb;
}

.user-content-button {
  width: 92px;
  height: 30px;
  margin: 11px 0;
  position: absolute;
  right: 33px;
  background: #fff;
  border: none;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.user-content-wrap {
  width: 100%;
  line-height: 52px;
  color: #7f7f7f;
  font-size: 15px;
}

.user-content-item2 {
  color: #333;
  position: absolute;
  right: 22px;
}

.user-content-go {
  width: 100%;
  line-height: 52px;
  text-align: center;
  background: #dd1a21;
  color: #fff;
}

.user-content-diquir {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

.user-content-diquir img {
  width: 20px;
  margin-right: 5px;
}

.user-content-diquir div {
  font-size: 12px;
  color: #999;
}

.user-content-diquir span {
  color: #007aff;
}

.user-content-other {
  text-align: center;
}
</style>