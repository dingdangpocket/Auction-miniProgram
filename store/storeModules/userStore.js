
import {request} from "../../http/request.js"//引入封装的数据请求;

export default {
    namespaced: true,
    state:{
		  userInfo:null
    },
    mutations: {
		SET_DATA(state,userInfo){
			state.userInfo=userInfo
		}
    },
    //发送请求
    actions:{
		saveUserInfo(context,userInfo){
			console.log("接受组件传入的",userInfo)
			 context.commit('SET_DATA',userInfo)
		}
    }
}