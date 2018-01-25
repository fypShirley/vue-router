<template>
  <div class="hello">
    <div>{{msg}}</div>

    <div><span>通过 "router-link" 标签中的to传参:</span></div>
    
    <h3>{{$route.params.username}} </h3>
    <h3>{{$route.params.id}} </h3>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: '1111111111111111111111111111页面'
    }
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
