<template>
	<view class="collectionCard">
		<view class="imgArea">
			<image class="img" :src="`${url}file${item.collection.images[0].url}`" mode="" style="width:100%;height:235rpx">
			</image>
		</view>
		<view class="nameArea">
			<image src="../../static/iconleft.png" mode="" style="width:40rpx;height:40rpx"></image>
			<text style="font-size:13rpx;">{{item.name}}</text>
			<image src="../../static/iconright.png" mode="" style="width:40rpx;height:40rpx"></image>
		</view>
		<view class="onwerArea">
			<view class="left">
				<text style="font-size:20rpx;">自营</text>
			</view>
			<view class="right">
				<text>¥{{item.price/100}}</text>
			</view>
		</view>
	</view>
</template>

//藏品卡片组件
<script>
	export default {
		props: ["item"],
		name: "collectionCard",
		data() {
			return {
				url: "https://api.bitaichain.com:8443/",
			};
		},
	}
</script>

<style lang="scss">
	.collectionCard {
		width: 280rpx;
		height: 380rpx;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		background-color: rgba($color: #000000, $alpha: 1);
		box-shadow: 1px 1px 1px #4f4f50;
		.imgArea {
			width: 100%;
			height: 235rpx;
			border-radius: 10rpx;
			.img {
				width: 100%;
				height: 235rpx;
			}
		}

		.nameArea {
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			line-height: 75rpx;
			color: white;
			justify-content: center;
			border-bottom: 1px solid rgba($color: #655f66, $alpha: 0.9);
		}
		.onwerArea {
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			.left {
				width: 60%;
				height: 75rpx;
				line-height: 75rpx;
				color: #e3e1e4;
				text {
					display: block;
					margin-left: 10rpx;
				}
			}
			.right {
				width: 40%;
				height: 75rpx;
				line-height: 75rpx;
				color: #ffffff;
				font-size: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
