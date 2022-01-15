<template>
	<view class="body">
		<view class="loginFram">
			<image class="profile" :src="userInfo.avatarurl" mode=""></image>
			<text class="login" @tap="login()">{{userInfo.displayname?userInfo.displayname:'立即登陆'}}</text>
			<text class="tip">登陆后查看自己的数字藏品</text>
		</view>
		<view class="setting">
			<!-- 	<view class="box">
				<view class="">
					<image src="../../static/collection.png" mode="" style="width:60rpx;height:60rpx;"></image>
				</view>
				<view class="">
					<text>我的收藏</text>
				</view>
			</view> -->
			<view class="box" @click="LinkToMyOrderList">
				<view class="">
					<image src="../../static/order.png" mode="" style="width:60rpx;height:60rpx;"></image>
				</view>
				<view class="">
					<text>我的订单</text>
				</view>
			</view>
			<view class="box" @click="LinkToSetting">
				<view class="">
					<image src="../../static/setting.png" mode="" style="width:60rpx;height:60rpx;"></image>
				</view>
				<view class="">
					<text>设置中心</text>
				</view>
			</view>
		</view>

		<view class="collectionArea-title">
			<text>我的收藏</text>
		</view>
		<scroll-view scroll-y="true" class="collectionArea" show-scrollbar="false">
			<view class="collectionArea-flex-container">
				<view class="" v-for="item in collectionData" @click="linkToDescription" :key="item.id"
					:data-id="item.id">
					<collectionCard :item="item"></collectionCard>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var app = getApp()
	import collectionCard from '../../components/collectionCard/collectionCard.vue'
	import API from "../../http/API.js"
	export default {
		components: {
			collectionCard
		},
		data() {
			return {
				userInfo: "",
				dataArry: null,
				mycollect: null,
				auth: false,
				collectionData: [{
						id: 0,
						content: "藏品"
					},
					{
						id: 1,
						content: "购买须知"
					},
					{
						id: 2,
						content: "数字藏品拍卖"
					},
					{
						id: 3,
						content: "藏品"
					},
					{
						id: 4,
						content: "购买须知"
					},
					{
						id: 5,
						content: "数字藏品拍卖"
					},
					{
						id: 6,
						content: "藏品"
					},
					{
						id: 7,
						content: "购买须知"
					},
				]
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			async getData() {
				const res = await API.relicManageAPI.GetCollectionData()
				this.collectionData = res.data.rows
				console.log("结果", res.data.rows)
			},
			LinkToSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			},
			LinkToMyOrderList() {
				uni.navigateTo({
					url: "../orderList/orderList"
				})
			},

			//登陆板块
			login() {
				uni.getUserProfile({
					desc: 'weixin',
					success: res => {
						console.log(res, '授权成功');
						this.userInfo = res.userInfo
						this.getCode(res.userInfo)
						this.nickName = res.userInfo.nickName
					},
					fail: err => {
						console.log(err, '失败授权')
					}
				})
			},
			getCode(userInfo) {
				uni.login({
					provider: 'weixin',
					success: res => {
						this.getToken(res.code, userInfo) //将code码和用户信息发给后端;
							app.globalData.code = res.code
					}
				})
			},
			getToken(code, userInfo) { //获取token;
				console.log(code, userInfo)
				uni.request({
					url: 'https://10.10.10.24:8443/auth/wxlogin',
					method: 'POST',
					data: {
						code, 
						userInfo,
					},
					success: res => {
						console.log("--token获取结果---", res)
						if (res.data.msg == "success") { //如果成功保存token;
							uni.setStorage({
								key: 'user_token',
								data: res.data.data.token
							});
							// console.log("获取的token",res.data.data.token)
							app.globalData.token=res.data.data.token
							app.globalData.openId = res.data.data.sysUser.userName
							app.globalData.userInfo = res.data.data.sysUser
							uni.showToast({
								title: '授权登陆成功',
								duration: 1300
							});
							this.userInfo = res.data.data.sysUser
							// console.log("用户信息", this.userInfo)
						}else{
							uni.showToast({
								title: '网络错误,登陆失败',
								duration: 1300
							});
						}
					},
				})
			},
			//登陆板块
		},
		watch: {}
	}
</script>

<style lang="scss">
	.body {
		background-color: black;
		color: white;
	}

	.collectionArea-title {
		height: 70rpx;
		width: 180rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10rpx;
		border-bottom: 5rpx solid white;
		// background-color: red;
	}

	.collectionArea {
		// height: 770rpx;
		width: 98%;
		background-color: black;
		position: relative;
		white-space: nowrap;
		border-radius: 8rpx;
		margin-top: 10rpx;

		.collectionArea-flex-container {
			width: 100vw;
			// height: 770rpx;
			background-color: black;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}

		.collectionArea-flex-container:after {
			content: '';
			height: 10rpx;
			width: 285rpx;
		}
	}

	.setting {
		width: 100%;
		height: 160rpx;
		// background-color: white;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
		margin-top: 10rpx;

		.box {
			width: 140rpx;
			height: 140rpx;
			background-color: black;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}

	.text {
		font-size: 28rpx;
	}

	.loginFram {
		width: 100vw;
		height: 160rpx;
		margin: 0 auto;
		position: relative;

		// margin-top: 20rpx;
		.profile {
			width: 120rpx;
			height: 120rpx;
			background-color: gray;
			border-radius: 60rpx;
			position: absolute;
			top: 20rpx;
			left: 30rpx;
		}

		.login {
			position: absolute;
			top: 35rpx;
			left: 190rpx;
		}

		.tip {
			position: absolute;
			top: 70rpx;
			left: 190rpx;
			font-size: 20rpx;
			color: gray;
			margin-top: 10rpx;
		}
	}

	.img {
		width: 660rpx;
		height: 110rpx;
		margin: 0 auto;
		margin-top: 10rpx;
	}

	.icon {
		margin-top: 10rpx;
		width: 45rpx;
		height: 45rpx;
	}

	.scrollFram {
		width: 725rpx;
	}
</style>
