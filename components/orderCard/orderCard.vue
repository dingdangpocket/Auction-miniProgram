<template>
	<view class="orderCardItem">
		<view class="imgArea">
			<image :src="`${url}file${item.commodity.collection.images[0].url}`" mode=""></image>
		</view>
		<view class="textArea">
			<text style="font-size:25rpx;color:#1d1d1d;">{{item.commodity.name}}</text>
			<text>订单编号{{item.outTradeNo.slice(0,18)}}</text>
			<text v-if="item.status=='DRAFT'">订单状态:待付款</text>
			<text v-if="item.status=='PAIED'">订单状态:已支付</text>
			<text v-if="item.status=='DRAFT'">交易时间{{item.orderTime.slice(0,10)}}</text>
			<text v-if="item.status=='PAIED'">交易时间{{item.payTime.slice(0,10)}}</text>
		</view>
		<view class="btnArea">
			<button v-if="item.status=='DRAFT'" class="btn" type="default" @click="comfirm(item)">支付</button>
			<button v-if="item.status=='PAIED'" class="btn" type="default" @click="LinkToDetial">详情</button>
		</view>
	</view>
</template>

<script>
	import API from "../../http/API.js"
	export default {
		props: ["item"],
		name: "orderCard",
		data() {
			return {
				url: "https://api.bitaichain.com:8443/",
			};
		},
		mounted() {
			console.log(this.item)
		},
		methods: {
			async comfirm(item) {
				const params = await API.payAPI.getPayParams(item.prepay_id)
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
						if (res) {}
					},
					fail: function(err) {
						console.log("支付失败结果", err)
					}
				});
			},
			LinkToDetial() {
				uni.navigateTo({
					url: "../../pages/blockDetial/blockDetial"
				})
			}
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
		border-bottom: 2px solid rgb(140,140,140);
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
			height: 200rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			text {
				width: 360rpx;
				color: rgb(46, 46, 47);
				display: block;
				font-size: 20rpx;
			}
		}

		.btnArea {
			width: 120rpx;
			height: 110rpx;
			// background-color: blue;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-right: 10rpx;
			.btn {
				width: 160rpx;
				height: 60rpx;
				font-size: 23rpx;
				border-radius: 3rpx;
				background-color: #333333;
				color: white;
				border-bottom: 4rpx solid #78470b;
			}
		}
	}
</style>
