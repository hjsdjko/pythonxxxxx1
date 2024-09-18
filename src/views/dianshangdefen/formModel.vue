<template>
	<div>
		<el-dialog v-model="formVisible" :title="formTitle" width="80%" destroy-on-close :fullscreen='false'>
			<el-form class="formModel_form" ref="formRef" :model="form" label-width="$template2.back.add.form.base.labelWidth" :rules="rules">
				<el-row>
					<el-col :span="12">
						<el-form-item label="电商账号" prop="dianshangzhanghao">
							<el-select
								class="list_sel"
								:disabled="!isAdd||disabledForm.dianshangzhanghao?true:false"
								v-model="form.dianshangzhanghao" 
								placeholder="请选择电商账号"
								@change="dianshangzhanghaoChange">
								<el-option v-for="(item,index) in dianshangzhanghaoLists" :label="item" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="电商名称" prop="dianshangmingcheng">
							<el-input class="list_inp" v-model="form.dianshangmingcheng" placeholder="电商名称"
								type="text"
								:readonly="!isAdd||disabledForm.dianshangmingcheng?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="友善" prop="youshan">
							<el-input class="list_inp" v-model.number="form.youshan" placeholder="友善"
								type="text"
								:readonly="!isAdd||disabledForm.youshan?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="诚信" prop="chengxin">
							<el-input class="list_inp" v-model.number="form.chengxin" placeholder="诚信"
								type="text"
								:readonly="!isAdd||disabledForm.chengxin?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="敬业" prop="jingye">
							<el-input class="list_inp" v-model.number="form.jingye" placeholder="敬业"
								type="text"
								:readonly="!isAdd||disabledForm.jingye?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="爱国" prop="aiguo">
							<el-input class="list_inp" v-model.number="form.aiguo" placeholder="爱国"
								type="text"
								:readonly="!isAdd||disabledForm.aiguo?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="个人责任权重" prop="gerenzerenquanzhong">
							<el-input class="list_inp" v-model="form.gerenzerenquanzhong" placeholder="个人责任权重"
								type="text"
								:readonly="!isAdd||disabledForm.gerenzerenquanzhong?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="个人责任得分" prop="gerenzerendefen">
							<el-input class="list_inp" v-model.number="form.gerenzerendefen" placeholder="个人责任得分"
								type="text"
								:readonly="!isAdd||disabledForm.gerenzerendefen?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="自由" prop="ziyou">
							<el-input class="list_inp" v-model.number="form.ziyou" placeholder="自由"
								type="text"
								:readonly="!isAdd||disabledForm.ziyou?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="平等" prop="pingdeng">
							<el-input class="list_inp" v-model.number="form.pingdeng" placeholder="平等"
								type="text"
								:readonly="!isAdd||disabledForm.pingdeng?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="公正" prop="gongzheng">
							<el-input class="list_inp" v-model.number="form.gongzheng" placeholder="公正"
								type="text"
								:readonly="!isAdd||disabledForm.gongzheng?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="法治" prop="fazhi">
							<el-input class="list_inp" v-model.number="form.fazhi" placeholder="法治"
								type="text"
								:readonly="!isAdd||disabledForm.fazhi?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="社会责任权重" prop="shehuizerenquanzhong">
							<el-input class="list_inp" v-model="form.shehuizerenquanzhong" placeholder="社会责任权重"
								type="text"
								:readonly="!isAdd||disabledForm.shehuizerenquanzhong?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="社会责任得分" prop="shehuizerendefen">
							<el-input class="list_inp" v-model.number="form.shehuizerendefen" placeholder="社会责任得分"
								type="text"
								:readonly="!isAdd||disabledForm.shehuizerendefen?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="富强" prop="fuqiang">
							<el-input class="list_inp" v-model.number="form.fuqiang" placeholder="富强"
								type="text"
								:readonly="!isAdd||disabledForm.fuqiang?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="民主" prop="minzhu">
							<el-input class="list_inp" v-model.number="form.minzhu" placeholder="民主"
								type="text"
								:readonly="!isAdd||disabledForm.minzhu?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="文明" prop="wenming">
							<el-input class="list_inp" v-model.number="form.wenming" placeholder="文明"
								type="text"
								:readonly="!isAdd||disabledForm.wenming?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="和谐" prop="hexie">
							<el-input class="list_inp" v-model.number="form.hexie" placeholder="和谐"
								type="text"
								:readonly="!isAdd||disabledForm.hexie?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="国家责任得分" prop="guojiazerendefen">
							<el-input class="list_inp" v-model.number="form.guojiazerendefen" placeholder="国家责任得分"
								type="text"
								:readonly="!isAdd||disabledForm.guojiazerendefen?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="国家责任权重" prop="guojiazerenquanzhong">
							<el-input class="list_inp" v-model="form.guojiazerenquanzhong" placeholder="国家责任权重"
								type="text"
								:readonly="!isAdd||disabledForm.guojiazerenquanzhong?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="总得分" prop="zongdefen">
							<el-input class="list_inp" v-model.number="form.zongdefen" placeholder="总得分"
								type="text"
								:readonly="!isAdd||disabledForm.zongdefen?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="登记时间" prop="dengjishijian">
							<el-date-picker
								class="list_date"
								v-model="form.dengjishijian"
								format="YYYY-MM-DD HH:mm:ss"
								value-format="YYYY-MM-DD HH:mm:ss"
								type="datetime"
								:readonly="!isAdd||disabledForm.dengjishijian?true:false"
								placeholder="请选择登记时间" />
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer v-if="isAdd||type=='logistics'||type=='reply'">
				<span class="formModel_btn_box">
					<el-button class="formModel_cancel" @click="closeClick">取消</el-button>
					<el-button class="formModel_confirm" type="primary" @click="save"
						>
						提交
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script setup>
	import {
		reactive,
		ref,
		getCurrentInstance,
		nextTick,
		computed,
		defineEmits
	} from 'vue'
	const context = getCurrentInstance()?.appContext.config.globalProperties;	
	const emit = defineEmits(['formModelChange'])
	//基础信息
	const tableName = 'dianshangdefen'
	const formName = '电商得分'
	//基础信息
	//form表单
	const form = ref({})
	const disabledForm = ref({
		dianshangzhanghao : false,
		dianshangmingcheng : false,
		youshan : false,
		chengxin : false,
		jingye : false,
		aiguo : false,
		gerenzerenquanzhong : false,
		gerenzerendefen : false,
		ziyou : false,
		pingdeng : false,
		gongzheng : false,
		fazhi : false,
		shehuizerenquanzhong : false,
		shehuizerendefen : false,
		fuqiang : false,
		minzhu : false,
		wenming : false,
		hexie : false,
		guojiazerendefen : false,
		guojiazerenquanzhong : false,
		zongdefen : false,
		dengjishijian : false,
	})
	const formVisible = ref(false)
	const isAdd = ref(false)
	const formTitle = ref('')
	//表单验证
	//匹配整数
	const validateIntNumber = (rule, value, callback) => {
		if (!value) {
			callback();
		} else if (!context?.$toolUtil.isIntNumer(value)) {
			callback(new Error("请输入整数"));
		} else {
			callback();
		}
	}
	//匹配数字
	const validateNumber = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isNumber(value)) {
			callback(new Error("请输入数字"));
		} else {
			callback();
		}
	}
	//匹配手机号码
	const validateMobile = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isMobile(value)) {
			callback(new Error("请输入正确的手机号码"));
		} else {
			callback();
		}
	}
	//匹配电话号码
	const validatePhone = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isPhone(value)) {
			callback(new Error("请输入正确的电话号码"));
		} else {
			callback();
		}
	}
	//匹配邮箱
	const validateEmail = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isEmail(value)) {
			callback(new Error("请输入正确的邮箱地址"));
		} else {
			callback();
		}
	}
	//匹配身份证
	const validateIdCard = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.checkIdCard(value)) {
			callback(new Error("请输入正确的身份证号码"));
		} else {
			callback();
		}
	}
	//匹配网站地址
	const validateUrl = (rule, value, callback) => {
		if(!value){
			callback();
		} else if (!context?.$toolUtil.isURL(value)) {
			callback(new Error("请输入正确的URL地址"));
		} else {
			callback();
		}
	}
	const rules = ref({
		dianshangzhanghao: [
			{required: true,message: '请输入',trigger: 'blur'}, 
		],
		dianshangmingcheng: [
		],
		youshan: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		chengxin: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		jingye: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		aiguo: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		gerenzerenquanzhong: [
		],
		gerenzerendefen: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		ziyou: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		pingdeng: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		gongzheng: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		fazhi: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		shehuizerenquanzhong: [
		],
		shehuizerendefen: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		fuqiang: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		minzhu: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		wenming: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		hexie: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		guojiazerendefen: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		guojiazerenquanzhong: [
		],
		zongdefen: [
			{ validator: validateNumber, trigger: 'blur' },
		],
		dengjishijian: [
		],
	})
	//表单验证
	
	const formRef = ref(null)
	const id = ref(0)
	const type = ref('')
	//电商账号列表
	const dianshangzhanghaoLists = ref([])
	//methods

	//获取唯一标识
	const getUUID =()=> {
      return new Date().getTime();
    }
	//重置
	const resetForm = () => {
		form.value = {
			dianshangzhanghao: '',
			dianshangmingcheng: '',
			youshan: '',
			chengxin: '',
			jingye: '',
			aiguo: '',
			gerenzerenquanzhong: '',
			gerenzerendefen: '',
			ziyou: '',
			pingdeng: '',
			gongzheng: '',
			fazhi: '',
			shehuizerenquanzhong: '',
			shehuizerendefen: '',
			fuqiang: '',
			minzhu: '',
			wenming: '',
			hexie: '',
			guojiazerendefen: '',
			guojiazerenquanzhong: '',
			zongdefen: '',
			dengjishijian: '',
		}
	}
	//获取info
	const getInfo = ()=>{
		context?.$http({
			url: `${tableName}/info/${id.value}`,
			method: 'get'
		}).then(res => {
			let reg=new RegExp('../../../file','g')
			form.value = res.data.data
			formVisible.value = true
		})
	}
	const crossRow = ref('')
	const crossTable = ref('')
	const crossTips = ref('')
	const crossColumnName = ref('')
	const crossColumnValue = ref('')
	//初始化
	const init=(formId=null,formType='add',formNames='',row=null,table=null,statusColumnName=null,tips=null,statusColumnValue=null)=>{
		resetForm()
			form.value.dengjishijian = context?.$toolUtil.getCurDateTime()
		if(formId){
			id.value = formId
			type.value = formType
		}
		if(formType == 'add'){
			isAdd.value = true
			formTitle.value = '新增' + formName
			formVisible.value = true
		}else if(formType == 'info'){
			isAdd.value = false
			formTitle.value = '查看' + formName
			getInfo()
		}else if(formType == 'edit'){
			isAdd.value = true
			formTitle.value = '修改' + formName
			getInfo()
		}else if(formType == 'logistics'){
			isAdd.value = false
			formTitle.value = '修改物流信息'
			getInfo()
		}else if(formType == 'reply'){
			type.value = formType
			isAdd.value = true
			disabledForm.value.cpicture = true
			disabledForm.value.content = true
			formTitle.value = '回复'
			getInfo()
		}else if(formType == 'cross'){
			isAdd.value = true
			formTitle.value = formNames
			// getInfo()
			for(let x in row){
				if(x=='dianshangzhanghao'){
					form.value.dianshangzhanghao = row[x];
					disabledForm.value.dianshangzhanghao = true;
					continue;
				}
				if(x=='dianshangmingcheng'){
					form.value.dianshangmingcheng = row[x];
					disabledForm.value.dianshangmingcheng = true;
					continue;
				}
				if(x=='youshan'){
					form.value.youshan = row[x];
					disabledForm.value.youshan = true;
					continue;
				}
				if(x=='chengxin'){
					form.value.chengxin = row[x];
					disabledForm.value.chengxin = true;
					continue;
				}
				if(x=='jingye'){
					form.value.jingye = row[x];
					disabledForm.value.jingye = true;
					continue;
				}
				if(x=='aiguo'){
					form.value.aiguo = row[x];
					disabledForm.value.aiguo = true;
					continue;
				}
				if(x=='gerenzerenquanzhong'){
					form.value.gerenzerenquanzhong = row[x];
					disabledForm.value.gerenzerenquanzhong = true;
					continue;
				}
				if(x=='gerenzerendefen'){
					form.value.gerenzerendefen = row[x];
					disabledForm.value.gerenzerendefen = true;
					continue;
				}
				if(x=='ziyou'){
					form.value.ziyou = row[x];
					disabledForm.value.ziyou = true;
					continue;
				}
				if(x=='pingdeng'){
					form.value.pingdeng = row[x];
					disabledForm.value.pingdeng = true;
					continue;
				}
				if(x=='gongzheng'){
					form.value.gongzheng = row[x];
					disabledForm.value.gongzheng = true;
					continue;
				}
				if(x=='fazhi'){
					form.value.fazhi = row[x];
					disabledForm.value.fazhi = true;
					continue;
				}
				if(x=='shehuizerenquanzhong'){
					form.value.shehuizerenquanzhong = row[x];
					disabledForm.value.shehuizerenquanzhong = true;
					continue;
				}
				if(x=='shehuizerendefen'){
					form.value.shehuizerendefen = row[x];
					disabledForm.value.shehuizerendefen = true;
					continue;
				}
				if(x=='fuqiang'){
					form.value.fuqiang = row[x];
					disabledForm.value.fuqiang = true;
					continue;
				}
				if(x=='minzhu'){
					form.value.minzhu = row[x];
					disabledForm.value.minzhu = true;
					continue;
				}
				if(x=='wenming'){
					form.value.wenming = row[x];
					disabledForm.value.wenming = true;
					continue;
				}
				if(x=='hexie'){
					form.value.hexie = row[x];
					disabledForm.value.hexie = true;
					continue;
				}
				if(x=='guojiazerendefen'){
					form.value.guojiazerendefen = row[x];
					disabledForm.value.guojiazerendefen = true;
					continue;
				}
				if(x=='guojiazerenquanzhong'){
					form.value.guojiazerenquanzhong = row[x];
					disabledForm.value.guojiazerenquanzhong = true;
					continue;
				}
				if(x=='zongdefen'){
					form.value.zongdefen = row[x];
					disabledForm.value.zongdefen = true;
					continue;
				}
				if(x=='dengjishijian'){
					form.value.dengjishijian = row[x];
					disabledForm.value.dengjishijian = true;
					continue;
				}
			}
			if(row){
				crossRow.value = row
			}
			if(table){
				crossTable.value = table
			}
			if(tips){
				crossTips.value = tips
			}
			if(statusColumnName){
				crossColumnName.value = statusColumnName
			}
			if(statusColumnValue){
				crossColumnValue.value = statusColumnValue
			}
			formVisible.value = true
		}

		context?.$http({
			url: `${context?.$toolUtil.storageGet('sessionTable')}/session`,
			method: 'get'
		}).then(res => {
			var json = res.data.data
		})
		context?.$http({
			url: `option/dianshang/dianshangzhanghao`,
			method: 'get'
		}).then(res=>{
			dianshangzhanghaoLists.value = res.data.data
		})
		//由上级字段带出不可改
		disabledForm.value.dianshangmingcheng = true;
	}
	//初始化
	//声明父级调用
	defineExpose({
		init
	})
	//关闭
	const closeClick = () => {
		formVisible.value = false
	}
	const dianshangzhanghaoChange=()=>{
		context?.$http({
			url: `follow/dianshang/dianshangzhanghao?columnValue=` + form.value.dianshangzhanghao,
			method: 'get'
		}).then(res=>{
			if(res.data.data.dianshangmingcheng){
				form.value.dianshangmingcheng = res.data.data.dianshangmingcheng
			}
		})
	}
	//富文本
	const editorChange = (e,name) =>{
		form.value[name] = e
	}
	//提交
	const save=()=>{
		var table = crossTable.value
		var objcross = JSON.parse(JSON.stringify(crossRow.value))
		let crossUserId = ''
		let crossRefId = ''
		let crossOptNum = ''
		if(type.value == 'cross'){
			if(crossColumnName.value!=''){
				if(!crossColumnName.value.startsWith('[')){
					for(let o in objcross){
						if(o == crossColumnName.value){
							objcross[o] = crossColumnValue.value
						}
					}
					//修改跨表数据
					changeCrossData(objcross)
				}else{
					crossUserId = context?.$toolUtil.storageGet('userid')
					crossRefId = objcross['id']
					crossOptNum = crossColumnName.value.replace(/\[/,"").replace(/\]/,"")
				}
			}
		}
		formRef.value.validate((valid)=>{
			if(valid){
				if(crossUserId&&crossRefId){
					form.value.crossuserid = crossUserId
					form.value.crossrefid = crossRefId
					let params = {
						page: 1,
						limit: 1000, 
						crossuserid:form.value.crossuserid,
						crossrefid:form.value.crossrefid,
					}
					context?.$http({
						url: `${tableName}/page`,
						method: 'get', 
						params: params 
					}).then(res=>{
						if(res.data.data.total>=crossOptNum){
							context?.$toolUtil.message(`${crossTips.value}`,'error')
							return false
						}else{
							context?.$http({
								url: `${tableName}/${!form.value.id ? "save" : "update"}`,
								method: 'post', 
								data: form.value 
							}).then(res=>{
								context?.$toolUtil.message(`操作成功`,'success',()=>{
									formVisible.value = false
									emit('formModelChange')
								})
							})
						}
					})
				}else{
					context?.$http({
						url: `${tableName}/${!form.value.id ? "save" : "update"}`,
						method: 'post', 
						data: form.value 
					}).then(res=>{
						context?.$toolUtil.message(`操作成功`,'success',()=>{
							formVisible.value = false
							emit('formModelChange')
						})
					})
				}
			}
		})
	}
	//修改跨表数据
	const changeCrossData=(row)=>{
		context?.$http({
			url: `${crossTable.value}/update`,
			method: 'post',
			data: row
		}).then(res=>{})
	}
