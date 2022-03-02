<template>
	<view class="orderCardItem">
		<view class="imgArea">
			<image :src="`${url}file${item.commodityvo.collection.images[0].url}`" mode=""></image>
		</view>
		<view class="textArea">
			<text style="font-size:30rpx;">{{item.commodityvo.name}}</text>
		    <!-- <text style="font-size:20rpx;">订单编号{{item.outTradeNo.slice(0,18)}}</text> -->
			<!-- <text style="font-size:20rpx;">交易时间{{item.payTime.slice(0,10)}}</text> -->
		</view>
		<view class="btnArea">
			<button class="btn" type="default" @click="linkToDescription(item)">详情</button>
			<button class="btn" type="default" @click="CancelFollow(item)">取消关注</button>
		</view>
	</view>
</template>

<script>
    import API from "../../http/API.js"
	export default {
		props: ["item"],
		name: "myFollowCard",
		mounted() {
			console.log("?",this.item)
		},
		data() {
			return {
				url: "https://api.bitaichain.com:8443/",
			};
		},
		methods: {
			async CancelFollow(item){
				const res= await API.relicManageAPI.cancelFollowList(item.commoditityid)
				console.log("取消🛒结果",res)
				if(res.data.code==200){
					this.$parent.getMyFollowList()
				}
			},
			linkToDescription(item) {
				//》》》
				uni.navigateTo({
					url: '../description/description?items=' + JSON.stringify(item.commodityvo)
				})
			}
		}
	}
</script>

<style lang="scss">
	.orderCardItem {
		width: 90vw;
		margin: 0 auto;
		height: 230rpx;
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: black;
		border-bottom: 2px solid rgb(190, 188, 197);
		.imgArea {
			width: 180rpx;
			height: 180rpx;
			margin-left: 10rpx;
			image {
				width: 180rpx;
				height: 180rpx;
			}
		}
		.textArea {
			width: 300rpx;
			height: 160rpx;
			// background-color: blue;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			padding: 10rpx;
			text {
				display: block;
			}
		}
		.btnArea {
			width: 150rpx;
			height: 160rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.btn {
				width: 140rpx;
				height: 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20rpx;
				border-radius: 3rpx;
				background-color: #333333;
				color: white;
				border-bottom:1rpx solid #78470b;
			}
		}
	}
</style>
