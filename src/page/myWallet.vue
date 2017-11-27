<template>
    <div class="my-wallet">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="wallet-top main">
            <div class="user-avater">
            </div>
            <ul class="user-msg">
                <li>用户名</li>
                <li>13900000000</li>
                <li>银行卡 尾号0000 (兴业银行)</li>
            </ul>
        </div>
        <div class="wallet-middle">
            <mt-cell title="截止当日钱包总资产" label="￥10000.00" is-link></mt-cell>
        </div>
        <div class="wallet-list">
             <mt-cell title="我的银行卡" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell> 
              <mt-cell title="设置" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/logo.png" width="24" height="24">
              </mt-cell>              
        </div>
    </div>
</template>
<script>
  import header from '../components/header/header'
     export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return {
                headerTitle:'我的钱包',
                backUrl: '/'
            };
        },
        methods: {
        }
    };
</script>