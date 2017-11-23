<template>
    <div class="bill-details">  
        <ryt-header :title="headerTitle"></ryt-header>
        <div class="main">
            <p class="field-title">近30日账单明细</p>
            <div class="cell-show">
                <mt-cell title="转入" label="2017-10-2 19:00" value="+100" class="bill-in"></mt-cell>
                <mt-cell title="转出" label="2017-10-2 19:00" value="-100" class="bill-out"></mt-cell>
            </div>
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
                headerTitle:'账单明细'
            };
        },
        methods: {
            showToast() {
                Toast('您的银行卡信息校验失败，请核实银行卡信息。');
            }
        }
    };
</script>