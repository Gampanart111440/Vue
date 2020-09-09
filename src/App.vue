<template>
  <div  id = "app">
    <ul>
      <li><router-link to = "/"> Home </router-link></li>
      <li><router-link to = "demo1"> Information </router-link></li>
      <li><router-link  to = "demo2"> Demo2 </router-link></li>
      <li><router-link to = "demo3"> Demo3 </router-link></li>
      <li><router-link to = "demo4"> Demo4 </router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style>
ul{
  margin: 0;
  padding: 0;
}
li{
  display: inline;
  margin-right: 8px;
}
</style>