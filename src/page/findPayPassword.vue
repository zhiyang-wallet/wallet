<template>
    <div class="modify-pay-password find-pay-password">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <p class="field-title">请设置您的钱包密码</p>
            <div class="field-cell">
                <mt-field label="短信验证码" placeholder="请输入短信验证码" type="password" >
                    <mt-button type="primary" size="small" class="get-all-btn">获取验证码</mt-button>
                </mt-field>
                <mt-field label="新密码" placeholder="请输入支付密码" type="password" ></mt-field>
                <mt-field label="确认密码" placeholder="请确认支付密码" type="password" ></mt-field>
                
            </div>
            <mt-button type="primary" class="btn-block btn-center" @click="showToast">确认</mt-button>
            <mt-button class="password-rule" @click.native="showRule">支付密码注意事项</mt-button>
        </div>
    </div>
</template>
<script>
  import header from '../components/header/header'
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
     export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return {
                headerTitle:'找回支付密码',
                backUrl: '/'
            };
        },
        methods: {
            showRule() {
                MessageBox({
                    title: '支付密码注意事项',
                    message: '1、密码长度',
                    showConfirmButton: false
                });
            },
            showToast() {
                Toast('密码输入有误，请输入6位数字密码');
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../style/_icon.scss';
</style>