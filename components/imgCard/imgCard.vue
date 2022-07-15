<template>
	<view class="Card">
		<view class="imgArea">
			<image :src="item.imgPath" mode="aspectFit" class="image"></image>
		</view>
	</view>
</template>
//轮播图卡片组件;
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
