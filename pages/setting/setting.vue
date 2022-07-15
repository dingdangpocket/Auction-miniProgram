<template>
		<view class="Body">
			<view class="MenuArea">
				<!-- <view class="box">
					<text>手机号码</text>
				</view> -->
				<view class="box">
				  <text @click="LinkToAuth">实名认证</text>
				</view>
			<!-- <view class="box">
					<text @click="LinkToAboutUs">关于龙鲤</text>
				</view> -->
				<view class="box">
					<text @click="LinkToServiceAgreement">用户协议</text>
				</view>
				<view class="box">
					<text @click="LinkToPrivacy">隐私政策</text>
				</view>
			<!-- <view class="box">
					<text @click="LinkToAboutUs">联系我们</text>
				</view> -->
				<view class="box">
					<text  @click="ExitLogin">退出登陆</text>
				</view>
				
			</view>
			
		</view>
</template>

<script>
	var app = getApp()
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			LinkToAuth(){
				uni.navigateTo({
					url:"../auth/auth"
				})
			},
			LinkToAboutUs(){
				uni.navigateTo({
					url:"../aboutUs/aboutUs"
				})
			},
			LinkToPrivacy(){
				uni.navigateTo({
					url:"../privacy/privacy"
				})
			},
			LinkToServiceAgreement(){
				uni.navigateTo({
					url:"../srviceAgreement/srviceAgreement"
				})
			},
			ExitLogin(){
				console.log(app.globalData.isLoginStatus)
				if(app.globalData.isLoginStatus==false){
					uni.showToast({
						title: '您未登陆账户',
						duration: 1000
					});
					return
				}
				 uni.clearStorageSync();
				 app.globalData.userInfo=null;
				 // app.globalData.cach=true;
				 app.globalData.isLoginStatus=false;
				 uni.showToast({
				     title: '退出成功',
				     duration: 700
				 });
			}
		}
	}
</script>

<style lang="scss">
		.Body{
			height:1260rpx;
			width:100%;
			background-color: #FFFFFF;
			overflow:hidden;
			.MenuArea{
				width:100%;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				margin-top: 20rpx;
				.box{
					height:100rpx;
					width:80%;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					align-items: center;
					margin-top: 10rpx;
					margin-bottom: 10rpx;
					color: black;
					border-bottom: 1px solid #808080;
				}
				.box:nth-child(6)
				{
				   color: red;
				}
			}
		}
</style>
