<template>
	<view class="body">
		<view class="orderListContainer">
			<view class="" v-for="item in orderList">
				<orderCard :item="item" />
			</view>
		</view>
	</view>
</template>

<script>
	import orderCard from '../../components/orderCard/orderCard.vue'
	import API from "../../http/API.js"
	export default {
		components: {
			orderCard
		},
		data() {
			return {
				orderList: [{
						id: 0,
						orderId: "YTSH28255388UJOP",
						collectionId: "73",
						title: "青花瓷",
						payTime: "2021-1-3",
						imgSrc: "https://img1.baidu.com/it/u=2267847562,3543896283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=542"
					},
					{
						id: 1,
						orderId: "YTSH28255388UJOP",
						collectionId: "73",
						title: "磁州窑",
						payTime: "2021-1-3",
						imgSrc: "https://img1.baidu.com/it/u=2267847562,3543896283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=542"
					},
					{
						id: 2,
						orderId: "YTSH28255388UJOP",
						collectionId: "73",
						title: "白瓷",
						payTime: "2021-1-3",
						imgSrc: "https://img1.baidu.com/it/u=2267847562,3543896283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=542"
					},
					{
						id: 3,
						orderId: "YTSH28255388UJOP",
						collectionId: "73",
						title: "景泰蓝",
						payTime: "2021-1-3",
						imgSrc: "https://img1.baidu.com/it/u=2267847562,3543896283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=542"
					},
				]
			}
		},
		async mounted() {
			const userInfo = await API.relicManageAPI.getUserInfo()
			console.log("buyerid",userInfo.data.user.userId)
			let obj={
			    "buyerid":19,
			    "status":"DRAFT"
			}
			const res = await API.relicManageAPI.getBillList(obj)
			console.log("订单列表", res)
		},
	}
</script>

<style lang="scss">
	.body {
		height: 100%;
		width: 100%;
		background-color: #FFFFFF;
		color: white;
		overflow: hidden;

		.title {
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: black;
		}

		.orderListContainer {
			height: 100%;
			background-color: #FFFFFF;
			overflow-y: scroll;
		}
	}
</style>
