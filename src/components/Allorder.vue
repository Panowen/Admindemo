<template>
    <div class="tabs__content">
        <OrderSearch></OrderSearch>
        <div class="box">
            <ul class="nav">
                <li>全部</li>
                <li>待付款</li>
                <li>代发货</li>
                <li>已发货</li>
                <li>已完成</li>
                <li>已关闭</li>
                <li>退款中</li>
            </ul>
           
            <div class="listbox">
                <OrderNavbar></OrderNavbar>
                <Orderlisttemplate :key="index" v-for="(item,index) in lists"></Orderlisttemplate>
            </div>
            <div @click="handle">{{arr}}</div>
        </div>
    </div>
</template>
<script>
import Orderlisttemplate from "./Orderlisttemplate.vue"
import OrderSearch from "./OrderSearch.vue"
import OrderNavbar from "./OrderNavbar.vue"
import {mapState} from "vuex"
export default {
    data() {
        return {
            lists: [1, 2]
        }
    },
    components: {
        Orderlisttemplate, OrderSearch, OrderNavbar
    }
    
}

</script>
<style lang="scss">
.listbox {
	min-width:1000px;
	margin-top: 22px;
	border: 1px solid #e5e5e5;
}
.box {
    margin-top: 30px;
}
.tabs__content {
	
	margin: 40px 0 0 220px;
}
.nav {
    display: inline-block;
    border: 2px solid #e5e5e5;
    li {
        display: inline-block;
        font-size: 12px;
        padding: 12px 28px;
        color: #333333;
        background: #fcfcfc;
    }
    li:nth-child(even) {
        border-left: 2px solid #e5e5e5;
        border-right: 2px solid #e5e5e5;
    }
}
</style>
