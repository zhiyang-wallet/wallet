<template>
    <div class="pay-password">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <p class="field-title">请设置您的钱包密码</p>
            <div class="field-cell">
                <mt-field label="设置密码" placeholder="请输入支付密码" type="password"></mt-field>
                <mt-field label="确认密码" placeholder="请确认支付密码" type="password"></mt-field>
            </div>
            <!-- <p class="password-rule" @click="showRule">支付密码注意事项</p> -->
            <mt-button class="password-rule" @click.native="showRule">支付密码注意事项</mt-button>
            <mt-button type="primary" class="btn-block btn-center">确认</mt-button>
        </div>
    </div>
</template>
<script>
  import header from '../components/header/header'
  import { MessageBox } from 'mint-ui';
     export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return {
                headerTitle:'设置支付密码',
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
            }
        }
    };
</script>