<template>
  <div class="todo-container">
    <div class="todo-wrap">
          <Header ref="header"/>
          <List :todos='todos'/>
          <Footer :todos='todos'>
            <input type="checkbox" v-model="this.isCheckAll"/>
            <template slot="middle">
                <span>
                  <span>已完成{{this.finished}}</span> / 全部{{todos.length}}
                </span>
            </template>
            <button slot="right" class="btn btn-danger" @click="deleteAll" v-show="finished>0">清除已完成任务</button>
          </Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {getStorage,saveStorage} from './utils/storageUtils'
  export default {
    data(){
      return {
        todos:[
          
        ]
      }
    },
    mounted(){
      //在这里this代表当前组件，当前组件上没有$globalEventBus这个方法，会去与之对应的vm中去找，因为在入口文件中
      //将$globalEventBus挂在了Vue的原型对象上，所以vm身上也没有，所以就去Vue原型上去找，最终找到
      this.$globalEventBus.$on('deleteTodo',this.deleteTodo)
      this.$refs.header.$on('addATodo',this.addTodo)
      setTimeout(()=>{
        this.todos = getStorage();
      },1000);
    },
    watch:{
      todos:{
        deep: true, // 深度监视
        // handler (value) { // value是最新的todos
        //   // 保存最新的todos到local, 必须以json形式
        //  saveStorage(value)
        // }
        handler:saveStorage
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
      },
      addTodo(todo){
        this.todos.unshift(todo);
      },
      deleteTodo(index){
          this.todos.splice(index,1);
      },
      //Footer组件的方法
      deleteAll(){
        if(confirm('确定要清除吗？')){
          this.deleteAllTodo();
        }
      }
    },
     computed:{
      finished(){
        return this.todos.reduce((pre,todo)=> pre + (todo.complete?1:0),0)
      },
      isCheckAll:{
        get(){
          return this.todos.length === this.finished && this.finished>0
        },
        set(value){
          this.checkAll(value)
        }
      },
    }


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
