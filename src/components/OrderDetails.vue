<template>
    <div class="tabs__content">
        <div class="orderdetailsbox">
            <div class="orderMessage">
                <div class="message-item">
                    <img src="../assets/img/arrows.png" />
                    <div>
                        <p>订单详情：</p>
                        <p>订单编号：</p>
                        <p>下单时间：</p>
                    </div>
                </div>
                <div class="message-item">
                    <img src="../assets/img/arrows.png" />
                    <div>
                        <p>物流信息：</p>
                        <p>物流单号：</p>
    
                    </div>
                </div>
            </div>
            <div class="sellerMessage">
                <div class="message-item">
                    <img src="../assets/img/arrows.png" />
                    <div>
                        <p>买家信息：</p>
                        <p>买家：</p>
                        <p>买家手机号：</p>
                        <P>配送方式：</P>
                        <p>收货人：</p>
                        <p>联系方式：</p>
                        <p>收货地址：</p>
                        <P>支付方式：</P>
                        <p>买家留言：</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="listbox details">
            <OrderNavbar></OrderNavbar>
            <Orderlisttemplate></Orderlisttemplate>
        </div>
    </div>
</template>
<script>
import Orderlisttemplate from "./Orderlisttemplate.vue"
import OrderNavbar from "./OrderNavbar.vue"

export default {
    data () {
        return {
            lists:[1,2,3]
        }
    },
    components:{
       Orderlisttemplate,OrderNavbar
    },
    methods: {
        
    }
}

</script>
<style lang="scss">
.details .listDetails{
    display: none !important;
}
.orderdetailsbox {
    font-size: 14px;
    display: flex;
    border: 1px solid #e5e5e5;
    height: 300px;
    .orderMessage,
    .sellerMessage {

        height: 100%;
        width: 799px;
        border-right: 1px solid #e5e5e5;
        .message-item {
            padding: 14px 0 0 10px;
            display: flex;
            p {
                width: 90px;
                text-align: right;
                padding-bottom: 10px;
            }
        }
        .message-item>img {
            width: 14px;
            height: 14px;
        }
    }
}
</style>
