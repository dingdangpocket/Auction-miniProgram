<template>
	<view class="commonStyle">
		<view class="orderCardItem">
			<view class="imgArea">
				<image  :src="`${url}file${orderInfo.collection.images[0].url}`" mode=""></image>
			</view>
			<view class="textArea">
				<text style="font-size: 25rpx;">{{orderInfo.name}}</text>
				<text>¥{{orderInfo.price/100}}</text>
				<text style="font-size:25rpx;">数量:1件</text>
			<!-- 	<text style="font-size:20rpx;">发行方:{{orderInfo.musem}}</text> -->
			</view>
			<view class="btnArea">
				<button class="btn" type="default" @click="comfirm">立即支付</button>
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
				url: "https://api.bitaichain.com:8443/",
				orderInfo: "",
				paramsArray:[]
			}
		},
		onLoad(option) {
			this.paramsArray= JSON.parse(option.items)
			this.orderInfo = this.paramsArray[1]
			console.log("下单参数",this.paramsArray)
		},
		methods: {
			async comfirm() {
				const params = await API.payAPI.getPayParams(this.paramsArray[0].prepay_id)
				console.log("支付参数", params)
				uni.requestPayment({
					"appId": params.data.appId,
					"timeStamp": params.data.timeStamp,
					"nonceStr": params.data.nonceStr,
					"package": params.data.package,
					"signType": params.data.signType,
					"paySign": params.data.paySign,
					success: function(res) {
						if(res){
							console.log("支付成功结果", res)
						}
					},
					fail: function(err) {
						if(err){
							uni.showToast({
								title: '支付失败',
								duration: 1300
							});
						}
					}
				});
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
			image {
				width: 200rpx;
				height: 200rpx;
			}
		}
		.textArea {
			width: 200rpx;
			height: 200rpx;
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
