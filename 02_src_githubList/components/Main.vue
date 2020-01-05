<template>
    <div class="row">
        <h2 v-if="isShowFont">请输入关键字进行搜索</h2>
        <h2 v-else-if="isLoad">正在请求中...</h2>
        <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
        <div v-else class="card" v-for="(Item, index) in UserItems" :key="index">
            <a :href='Item.htmlUrl' target="_blank">
            <img :src="Item.avatarUrl" style='width: 100px'/>
            </a>
            <p class="card-text">{{Item.userName}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
      data(){
          return {
            isShowFont:true,
            isLoad:false,
            UserItems:[],
            errorMsg:''
          }
      },
      mounted(){
          this.$globalEventBus.$on('search',this.searchUsers)
      },
      methods:{
          async searchUsers(searchName){
            this.isShowFont = false,
            this.isLoad = true
            try{
              const response =  await axios({
                method:'GET',
                url:'https://api.github.com/search/users',
                params:{
                  q:searchName
                }
              })
              const result = response.data;
              const userList = result.items.map(item=>({
                userName:item.login,
                avatarUrl:item.avatar_url,
                htmlUrl:item.html_url
              }));
              this.isLoad = false;
              this.UserItems = userList;
            }catch(error){
              this.isLoad = false;
              this.errorMsg = '请求出错'+error.message;
            }

            // .then(
            //   (response)=>{
            //     const result = response.data;
            //     const userList = result.items.map(item=>({
            //       userName:item.login,
            //       avatarUrl:item.avatar_url,
            //       htmlUrl:item.html_url
            //     }));
            //     this.isLoad = false;
            //     this.UserItems = userList;
            //   },
            //   (error)=>{
            //     this.isLoad = false;
            //     this.errorMsg = '请求出错'+error.message;
            //   }
            // )
          },
      }
  }
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
 
</style>
