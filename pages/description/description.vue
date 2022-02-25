<template>
	<view class="body">
		<view class="ImgArea">
			<swiper class="swiper-container" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in descData.imgArray" class="swiper-item" :key="item.id" @click="linkTo()">
					<imgCard :item="item"></imgCard>
				</swiper-item>
			</swiper>
		</view>
		<view class="TitleArea">
			<view class="Title">
				<image src="../../static/iconleft.png" mode="" style="width:40rpx;height:40rpx"></image>
				<text>{{descData.title}}</text>
				<image src="../../static/iconright.png" mode="" style="width:40rpx;height:40rpx"></image>
			</view>
		</view>
		<view class="MusemArea">
			<!-- 	<text>发行方</text>
			<text>{{descData.musem}}</text> -->
		</view>
		<view class="PriceArea">
			<text style="font-size:40rpx;">¥{{descInfo.price/100}}</text>
			<!-- 	<text class="limitTag">限量发行</text>
			<text style="font-size:22rpx;padding-left:5rpx;">{{descData.limit}}份</text> -->
			<image class="model" src="../../static/3dblack.png" mode="" @click="LinkToModel"></image>
			<image class="follow" src="../../static/follow2.png" mode="" @click="follow"></image>
		</view>

		<view class="DescArea">
			<image src="../../static/desc-1.jpeg" mode="" style="width: 100%;height:1800rpx;"></image>
			<image src="../../static/desc-2.jpeg" mode="" style="width: 100%;height:1300rpx;"></image>
			<image src="../../static/desc-3.jpeg" mode="" style="width: 100%;height:700rpx;"></image>
			<text>....</text>
		</view>
		<!--<view class="ReminderArea">
			<text style="font-size:30rpx;">购买须知</text><br>
			<text>工艺品由发行方或作者拥有,除另行取得版权拥有者书面同意外,用户不得用于任何商业用途,本商品一经售出,不支持退换;请勿进行炒作、场外交易、欺诈、或其他任何非法用途;
			</text>
		</view> -->
		<view class="PayBtn" @click="LinkToOrderComfirm">
			<text>购买下单</text>
		</view>
	</view>
</template>

<script>
	import API from "../../http/API.js"
	var app = getApp()
	export default {
		data() {
			return {
				commodityId: null,
				descInfo: {},
				openId: null,
				descData: {
					id: 0,
					title: "红釉陶瓷工艺品",
					price: 9.9,
					limit: 800,
					musem: "成都博物馆",
					imgArray: [{
							id: 0,
							imgPath: "../../static/9.jpg"
						},
						{
							id: 1,
							imgPath: "../../static/2.jpg"
						},
						{
							id: 2,
							imgPath: "../../static/3.jpg"
						}
					],
					decs: "详情数据",
				},
			}
		},
		onLoad: function(option) {
			this.descInfo = JSON.parse(option.items)
			// console.log("商品数据",this.descInfo)
			this.openId = uni.getStorageSync('user_info').userName
		},
		methods: {
			LinkToModel() {
				uni.navigateTo({
					url: "../model/model"
				})
			},
			follow() {
				if (app.globalData.isLoginStatus == false) {
					uni.showToast({
						title: '请先登陆账户',
						duration: 1000
					});
					return
				}
			},
			async LinkToOrderComfirm() {
				if (app.globalData.isLoginStatus == false) {
					uni.showToast({
						title: '请先登陆账户',
						duration: 1000
					});
					return
				}
				let obj = {
					"openId": this.openId,
					"commodityId": this.descInfo.id,
					"price": this.descInfo.price,
				}
				const res = await API.relicManageAPI.addOrder(obj)
				// console.log("下单结果", res)
				if (res.data.success == "false") {
					return
				}
				if (res.data.success == "true") {
					let paramsArray = [res.data, this.descInfo]
					uni.navigateTo({
						url: '../orderComfirm/orderComfirm?items=' + JSON.stringify(paramsArray),
					})
				}
			}
		},
	}
</script>

<style lang="scss">
	.body {
		// height: 100%;
		width: 100%;
		// background-color: white;
		color: white;
		overflow: hidden;

		.ImgArea {
			height: 560rpx;
			width: 100%;
			// background-color: red;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;

			.swiper-container {
				height: 560rpx;
				width: 100%;

				.swiper-item {
					// background-color: blue;
				}
			}
		}

		.PriceArea {
			height: 65rpx;
			width: 100%;
			// background-color: "#ea001a";
			color: black;
			padding: 10rpx;
			border-bottom: 1px solid white;
			position: relative;

			.limitTag {
				color: white;
				font-size: 25rpx;
				padding: 8rpx;
				// background-color: #78470b;
			}

			.model {
				position: absolute;
				width: 60rpx;
				height: 60rpx;
				right: 50rpx;
				bottom: 28rpx;
				top: 8rpx
			}

			.follow {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				right: 138rpx;
				bottom: 28rpx;
				top: 15rpx
			}
		}

		.TitleArea {
			width: 100%;
			height: 75rpx;
			display: flex;
			align-items: center;
			line-height: 75rpx;
			color: black;
			justify-content: center;

			// background-color: "#FFFFFF";
			.Title {
				height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.MusemArea {
			height: 40rpx;
			width: 100%;
			background-color: #cecfd2;
			color: black;
			line-height: 40rpx;
			font-size: 23rpx;
			display: flex;
			justify-content: space-between;

			text {
				display: block;
				margin-left: 10rpx;
				margin-right: 10rpx;
			}
		}

		.ReminderArea {
			height: 300rpx;
			width: 98%;
			// background-color: #1f1e1f;
			color: white;
			font-size: 24rpx;
			padding: 15rpx;
			margin-bottom: 30rpx;
		}

		.DescArea {
			width: 100%;
			// background-color: white;
			color: white;
		}
	}

	.PayBtn {
		width: 100%;
		height: 100rpx;
		background: #333333;
		color: white;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		text {
			width: 135rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1.5px solid #78470b;
		}
	}
</style>
