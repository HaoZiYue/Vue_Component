<template>
  <div>
    <ul>
      <li v-for="(m) in messages" :key="m.id">
        <router-link :to="'/home/message/detail/' + m.id">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        messages:[]
      }
    },
    mounted(){
      setTimeout(()=>{
          const messages = [
            {id:1,title:'messagee001'},
            {id:2,title:'messagee002'},
            {id:3,title:'messagee003'},
            {id:4,title:'messagee004'}
          ]
          this.messages = messages
        },1000)
    }
  }
</script>

<style scoped>

 
</style>
