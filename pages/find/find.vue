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
				<view class="" v-for="item in collectionData" @click="linkToDescription(item)" :key="item.id"
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
				filterValue: "",
				collectionData: ""
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			filterCondition(filterValue) {
				console.log("筛选条件来自dropdown组件内部", filterValue)
				// 筛选条件接口
			},
			async getData() {
				const res = await API.relicManageAPI.GetCommodityData()
				this.collectionData = res.data.rows
			},
			getAllCollection() {
				this.collectionData = this.getData()
			},
			search(value) {
				console.log("搜索条件", value)
				this.collectionData = this.collectionData.filter((item) => item.name.includes(value))
			},
			linkToDescription(item) {
				uni.navigateTo({
					url: '../description/description?items=' + JSON.stringify(item)
				})
			}
		},
		watch: {
			filterValue() {
				this.collectionData = this.getData()
			}
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
