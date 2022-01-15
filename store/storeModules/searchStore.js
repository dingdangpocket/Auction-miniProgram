import API from "../../http/API.js"

export default {
	namespaced: true,
	state: {
		videoData: null,
		recommendData:null,
		searchData:null
	},
	mutations: {
		SET_DATA(state, videoData) {
			state.videoData = videoData
		},
		SET_RECOMMEND_DATA(state, recommendData) {
			state.recommendData = recommendData
		},
		SET_SEARCH_DATA(state, searchData) {
			state.searchData = searchData
		},
	},
	//发送请求
	actions: {
		async getVideoData(context) {
			console.log("视频数据");
			const res = await API.searchAPI.getVideoData()
			console.log("视频数据", res);
			context.commit('SET_DATA', res)
		},
		async getRecommendData(context) {
			console.log("推荐数据");
			const res = await API.searchAPI.getRecommendData()
			console.log("推荐数据", res);
			context.commit('SET_RECOMMEND_DATA', res)
		},
		async getSearchRes(context,val) {
			console.log("搜索数据",val);
			const res = await API.searchAPI.getSearchRes(val)
			console.log("搜索数据", res);
			context.commit('SET_SEARCH_DATA', res)
		},
	}
}
