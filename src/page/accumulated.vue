<template>

  <div class="main vm-wrap vm-bg_01">
    <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
    <div class="accumulated-top">
      <p class="txt1">累计收益（元）</p>
      <p class="txt2">10000.1</p>
      <a class="ryt-help help"></a>
    </div>
    <p class="field-title">近39日收益展示</p>
    <div class="accumulated-list" >
          <accumulatedList v-for="item in data"></accumulatedList>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from '../components/header/header'

  let accumulatedList = {

    template:' <div class="accumulated-item"><div class="bar"><span class="vm-left">2017-10-10</span><span class="vm-right">1.01</span></div></div>'

  }

  export default {
    components: {
      'ryt-header': header,
      accumulatedList
    },
    data() {
      return {
        backUrl: '/',
        headerTitle: '累计收益',
        data:[1,2,3,4,5]
      };
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../style/vm";
</style>
