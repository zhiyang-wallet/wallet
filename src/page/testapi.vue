<template>


</template>

<script type="text/ecmascript-6">
  import {getAllBanks, getWalletBalance} from '../getData/getData'

  export default {


    mounted() {


      //2.选择所属银行接口
      getAllBanks().then(res => {

        console.log(res)

      })
      //3.钱包余额接口
      getWalletBalance().then(res => {

        console.log(res)

      })


    }

  }

</script>

