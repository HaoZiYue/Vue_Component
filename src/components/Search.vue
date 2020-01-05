<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="msg"/>
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
  export default {
      data(){
          return {
              msg:''
          }
      },
      methods:{
          search(){
              this.$globalEventBus.$emit('search',this.msg)
          }
      },
  }
</script>

<style scoped>

 
</style>
