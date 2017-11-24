<template>
    <div class="turn-in turn-in-time">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <div class="in-bg">
                <div class="in-card">
                    <div class="title">
                        <h3>支付账户</h3>
                        <i class="ryt-time"></i>                    
                    </div>
                    <div class="bank">
                        <img src="../../static/images/logo.png">
                        <p>
                            <span>兴业银行</span>
                            <span>6200**** **** 4569</span>
                        </p>
                    </div>
                    <p>充值限额：单笔100万，单日500万</p>
                    <input type="number" placeholder="请输入充值金额">
                    <mt-button class="date-btn" v-if="!date" @click.native="open">请选择转出时间</mt-button>
                    <mt-button class="date-btn" v-if="date" @click.native="open">{{date}}</mt-button>
                    <mt-button type="primary" class="btn-block btn-center">确定</mt-button>
                    <ryt-checkbox :options="checkbox"></ryt-checkbox>
                </div>
            </div>
            <a href="#" class="check-date">查看收益预计发放日期</a>
            <p class="mark">由兴全基金XXXXXXXXXXXXXXXXXXXX投资需谨慎</p>
            
        </div>
        <div class="choose-date-time" v-show="showPicker">
            <mt-picker :slots="slot"  @change="onYearChange" :visible-item-count="3"></mt-picker>
            <div class="btns">
                <mt-button type="primary" class="btn-block btn-center" @click="close">确定</mt-button>
                <mt-button type="primary" class="btn-block btn-center btn-cancel" @click="close">取消</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '../components/header/header';
    import checkbox from '../components/checkbox/checkbox';
    import { Toast } from 'mint-ui';
    export default {
        components: {
            'ryt-header': header,
            'ryt-checkbox': checkbox
        }, 
        data() {
            return {
                headerTitle:'定时转入',
                backUrl: '/',
                checkbox: '同意定时转入服务协议',
                date: '',
                showPicker: false
            };
        },
        computed: {
            slot() {
                var arr = [];
                for(var i=1; i<29; i++) {
                    arr.push('每月'+ i +'日');
                }
                return [{
                    flex: 1,
                    values: arr,
                    className: 'slot1'
                }]
            }
        },
        methods: {
            timeToString(time) {
                if (!time) {
                    return '';
                }
                var mo = (time.getMonth()+1),
                    d = time.getDate(),
                    m = time.getMinutes(),
                    h = time.getHours(),
                    s = time.getSeconds();
                mo = mo < 10 ? ('0'+mo) : mo;
                d = d < 10 ? ('0'+d) : d;
                m = m < 10 ? ('0'+m) : m;
                h = h < 10 ? ('0'+h) : h;
                s = s < 10 ? ('0'+s ) : s;
                return time.getFullYear() + "-" + mo + "-" + d + " " + h + ":" + m + ":" + s;
            },
            open(picker) {
                this.showPicker = true;
            },
            onYearChange(picker, values) {
                this.date = values[0];
            },
            close() {
                this.showPicker = false;
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../style/_icon.scss';
</style>