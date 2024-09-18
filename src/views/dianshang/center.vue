
<template>
	<div>
		<div class="app-contain">
			<el-form class="userinfo_form" ref="userinfoFormRef" :model="form" label-width="$template2.back.add.form.base.labelWidth">
				<el-row>
					<el-col :span="12">
						<el-form-item label="电商账号" prop="dianshangzhanghao">
							<el-input class="list_inp" v-model="user.dianshangzhanghao" readonly placeholder="电商账号" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="电商密码" prop="dianshangmima">
							<el-input class="list_inp" v-model="user.dianshangmima" readonly placeholder="电商密码" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="电商名称" prop="dianshangmingcheng">
							<el-input class="list_inp" v-model="user.dianshangmingcheng"  placeholder="电商名称" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="联系电话" prop="lianxidianhua">
							<el-input class="list_inp" v-model="user.lianxidianhua"  placeholder="联系电话" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="商家地址" prop="shangjiadizhi">
							<el-input class="list_inp" v-model="user.shangjiadizhi"  placeholder="商家地址" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="联系人" prop="lianxiren">
							<el-input class="list_inp" v-model="user.lianxiren"  placeholder="联系人" clearable />
						</el-form-item>
					</el-col>
					<span class="userinfo_form_btn_box">
						<el-button class='userinfo_confirm' type="primary" @click="onSubmit">保存</el-button>
					</span>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script setup>
	import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/toolUtil";
	import {
		reactive,
		ref,
		getCurrentInstance
	} from 'vue'
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const tableName = ref('dianshang')
	const user = ref({})
	const init = () => {
	}
	const onSubmit = () => {
		if((!user.value.dianshangzhanghao)){
			context?.$toolUtil.message(`电商账号不能为空`,'error')
			return false
		}
		if((!user.value.dianshangmima)){
			context?.$toolUtil.message(`电商密码不能为空`,'error')
			return false
		}
		if((!user.value.dianshangmingcheng)){
			context?.$toolUtil.message(`电商名称不能为空`,'error')
			return false
		}
		if((user.value.lianxidianhua)&&(!context?.$toolUtil.isPhone(user.value.lianxidianhua))){
			context?.$toolUtil.message(`联系电话应输入电话格式`,'error')
			return false
		}
		context?.$http({
			url: `${tableName.value}/update`,
			method: 'post',
			data: user.value
		}).then(res => {
			context?.$toolUtil.message('修改成功','success')
		})

	}
	const getInfo = () => {
		context?.$http({
			url: `${tableName.value}/session`,
			method: 'get'
		}).then(res => {
			user.value = res.data.data
			init()
		})
	}
	getInfo()
</script>

<style lang="scss" scoped>
	// 表单
	.userinfo_form {
		border-radius: 6px;
		padding: 30px;
		box-shadow: 0 0px 0px rgba(85, 255, 255, 0.5);
		// form item
		:deep(.el-form-item) {
			border: 1px solid #ddd;
			margin: 0;
			display: flex;
			// 内容盒子
			.el-form-item__content{
				padding: 0 20px;
				display: flex;
				width: calc(100% - 120px);
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
			}
			// 输入框
			.list_inp {
				border: 1px solid #ddd;
				box-shadow: 0 0 0px rgba(85, 255, 255, 0.5);
				padding: 0 10px;
				width: 100%;
				line-height: 36px;
				box-sizing: border-box;
				height: 36px;
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
		// 按钮盒子
		.userinfo_form_btn_box {
			padding: 40px 0 0;
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			// 确定按钮
			.userinfo_confirm {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 0 10px 0 0;
				outline: none;
				color: #fff;
				background: rgba(241, 49, 100, 1);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 确定按钮-悬浮
			.userinfo_confirm:hover {
				background: rgba(241, 49, 100, .5);
			}
		}
	}
</style>
