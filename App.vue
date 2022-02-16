<script>
	export default {
		globalData: {
			collectionId: 0,
		},
		onLaunch: function() {
			let res = uni.getStorageSync('user_info');
			if (res) {
				this.globalData.userInfo = res
			} 
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
