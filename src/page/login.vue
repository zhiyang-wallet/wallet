<template>

      <div class="login-bg" >

        <a class="login-logo">
          智阳钱包
        </a>

        <div class="login-container vm-group" >

            <div class="vm-col">
              <div class="login-icon ryt-user vm-icon">

              </div>
                  <mt-field  placeholder="请输入用户名"  v-model="username"></mt-field>
            </div>

            <div class="vm-col">
              <div class="password-icon ryt-password  vm-icon">

              </div>
               <mt-field  placeholder="请输入密码" type="password" v-model="password"></mt-field>
            </div>

        </div>

        <div class="vm-group">
          <div class="login-checkbox  clearfix">
              <div class="vm-col vm-left default-checkBox" >
                <mt-checklist
                  v-model="value"
                  :options="loginCheckBox">
                </mt-checklist>
              </div>

              <a class="vm-right">忘记密码</a>
          </div>

        </div>
        <div class="vm-btnGroup vm-blockCenter">
             <mt-button type="primary" class="vm-primaryBtn login-btn vm-defaultBtn">登录</mt-button>

          <router-link to="/register">
                 <mt-button  plain class="vm-primaryBtn vm-plainBtn vm-mt"
                      v-on:click.native="linkRegister"
                 >注册</mt-button>
          </router-link>
        </div>
      </div>

</template>
<script>



  export default {

        data(){

          return{
            username:'',
            password:'',
            loginCheckBox:['自动登录'],
            value:['']
          }


        }

  }


</script>
<style lang="scss" rel="stylesheet/scss">

  @import "../style/vm";

</style>
