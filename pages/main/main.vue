<template>
	<view class="body">
		<view class="loginFram" @click="login()">
			<image class="profile" :src="userInfo.avatarurl" mode=""></image>
			<text class="login">{{userInfo.displayname?userInfo.displayname:'立即登陆'}}</text>
			<text class="tip">登陆后查看</text>
		</view>
		<view class="setting">
			<view class="box" @click="LinkToMyOrderList">
				<view class="">
					<image src="../../static/orderblack.png" mode="" style="width:60rpx;height:60rpx;"></image>
				</view>
				<view class="">
					<text>我的订单</text>
				</view>
			</view>
			<view class="box" @click="LinkToSetting">
				<view class="">
					<image src="../../static/setblack.png" mode="" style="width:68rpx;height:68rpx;"></image>
				</view>
				<view class="">
					<text>设置中心</text>
				</view>
			</view>
		</view>
		<view>
			<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#a05909"
				@clickItem="onClickItem" />
			<view class="content">
				<view v-show="current === 0">
					<scroll-view scroll-y="true" class="collectionArea" show-scrollbar="false">
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionData" @click="linkToDescription" :key="item.id"
								:data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
					</scroll-view>
				</view>
				<view v-show="current === 1">
					<view class="collectionArea-flex-container">
						<view class="" v-for="item in collectionData" @click="linkToDescription" :key="item.id"
							:data-id="item.id">
							<collectionCard :item="item"></collectionCard>
						</view>
					</view>
				</view>
			</view>
		</view>

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
				items: ['我的收藏', '我的关注'],
				current: 0,
				userInfo: "",
				dataArry: null,
				mycollect: null,
				auth: false,
				collectionData: ""
			}
		},
		onShow() {
			if (app.globalData.cach == true) {
				this.userInfo = ""
			}
			//退出登陆清空缓存数据;
		},
		mounted() {
			if (app.globalData.userInfo) {
				// console.log(app.globalData.userInfo)
				this.userInfo = app.globalData.userInfo
			}
			// console.log("所有",app)
			this.login()
			this.getData()
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			async getData() {
				const res = await API.relicManageAPI.GetCommodityData()
				console.log("商品列表", res)
				this.collectionData = res.data.rows
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
				let res = uni.getStorageSync('user_token');
				if (res) {
					return
				}
				uni.getUserProfile({
					desc: 'weixin',
					success: res => {
						uni.setStorage({
							key: 'user_info',
							data: res.userInfo
						});
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
						this.getToken(res.code, userInfo)
						app.globalData.code = res.code
					}
				})
			},
			getToken(code, userInfo) {
				uni.request({
					url: 'https://api.bitaichain.com:8443/auth/wxlogin',
					method: 'POST',
					data: {
						code,
						userInfo,
					},
					success: res => {
						if (res.data.msg == "success") {
							uni.setStorage({
								key: 'user_token',
								data: res.data.data.token
							});
							app.globalData.token = res.data.data.token
							console.log("openID",res.data.data.sysUser.userName)
							app.globalData.openId = res.data.data.sysUser.userName
							app.globalData.userInfo = res.data.data.sysUser
							uni.showToast({
								title: '授权登陆成功',
								duration: 1300
							});
							uni.setStorage({
								key: 'user_info',
								data: res.data.data.sysUser
							});
							this.userInfo = res.data.data.sysUser
						} else {
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
		watch: {
			current() {
				if (this.current == 1) {
					this.getData()
				}
			}
		}
	}
</script>

<style lang="scss">
	.body {
		color: white;
		overflow: hidden;
		background-color: white;
	}

	.collectionArea-title {
		height: 70rpx;
		width: 180rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10rpx;
		color: black;
		border-bottom: 5rpx solid black;
		background-color: #FFFFFF;
	}

	.collectionArea-flex-container {
		width: 100vw;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.collectionArea-flex-container:after {
		content: '';
		height: 10rpx;
		width: 285rpx;
	}

	.setting {
		width: 100%;
		height: 160rpx;
		background-color: white;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
		margin-top: 10rpx;
		border-bottom: solid 1rpx #b7b8ba;

		.box {
			width: 140rpx;
			height: 140rpx;
			color: black;
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
		margin-top: 15rpx;
		background-color: white;

		.profile {
			width: 120rpx;
			height: 120rpx;
			background-color: gray;
			border-radius: 60rpx;
			position: absolute;
			top: 20rpx;
			left: 125rpx;
		}

		.login {
			position: absolute;
			color: black;
			top: 35rpx;
			left: 250rpx;
		}

		.tip {
			position: absolute;
			top: 70rpx;
			left: 250rpx;
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

	.collectionArea-flex-container {
		width: 100vw;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.collectionArea-flex-container:after {
		content: '';
		height: 10rpx;
		width: 285rpx;
	}
</style>
