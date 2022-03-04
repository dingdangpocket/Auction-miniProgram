import {
	request
} from "../../request.js" //引入封装的数据请求;
const relicManageAPI = {
	getUserInfo(){
		return request({
			url: '/auth/user/getInfo',
			method: 'GET',
		})
	},
	getSwaiperData() {
		return request({
			url: '/home/swiperdata',
			method: 'GET',
		})
	},
	addOrder(data) {
		return request({
			url: '/bill/payment/placeorder',
			method:'POST',
			data: data,
		})
	},
	getBillList(data) {
		console.log("订单数据",data)
		return request({
			url: '/bill/bill/list',
			method: 'POST',
			data:data,
		})
	},
	getCommodityDesc(id){
		console.log(id)
		return request({
			url: `/mall/commodity/${id}`,
			method: 'GET',
		})
	},
	addFollowList(id) {
		console.log("关注",id)
		return request({
			url: `/mall/cart/add/${id}`,
			method: 'POST',
		})
	},
	cancelFollowList(id) {
		console.log("取消关注",id)
		return request({
			url: `/mall/cart/delete/${id}`,
			method: 'POST',
		})
	},
	getFollowList(){
		return request({
			url: "/mall/cart/list",
			method: 'GET',
		})
	},
	addCollection(params) {
		const data = JSON.stringify({
			title: params.title,
			catagory: params.catagory,
			userid: params.userid,
			dimention: params.dimention,
			createtime: "2020-5-13",
		})
		return request({
			method: "POST",
			url: "/collection/collection",
			data: data,
		})
	},
	GetCollectionData() {
		return request({
			method: "GET",
			url: "/collection/collection/list?catagory=1",
		})
	},
	GetCommodityData() {
		return request({
			method: "GET",
			url: "/mall/commodity/list",
		})
	},
	delCollectionData(params) {
		return request({
			method: "POST",
			url: `/collection/collection/${params.id}`,
		})
	},
	ApprisalCollection(params) {
		console.log("评估藏品-发送给后端的参数", params);
		const data = JSON.stringify({
			collectionid: params.collectionid,
			apprisaluserid: "1",
			age: params.age,
			comment: params.comment,
			qualit: params.quality,
			material: params.material,
			value1: params.value1,
			value2: params.value2,
			status: "valid"
		})
		return request({
			method: "POST",
			url: "/collection/apprisal",
			data: data,
		})
	},
	addInBlockChain(params) {
		return request({
			method: "POST",
			url: `/collection/collection/chain/${params}`,
		})
	},
	rsaApprisalCollection(params) {
		console.log("评估藏品-发送给后端的参数", params);
		const data = JSON.stringify({
			collectionid: params.collectionid,
			apprisaluserid: "1",
			age: params.age,
			comment: params.comment,
			qualit: params.quality,
			material: params.material,
			value1: params.value1,
			value2: params.value2,
			status: "valid"
		})
		return request({
			method: "POST",
			url: `/collection/apprisal/commit/${params.publicKey}`,
			data: data,
		})
	},
	rsaApprisalCollectionConfirm(data) {
		console.log("RSA确认评估藏品-发送给后端的参数", data);
		return request({
			method: "POST",
			url: "/collection/apprisal/confirm",
			data: JSON.stringify(data),
		})
	},
}
export default relicManageAPI;
