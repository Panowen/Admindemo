<template>
  <div class="store">
     <div class="navbar">
       <ul>
         <li v-for="(item,index) in navs" :class="{active:activeindex==index}" v-on:click="Active(index)">
           <router-link :to="item.link">
             <img :src="item.src" />
             <p>{{item.title}}</p>
           </router-link>
         </li>
       </ul>
     </div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
       activeindex:"",
       navs:[
         {
           title:"概况",
           src:require("../assets/img/survey.png"),
           link:"/store/survey"
         },
         {
           title:"订单",
           src:require("../assets/img/order.png"),
           link:"/store/order"
         },
         {
           title:"活动",
           src:require("../assets/img/gift.png"),
           link:"/store/gift"
         },
         {
           title:"物流",
           src:require("../assets/img/logistics.png"),
           link:"/store/logistics"
         }
       ]
    }
  },
  methods:{
    Active:function(index){
       this.activeindex=index
    }
  }
}
</script>

<style lang="scss">
html{
  height: 100%;
}
.active{
  background: #5c5c5c
}
.store{
  min-width: 1024px;
  width: 100%;
  margin-top:52px;
  .navbar{
      z-index: 1000;
      position: fixed;
      float: left;
      font-size: 14px;
      background: #333333;
      width: 64px;
      height: calc(100vh - 52px);
      a{
        display: block;
      }
      ul{
        li{
          display: block;
          height: 90px;
          text-align: center;
          p{
            color: #ffffff; 
          }
          img{
            margin-top: 22px;
          }
        }
      }
   }
   
}

</style>
