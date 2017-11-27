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
              stop:false,
              times:60
            }
        },

        methods:{
           loop(){

              let times = this.times;
              let timer = setInterval(function(){

                  times--;
                  this.val = times + 's后重新获取' ;
                  if(times <= 0 ){
                    clearInterval(timer);
                    this.stop = false;
                    this.val = '获取短信验证码';

                  }

              }.bind(this),1000)


            },
            handleClick(){


                this.$store.dispatch('getSendCodeAPI').then(()=>{
                        let retCod = this.sendCode.retCod;

                          if(retCod == 0 ){
                              this.stop = true;
                              this.loop();
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
