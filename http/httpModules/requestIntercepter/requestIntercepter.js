// uni.addInterceptor('request', {
//   invoke(args) {
// 	  uni.showModal({
// 	      title: '提示',
// 	      content: '我们将调用你的微信账户数据！',
// 	      success: function (res) {
// 	          if (res.confirm) {
// 	              console.log('用户点击确定');
// 	          } else if (res.cancel) {
// 	              console.log('用户点击取消');
// 	          }
// 	      }
// 	  });
//   },
//   success(args) {
//     // 请求成功后，修改code值为1
// 	console.log("拦截成功？")
 
//   }, 
//   fail(err) {
// 	  console.log("拦截失败？")
//   }, 
//   complete(res) {
//   }
// })




// axios.interceptors.request.use((config) => {
// 	console.log("123")
//     // 拦截成功
//     // 给所有的 axios 请求头添加 token
//     const token = localStorage.token;
//     // 将 token 添加到请求头
//     config.headers.Authorization = token;
//     return config;
// }, err => Promise.reject(err));


// // axios.interceptors.response.use((res) => {
// //     // 响应成功
// //     // return res.data;
// //     return res;
// // }, (err) => {
// //     // 响应失败
// //     if (err && err.response && err.response.status) {
// //         switch (err.response.status) {
// //             case 401:
// //                 err.message = '身份认证过期';
// //                 alert('身份认证过期，请重新登录');
// //                 router.push('/login');
// //                 break;
// //             case 404:
// //                 err.message = '资源找不到';
// //                 break;
// //             case 500:
// //                 err.message = '服务器出错';
// //                 break;
// //             default:
// //                 err.message = '服务器出错';
// //         }
// //     } else {
// //         err.message = '服务器出错';
// //     }
// //     return Promise.reject(err.message);
// // })