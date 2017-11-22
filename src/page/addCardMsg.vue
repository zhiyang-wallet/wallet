<template>
    <div class="addCardMsg">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            
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
                headerTitle:'填写信息',
                backUrl: '/'
            };
        }
    };
</script>