<template>
  <div id = "demo2">
      <h1>Gampanart</h1>
      <button v-on:click = "clickMe">Click</button>
      <button @click = "click3('Thank you')">Click3</button>
      <h3>{{getTime ()}}</h3>
  </div>
</template>

<script>
export default {
name: "Demo2",
mounted() {
    this.initial()
},
methods: {
    initial(){
console.log("Initilization")
    },
    clickMe(){
        alert("Hi new");
    },
    click3(message){
        alert(message);
    },
    getTime(){
        return "1234"
    },
},

}
</script>

<style>

</style>