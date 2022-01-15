<template>
		<view class="Body">
			<view class="MenuArea">
				<!-- <view class="box">
					<text>手机号码</text>
				</view> -->
				<view class="box">
					<text @click="LinkToAuth">实名认证</text>
				</view>
				<view class="box">
					<text @click="LinkToAboutUs">关于龙鲤</text>
				</view>
				<view class="box">
					<text @click="LinkToAboutUs">服务协议</text>
				</view>
				<view class="box">
					<text @click="LinkToAboutUs">隐私政策</text>
				</view>
				<view class="box">
					<text @click="LinkToAboutUs">联系我们</text>
				</view>
				<view class="box">
					<text>退出登陆</text>
				</view>
				
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
			LinkToAuth(){
				uni.navigateTo({
					url:"../auth/auth"
				})
			},
			LinkToAboutUs(){
				uni.navigateTo({
					url:"../aboutUs/aboutUs"
				})
			}
		}
	}
</script>

<style lang="scss">
		.Body{
			height:1260rpx;
			width:100%;
			background-color:black;
			overflow:hidden;
			.MenuArea{
				// height:380rpx;
				width:100%;
				// background-color:red;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				margin-top: 20rpx;
				.box{
					height:100rpx;
					width:90%;
					background-color:#2a2a2c;
					border-radius: 20rpx;
					color: white;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					align-items: center;
					margin-top: 10rpx;
					margin-bottom: 10rpx;
				}
				.box:nth-child(6)
				{
				   color: red;
				}
			}
		}
</style>
