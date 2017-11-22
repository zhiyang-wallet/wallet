<template>


</template>

<script type="text/ecmascript-6">
  import {getAllBanks, getWalletBalance, getYieldRate, getBillDetails, getSigningUp} from '../getData/getData'

  import {mapState} from "vuex"


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

      //七日年化率
      getYieldRate().then(res => {

        console.log(res)

      })

      //7.账单明细
      getBillDetails().then(res => {

        console.log(res)

      })

      //1.用户签约接口
      getSigningUp({accountName: "", bankCardNo: '', bankId: '', certficateNo: '', mobilePhone: ''}).then(res => {
        
        console.log(res)

      })

      //8.查询账户信息接口
      this.$store.dispatch('getUserInfoAPI')


    },
    watch: {
      'userInfo': function () {
        console.log(this.$store.state.userInfo)
      }

    },
    computed: {
      ...mapState(['userInfo'])

    }

  }

</script>

