<script>
	export default {
		globalData: {
			collectionId: 0,
			show:""
		},
		onLaunch: function() {
			let res = uni.getStorageSync('user_token');
			if (!res) {
				this.globalData.show = true;
			}else{
				this.globalData.show = false;
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
