<template>
  <div class="wallet-home set">
      <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
      <div class="main">
          <div class="home-list">
              <mt-cell title="修改支付密码" icon="more" is-link to="/modifyPayPassword">
                <img slot="icon" src="../../static/images/modify-pay-password.png" width="24" height="26">
              </mt-cell>
              <mt-cell title="找回支付密码" icon="more" is-link to="/findPayPassword">
                <img slot="icon" src="../../static/images/find-pay-password.png" width="24" height="28">
              </mt-cell>
              <mt-cell title="修改登录密码" icon="more" is-link to="/modifyLoginPassword">
                <img slot="icon" src="../../static/images/modify-login-password.png" width="24" height="26">
              </mt-cell>
              <mt-cell title="找回登录密码" icon="more" is-link to="/findLoginPassword">
                <img slot="icon" src="../../static/images/find-login-password.png" width="24" height="28">
              </mt-cell>
              <mt-cell title="帮助中心" icon="more" is-link to="/help">
                <img slot="icon" src="../../static/images/help.png" width="24" height="24">
              </mt-cell>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header/header'
    export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return { 
                backUrl: '/',
                headerTitle:'设置'
            };
        },
        methods: {
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../style/_icon.scss';
</style>
