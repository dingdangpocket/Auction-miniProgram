<template>
	<view class="commonStyle">
		<view class="orderCardItem">
			<view class="imgArea">
				<image :src="orderInfo.imgArray[0].imgPath" mode=""></image>
			</view>
			<view class="textArea">
				<text>{{orderInfo.title}}</text>
				<text>{{orderInfo.price}}</text>
				<text style="font-size:25rpx;">数量:1件</text>
				<text style="font-size:20rpx;">发行方:{{orderInfo.musem}}</text>
			</view>
			<view class="btnArea">
				<button class="btn" type="default" @click="comfirm">确认支付</button>
			</view>
		</view>
	</view>
</template>

<script>
	var app = getApp()
	import API from "../../http/API.js"
	export default {
		data() {
			return {
				orderInfo: "",
			}
		},
		onLoad(option) {
			const res = JSON.parse(option.items)
			console.log(res)
			this.orderInfo = res
		},
		methods: {
			async comfirm() {
				var quantity = 3
				var needPay = Math.floor(parseFloat(3.8 * 100 * quantity));
				console.log(needPay, "分")
				let orderData = {
					// code: app.globalData.code,
					openId: app.globalData.openId,
					collectionId: app.globalData.collectionId,
					price: 0.01 * 100,
					// title:"测试"
					// payType: "wxPay"
				}
				console.log("支付所需订单信息", orderData)
				const res = await API.payAPI.comfirmPay(orderData)
				console.log("支付所需参数", res)
				// uni.requestPayment({
				// 	"appId":"wx48d4c185c78f0c21"
				// 	"timeStamp": res.timeStamp,
				// 	"nonceStr":"5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
				// 	"package":`prepay_id=${res.data.prepay_id}`,
				// 	"signType":"RSA",
				// 	"paySign": res.paySign,
				// 	success: function(res) {
				// 		console.log("支付成功结果", res)
				// 	},
				// 	fail: function(err) {
				// 		console.log("支付失败结果", err)
				// 	}
				// });
			},
		}
	}
</script>

<style lang="scss">
	.commonStyle {
		color: white;
		background-color: white;
	}

	.orderCardItem {
		width: 98%;
		height: 230rpx;
		background-color: #343334;
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		.imgArea {
			width: 200rpx;
			height: 200rpx;
			background-color: red;

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
			margin-left: 10rpx;

			text {
				display: block;
			}
		}

		.btnArea {
			width: 310rpx;
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
				background-color:#333333;
				color: white;
				border-bottom: 4rpx solid #78470b;
			}
		}
	}
</style>
