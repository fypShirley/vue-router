<template>
    <div>
         <hr/>
        <h2>{{ msg }}</h2>
        <p>新闻账号：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>

<script>
  export default {
    name:'Rurl',
    data () {
      return {
        msg: 'Rurl页面'
      }
    },
    beforeRouteEnter: (to, from, next) => {
      console.log('准备进入路由Rurl');
      
      next();
    },
    beforeRouteLeave: (to, from, next) => {
     console.log('准备离开路由Rurl');
     next();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
