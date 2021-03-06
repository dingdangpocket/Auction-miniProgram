// const baseURL = 'https://122.112.213.108:8443'
// const baseURL = 'https://10.10.10.24:8443'
const baseURL = 'https://api.bitaichain.com:8443'
//接口issue
export const request = function request(data) {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('user_token');
		// console.log("token",token)
		if (token) {
			// console.log("最后交出的数据",data.data)
			uni.showLoading({
			    	title:"加载中..."
			})
			uni.request({
				url: baseURL + data.url,
				method: data.method,
				data: data.data,
				header: {
					'Accept': "application/json",
					'Content-Type': 'application/json',
					'Authorization': token
				},
				success: res => {
					resolve(res)
				},
				fail(res) {
					uni.showToast({
						title: '网络错误',
						duration: 1000
					});
				},
				complete() {
					uni.hideLoading();
				}
			})
		} else {
			uni.showLoading({
			    	title:"加载中..."
			})
			uni.request({
				url: baseURL + data.url,
				method: data.method,
				data: data.data,
				header: {
					'Accept': "application/json",
					'Content-Type': 'application/json',
				},
				success: res => {
					resolve(res)
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
	})
}
