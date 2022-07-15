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
			<view v-if="collectionData==null" class="empty">
				<text>空</text>
			</view>
			<view v-show="current === 0">
				<view class="collectionArea-flex-container">
					<view class="collectionArea-flex-container" v-for="item in collectionData" :key="item.id"
						:data-id="item.id">
						<myCollectionCard :item="item"></myCollectionCard>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="collectionArea-flex-container">
					<view class="collectionArea-flex-container" v-for="item in followList" :key="item.id"
						:data-id="item.id">
						<myFollowCard :item="item"></myFollowCard>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var app = getApp()
	import myCollectionCard from "../../components/myCollectionCard/myCollectionCard.vue"
	import myFollowCard from "../../components/myFollowCard/myFollowCard.vue"
	import API from "../../http/API.js"
	export default {
		components: {
			myCollectionCard,myFollowCard
		},
		data() {
			return {
				items: ['我的收藏', '我的关注'],
				current: 0,
				userInfo: null,
				dataArry: null,
				auth: false,
				collectionData: null,
				followList:null
			}
		},
		onShow() {
			// let res = uni.getStorageSync('user_info');
			// if (res) {
			// 	this.userInfo = res;
			// }
			let res = uni.getStorageSync('user_info');
			this.userInfo = res;
			console.log("用户信息", res.avatarurl)

			if (app.globalData.isLoginStatus == false) {
				this.userInfo = null
				this.collectionData = null
			}
			//退出登陆后清空缓存用户登陆数据;
			this.getData()
			this.getMyFollowList()
			//获取我的收藏/关注列表
		},
		methods: {
			async getMyFollowList(){
				const res= await API.relicManageAPI.getFollowList()
				this.followList=res.data.rows
				console.log("关注列表",this.followList)
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			async getData() {
				let obj = {
					"buyerid": uni.getStorageSync('user_info').userId,
					"status": "PAIED"
				}
				const res = await API.relicManageAPI.getBillList(obj)
				this.collectionData = res.data.rows
				//console.log("用户已经购买的藏品列表", res)
			},
			LinkToSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			},
			LinkToMyOrderList() {
				if (app.globalData.isLoginStatus == false) {
					uni.showToast({
						title: '请先登陆账户',
						duration: 1000
					});
					return
				}
				uni.navigateTo({
					url: "../orderList/orderList"
				})
			},
			login() {
				if (app.globalData.isLoginStatus == true) {
					uni.navigateTo({
						url: "../setting/setting"
					})
					return
				}
				uni.getUserProfile({
					desc: 'weixin',
					success: res => {
						uni.setStorage({
							key: 'user_info',
							data: res.userInfo
						});
						this.getCode(res.userInfo)
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
							app.globalData.isLoginStatus = true
							this.getData()
							//登陆成功后,获取我的收藏数据;
							uni.showToast({
								title: '授权登陆成功',
								duration: 1300
							});
							uni.setStorage({
								key: 'user_info',
								data: res.data.data.sysUser
							});
							this.userInfo=res.data.data.sysUser
						} else {
							uni.showToast({
								title: '网络错误,登陆失败',
								duration: 1300
							});
						}
					},
				})
			},
			//微信三方登陆;
		},
		watch: {
		 async current() {
				if (this.current == 1) {
				    this.getMyFollowList()
				}
			}
		}
	}
</script>
<style lang="scss">
	.empty {
		width: 100vw;
		height: 60vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgb(180, 180, 180);
	}

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
		width: 100%;
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
