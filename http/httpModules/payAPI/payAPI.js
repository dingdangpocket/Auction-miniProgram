import {
 	request
 } from "../../request.js" //引入封装的数据请求;
 const payAPI = {
 	comfirmPay(data) {
		console.log(data)
 		return request({
 			url: '/bill/payment/placeorder',
 			method: 'POST',
			data:data
 		})
 	},
	getPayParams(prepayid){
		return request({
			url: `/bill/payment/paysign?prepay_id=${prepayid}`,
			method: 'POST',
		})
	}
 }
 export default payAPI;
