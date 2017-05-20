<template>
    <ul class="cols">
        <li class="product-item">商品</li>
        <li class="price-item">单价</li>
        <li class="count-item">数量</li>
        <li class="buyer-item">买家</li>
        <li class="anchor-item">主播</li>
        <li class="brokerage-item">主播分销佣金</li>
        <li class="distribution-item">分销</li>
        <li class="orderStatus-item">订单状态</li>
        <li class="remark-item">备注</li>
        <li class="actualAmount-item">实付金额</li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            lists: [1, 2, 3]
        }
    },
    components: {

    },
    methods: {

    }
}

</script>
<style lang="scss">
.cols {
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    li {
        text-align: center;
        float: left;
        font-size: 12px;
        color: #333333;
        height: 50px;
        line-height: 50px;
    }
}
</style>
