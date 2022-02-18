<template>
	<view class="orderCardItem">
		<view class="imgArea">
			<image :src="item.imgSrc" mode=""></image>
		</view>
		<view class="textArea">
			<text>{{item.title}}</text>
			<text style="font-size:20rpx;">订单编号{{item.prepayid.slice(0,10)}}</text>
			<text style="font-size:20rpx;">订单状态:{{item.status}}</text>
			<text style="font-size:20rpx;">交易时间{{item.payTime}}</text>
		</view>
		<view class="btnArea">
			<button v-if="item.status=='DRAFT'" class="btn" type="default" @click="comfirm(item.commodityId)">支付</button>
			<!-- 	... -->
		</view>
	</view>
</template>

<script>
	import API from "../../http/API.js"
	export default {
		props: ["item"],
		name: "orderCard",
		data() {
			return {};
		},
		// mounted() {
		// 	console.log("single", this.item)
		// },
		methods: {
			async comfirm(commodityId) {
				const userInfo = await  API.relicManageAPI.getUserInfo()
				let orderData = {
					openId:userInfo.data.user.userName,
					commodityId:commodityId,
					price: 0.01 * 100,
					// title:"测试"
					// payType: "wxPay"
					// code: app.globalData.code,
				}
				const res = await API.payAPI.comfirmPay(orderData)
				console.log("prepay_id", res)
				const params = await API.payAPI.getPayParams(res.data.prepay_id)
				console.log("参数", params)
				console.log(params.data.paySign)
				uni.requestPayment({
					"appId": params.data.appId,
					"timeStamp": params.data.timeStamp,
					"nonceStr": params.data.nonceStr,
					"package": params.data.package,
					"signType": params.data.signType,
					"paySign": params.data.paySign,
					success: function(res) {
						console.log("支付成功结果", res)
						if(res){
							
						}
					},
					fail: function(err) {
						console.log("支付失败结果", err)
					}
				});
			},
			// LinkToDetial() {
			// 	uni.navigateTo({
			// 		url: "../../pages/blockDetial/blockDetial"
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.orderCardItem {
		width: 95%;
		margin: 0 auto;
		height: 230rpx;
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: black;
		border-bottom: 2px solid black;

		.imgArea {
			width: 200rpx;
			height: 200rpx;
			background-color: gray;
			margin-left: 10rpx;

			image {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.textArea {
			width: 200rpx;
			height: 200rpx;
			// background-color: blue;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-left: 0rpx;

			text {
				display: block;
			}
		}

		.btnArea {
			width: 190rpx;
			height: 200rpx;
			// background-color: blue;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.btn {
				width: 160rpx;
				height: 60rpx;
				font-size: 27rpx;
				border-radius: 3rpx;
				background-color: #333333;
				color: white;
				border-bottom: 4rpx solid #78470b;
			}
		}
	}
</style>
