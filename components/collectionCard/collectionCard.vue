<template>
	<view class="collectionCard">
		<view class="imgArea">
			<view class=""  v-if="item.images[0]!=null">
				<image class="img" :src="`https://10.10.10.24:8443/file${item.images[0].url}`" mode=""></image>
			</view>
			<view class="" v-else>
				<image class="img" src="" mode="" style="width:100rpx;height:100rpx"></image>
			</view>
		</view>
		<view class="nameArea">
			   <text>{{item.title}}</text>
		</view>
		<view class="onwerArea">
			<view class="left">
				 <text>{{item.username}}</text>
			</view>
			<view class="right">
				<text>¥9.9</text>
			</view>
			
		</view>
		
		<view class="priceArea">
			
		</view>
	
	</view>
</template>

<script>
	export default {
		props: ["item"],
		name:"navCard",
		data() {
			return {
				
			};
		}
	}
</script>

<style  lang="scss">
	.collectionCard{
		width: 280rpx;
		height: 370rpx;
		// background-color: #ff0000;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		.imgArea{
			width: 100%;
			height: 235rpx;
			border-radius: 10rpx;
			// background-color: #008c00;
			.img{
				width: 100%;
				height: 235rpx;
			}
		}
		.nameArea{
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			line-height: 75rpx;
			background-color: #252529;
			color:white;
			justify-content: center;
		}
		.onwerArea{
			width: 100%;
			height: 75rpx;
			background-color: #825500;
			display: flex;
			align-items: center;
			.left{
				width: 60%;
				height: 75rpx;
				line-height: 75rpx;
				background-color: #252529;
				color:white;
			}
			.right{
				width: 40%;
				height: 75rpx;
				background-color: #fafff9;
				line-height: 75rpx;
				background-color: #252529;
				color:white;
				font-size: 40rpx;
			}
		}
	}

</style>
