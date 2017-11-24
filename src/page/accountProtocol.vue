<template>
    <div class="account-protocol">

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
                backUrl: '/',
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