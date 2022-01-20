<template>
	<view class="body">
		<view class="NavArea">
			<swiper class="swiper-container" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
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
					<!-- <scroll-view class="collectionArea" scroll-y="true" show-scrollbar="false"> -->
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionData" @click="linkToDescription" :key="item.id"
								:data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
			<!-- 		</scroll-view> -->
				</view>
				<view v-show="current === 1">
				<!-- 	<scroll-view class="collectionArea" scroll-y="true" show-scrollbar="false"> -->
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionRecdData" @click="linkToDescription" :key="item.id"
								:data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
					<!-- </scroll-view> -->
				</view>
				<view v-show="current === 2">
					<!-- <scroll-view class="collectionArea" scroll-y="true" show-scrollbar="false"> -->
						<view class="collectionArea-flex-container">
							<view class="" v-for="item in collectionHotData" @click="linkToDescription" :key="item.id"
								:data-id="item.id">
								<collectionCard :item="item"></collectionCard>
							</view>
						</view>
			<!-- 		</scroll-view> -->
				</view>
			</view>
		</view>
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
		components: {
			navCard,
			collectionCard
		},
		data() {
			return {
				items: ['即将发售', '精选', "热门"],
				current: 0,
				title: 'Hello',
				navData: [{
						id: 0,
						content: "什么是数字藏品",
						desc: "深入了解数字藏品",
						imgPath: "../../static/banner1.jpg"
					},
					{
						id: 1,
						content: "购买须知",
						desc: "关于数字藏品的购买说明",
						imgPath: "../../static/banner4.jpg"
					},
					// {
					// 	id: 2,
					// 	content: "数字藏品拍卖",
					// 	desc: "数字藏品拍卖进行中",
					// 	imgPath: "../../static/banner3.jpg"
					// }
				],
				collectionData: [{
						id: 0,
						title: "红釉瓷",
						imgSrc: "../../static/1.jpg",
						offer: "成都博物院"
					},
					{
						id: 1,
						title: "花纹壶",
						imgSrc: "../../static/2.jpg",
						offer: "山西博物院"
					},
					{
						id: 2,
						title: "青瓷",
						imgSrc: "../../static/3.jpg",
						offer: "河北博物院"
					},
					{
						id: 3,
						title: "汝窑",
						imgSrc: "../../static/4.jpg",
						offer: "山东博物院"
					},
					{
						id: 4,
						title: "靛蓝瓷",
						imgSrc: "../../static/5.jpg",
						offer: "陕西博物院"
					},
					{
						id: 5,
						title: "龙纹瓷",
						imgSrc: "../../static/6.jpg",
						offer: "成都博物院"
					},
					{
						id: 6,
						title: "红釉瓷",
						imgSrc: "../../static/7.jpg",
						offer: "南京博物院"
					},
					{
						id: 7,
						title: "红釉瓷",
						imgSrc: "../../static/8.jpg",
						offer: "贵州博物院"
					},
					{
						id: 8,
						title: "白釉壶",
						imgSrc: "../../static/9.jpg",
						offer: "甘肃博物院"
					},
					{
						id: 9,
						title: "龙纹笔筒",
						imgSrc: "../../static/10.jpg",
						offer: "北京博物院"
					},
				],
				collectionRecdData: [{
						id: 3,
						title: "红釉瓷",
						imgSrc: "../../static/5.jpg",
						offer: "成都博物院"
					},
					{
						id: 1,
						title: "花纹壶",
						imgSrc: "../../static/1.jpg",
						offer: "山西博物院"
					},
					{
						id: 2,
						title: "青瓷",
						imgSrc: "../../static/2.jpg",
						offer: "河北博物院"
					},
					{
						id: 3,
						title: "汝窑",
						imgSrc: "../../static/7.jpg",
						offer: "山东博物院"
					},
				],
				collectionHotData: [{
						id: 8,
						title: "红釉瓷",
						imgSrc: "../../static/8.jpg",
						offer: "成都博物院"
					},
					{
						id: 10,
						title: "花纹壶",
						imgSrc: "../../static/9.jpg",
						offer: "山西博物院"
					},
					{
						id: 4,
						title: "青瓷",
						imgSrc: "../../static/5.jpg",
						offer: "河北博物院"
					},
					{
						id: 7,
						title: "汝窑",
						imgSrc: "../../static/10.jpg",
						offer: "山东博物院"
					},
				]
			}
		},
		// mounted() {
		//    this.getData()
		// },
		onShow() {
			// this.getData()
		},
		onLoad() {
			// uni.switchTab({
			//    url:"../find/find"
			// })
			// uni.navigateTo({
			// 	url:"../description/description"
			// })
			// uni.navigateTo({
			// 	url:"../orderComfirm/orderComfirm"
			// })
			// uni.switchTab({
			// 		url: '../main/main',
			// })
			// uni.navigateTo({
			// 	url:"../orderList/orderList"
			// })
			// uni.navigateTo({
			// 	url:"../blockDetial/blockDetial"
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
			// uni.navigateTo({
			// 	url:"../setting/setting"
			// })
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			async getData() {
				const res = await API.relicManageAPI.GetCollectionData()
				console.log(res)
				this.collectionData = res.data.rows
				console.log("结果", res.data.rows)
			},
			linkToDescription(e) {
				app.globalData.collectionId = e.currentTarget.dataset.id
				// uni.navigateTo({
				// 	url: '../description/description',
				// })
				uni.navigateTo({
					url: "../description/description"
				})
			}
		}
	}
</script>

<style lang="scss">
	.body {
		background-color: white;
	}

	.NavArea {
		width: 100vw;
		height: 35vh;
		// background-color:gray;
		display: flex;
		justify-content: space-around;
		align-items: center;

		// margin-top: 10rpx;
		.swiper-container {
			width: 85%;
			height: 325rpx;
			// border-radius: 30rpx;
			background-color: black;
			box-shadow: 1px 1px 3px #101010;

			.swiper-item {
				background-color: blue;
				// border-radius: 30rpx;
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
