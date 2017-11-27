<template>
  <div class="wallet-home">
      <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
      <div class="main">
          <div class="home-top">
              <p>昨日收益(元)</p>
              <h2>10.09</h2>
              <p>总金额5010.09(元)</p>
              <i class="ryt-salary"></i>
          </div>
          <div class="home-middle">
              <p>
                <span>累计收益 (元)</span>
                <span>200.09</span>
              </p>
              <p>
                <span>七日年化 (%)</span>
                <span>3.9</span>
              </p>
          </div>
          <div class="home-list">
              <mt-cell title="转入" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/turn-in.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="转出" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/turn-out.png" width="24" height="24">
              </mt-cell>
              <mt-cell title="定时转入" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/turn-in-time.png" width="28" height="24">
              </mt-cell>
              <mt-cell title="定时转出" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/turn-out-time.png" width="26" height="24">
              </mt-cell>
              <mt-cell title="账单明细" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/bill-detail.png" width="24" height="24">
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
                headerTitle:'智阳钱包'
            };
        },
        methods: {
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../style/_icon.scss';
</style>
