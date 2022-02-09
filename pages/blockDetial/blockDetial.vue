<template>
	<view class="container">
		<view class="detialArea">
			<view class="line-2 box"><text>-</text></view>
			<view class="line-4 box"><text>交易时间:2022-1-3</text></view>
			<view class="line-3 box"><text>订单编号:THAT287251OIPI</text></view>
			<view class="line-5 box"><text>-</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.line-1 {
		width: 95%;
		height: 100rpx;
		color: white;
		// background-color: #39383a;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		// box-shadow: 1px 1px 2px black;
		margin-top: 10rpx;
		color: black;
		border-bottom: 2px solid black;

		text {
			width: 150rpx;
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}

	.container {
		height: 100%;
		width: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.detialArea {
		width: 95%;
		height: 230rpx;
		margin: 0 auto;
		margin-top: 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		color: black;
		border-bottom: 2px solid black;

		.box {
			width: 70%;
			display: block;
			// background-color: red;
			margin-bottom: 10rpx;
			padding: 5rpx;
			font-size: 25rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}

	}
</style>
