<template>

  <header class="header">
      {{headerText}}
  </header>

</template>

<script type="text/ecmascript-6">
    export default {
      name:'header',
      props:['hText'],
      data(){
          return{
            headerText:''
          }
      },
      watch:{
         "hText":function(n,o){
            this.headerText = n;
         }
      }
    }
</script>


