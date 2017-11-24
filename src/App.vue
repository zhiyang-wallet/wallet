<template>
  <div class="view">
    <svgIcon></svgIcon>
    <router-view></router-view>
  </div>
</template>
<script>

    import svgIcon from './components/common/svg'

    export default {

      components:{
          svgIcon


      }


    }

</script>
