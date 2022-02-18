<template>
	<view class="body">
		<view>
			<uni-segmented-control class="tab" :current="current" :values="items" style-type="text" active-color="#de7800"
				@clickItem="onClickItem"/>
			<scroll-view class="content">
				<view class="collectionArea-flex-container">
					<view class="" v-for="item in orderList" @click="linkToDescription" :key="item.id"
						:data-id="item.id">
						<orderCard :item="item"></orderCard>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import orderCard from '../../components/orderCard/orderCard.vue'
	import collectionCard from '../../components/collectionCard/collectionCard.vue'
	import API from "../../http/API.js"
	export default {
		components: {
			orderCard,
			collectionCard
		},
		data() {
			return {
				show: false,
				items: ['待付款', '已成交', '已收货', "已取消"],
				current: 0,
				buyerid: null,
				orderList: []
			}
		},
		async mounted() {
			const userInfo = await API.relicManageAPI.getUserInfo()
			this.buyerid = userInfo.data.user.userId
			let obj = {
				"buyerid": this.buyerid,
				"status": "DRAFT"
			}
			const res = await API.relicManageAPI.getBillList(obj)
			this.orderList = res.data.rows
			console.log("待支付订单列表", res)
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
		},
		watch: {
			async current() {
				console.log(this.current, this.buyerid)
				if (this.current == 0) {
					let obj = {
						"buyerid": this.buyerid,
						"status": "DRAFT"
					}
					const res = await API.relicManageAPI.getBillList(obj)
					this.orderList = res.data.rows
					console.log("待支付订单列表", res)
				}
				if (this.current == 1) {
					let obj = {
						"buyerid": this.buyerid,
						"status": "PAIED"
					}
					const res = await API.relicManageAPI.getBillList(obj)
					this.orderList = res.data.rows
					console.log("已成交订单列表", res)
				}
				if (this.current == 2) {
					let obj = {
						"buyerid": this.buyerid,
						"status": "RECEIVED"
					}
					const res = await API.relicManageAPI.getBillList(obj)
					this.orderList = res.data.rows
					console.log("已收获订单列表", res)
				}
				if (this.current == 3) {
					let obj = {
						"buyerid": this.buyerid,
						"status": "CANCELED"
					}
					const res = await API.relicManageAPI.getBillList(obj)
					this.orderList = res.data.rows
					console.log("已取消订单列表", res)
				}
			}
		},
	}
</script>

<style lang="scss">
	.body {
		height: 100%;
		width: 100%;
		background-color: #FFFFFF;
		color: white;
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
	.content{
		margin-top: 70rpx;
	}
	.tab{
		position: fixed;
		top: -5rpx;
		z-index:10;
		width: 100%;
		background-color: white;
	}
</style>
