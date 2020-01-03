<template>
  <li @mouseenter="handleMove(true)" @mouseleave="handleMove(false)" :style="{background : bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show='isShow' @click='removeTodo(index)'>删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['todo','index','deleteTodo'],
    data(){
      return {
        bgColor:'white',
        isShow:false
      }
    },
    methods:{
      handleMove(moveIn){
        if(moveIn){
          this.bgColor = '#aaa';
          this.isShow = true;        
        }else{
          this.bgColor = '#fff';
          this.isShow = false;  
        }
      },
      //因为Item里面找不到todos这个数组，所以只能调用当前组件的父组件出啊进来的方法来操作列表
      removeTodo(index){
        if(confirm('确定要删除吗？')){
            this.deleteTodo(index)
        }
          
      }
    }

  }
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
 
</style>
