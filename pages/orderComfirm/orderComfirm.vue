<template>
	<view class="commonStyle">
		<text style="color:white">确认订单</text>
		<button type="default" @click="comfirm">支付</button>
	</view>
</template>

<script>
	var app = getApp()
	import API from "../../http/API.js"
	export default {
		data() {
			return {

			}
		},
		methods: {
			async comfirm() {
				var quantity = 3
				var needPay = Math.floor(parseFloat(3.8 * 100 * quantity));
				console.log(needPay, "分")
				let orderData = {
					// code: app.globalData.code,
					openId: app.globalData.openId,
					collectionId: app.globalData.collectionId,
					price: 0.01 * 100,
					// title:"测试"
					// payType: "wxPay"
				}
				console.log("支付所需订单信息", orderData)
				const res = await API.payAPI.comfirmPay(orderData)
				console.log("支付所需参数", res)
				// uni.requestPayment({
				// 	"appId":"wx48d4c185c78f0c21"
				// 	"timeStamp": res.timeStamp,
				// 	"nonceStr":"5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
				// 	"package":`prepay_id=${res.data.prepay_id}`,
				// 	"signType":"RSA",
				// 	"paySign": res.paySign,
				// 	success: function(res) {
				// 		console.log("支付成功结果", res)
				// 	},
				// 	fail: function(err) {
				// 		console.log("支付失败结果", err)
				// 	}
				// });
			},
		}
	}
</script>

<style>
	.commonStyle {
		color: white
	}
</style>
