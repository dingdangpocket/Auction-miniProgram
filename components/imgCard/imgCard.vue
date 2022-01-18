<template>
	<view class="Card">
		<view class="imgArea">
			<image :src="item.imgPath" mode="aspectFit" class="image"></image>
		</view>
		<!-- 	<view class="titleArea">
			 <text>{{item.content}}</text>&nbsp;&nbsp;&nbsp;<text style="font-size:15rpx;margin-left:20rpx;">{{item.desc}}</text>
		</view> -->

	</view>

</template>

<script>
	export default {
		props: ["item"],
		name: "navCard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.Card {
		width: 100%;
		height: 100%;
		background-color:white;
		padding: 1rpx;
		// border-radius: 30rpx;
		color: white;

		.imgArea {
			width: 100%;
			height: 100%;
			background-color:white;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
