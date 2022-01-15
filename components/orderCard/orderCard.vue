<template>
	<view class="orderCardItem">
	 <view class="imgArea">
		 <image :src="item.imgSrc" mode=""></image>
	 </view>
	 <view class="textArea">
		 <text>{{item.title}}</text>
		 <text style="font-size:20rpx;">交易时间{{item.payTime}}</text>
	 </view>
	 <view class="btnArea">
	 		 <button class="btn" type="default">查看详情</button>
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
		}
	}
</script>

<style lang="scss">
	.orderCardItem{
		width: 98%;
		height: 230rpx;
		// background-color: red;
		margin-top: 10rpx;
		display: flex;
		align-items:center;
		justify-content: center;
		border: solid 1px white;
	   .imgArea{
		   width:200rpx;
		   height:200rpx;
		   background-color: red;
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
	   		   width:310rpx;
	   		   height:200rpx;
	   		   // background-color: blue;
	   		   display: flex;
	   		   flex-wrap: wrap;
	   		   align-items: center;
			   .btn{
				   width: 160rpx;
				   height: 60rpx;
				   font-size: 27rpx;
				   border-radius: 0;
			   }
	   }
	}
</style>
