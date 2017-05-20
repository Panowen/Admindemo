<template>
	<div class="order">
		<div class="tabs">
			<div class="tabs__header">
				<h1>订单管理</h1>
				<div class="triggers">
					<div :class="{tabs_active:activeindex==index}" @click="active(index,item.link)" v-for="(item,index) in nav">
						<a></a>{{item.text}}</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import "../assets/css/style.css"


export default {
	data() {
		return {
			nav: [
				{
					text: "所有订单",
					link: "/store/order/allorder"
				},
				{
					text: "评价管理",
					link: "/store/order/evaluate"
				},
				{
					text: "订单设置",
					link: "/store/order/setorder"
				}
			],
			activeindex: "",
			showOrder: 0,
			lists: [1, 2, 3, 4, 5]
		}
	},
	components: {

	},
	methods: {
		active: function (index, link) {
			this.activeindex = index
			this.showOrder = index
			this.$router.push({ path: link })
		},

	}
}
</script>

<style lang="scss">
.el-form-item__content {
	width: 290px;
}

.el-form-item__label {
	width: 90px;
}

.product-item {
	width: 13%;
}

.price-item {
	width: 5.6%
}

.count-item {
	width: 5.6%
}

.buyer-item {
	width: 6.6%
}

.anchor-item {
	width: 6.6%
}

.brokerage-item {
	width: 7.6%
}

.distribution-item {
	width: 31.5%
}

.orderStatus-item {
	width: 7.5%
}

.remark-item {
	width: 7.3%
}

.actualAmount-item {
	width: 7.6%
}



.order {
	margin-left: 64px;
	.tabs {
		
		.tabs__header {
			background: #fcfcfc;
			float: left;
			width: 186px;
			border-right: 2px solid #e5e5e5;
			height: calc(100vh - 52px);
			position: fixed;
			z-index:100;
			h1 {
				padding: 27px 0 26px 20px;
			}
			.triggers {
				div {
					height: 44px;
					text-align: center;
					line-height: 44px;
					color: #000000;
					cursor: pointer;
				}
				.tabs_active {
					background: #ffffff;
					color: #c60582;
					border-top: 1px solid #e5e5e5;
					border-bottom: 1px solid #e5e5e5;
					position: relative;

					a {
						position: absolute;
						top: 0;
						left: 0;
						height: 44px;
						width: 4px;
						background: #c60582;
					}
					span {
						height: 44px;
						width: 10px;
						display: block;
						position: absolute;
						background: #ffffff;
						top: 0;
						right: -6px;
					}
				}
			}
		}
	}
}


</style>
