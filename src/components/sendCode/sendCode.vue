<template>

      <div class="sendCode">
        <mt-button
          v-bind:class="{'off':stop}"
          type="default"
          v-on:click.native="handleClick"
          v-bind:disabled="stop"
        >{{val}}</mt-button>
      </div>

</template>

<script type="text/ecmascript-6">

    import {mapState} from 'vuex'

      export default {

        data(){

            return{
              val:'获取短信验证码',
              btnState:true,
              stop:false

            }
        },

        methods:{

            handleClick(){


                this.$store.dispatch('getSendCodeAPI').then(()=>{
                        let retCod = this.sendCode.retCod;

                          if(retCod == 0 ){

                              this.stop = true;

                          }else{


                          }

                });


            }


        },
        computed:{

          ...mapState(['sendCode'])

        }

      }


</script>

<style lang="scss" rel="stylesheet/scss">




</style>
