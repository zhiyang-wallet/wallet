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
                <img slot="icon" src="../../static/images/bank-card.png" width="24" height="24">
              </mt-cell> 
              <mt-cell title="设置" icon="more" is-link :to="{ name: 'addCardMsg' }">
                <img slot="icon" src="../../static/images/set.png" width="24" height="24">
              </mt-cell>              
        </div>
        <mt-button type="primary" class="btn-block btn-center sing-out" @click="singOut">安全退出</mt-button>
        <div class="dialog-msg" v-if="showMsg">
            <div class="box">
                <div class="msg-icon">
                    <i class="ryt-sign-out sign-out-icon"></i>
                </div>
                <h3>确认退出登录？</h3>
                <mt-button type="primary" class="btn-block btn-center" @click="close">确定</mt-button>
                <mt-button type="primary" class="btn-block btn-center cancle" @click="close">取消</mt-button>
                <i class="ryt-close-modal close-modal" @click="close"></i>
            </div>
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
                backUrl: '/',
                showMsg: false
            };
        },
        methods: {
            singOut() {
                this.showMsg = true;
            },
            close() {
                this.showMsg = false;
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../style/_icon.scss';
</style>