<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo" v-model="title"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // props:['todos'],
    data(){
      return {
        title:'',
      }
    },
    methods:{
      addTodo(){
        if(!this.title){
          return
        }
        const title = this.title.trim();
        // this.todos.unshift({id:Date.now(),title:title,complete:false});
        //通过自定义监听来传递数据，实现子传给祖先数据
        this.$emit('addATodo',{id:Date.now(),title:title,complete:false})
        this.title = ''
      }
    }
  }
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

 
</style>
