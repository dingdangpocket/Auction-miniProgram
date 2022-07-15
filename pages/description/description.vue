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
				<text>{{descInfo.name}}</text>
				<image src="../../static/iconright.png" mode="" style="width:40rpx;height:40rpx"></image>
			</view>
		</view>
		<view class="MusemArea">
		</view>
		<view class="PriceArea">
			<text style="font-size:40rpx;">¥{{descInfo.price/100}}</text>
			<image class="model" src="../../static/3dblack.png" mode="" @click="LinkToModel(descInfo)"></image>
			<image v-if="isFollow==true" class="follow" src="../../static/follow1.png" mode=""
				@click="Follow(descInfo)"></image>
			<image v-else class="follow" src="../../static/follow2.png" mode="" @click="Follow(descInfo)"></image>
		</view>

		<view class="DescArea">
			<image src="../../static/desc-1.jpeg" mode="" style="width: 100%;height:1800rpx;"></image>
			<image src="../../static/desc-2.jpeg" mode="" style="width: 100%;height:1300rpx;"></image>
			<image src="../../static/desc-3.jpeg" mode="" style="width: 100%;height:700rpx;"></image>
			<text>....</text>
		</view>
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
				isFollow: null,
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
					decs: "测试详情数据",
				},
			}
		},
		onLoad: function(option) {
			this.openId = uni.getStorageSync('user_info').userName
			this.commodityId = JSON.parse(option.items).id
			//点击的商品id参数;
		},
		onShow() {
			this.initDesc()
			//初始化商品详情数据;
		},
		methods: {
			async initDesc() {
				const res = await API.relicManageAPI.getCommodityDesc(this.commodityId);
				this.descInfo = res.data.data
				if (this.descInfo.mycartid == -1) {
					this.isFollow = false
					return
					//取消关注;
				}
				if (this.descInfo.mycartid != -1) {
					this.isFollow = true
					return
					//关注购物车;
				}
			},
			async Follow(descInfo) {
				if (app.globalData.isLoginStatus == false) {
					uni.showToast({
						title: '请先登陆账户',
						duration: 1000
					});
					return
				}
				
				if (this.isFollow == true) {
					const res = await API.relicManageAPI.cancelFollowList(descInfo.id)
					if (res.data.msg == "操作成功") {
						this.initDesc()
					}
					console.log("取消🛒结果", res)
					return
					//取消关注;
				}
				if (this.isFollow == false) {
					const res = await API.relicManageAPI.addFollowList(descInfo.id)
					if (res.data.msg == "添加成功") {
						this.initDesc()
					}
					console.log("加入🛒结果", res)
					return
					//关注购物车
				}
			},
			//点击关注按钮;
			LinkToModel(descInfo) {
				uni.navigateTo({
					url: "../model/model"
				})
			},
			//跳转至Model页面;
			async LinkToOrderComfirm() {
				if (app.globalData.isLoginStatus == false) {
					uni.showToast({
						title: '请先登陆账户',
						duration: 1000
					});
					return
				}
				//登陆权限控制;
				let obj = {
					"openId": this.openId,
					"commodityId": this.descInfo.id,
					"price": this.descInfo.price,
				}
				const res = await API.relicManageAPI.addOrder(obj)
				console.log("下单结果", res)
				if (res.data.success == "false") {
					uni.showToast({
						title: '网络错误,下单失败',
						duration: 1000
					});
					return
				}
				if (res.data.success == "true") {
					let paramsArray = [res.data,this.descInfo]
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
		width: 100%;
		color: white;
		overflow: hidden;
		.ImgArea {
			height: 560rpx;
			width: 100%;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;

			.swiper-container {
				height: 560rpx;
				width: 100%;
			}
		}

		.PriceArea {
			height: 65rpx;
			width: 100%;
			color: black;
			padding: 10rpx;
			border-bottom: 1px solid white;
			position: relative;

			.limitTag {
				color: white;
				font-size: 25rpx;
				padding: 8rpx;
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
