<template>
	<view class="Card">
		<view class="imgArea">
			 <image :src="item.imgPath" mode="aspectFill" class="image"></image>
		</view>
		<view class="titleArea">
			 <text>{{item.content}}</text>&nbsp;&nbsp;&nbsp;<text style="font-size:15rpx;margin-left:20rpx;">{{item.desc}}</text>
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

<style lang="scss">
	.Card{
		width: 100%;
		height: 100%;
		background-color: #000000;
		color:white;
		.imgArea{
			width: 100%;
			height: 80%;
			.image{
				width: 100%;
				height: 100%;
			}
		}
		.titleArea{
			width: 100%;
			height: 20%;
			background-color: #1e1e20;
			padding:10rpx;
			font-size: 26rpx;
		}
	}

</style>
