<template>
    <view class="body">
        <view class="AuthArea">
			<view class="TitleArea">
				<text>填写实名认证信息</text>
			</view>
			<view class="NameArea">
				<input type="text" value="" placeholder="请填写您的真实姓名" v-model="name"/>
			</view>
			<view class="IdArea">
				<input type="text" value="" placeholder="请填写您的身份证号" v-model="IdNumber"/>
			</view>
			<view class="SubmitArea">
			  <button type="default" @click="submit">提交认证</button>
			</view>
          
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				name:null,
				IdNumber:null,
            }
        },
        methods: {
          submit(){
			  console.log(this.name,this.IdNumber)
		  }
        }
    }
</script>

<style lang="scss">
	.body{
		height: 100%;
		width: 100%;
		background-color: black;
		color: white;
		overflow: hidden;
		.AuthArea{
			width: 80%;
			height: 580rpx;
			// background-color: red;
			margin: 0 auto;
			margin-top: 130rpx;
			.TitleArea{
				font-size: 50rpx;
				margin-bottom: 15rpx;
			}
			.NameArea{
			  input{
				  height: 100rpx;
				  // background-color: red;
				  margin-bottom: 15rpx;
				  border-bottom: 2px solid white;
			  }	
			}
			.IdArea{
			  input{
				  height: 100rpx;
				  // background-color: red;
				  margin-bottom: 15rpx;
				  border-bottom: 2px solid white;
			  }	
			}
			.SubmitArea{
				button{
					background-color: gray;
					color: white;
					border-radius: 20rpx;
				}
			}
		}
	}


</style>
