<template>
	<view>
		<map id='myMap' style="width: 100%; height: 1000rpx;" :scale="scale" :latitude="latitude" :longitude="longitude"
			:markers="marker" @markertap="markertap" @callouttap='callouttap' show-location="true">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale: 13,
				latitude: null,
				longitude: null,
				marker: [{
						id: 321323,
						latitude: 30.65246, //纬度
						longitude: 104.04313, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						//   title:'我在这里',//标注点名
						alpha: 1, //透明度
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '天宝大厦', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '10',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					{
						id: 1234597,
						latitude: 30.62266, //纬度
						longitude: 104.04323, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						//  title:'我在这里',//标注点名
						alpha: 1, //透明度
						// label:{//为标记点旁边增加标签   //因背景颜色H5不支持
						//   color:'red',//文本颜色
						//      },
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '广州塔', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '10',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					{
						id: 34323,
						latitude: 30.67249, //纬度
						longitude: 104.04311, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						alpha: 1, //透明度
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '德隆大厦', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '10',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					{
						id: 787834,
						latitude: 30.63226, //纬度
						longitude: 104.02333, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						alpha: 1, //透明度
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '羊城国际商贸中心', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '10',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					{
						id: 989283,
						latitude: 30.66786, //纬度
						longitude: 104.07319, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						alpha: 1, //透明度
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '天瑞广场A座', //文本
							color: '#ffffff', //文字颜色
							fontSize: 16, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '12',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
					{
						id: 2342323,
						latitude: 30.23244, //纬度
						longitude: 104.03383, //经度
						iconPath: '', //显示的图标        
						rotate: 0, // 旋转度数
						width: 20, //宽
						height: 30, //高
						alpha: 1, //透明度
						callout: { //自定义标记点上方的气泡窗口 点击有效  
							content: '大米和小米儿童康复(广州盈丰)中心', //文本
							color: '#ffffff', //文字颜色
							fontSize: 14, //文本大小
							borderRadius: 15, //边框圆角
							borderWidth: '8',
							bgColor: '#e51860', //背景颜色
							display: 'ALWAYS', //常显
						},
					},
				],

			}
		},

		mounted() {
			uni.getLocation({
				geocode: true,
				type: 'wgs84',
				success: (res) => {
					console.log(res, '获取当前位置')
					this.latitude = res.latitude
					this.longitude = res.longitude
				},
				address: (res) => {
					console.log('address', res)
				}
			})
		},
		methods: {
			markertap(e) {
				console.log("标记点击", e)
			},
			//地图点击事件
			callouttap(e) {
				console.log('地图点击事件', e)
			}

		}
	}
</script>

<style>

</style>
