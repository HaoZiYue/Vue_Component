<template>
  <ul>
    <li v-for="(newItem) in newItems" :key="newItem.id">
        {{newItem.title}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        newItems:[
          {id:1,title:'news001'},
          {id:2,title:'news002'},
          {id:3,title:'news003'},
        ]
      }
    }
  }
</script>

<style scoped>

 
</style>
