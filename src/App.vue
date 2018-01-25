<template>
  <div id="app">
      <img src="./assets/logo.png">
      
      <div>
        <div>1、name传值：{{ $route.name }}</div>
        <br/><br/> 

        <router-link to="/">首页</router-link> 
        <router-link to="/hi">-Hi页面</router-link> 
        <br/><br/>

        <span>2、通过" router-link " 标签中的to传参:</span>
        <router-link :to="{name:'hi1',params:{username:'shirley',id:'18'}}">H1111页面</router-link> 
        <br/><br/>
        
        
        <span>h2页面：</span>
        <router-link to="/hi2">-H222222页面</router-link>
       <br/><br/>


       <span>3、通过url传参：</span>
       <router-link to="/rurl/20180124/this is new Title">-路由url页面</router-link>
       <br/><br/>


       <span>4.1、重定向到首页：</span>
       <router-link to="/gohome">gohome</router-link>
       <br/><br/>


       <span>4.2、重定向到rurl-传参数：</span>
       <router-link to="/goRurl/1993/this is goRurl redirect">goRurl</router-link>
        <br/><br/>

       <span>5.1、别名hi1：</span>
       <router-link to="/Hi1">hi1</router-link>
       <router-link to="/shirleyHi1">shirleyHi1</router-link>
        <br/><br/>

       <span>5.2、home的别名：</span>
       <router-link to="/home">home</router-link>
        <br/><br/>

       <span>6、404页面：</span>
       <router-link to="/bbb">不存在的页面</router-link>
       <br/><br/>


       <span>10、编程式导航：</span>
       <div>
          <button @click="goBack">后退</button>
          <button @click="goGo">前进</button>
          <button @click="goHome">返回首页</button>
          <button @click="goHi">去Hi页面</button>
       </div>
       
       <br/><br/>


       <h3 style="color:red;">router-view内容：</h3>
        <hr/>
      </div>
    
    
    <transition name="fade" model="in-out">
      <router-view></router-view>
    </transition>
      


      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
      <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){/* goBack:function(){}2.0以上不在需要这么写 */
      this.$router.go(-1);//后退
    },
    goGo(){
      this.$router.go(1);//前进
    },
    goHome(){
      this.$router.push('/');//去首页
    },
    goHi(){
      this.$router.push('/hi');//去首页
    },
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 8、路由的过渡动画 ：*/
.fade-enter{
  opacity:0;
}
.fade-leave{
  opacity:1
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
