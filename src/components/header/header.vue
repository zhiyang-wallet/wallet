<template>
  <mt-header fixed :title="title">
    <router-link :to="backUrl" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        title: {
          type: String,
          default: ''
        },
        backUrl: {
          type: String,
          default: '/'
        }
      },
      data() {
        return {

        };
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../style/page.scss';
</style>


