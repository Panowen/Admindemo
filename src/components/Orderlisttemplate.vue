<template>
    <div class="listDetailsbox">
        <div class="listDetails">
            <div>
                <p>订单号：zs123456789</p>
                <p>成交时间：2017-01-01</p>
                <p @click="orderdetails">查看详情</p>
            </div>
        </div>
        <div class="orderbox">
            <div class="product-item orderitem productimg">
                <img class="" src="" />
                <p>fasfas</p>
            </div>
            <div class="price-item orderitem pricebox">14800.00</div>
            <div class="count-item orderitem countbox">1</div>
            <div class="buyer-item orderitem buyerbox">
                <div>
                    <p>xx</p>
                    <p>1354321</p>
                </div>
            </div>
            <div class="anchor-item orderitem anchorbox">
                <div>
                    <p>xx</p>
                    <p>1354321</p>
                </div>
            </div>
            <div class="brokerage-item orderitem brokeragebox">50</div>
            <div class="distribution-item orderitem">
                <div class="distribution">
                    <p>一级分销</p>
                    <div>
                        <a>xx</a>
                        <a>123123123</a>
                    </div>
                    <p>一级分销佣金</p>
                    <p>50</p>
                </div>
                <div class="distribution">
                    <p>一级分销</p>
                    <div>
                        <a>xx</a>
                        <a>123123123</a>
                    </div>
                    <p>一级分销佣金</p>
                    <p>50</p>
                </div>
                <div class="distribution">
                    <p>一级分销</p>
                    <div>
                        <a>xx</a>
                        <a>123123123</a>
                    </div>
                    <p>一级分销佣金</p>
                    <p>50</p>
                </div>
            </div>
            <div class="orderStatus-item orderitem orderStatusbox">买家已付款</div>
            <div class="remark-item orderitem remarkbox">备注</div>
            <div class="actualAmount-item orderitem actualAmountbox">
                <div>
                    <p>14800.00</p>
                    <p>(含运费10.00)</p>
                </div>
            </div>
    
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           
        }
    },
    methods: {
       orderdetails:function(){
           this.$router.push({name:"orderdetails",params:{id:1}})
       }
    }
}

</script>
<style lang="scss">
.listDetails {
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    color: #333333;
    
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e5e5e5;
    p {
        float: left;
        margin-right: 25px;
    }
    p:nth-child(3) {
        color: #236bfd;
        cursor: pointer;
    }
}

.orderbox {
    font-size: 12px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    .orderitem {
        float: left;
        height: 140px;
        text-align: center;
        border-right: 1px solid #e5e5e5;
    }
    .productimg {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 52px;
            height: 52px;
            margin-right: 10px;
        }
        p {
            color: #008ce6
        }
    }
    .pricebox,
    .countbox,
    .brokeragebox,
    .orderStatusbox,
    .remarkbox,

    {
        line-height: 140px
    }
    .buyerbox,
    .anchorbox,
    .actualAmountbox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .anchorbox,
    .buyerbox {
        p {
            margin-bottom: 10px;
        }
    }
    .actualAmountbox {
        border-right: 0;
        p {
            margin-bottom: 10px;
        }
    }
}

.distribution {
    font-size: 12px;
    color: #333333;
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid #e5e5e5;
    p {
        float: left;
        height: 48px;
        line-height: 48px;
        border-right: 1px solid #e5e5e5;
        a {
            display: block;
        }
    }
    p:nth-child(1) {
        width: 80px
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 146px;
    }
    p:nth-child(3) {
        width: 140px;
        border-left: 1px solid #e5e5e5;
    }
    p:nth-child(4) {
        width: 138px;
        border-right: 0px;
    }
}
</style>