</script>
<style lang="scss" scoped>
	// 表单
	.formModel_form{
		border-radius: 6px;
		padding: 30px;
		box-shadow: 0 0px 0px rgba(85, 255, 255, 0.5);
		// form item
		:deep(.el-form-item) {
			border: 1px solid #ddd;
			margin: 0;
			display: flex;
			//label
			.el-form-item__label {
			 border: 1px solid #ddd;
			 padding: 0;
			 background: rgba(236,236,236,1);
			 display: block;
			 width: 120px;
			 border-width: 0 2px 0 0;
			 text-align: center;
			}
			// 内容盒子
			.el-form-item__content {
				padding: 0 20px;
				display: flex;
				width: calc(100% - 120px);
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
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
				//日期选择器
				.list_date {
					border: 1px solid #ddd;
					border-radius: 0;
					box-shadow: 0 0 0px rgba(85, 255, 255, 0.5);
					width: 100%;
					line-height: 36px;
					box-sizing: border-box;
					//去掉默认样式
					.el-input__wrapper{
						border: none;
						box-shadow: none;
						background: none;
						border-radius: 0;
						height: 100%;
					}
				}
				// 下拉框
				.list_sel {
					border: 1px solid #ddd;
					border-radius: 0;
					box-shadow: 0 0 0px rgba(85, 255, 255, 0.5);
					padding: 0 10px;
					width: 100%;
					line-height: 36px;
					box-sizing: border-box;
					//去掉默认样式
					.select-trigger{
						height: 100%;
						.el-input{
							height: 100%;
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
				}
			}
		}
	}
	// 按钮盒子
	.formModel_btn_box {
		padding: 40px 0 0;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		.formModel_cancel {
			border: 0;
			cursor: pointer;
			border-radius: 4px;
			padding: 0 24px;
			margin: 0 10px 0 0;
			outline: none;
			color: #fff;
			background: rgba(27, 78, 133, 1);
			width: auto;
			font-size: 14px;
			height: 32px;
		}
		.formModel_cancel:hover {
			background: rgba(27, 78, 133, 0.5);
		}
		
		.formModel_confirm {
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
		.formModel_confirm:hover {
			background: rgba(241, 49, 100, .5);
		}
	}
</style>