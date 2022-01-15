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
		        url:""
			}
		},
		mounted() {
		this.url=`http://localhost:8080/home/electircShow?id=${app.globalData.collectionId}`
		console.log(app.globalData.collectionId)
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.body{
		height: 100px
	}

</style>
