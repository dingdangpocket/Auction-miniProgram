<template>
	<view>
		<web-view :src="url" class="body"></web-view>
	</view>
</template>

<script>
	var app = getApp()
	export default {
		data() {
			return {
				url: ""
			}
		},
		mounted() {
			//this.url=`http://www.bitaichain.com/model?id=${app.globalData.collectionId}`
			this.url = `https://api.bitaichain.com:8443/?id=${app.globalData.collectionId}`
			console.log("藏品的ID号", app.globalData.collectionId)
		},
	}
</script>

<style lang="scss">
	.body {
		width: 100%;
		height: 100px;
	}
</style>
