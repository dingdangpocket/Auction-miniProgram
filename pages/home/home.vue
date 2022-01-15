<template>
	<view class="body">
		<view class="NavArea">
			<swiper class="swiper-container" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in navData" class="swiper-item" :key="item.id"  @click="linkTo()">
					<navCard :item="item"></navCard>
				</swiper-item>
			</swiper>
		</view>
		<scroll-view class="collectionArea" scroll-y="true" show-scrollbar="false">
			<view class="collectionArea-flex-container">
				<view class="" v-for="item in collectionData" @click="linkToDescription"  :key="item.id" :data-id="item.id">
					<collectionCard :item="item"></collectionCard>
				</view>
			</view>
		</scroll-view>
	
	</view>
	
</template>

<script>
	import navCard from '../../components/navCard/navCard.vue'
	import collectionCard from '../../components/collectionCard/collectionCard.vue'
	import API from "../../http/API.js"
	var app = getApp()
	import {
		createNamespacedHelpers
	} from "vuex";
	const {
		mapState,
		mapActions
	} = createNamespacedHelpers("homeStore");

	export default {
		components:{  
		  navCard,collectionCard
		},
		data() {
			return {
				title: 'Hello',
				navData:[
					{id:0,content:"什么是数字藏品",desc:"深入了解数字藏品",imgPath:"../../static/card1.jpg"},
					{id:1,content:"购买须知",desc:"关于数字藏品的购买说明",imgPath:"../../static/card2.jpg"},
					{id:2,content:"数字藏品拍卖",desc:"数字藏品拍卖进行中",imgPath:"../../static/card2.jpg"}
				],
				collectionData:[
					{id:0,content:"藏品"},
					{id:1,content:"数字藏品购买须知"},
					{id:2,content:"数字藏品拍卖"},
					{id:3,content:"藏品"},
					{id:4,content:"购买须知"},
					{id:5,content:"数字藏品拍卖"},
					{id:6,content:"藏品"},
					{id:7,content:"购买须知"},
				]
			}
		},
		// mounted() {
		//    this.getData()
		// },
		onShow(){
			 // this.getData()
		},
		onLoad() {
			// uni.switchTab({
			// 		url: '../main/main',
			// })
			// uni.navigateTo({
			// 	url:"../orderList/orderList"
			// })
			// uni.navigateTo({
			// 	url:"../model/model"
			// })
			// uni.navigateTo({
			// 	url:"../auth/auth"
			// })
			// uni.navigateTo({
			// 	url:"../orderList/orderList"
			// })
		},
		methods: {
		   async getData(){
				const res = await API.relicManageAPI.GetCollectionData()
				console.log(res)
				this.collectionData=res.data.rows
				console.log("结果",res.data.rows)
			},
			linkToDescription(e){
				app.globalData.collectionId = e.currentTarget.dataset.id
				// uni.navigateTo({
				// 	url: '../description/description',
				// })
				uni.navigateTo({
					url:"../description/description"
				})
			}
		}
	}
</script>

<style lang="scss">
	.body{
		background-color:black;
	}
	.NavArea{
		width: 100vw;
		height: 35vh;
		// background-color:gray;
		display: flex;
		justify-content:space-around;
		align-items: center;
		// margin-top: 10rpx;
		.swiper-container{
			width: 80vw;
			height: 30vh;
			border-radius: 30rpx;
			.swiper-item{
				background-color: blue;
				border-radius: 30rpx;
			}
		}
	}
	.collectionArea{
		width: 100vw;
		height: 69vh;
		// background-color:gray;
		margin-top: 10rpx;
		.collectionArea-flex-container{
			width: 100vw;
			// height: 68vh;
			// background-color:blue;
			display: flex;
			justify-content:space-around;
			flex-wrap: wrap;
		}
		.collectionArea-flex-container:after{
		    content: '';
			height: 10rpx;
		    width: 285rpx;
		    // border:1px solid black;
		    // background: rgb(178, 176, 32);
		    // z-index: 5;
		  }
	}
	
</style>
