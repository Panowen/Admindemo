import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/components/Store'
import Order from '@/components/Order'
import Allorder from '@/components/Allorder'
import Evaluate from '@/components/Evaluate'
import Setorder from '@/components/Setorder'
import OrderDetails from '@/components/OrderDetails'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/store',
		},
		{
			path: '/store',
			component: Store,
			children: [
				{
					path: "/store/survey",

				},
				{
					path: "/store/order",
					component: Order,
					redirect: '/store/order/allorder',
					children:[
						{
							name:"allorder",
							path: "/store/order/allorder",
							component:Allorder
						},
						{
							name:"evaluate",
							path: "/store/order/evaluate",
							component:Evaluate
						},
						{
							name:"setorder",
							path: "/store/order/setorder",
							component:Setorder
						},
						{
							name:"orderdetails",
							path: "/store/order/orderdetails/:id",
							component:OrderDetails
						}
					]
				},
				{
					path: "/store/gift",

				},
				{
					path: "/store/logistics",

				},
			]
		}
	]
})
