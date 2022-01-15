import API from "../../http/API.js"

export default {
	namespaced: true,
	state: {
		swiperData: null,
		classifyData:null,
		floorsData:null,
		recommendData:null
	},
	mutations: {
		SET_DATA(state, swiperData) {
			state.swiperData = swiperData
		},
		SET_CLASSIFY_DATA(state,classifyData) {
			state.classifyData = classifyData
		},
		SET_FLOORS_DATA(state,floorsData) {
			state.floorsData = floorsData
		},
		SET_RECOMMEND_DATA(state,recommendData) {
			state.recommendData = recommendData
		}
	},
	//发送请求
	actions: {
		async getChangePic(context) {
			console.log("轮播数据");
			const res = await API.homeAPI.getSwaiperData()
			console.log("轮播数据", res);
			context.commit('SET_DATA', res)
		},
		async getClassifyItems(context) {
			console.log("分类数据");
			const res = await API.homeAPI.getClassifyItems()
			console.log("分类数据", res);
			context.commit('SET_CLASSIFY_DATA', res)
		},
		async getFloorsData(context) {
			console.log("楼层数据");
			const res = await API.homeAPI.getFloorsData()
			console.log("楼层数据", res);
			context.commit('SET_FLOORS_DATA', res)
		},
		async getRecommendData(context) {
			console.log("推荐数据");
			const res = await API.homeAPI.getRecommendData()
			console.log("推荐数据", res);
			context.commit('SET_RECOMMEND_DATA', res)
		}
	}
}
