<template>
    <div class="addCardMsg">
        <ryt-header :title="headerTitle"></ryt-header>
        <div class="main">
            <p class="field-title">添加银行卡信息(仅支持借记卡)</p>
            <div class="field-cell">
                <mt-field label="持卡人" placeholder="请输入持卡人姓名"></mt-field>
                <mt-field label="银行账号" placeholder="请输入银行账号"></mt-field>
                <mt-cell class="last-cell" title="所属银行" to="" is-link value="请选择所属银行"></mt-cell>
            </div>
            <p class="field-title">银行卡信息验证</p>
            <div class="field-cell">
                <mt-field label="身份证号" placeholder="请输入持卡人身份证号码"></mt-field>
                <mt-field label="预留手机" placeholder="请输入持卡人预留手机号码"></mt-field>
            </div>
            <mt-button type="primary" class="btn-block btn-center" @click="showToast">提交并确认</mt-button>
            <ryt-checkbox :options="checkbox"></ryt-checkbox>
            <a href="#" class="bind-card-qus">银行卡绑定常见问题</a>
        </div>
    </div>
</template>
<script>
  import header from '../components/header/header'
  import checkbox from '../components/checkbox/checkbox'
  import { Toast } from 'mint-ui';
    export default {
        components: {
            'ryt-header': header ,
            'ryt-checkbox': checkbox
        },
        data() {
            return { 
                headerTitle:'填写信息',
                checkbox: '确认即表示同意<a href="#">《智阳钱包理财账户协议》</a></br><a href="#">《智阳钱包服务协议》</a>'
            };
        },
        methods: {
            showToast() {
                Toast('您的银行卡信息校验失败，请核实银行卡信息。');
            }
        }
    };
</script>