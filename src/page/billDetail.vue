<template>
    <div class="bill-details">  
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
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
    export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return { 
                backUrl: '/home',
                headerTitle:'账单明细'
            };
        },
        methods: {
            
        }
    };
</script>