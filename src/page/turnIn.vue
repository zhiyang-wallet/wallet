<template>
    <div class="turn-in">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <div class="in-bg">
                <div class="in-card">
                    <h3>支付账户</h3>
                    <div class="bank">
                        <img src="../../static/images/logo.png">
                        <p>
                            <span>兴业银行</span>
                            <span>6200**** **** 4569</span>
                        </p>
                    </div>
                    <p>充值限额：单笔100万，单日500万</p>
                    <input type="number" placeholder="请输入充值金额">
                    <mt-button type="primary" class="btn-block btn-center">确定</mt-button>
                </div>
            </div>
            <a href="#" class="check-date">查看收益预计发放日期</a>
            <p class="mark">由兴全基金XXXXXXXXXXXXXXXXXXXX投资需谨慎</p>
        </div>
    </div>
</template>
<script>
    import header from '../components/header/header'
    import { Toast } from 'mint-ui';
    export default {
        components: {
            'ryt-header': header
        }, 
        data() {
            return {
                headerTitle:'转入',
                backUrl: '/home'
            };
        },
        methods: {

        }
            
    };
</script>