<template>
	<view>
		<view class="searchArea">
			<search></search>
		</view>
		<view class="filterArea">
			<dropDown></dropDown>
		</view>
		<scroll-view class="collectionArea" scroll-y="true" show-scrollbar="false">
			<view class="collectionArea-flex-container">
				<view class="" v-for="item in collectionData" @click="linkToDescription" :key="item.id"
					:data-id="item.id">
					<collectionCard :item="item" :search="search"></collectionCard>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var app = getApp()
	import search from "../../components/mehaotian-search/mehaotian-search.vue"
	import dropDown from '../../components/dropdown-screen/dropdown-screen.vue'
	import collectionCard from '../../components/collectionCard/collectionCard.vue'
	import API from "../../http/API.js"
	export default {
		components: {
			search,
			dropDown,
			collectionCard
		},
		data() {
			return {
				filterValue:"",
				collectionDataCopy: [{
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
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			filterIf(filterValue){
				console.log("筛选条件",filterValue)
				// 筛选条件接口
			},
			async getData() {
				const res = await API.relicManageAPI.GetCollectionData()
				this.collectionData = res.data.rows
			},
			getAllCollection() {
				this.collectionData = this.getData()
			},
			search(value) {
				console.log("筛选条件", value)
				this.collectionData = this.collectionData.filter((item) => item.title.includes(value))
			},
			linkToDescription(e) {
				app.globalData.collectionId = e.currentTarget.dataset.id
				uni.navigateTo({
					url: "../description/description"
				})
			}
		},
		watch: {
			filterValue() {
				this.collectionData = this.getData()
			}
		},
		computed: {
			// filterCollection: function() {
			// 	if (this.filterValue[0] == 0) {
			// 		return this.collectionData
			// 	}
			// 	if (this.filterValue[0] == "近三天") {
			// 		this.collectionData = this.collectionData.filter((item) => {
			// 			if (item.tag == "精选") {
			// 				return item
			// 			}
			// 		})
			// 		return this.collectionData
			// 	}
			// 	if (this.current == 2) {
			// 		this.collectionData = this.collectionData.filter((item) => {
			// 			if (item.tag == "热门") {
			// 				return item
			// 			}
			// 		})
			// 		return this.collectionData
			// 	}
			// }
		},
	}
</script>

<style lang="scss">
	.collectionArea {
		width: 100vw;
		height: 80vh;
		margin-top: 10rpx;

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
	}
</style>
