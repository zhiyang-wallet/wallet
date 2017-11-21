<template>
  <div class="view">
    <vHeader v-bind:hText="headerTitle"></vHeader>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from './components/header/header'
  import {mapState} from 'vuex'
  export default {
    data(){
       return {
          headerTitle:''
       }

    },
    components: {
      vHeader
    },
    mounted(){



    },
    watch:{
      '$route':function(n,o){

          this.headerTitle = n.name;
      }

    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./style/reset";
  @import "./style/common";
</style>
