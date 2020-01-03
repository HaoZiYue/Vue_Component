<template>
  <div class="todo-container">
    <div class="todo-wrap">
          <Header :todos='todos'/>
          <List :todos='todos'/>
          <Footer :todos='todos' :checkAll='checkAll' :deleteAllTodo='deleteAllTodo'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
  export default {
    data(){
      return {
        todos:[
          
        ]
      }
    },
    mounted(){
      setTimeout(()=>{
        this.todos = JSON.parse(localStorage.getItem('todos_key') || "[]")
      },1000)
    },
    watch:{
      todos:{
        deep: true, // 深度监视
        handler (value) { // value是最新的todos
          // 保存最新的todos到local, 必须以json形式
          localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },
    //注册局部组件，只能在当前组件内有效
    components:{
      Header,
      List,
      Footer
    },
    methods:{
      checkAll(isChecked){
        this.todos.forEach(todo=>todo.complete = isChecked)
      },
      deleteAllTodo(){
        this.todos = this.todos.filter((todo)=>todo.complete===false)
      }
    },


  }
</script>

<style scoped>
 .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
 
</style>
