
<script>
	export default {
			globalData: {
				collectionId:0,
			},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	  wx-swiper .wx-swiper-dot {
		  	position: relative;
			top:-50rpx;
		}
	page{
		height: 100%;
		width: 100%;
		background-color: black;
	}
</style>
