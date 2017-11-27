<template>
      <div class="vm-wrap">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main register-container">
          <div class="vm-col">
            <svg class="login-icon">
              <use xlink:href="#useIcon"></use>
            </svg>
            <mt-field  placeholder="请输入用户名" ></mt-field>
          </div>

          <div class="vm-col">
            <svg class="login-icon">
              <use xlink:href="#passwrodIcon"></use>
            </svg>
            <mt-field   placeholder="请输入6-18位登录密码" type="password" ></mt-field>
          </div>


          <div class="vm-col">
            <svg class="login-icon">
              <use xlink:href="#rePasswrodIcon"></use>
            </svg>
            <mt-field   placeholder="请确认密码" type="password" ></mt-field>
          </div>


          <div class="vm-col">
            <svg class="login-icon">
              <use xlink:href="#mobileIcon"></use>
            </svg>
            <mt-field   placeholder="请输入手机号" type="tel" ></mt-field>
          </div>


          <div class="vm-col">
            <svg class="login-icon">s
              <use xlink:href="#sendCodeIcon"></use>
            </svg>
            <mt-field   placeholder="请输入短信验证码" type="text" ></mt-field>
            <v-sendCode></v-sendCode>
          </div>


        </div>

        <div class="vm-btnGroup vm-blockCenter vm-mt">
          <mt-button type="primary" class="vm-primaryBtn login-btn vm-defaultBtn">立即注册</mt-button>


        </div>


      </div>

</template>

<script type="text/ecmascript-6">
  import header from '../components/header/header'
  import sendCode from '../components/sendCode/sendCode'
  export default {
    components: {
      'ryt-header': header,
      'v-sendCode':sendCode
    },
    data() {
      return {
        backUrl: '/login',
        headerTitle:'注册信息'
      };
    },
    methods: {
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
   @import "../style/vm";
</style>
