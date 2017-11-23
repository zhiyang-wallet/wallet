<template>
    <div class="pay-password">
        <ryt-header :title="headerTitle"></ryt-header>
        <div class="main">
            <p class="field-title">请设置您的钱包密码</p>
            <div class="field-cell">
                <mt-field label="设置密码" placeholder="请输入支付密码" type="password" v-if="!showNum"><i class="ryt-open-eye" @click="changeShowNum"></i></mt-field>
                <mt-field label="设置密码" placeholder="请输入支付密码" type="number" v-if="showNum"><i class="ryt-close-eye" @click="changeShowNum"></i></mt-field>
                <mt-field label="确认密码" placeholder="请确认支付密码" type="password" v-if="!showConfirmNum"><i class="ryt-open-eye" @click="changeShowConfirmNum"></i></mt-field>
                <mt-field label="确认密码" placeholder="请确认支付密码" type="number" v-if="showConfirmNum"><i class="ryt-close-eye" @click="changeShowConfirmNum"></i></mt-field>
            </div>
            <!-- <p class="password-rule" @click="showRule">支付密码注意事项</p> -->
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
                headerTitle:'设置支付密码',
                showNum: false,
                showConfirmNum: false
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
            },
            changeShowNum(){
                this.showNum = !this.showNum;
            },
            changeShowConfirmNum() {
                this.showConfirmNum = !this.showConfirmNum;
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../style/_icon.scss';
</style>