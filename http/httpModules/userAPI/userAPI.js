	
import {request} from "../../request.js" //引入封装的数据请求;
	const userAPI ={
		login(data){
			console.log("登陆数据",data);
			return request({
				method:"POST",
				url:"/auth/login",
				data:JSON.stringify(data),
				headers:{
				'Accept':"application/json",
				'Content-Type':'application/json'},
		   })
		},
		register(data){
			console.log("注册数据",data);
			return request({
				method:"POST",
				url:"/auth/user/regist",
				data:JSON.stringify(data),
				headers:{
				'Accept':"application/json",
				'Content-Type':'application/json'},
		   })
		},
		getRoleMenu(data){
			console.log("菜单");
			return request({
				method:"GET",
				url:"/auth/menu/MenuTreeSelectByRole",
				headers:{
				'Accept':"application/json",
				'Content-Type':'application/json'},
		   })
		 }
	}
	export default userAPI;

