<script>
	import API from "./http/API.js"
	export default {
		globalData: {
			collectionId: 0,
			isLoginStatus:false,
		},
		async onLaunch() {
			let res = uni.getStorageSync('user_info');
			if (res) {
				this.globalData.userInfo = res;
				this.globalData.isLoginStatus=true;
			}else{
				this.globalData.isLoginStatus=false;
			}
			//全局登陆状态初始化;
		},
		onShow: function() {},
		onHide: function() {},
	}
</script>

<style lang="scss">
	wx-swiper .wx-swiper-dot {
		position: relative;
		top: -50rpx;
	}
	page {
		height: 100%;
		width: 100%;
		background-color: white;
	}
</style>
