<template>
  <div class="wallet-home set">
      <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
      <div class="main">
          <div class="home-list">
              <mt-cell title="转入" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="转出" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="定时转入" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="定时转出" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="账单明细" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
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
