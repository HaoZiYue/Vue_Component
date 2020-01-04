<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isCheckAll"/> -->
      <slot></slot>
    </label>
    <!-- <span>
      <span>已完成{{finished}}</span> / 全部{{todos.length}}
    </span> -->
    <slot name="middle"></slot> <!-- 命名插槽 -->
    <!-- <button class="btn btn-danger" @click="deleteAll" v-show="finished>0">清除已完成任务</button> -->
    <slot name="right"></slot> <!-- 命名插槽 -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // props:['todos','checkAll','deleteAllTodo'],
    methods:{
      
    },
   
  }
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
 
</style>
