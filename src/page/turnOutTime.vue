<template>
    <div class="turn-out-time">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <p class="field-title">转出到账户</p>
            <div class="field-cell">
                <mt-field label="到账银行" placeholder="" v-model="bindCard"></mt-field>
                <mt-field label="转出金额" placeholder="请输入转出金额"><span>元</span></mt-field>
                <mt-cell title="转出日期" class="last-cell">
                    <mt-button class="date-btn" v-if="!date" @click.native="open">请选择转出时间</mt-button>
                    <mt-button class="date-btn" v-if="date" @click.native="open">{{date}}</mt-button>
                </mt-cell>
            </div>
            <p class="field-title">备注</p>
            <div class="field-cell">
                <mt-field label="身份证号" placeholder="请输入持卡人身份证号码"></mt-field>
            </div>
            <mt-button type="primary" class="btn-block btn-center" @click.native="showSuccessMsg">确认</mt-button>
            <ryt-checkbox :options="checkbox"></ryt-checkbox>
        </div>
        <div class="choose-date-time" v-show="showPicker">
            <mt-picker :slots="slot"  @change="onYearChange" :visible-item-count="3"></mt-picker>
            <div class="btns">
                <mt-button type="primary" class="btn-block btn-center" @click="sure">确定</mt-button>
                <mt-button type="primary" class="btn-block btn-center btn-cancel" @click="closeDate">取消</mt-button>
            </div>
        </div>
        <div class="dialog-msg" v-if="showMsg">
            <div class="box">
                <div class="msg-icon">
                    <i class="success ryt-success"></i>
                </div>
                <h3>转出成功</h3>
                <p class="msg">您已转出<b>￥1000.00</b>,转出到账时间以银行信息通知为准，请注意查收。</p>
                <mt-button type="primary" class="btn-block btn-center" @click="close">确定</mt-button>
                <i class="ryt-close-modal close-modal" @click="close"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '../components/header/header'
    import checkbox from '../components/checkbox/checkbox'
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        components: {
            'ryt-header': header, 
            'ryt-checkbox': checkbox
        },
        data() {
            return {
                headerTitle:'定时转出',
                checkbox: '同意定时转出服务协议',
                date: '',
                centerDate: '',
                backUrl: '/',
                bindCard: '兴业银行 尾号(6599)',
                showMsg: false,
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
            open(picker) {
                this.showPicker = true;
            },
            showSuccessMsg() {
                this.showMsg = true;
            },
            close() {
                this.showMsg = false;
            },
            sure() {
                this.date = this.centerDate;
                this.showPicker = false;
            },
            closeDate() {
                this.showPicker = false;
            },
            onYearChange(picker, values) {
                this.centerDate = values[0];
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../style/_icon.scss';
</style>