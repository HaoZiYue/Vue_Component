<template>
  <div>
    ID: {{this.$route.params.mid}}<br>
    Title: {{detail.title}}<br>
    Content: {{detail.content}}
  </div>
</template>

<script type="text/ecmascript-6">
const allDetails = [
          {id: 1, title: 'message001', content: 'message content001'},
          {id: 2, title: 'message002', content: 'message content002'},
          {id: 3, title: 'message003', content: 'message content003'},
          {id: 4, title: 'message004', content: 'message content004'},
  ]
  export default {
      data(){
          return {
              detail:{}
          }
      },
      mounted(){
          this.show(this.$route)
      },
      //当路由组件的路由的params参数发生改变时，会重新给$route属性赋值，
      //但是不会重新执行this.show()函数，，所以需要监视$route属性的变化，当它变化之后就将最新的$route的值传给函数去执行
      //来保证路由的params参数发生变化的时候也会更新MessageDtail组件的数据
      watch:{
          '$route'(to,from){
              this.show(to)
          }
      },
      methods:{
          show(router){
              setTimeout(()=>{
                const detail = allDetails.find((d)=> router.params.mid == d.id  );
                this.detail = detail;
              })
          }
      }
  }
</script>

<style scoped>

 
</style>
