<template>
  <div id="app">
      <div class="header">
        <div class="logo">
          
        </div>
        <ul>
          <li>
            <router-link to="/">商城</router-link>
          </li>
          <li>
            <router-link to="/twitter">推客</router-link>
          </li>
          <li>
            <router-link to="/diamond">粉钻</router-link>
          </li>
          <li>
            <router-link to="/member">会员</router-link>
          </li>
          <li>
            <router-link to="/deal">交易</router-link>
          </li>
          <li>
            <router-link to="/dataCenter">数据中心</router-link>
          </li>
        </ul>
        <div class="company"><img src="./assets/img/world.png"><p></p></div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/style.css"
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

.header{
  background: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  
  height: 50px;
  border-bottom: 2px solid #e5e5e5;
  z-index: 1000;
  .logo{
    float: left;
   img{
      margin: 12px 100px 0 20px ;
   }
  }
  ul{
    float: left;
    li{
      float:left;
      line-height: 50px;
      
    }
  }
  .company{
    float: right;
    overflow: hidden;
    line-height: 50px;
    img{
      margin: 12px 5px 0 0;
      float: left;
    }
    p{
      float: left;
      padding-right: 28px;
    }
  }
  a{
    width: 80px;
    height: 50px;
    display: block;
    color: #000000;
  }
}
</style>
