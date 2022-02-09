import {
	request
} from "../../request.js" //引入封装的数据请求;
const relicManageAPI = {
	getSwaiperData() {
		return request({
			url: '/home/swiperdata',
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
