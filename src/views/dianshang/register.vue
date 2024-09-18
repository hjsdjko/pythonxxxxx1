<template>
	<div>
		<div class="register_view">
			<el-form :model="registerForm" class="register_form">
				<div class="title_view">{{projectName}}注册</div>
				<div class="list_item">
					<div class="list_label">电商账号：</div>
					<el-input class="list_inp"
						 v-model="registerForm.dianshangzhanghao" 
						 placeholder="请输入电商账号"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">电商密码：</div>
					<el-input class="list_inp"
						 v-model="registerForm.dianshangmima" 
						 placeholder="请输入电商密码"
						 type="password"
						 />
				</div>
				<div class="list_item">
					<div class="list_label">确认电商密码：</div>
					<el-input class="list_inp" v-model="registerForm.dianshangmima2" type="password" placeholder="请输入确认电商密码" />
				</div>
				<div class="list_item">
					<div class="list_label">电商名称：</div>
					<el-input class="list_inp"
						 v-model="registerForm.dianshangmingcheng" 
						 placeholder="请输入电商名称"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">联系电话：</div>
					<el-input class="list_inp"
						 v-model="registerForm.lianxidianhua" 
						 placeholder="请输入联系电话"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">商家地址：</div>
					<el-input class="list_inp"
						 v-model="registerForm.shangjiadizhi" 
						 placeholder="请输入商家地址"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">联系人：</div>
					<el-input class="list_inp"
						 v-model="registerForm.lianxiren" 
						 placeholder="请输入联系人"
						 type="text"
						/>
				</div>
				<div class="list_btn">
					<el-button class="register" type="success" @click="handleRegister">注册</el-button>
					<div class="r-login" @click="close">已有账号，直接登录</div>
				</div>
			</el-form>
		</div>
	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick,
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context?.$project.projectName
	//获取注册类型
	import { useRoute } from 'vue-router';
	const route = useRoute()
	const tableName = ref('dianshang')
	
	const registerForm = ref({
	})
	const init=()=>{
	}
	// 多级联动参数
	//注册按钮
	const handleRegister = () => {
		let url = tableName.value +"/register";
		if((!registerForm.value.dianshangzhanghao)){
			context?.$toolUtil.message(`电商账号不能为空`,'error')
			return false
		}
		if((!registerForm.value.dianshangmima)){
			context?.$toolUtil.message(`电商密码不能为空`,'error')
			return false
		}
		if((!registerForm.value.dianshangmingcheng)){
			context?.$toolUtil.message(`电商名称不能为空`,'error')
			return false
		}
		if(registerForm.value.lianxidianhua&&(!context?.$toolUtil.isPhone(registerForm.value.lianxidianhua))){
			context?.$toolUtil.message(`联系电话应输入电话格式`,'error')
			return false
		}
		
		context?.$http({
			url:url,
			method:'post',
			data:registerForm.value
		}).then(res=>{
			context?.$toolUtil.message('注册成功','success', obj=>{
				context?.$router.push({
					path: "/login"
				});
			})
		})
	}
	//公共方法
	const getUUID=()=> {
		return new Date().getTime();
	}
	//返回登录
	const close = () => {
		context?.$router.push({
			path: "/login"
		});
	}
	init()
</script>
<style lang="scss" scoped>
	
	.register_view {
		background-repeat: no-repeat;
		flex-direction: column;
		background-size: cover;
		background: url(http://clfile.zggen.cn/20231004/3860f288f6ca41d4b494e0e714fd0f28.png);
		display: flex;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		position: relative;
		background-position: center center;
		// 表单盒子
		.register_form {
			border-radius: 50px;
			box-shadow: 0 4px 6px rgba(0,0,0,.5);
			padding: 30px 20px;
			background: #fff;
			display: flex;
			width: 60%;
			justify-content: center;
			flex-wrap: wrap;
		}
		// 标题样式
		.title_view {
			padding: 20px 0;
			color: #000;
			font-weight: bold;
			width: 100%;
			font-size: 30px;
			text-align: center;
		}
		// item盒子
		.list_item {
			margin: 10px;
			display: flex;
			width: 50%;
			justify-content: flex-start;
			align-items: center;
			// label
			.list_label {
				width: 120px;
				font-size: 14px;
				box-sizing: border-box;
				text-align: center;
			}
			// 输入框
			:deep(.list_inp) {
				border: 0px solid #ddd;
				box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
				padding: 0 10px;
				width: calc(100% - 120px);
				line-height: 40px;
				box-sizing: border-box;
				height: 40px;
				//去掉默认样式
				.el-input__wrapper{
					border: none;
					box-shadow: none;
					background: none;
					border-radius: 0;
					height: 100%;
					padding: 0;
				}
				.is-focus {
					box-shadow: none !important;
				}
			}
		}
		//按钮盒子
		.list_btn {
			margin: 20px 0 0;
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			//注册按钮
			.register {
					border: none;
					border-radius: 0;
					color: #fff;
					background: rgba(24,140,145,1);
					font-weight: bold;
					width: 200px;
					font-size: 20px;
					height: 60px;
			}
			//注册按钮悬浮样式
			.register:hover {
				border: none;
				border-radius: 0;
				background: rgba(24,140,145,.5);
				font-weight: bold;
				width: 200px;
				font-size: 20px;
				height: 60px;
			}
			//已有账号
			.r-login {
				cursor: pointer;
				padding: 20px 0 0;
				color: #999;
				width: 100%;
				font-size: 12px;
				text-align: center;
			}
		}
	}
</style>