<template>
	<view class="orderCardItem">
	 <view class="imgArea">
		 <image :src="item.imgSrc" mode=""></image>
	 </view>
	 <view class="textArea">
		 <text>{{item.title}}</text>
		 <text style="font-size:20rpx;">订单编号{{item.orderId}}</text>
		 <text style="font-size:20rpx;">交易时间{{item.payTime}}</text>
	 </view>
	 <view class="btnArea">
	 		 <button class="btn" type="default" @click="LinkToDetial">查看详情</button>
	 </view>
	</view>
</template>

<script>
	export default {
		props: ["item"],
		name:"orderCard",
		data() {
			return {
				
			};
		},
		methods:{
			LinkToDetial(){
				uni.navigateTo({
					url:"../../pages/blockDetial/blockDetial"
				})
			}
		}
	}
</script>

<style lang="scss">
	.orderCardItem{
		width: 95%;
		margin: 0 auto;
		height: 230rpx;
		// background-color: #343334;
		margin-top: 10rpx;
		display: flex;
		align-items:center;
		justify-content: space-between;
		// background-color: rgba($color: #373737, $alpha: 0.9);
		// box-shadow: 1px 1px 2px #101010;
		color: black;
		border-bottom: 2px solid black;
	   .imgArea{
		   width:200rpx;
		   height:200rpx;
		   // background-color: red;
		   margin-left: 10rpx;
		   image{
			   width:200rpx;
			   height:200rpx;
		   }
	   }
	   .textArea{
		   width:200rpx;
		   height:200rpx;
		   // background-color: blue;
		   display: flex;
		   flex-wrap: wrap;
		   align-items: center;
		   margin-left: 10rpx;
		   text{
			   display: block;
		   }
	   }
	   .btnArea{
	   		   width:190rpx;
	   		   height:200rpx;
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
