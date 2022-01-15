<template>
	<view class="body">
		<view class="ImgArea">
			<swiper class="swiper-container" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in descData.imgArray" class="swiper-item" :key="item.id" @click="linkTo()">
					<imgCard :item="item"></imgCard>
				</swiper-item>
			</swiper>
		</view>
		<view class="PriceArea">
			<text style="font-size:40rpx;">{{descData.price}}RMB</text><br>
			<text style="font-size:20rpx;">发行{{descData.limit}}份</text>
			<image class="model" src="../../static/3d.png" mode="" @click="LinkToModel"></image>
		</view>
		<view class="TitleArea">
			<text>{{descData.title}}</text>
		</view>
		<view class="MusemArea">
			<text>发行方</text>
			<text>{{descData.musem}}</text>
		</view>
		<view class="DescArea">
			<text>....</text>
		</view>
		<view class="PayBtn" @click="LinkToOrderComfirm">购买</view>
		<view class="ReminderArea">
			<text style="font-size: 40rpx;">购买须知</text><br>
			<text>数字藏品为虚拟数字商品,并非实物,仅限实名认证为年满14周岁的中国大陆用户购买,数字藏品的版权由发行方或作者拥有,除另行取得版权拥有者书面同意外,用户不得将数字藏品用于任何商业用途,本商品一经售出,不支持退换;请勿对藏品进行炒作、场外交易、欺诈、或其他任何非法用途;
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				descData: {
					id: 0,
					title: "青花瓷",
					price: 99,
					limit: 800,
					musem: "成都博物馆",
					imgArray: [{
							id: 0,
							imgPath: "../../static/card1.jpg"
						},
						{
							id: 1,
							imgPath: "../../static/card2.jpg"
						},
						{
							id: 2,
							imgPath: "../../static/card2.jpg"
						}
					],
					decs: "详情数据",
				},
			}
		},
		methods: {
			LinkToModel() {
				uni.navigateTo({
					url: "../model/model"
				})
			},
			LinkToOrderComfirm() {
				uni.navigateTo({
					url: "../orderComfirm/orderComfirm"
				})
			}
		},
	}
</script>

<style lang="scss">
	.body {
		// height: 100%;
		width: 100%;
		background-color: black;
		color: white;
		overflow: hidden;

		.ImgArea {
			height: 560rpx;
			width: 100%;
			background-color: red;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;

			.swiper-container {
				height: 560rpx;
				width: 100%;

				.swiper-item {
					background-color: blue;
				}
			}
		}

		.PriceArea {
			height: 100rpx;
			width: 100%;
			background-color: black;
			color: white;
			padding: 10rpx;
			border-bottom: 2px solid white;
			position: relative;

			.model {
				position: absolute;
				width: 70rpx;
				height: 70rpx;
				right: 50rpx;
				bottom: 28rpx;
			}
		}

		.TitleArea {
			height: 60rpx;
			width: 100%;
			background-color: black;
			color: white;
			line-height: 60rpx;
			padding: 10rpx;
			font-size: 35rpx;
		}

		.MusemArea {
			height: 60rpx;
			width: 100%;
			background-color: gray;
			color: white;
			line-height: 60rpx;
			// padding: 10rpx;
			display: flex;
			justify-content: space-between;

			text {
				display: block;
				margin-left: 10rpx;
				margin-right: 10rpx;
			}
		}

		.ReminderArea {
			height: 310rpx;
			width: 98%;
			background-color: black;
			color: white;
			font-size: 30rpx;
			padding: 15rpx;
		}

		.DescArea {
			height: 1300rpx;
			width: 100%;
			background-color: white;
			color: white;
		}
	}

	.PayBtn {
		width: 100%;
		height: 100rpx;
		background: black;
		color: white;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
