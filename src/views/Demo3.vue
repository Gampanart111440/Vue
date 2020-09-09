<template>
  <div id = "demo3">
      <h1>
          data
      </h1>
      <button @click="count++; isLogged=true;"> count </button>
      <span>{{count}}</span>
      <div>{{message}}</div>
      <div>{{isLogged}}</div>
      <input type="text" placeholder="Enter a message" v-model = "message">
      <h2 v-if = "isLogged">Yahoo</h2>
  </div>
</template>

<script>
export default {
    name: "demo3",
    mounted() {
        this.message = "Welcome"
    },
    data() {
        return {
            count:0,
            message :"",
            isLogged: false
        }
    },
}
</script>

<style>

</style>