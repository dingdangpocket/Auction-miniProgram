// const baseURL='http://web.woniulab.com:8005'
const baseURL = 'https://10.10.10.24:8443'
// const baseURL='http://web.woniulab.com:8005'
export const request = function request(data) {
	console.log("最后传出去的数据",data)
	uni.showLoading({
		title: '加载中'
	});
	// console.log(data)
	return new Promise((resolve, reject) => {
		// console.log("token",localStorage.getItem("user_token"))
		uni.getStorage({
			key: 'user_token',
			success: function(res) {
				console.log("token结果",res.data)
				uni.request({
					url: baseURL + data.url,
					method: data.method,
					data:data.data,
					header: {
						'Accept': "application/json",
						'Content-Type': 'application/json',
						'Authorization': res.data
					},
					success: res => {
						resolve(res)
						// console.log(res)
					},
					fail() {
						uni.showToast({
							title: '网络错误',
							duration: 1000
						});
					},
					complete() {
						uni.hideLoading();
					}
				})
			}
		});
	})
}
