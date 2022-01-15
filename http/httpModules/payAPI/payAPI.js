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
 }
 export default payAPI;
