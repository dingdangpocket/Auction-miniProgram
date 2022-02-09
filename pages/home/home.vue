<template>
	<view>
		<fui-dialog :show="show" :content="content" maskClosable @close="onClose">
		</fui-dialog>
		<view class="body">
			<view class="NavArea">
				<swiper class="swiper-container" :indicator-dots="true" :autoplay="true" :interval="3000"
					:duration="1000">
					<swiper-item v-for="item in navData" class="swiper-item" :key="item.id" @click="linkTo()">
						<navCard :item="item"></navCard>
					</swiper-item>
				</swiper>
			</view>
			<view>
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#de7800"
					@clickItem="onClickItem" />
				<view class="content">
					<view v-show="current === 0">
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionDataFilter" @click="linkToDescription"
								:key="item.id" :data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
					</view>
					<view v-show="current === 1">
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionDataFilter" @click="linkToDescription"
								:key="item.id" :data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
					</view>
					<view v-show="current === 2">
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionDataFilter" @click="linkToDescription"
								:key="item.id" :data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navCard from '../../components/navCard/navCard.vue'
	import collectionCard from '../../components/collectionCard/collectionCard.vue'
	import API from "../../http/API.js"
	import fuiDialog from "../../components/fui-dialog/fui-dialog.vue"
	var app = getApp()
	import {
		createNamespacedHelpers
	} from "vuex";
	const {
		mapState,
		mapActions
	} = createNamespacedHelpers("homeStore");
	export default {
		components: {
			navCard,
			collectionCard,
			fuiDialog
		},
		data() {
			return {
				content: '购买、收藏等操作需要您先登陆,是否登陆?',
				show: false,
				items: ['发售中', '精选', "热门"],
				current: 0,
				title: 'Hello',
				navData: [{
						id: 0,
						content: "精制陶瓷工艺品",
						desc: "",
						imgPath: "../../static/banner1.jpg"
					},
					{
						id: 1,
						content: "做最好的瓷器",
						desc: "",
						imgPath: "../../static/banner4.jpg"
					},
				],
				collectionData: "",
				screenWidth: ""
			}
		},
		onLoad() {
			// const res = await API.relicManageAPI.GetCollectionData()
			// if(res){
			// 	console.log("未过期")
			// }
			let res = uni.getStorageSync('user_token');
			if (res) {
				this.show = false
			} else {
				this.show = true
			}
		},
		async mounted() {
			this.getData()
		},
		watch: {
			current() {
				console.log(this.current)
			}
		},
		computed: {
			collectionDataFilter: function() {
				if (this.current == 0) {
					return this.collectionData
				}
				if (this.current == 1) {
					return this.collectionData.filter((item) => {
						return item.tag == "精选"
					})
				}
				if (this.current == 2) {
					return this.collectionData.filter((item) => {
						return item.tag == "热门"
					})
				}
			}
		},
		methods: {
			cancelValue(index) {
				if (index == 0) {
					this.show = false
				} else {
					this.show = false
					this.login()
				}
			},
			onClose() {
				this.show = false
			},
			// dialog
			
			async getData() {
				const res = await API.relicManageAPI.GetCollectionData()
				this.collectionData = res.data.rows
				console.log("结果来自华为云公网API", res)
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			linkToDescription(e) {
				app.globalData.collectionId = e.currentTarget.dataset.id
				uni.navigateTo({
					url: "../description/description"
				})
			},
			//登陆板块
			login() {
				this.show = false;
				uni.getUserProfile({
					desc: 'weixin',
					success: res => {
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
				uni.request({
					url: 'https://api.bitaichain.com:8443/auth/wxlogin',
					method: 'POST',
					data: {
						code,
						userInfo,
					},
					success: res => {
						if (res.data.msg == "success") { //如果成功保存token;
							uni.setStorage({
								key: 'user_token',
								data: res.data.data.token
							});
							app.globalData.token = res.data.data.token
							app.globalData.openId = res.data.data.sysUser.userName
							app.globalData.userInfo = res.data.data.sysUser
							uni.showToast({
								title: '授权登陆成功',
								duration: 1300
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
	}
</script>

<style lang="scss">
	.Model {
		position: fixed;
		background-color: rgb(250, 250, 250);
		width: 80%;
		height: 32%;
		top: 30%;
		right: 10%;
		left: 10%;
		z-index: 3;
		transition: visibility 200ms ease-in;
		padding: 8rpx;
		border-radius: 10rpx;
	}

	.login {
		width: 160rpx;
		background-color: orange;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
		color: white;
		font-size: 30rpx;
	}

	.ModelHidden {
		display: none;
	}

	.body {
		background-color: white;
	}

	.NavArea {
		width: 100vw;
		height: 35vh;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.swiper-container {
			width: 85%;
			height: 325rpx;
			background-color: black;
			box-shadow: 1px 1px 3px #101010;

			.swiper-item {
				background-color: blue;
				background-color: rgba($color: #373737, $alpha: 0.5);
				box-shadow: 1px 1px 3px #101010;
			}
		}
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
