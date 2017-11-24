<template>
    <div class="turn-out-time">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <p class="field-title">转出到账户</p>
            <div class="field-cell">
                <!-- <mt-cell title="到账银行" to="" is-link value="请选择到账银行"></mt-cell> -->
                <mt-field label="到账银行" placeholder="" v-model="bindCard"></mt-field>
                <mt-field label="转出金额" placeholder="请输入转出金额"><span>元</span></mt-field>
                <mt-cell title="转出日期" class="last-cell">
                    <mt-button class="date-btn" v-if="!date" @click.native="open('picker1')">请选择转出时间</mt-button>
                    <mt-button class="date-btn" v-if="date" @click.native="open('picker1')">{{date}}</mt-button>
                </mt-cell>
            </div>
            <p class="field-title">备注</p>
            <div class="field-cell">
                <mt-field label="身份证号" placeholder="请输入持卡人身份证号码"></mt-field>
            </div>
            <mt-button type="primary" class="btn-block btn-center" @click.native="showSuccessMsg">确认</mt-button>
            <ryt-checkbox :options="checkbox"></ryt-checkbox>
        </div>
        <mt-datetime-picker ref="picker1" type="date" @confirm="handleChange"></mt-datetime-picker>
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
                backUrl: '/',
                bindCard: '兴业银行 尾号(6599)'
            };
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
                this.$refs[picker].open();
            },
            handleChange(value) {
                this.date = this.timeToString(value);
            },
            showSuccessMsg() {
                MessageBox({
                    title: '转出成功',
                    message: '您已转出￥1000.00，转出到账时间以银行信息通知为准，请注意查收。'
                });
            }
        }
    };
</script>