<template>
	<div>
		<div class="app-contain">
			<div class="list_search_view">
				<el-form :model="searchQuery" class="search_form" >
					<div class="search_view">
						<div class="search_label">
							电商名称：
						</div>
						<div class="search_box">
							<el-input class="search_inp" v-model="searchQuery.dianshangmingcheng" placeholder="电商名称"
								clearable>
							</el-input>
						</div>
					</div>
					<div class="search_btn_view">
						<el-button class="search_btn" type="primary" @click="searchClick()" size="small">搜索</el-button>
					</div>
				</el-form>
				<br>
				<div class="btn_view">
					<el-button type="success" @click="addClick" v-if="btnAuth('dianshangdefen','新增')">新增</el-button>
					<el-button  v-if=" btnAuth('dianshangdefen','查看')" type="info"  :disabled="selRows.length==1?false:true" @click="infoClick(null)">详情</el-button>
					<el-button type="primary" :disabled="selRows.length==1?false:true" @click="editClick" v-if=" btnAuth('dianshangdefen','修改')">修改</el-button>
					<el-button type="danger" :disabled="selRows.length?false:true" @click="delClick(null)" v-if="btnAuth('dianshangdefen','删除')">删除</el-button>
					<el-button type="warning" @click="echartClick1" v-if="btnAuth('dianshangdefen','责任分数')">责任分数</el-button>
					<el-button type="warning" @click="echartClick2" v-if="btnAuth('dianshangdefen','责任得分')">责任得分</el-button>
				</div>
			</div>
			<br>
			<el-table
				v-loading="listLoading"
				border 
				:stripe='true'
				@selection-change="handleSelectionChange" 
				ref="table"
				v-if="btnAuth('dianshangdefen','查看')"
				:data="list"
				@row-click="listChange">
				<el-table-column :resizable='true' align="left" header-align="left" type="selection" width="55" />
				<el-table-column label="序号" width="70" :resizable='true' :sortable='false' align="left" header-align="left">
					<template #default="scope">{{ scope.$index + 1}}</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="电商账号">
					<template #default="scope">
						{{scope.row.dianshangzhanghao}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="电商名称">
					<template #default="scope">
						{{scope.row.dianshangmingcheng}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="友善">
					<template #default="scope">
						{{scope.row.youshan}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="诚信">
					<template #default="scope">
						{{scope.row.chengxin}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="敬业">
					<template #default="scope">
						{{scope.row.jingye}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="爱国">
					<template #default="scope">
						{{scope.row.aiguo}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="个人责任权重">
					<template #default="scope">
						{{scope.row.gerenzerenquanzhong}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="个人责任得分">
					<template #default="scope">
						{{scope.row.gerenzerendefen}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="自由">
					<template #default="scope">
						{{scope.row.ziyou}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="平等">
					<template #default="scope">
						{{scope.row.pingdeng}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="公正">
					<template #default="scope">
						{{scope.row.gongzheng}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="法治">
					<template #default="scope">
						{{scope.row.fazhi}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="社会责任权重">
					<template #default="scope">
						{{scope.row.shehuizerenquanzhong}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="社会责任得分">
					<template #default="scope">
						{{scope.row.shehuizerendefen}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="富强">
					<template #default="scope">
						{{scope.row.fuqiang}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="民主">
					<template #default="scope">
						{{scope.row.minzhu}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="文明">
					<template #default="scope">
						{{scope.row.wenming}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="和谐">
					<template #default="scope">
						{{scope.row.hexie}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="国家责任得分">
					<template #default="scope">
						{{scope.row.guojiazerendefen}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="国家责任权重">
					<template #default="scope">
						{{scope.row.guojiazerenquanzhong}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="总得分">
					<template #default="scope">
						{{scope.row.zongdefen}}
					</template>
				</el-table-column>
				<el-table-column
					 :resizable='true' 
					 :sortable='false' 
					 align="left" 
					 header-align="left"
					label="登记时间">
					<template #default="scope">
						{{scope.row.dengjishijian}}
					</template>
				</el-table-column>
				<el-table-column label="操作" width="300" :resizable='true' :sortable='false' align="left" header-align="left">
					<template #default="scope">
						<el-button type="info" v-if=" btnAuth('dianshangdefen','查看')" @click="infoClick(scope.row.id)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination 
				background
				:layout="layouts.join(',')"
				:total="total" 
				:page-size="listQuery.limit"
				prev-text="<"
				next-text=">"
				:hide-on-single-page="true"
				:style='{"width":"100%","padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"#333","fontWeight":"500"}'
				@size-change="sizeChange"
				@current-change="currentChange" 
				@prev-click="prevClick"
				@next-click="nextClick"  />
		</div>
		<formModel ref="formRef" @formModelChange="formModelChange"></formModel>
		<!-- 统计图弹窗 -->
		<el-dialog v-model="echartVisible" :title="'责任分数'" width="70%">
			<el-tabs v-model="echartActive" class="demo-tabs" @tab-change="echartTabClick" type="card">
			    <el-tab-pane label="责任分数" name="1"></el-tab-pane>
			    <el-tab-pane label="责任得分" name="2"></el-tab-pane>
			</el-tabs>
			<div v-if="echartActive==1" id="dianshangmingchengEchart1" style="width:100%;height:600px;"></div>

			<div v-if="echartActive==2" id="zongdefenEchart2" style="width:100%;height:600px;"></div>

			<template #footer>
				<span class="formModel_btn_box">
					<el-button class="formModel_cancel" @click="echartVisible=false">取消</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script setup>
	import axios from 'axios'
	import {
		reactive,
		ref,
		getCurrentInstance,
		nextTick,
		onMounted,
		watch,
		inject
	} from 'vue'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		ElMessageBox
	} from 'element-plus'
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	import formModel from './formModel.vue'
	
	//基础信息
	const tableName = 'dianshangdefen'
	const formName = '电商得分'
	const route = useRoute()
	//基础信息
	onMounted(()=>{
	})
	//列表数据
	const list = ref(null)
	const table = ref(null)
	const listQuery = ref({
		page: 1,
		limit: 20,
		sort: 'id',
		order: 'desc'
	})
	const searchQuery = ref({})
	const selRows = ref([])
	const listLoading = ref(false)
	const listChange = (row) =>{
		nextTick(()=>{
			table.value.clearSelection()
			table.value.toggleRowSelection(row)
		})
	}
	//列表
	const getList = () => {
		listLoading.value = true
		let params = JSON.parse(JSON.stringify(listQuery.value))
		params['sort'] = 'id'
		params['order'] = 'desc'
		if(searchQuery.value.dianshangmingcheng&&searchQuery.value.dianshangmingcheng!=''){
			params['dianshangmingcheng'] = '%' + searchQuery.value.dianshangmingcheng + '%'
		}
		context?.$http({
			url: `${tableName}/page`,
			method: 'get',
			params: params
		}).then(res => {
			listLoading.value = false
			list.value = res.data.data.list
			total.value = Number(res.data.data.total)
		})
	}
	//删
	const delClick = (id) => {
		let ids = ref([])
		if (id) {
			ids.value = [id]
		} else {
			if (selRows.value.length) {
				for (let x in selRows.value) {
					ids.value.push(selRows.value[x].id)
				}
			} else {
				return false
			}
		}
		ElMessageBox.confirm(`是否删除选中${formName}`, '提示', {
			confirmButtonText: '是',
			cancelButtonText: '否',
			type: 'warning',
		}).then(() => {
			context?.$http({
				url: `${tableName}/delete`,
				method: 'post',
				data: ids.value
			}).then(res => {
				context?.$toolUtil.message('删除成功', 'success',()=>{
					getList()
				})
			})
		})
	}
	//多选
	const handleSelectionChange = (e) => {
		selRows.value = e
	}
	//列表数据
	//分页
	const total = ref(0)
	const layouts = ref(["total","prev","pager","next","sizes","jumper"])
	const sizeChange = (size) => {
		listQuery.value.limit = size
		getList()
	}
	const currentChange = (page) => {
		listQuery.value.page = page
		getList()
	}
	const prevClick = () => {
		listQuery.value.page = listQuery.value.page - 1
		getList()
	}
	const nextClick = () => {
		listQuery.value.page = listQuery.value.page + 1
		getList()
	}
	//分页
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	//搜索
	const searchClick = () => {
		listQuery.value.page = 1
		getList()
	}
	//表单
	const formRef = ref(null)
	const formModelChange=()=>{
		searchClick()
	}
	const addClick = ()=>{
		formRef.value.init()
	}
	const editClick = ()=>{
		if(selRows.value.length){
			formRef.value.init(selRows.value[0].id,'edit')
		}
	}
	
	const infoClick = (id=null)=>{
		if(id){
			formRef.value.init(id,'info')
		}
		else if(selRows.value.length){
			formRef.value.init(selRows.value[0].id,'info')
		}
	}
	// 表单
	// 预览文件
	const preClick = (file) =>{
		if(!file){
			context?.$toolUtil.message('文件不存在','error')
		}
		window.open(context?.$config.url + file)
		// const a = document.createElement('a');
		// a.style.display = 'none';
		// a.setAttribute('target', '_blank');
		// file && a.setAttribute('download', file);
		// a.href = context?.$config.url + file;
		// document.body.appendChild(a);
		// a.click();
		// document.body.removeChild(a);
	}
	// 下载文件
	const download = (file) => {
		if(!file){
			context?.$toolUtil.message('文件不存在','error')
		}
		let arr = file.replace(new RegExp('file/', "g"), "")
		axios.get((location.href.split(context?.$config.name).length>1 ? location.href.split(context?.$config.name)[0] :'') + context?.$config.name + '/file/download?fileName=' + arr, {
			headers: {
				token: context?.$toolUtil.storageGet('Token')
			},
			responseType: "blob"
		}).then(({
			data
		}) => {
			const binaryData = [];
			binaryData.push(data);
			const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
				type: 'application/pdf;chartset=UTF-8'
			}))
			const a = document.createElement('a')
			a.href = objectUrl
			a.download = arr
			// a.click()
			// 下面这个写法兼容火狐
			a.dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}))
			window.URL.revokeObjectURL(data)
		})
	}
	// 统计图1
	const echarts = inject("echarts")
	const echartVisible = ref(false)
	const echartClick1 = ()=>{
		echartActive.value = '1'
		echartVisible.value = true
		nextTick(()=>{
			var dianshangmingchengEchart1 = echarts.init(document.getElementById("dianshangmingchengEchart1"),'macarons');
			context?.$http({
				url: `dianshangdefen/valueMul/dianshangmingcheng?yColumnNameMul=youshan,chengxin,jingye,aiguo,ziyou,pingdeng,gongzheng,fazhi,fuqiang,minzhu,wenming,hexie`,
				method: 'get'
			}).then(res=>{
				let obj = res.data.data
                let xAxis1 = [];
                let yAxis1 = [];
                let pArray1 = []
                for(let i=0;i<obj[0].length;i++){
                    xAxis1.push(obj[0][i].dianshangmingcheng);
                    yAxis1.push(parseFloat((obj[0][i].total)));
                    pArray1.push({
                        value: parseFloat((obj[0][i].total)),
                        name: obj[0][i].dianshangmingcheng
                    })
                }
                let xAxis2 = [];
                let yAxis2 = [];
                let pArray2 = []
                for(let i=0;i<obj[1].length;i++){
                    xAxis2.push(obj[1][i].dianshangmingcheng);
                    yAxis2.push(parseFloat((obj[1][i].total)));
                    pArray2.push({
                        value: parseFloat((obj[1][i].total)),
                        name: obj[1][i].dianshangmingcheng
                    })
                }
                let xAxis3 = [];
                let yAxis3 = [];
                let pArray3 = []
                for(let i=0;i<obj[2].length;i++){
                    xAxis3.push(obj[2][i].dianshangmingcheng);
                    yAxis3.push(parseFloat((obj[2][i].total)));
                    pArray3.push({
                        value: parseFloat((obj[2][i].total)),
                        name: obj[2][i].dianshangmingcheng
                    })
                }
                let xAxis4 = [];
                let yAxis4 = [];
                let pArray4 = []
                for(let i=0;i<obj[3].length;i++){
                    xAxis4.push(obj[3][i].dianshangmingcheng);
                    yAxis4.push(parseFloat((obj[3][i].total)));
                    pArray4.push({
                        value: parseFloat((obj[3][i].total)),
                        name: obj[3][i].dianshangmingcheng
                    })
                }
                let xAxis5 = [];
                let yAxis5 = [];
                let pArray5 = []
                for(let i=0;i<obj[4].length;i++){
                    xAxis5.push(obj[4][i].dianshangmingcheng);
                    yAxis5.push(parseFloat((obj[4][i].total)));
                    pArray5.push({
                        value: parseFloat((obj[4][i].total)),
                        name: obj[4][i].dianshangmingcheng
                    })
                }
                let xAxis6 = [];
                let yAxis6 = [];
                let pArray6 = []
                for(let i=0;i<obj[5].length;i++){
                    xAxis6.push(obj[5][i].dianshangmingcheng);
                    yAxis6.push(parseFloat((obj[5][i].total)));
                    pArray6.push({
                        value: parseFloat((obj[5][i].total)),
                        name: obj[5][i].dianshangmingcheng
                    })
                }
                let xAxis7 = [];
                let yAxis7 = [];
                let pArray7 = []
                for(let i=0;i<obj[6].length;i++){
                    xAxis7.push(obj[6][i].dianshangmingcheng);
                    yAxis7.push(parseFloat((obj[6][i].total)));
                    pArray7.push({
                        value: parseFloat((obj[6][i].total)),
                        name: obj[6][i].dianshangmingcheng
                    })
                }
                let xAxis8 = [];
                let yAxis8 = [];
                let pArray8 = []
                for(let i=0;i<obj[7].length;i++){
                    xAxis8.push(obj[7][i].dianshangmingcheng);
                    yAxis8.push(parseFloat((obj[7][i].total)));
                    pArray8.push({
                        value: parseFloat((obj[7][i].total)),
                        name: obj[7][i].dianshangmingcheng
                    })
                }
                let xAxis9 = [];
                let yAxis9 = [];
                let pArray9 = []
                for(let i=0;i<obj[8].length;i++){
                    xAxis9.push(obj[8][i].dianshangmingcheng);
                    yAxis9.push(parseFloat((obj[8][i].total)));
                    pArray9.push({
                        value: parseFloat((obj[8][i].total)),
                        name: obj[8][i].dianshangmingcheng
                    })
                }
                let xAxis10 = [];
                let yAxis10 = [];
                let pArray10 = []
                for(let i=0;i<obj[9].length;i++){
                    xAxis10.push(obj[9][i].dianshangmingcheng);
                    yAxis10.push(parseFloat((obj[9][i].total)));
                    pArray10.push({
                        value: parseFloat((obj[9][i].total)),
                        name: obj[9][i].dianshangmingcheng
                    })
                }
                let xAxis11 = [];
                let yAxis11 = [];
                let pArray11 = []
                for(let i=0;i<obj[10].length;i++){
                    xAxis11.push(obj[10][i].dianshangmingcheng);
                    yAxis11.push(parseFloat((obj[10][i].total)));
                    pArray11.push({
                        value: parseFloat((obj[10][i].total)),
                        name: obj[10][i].dianshangmingcheng
                    })
                }
                let xAxis12 = [];
                let yAxis12 = [];
                let pArray12 = []
                for(let i=0;i<obj[11].length;i++){
                    xAxis12.push(obj[11][i].dianshangmingcheng);
                    yAxis12.push(parseFloat((obj[11][i].total)));
                    pArray12.push({
                        value: parseFloat((obj[11][i].total)),
                        name: obj[11][i].dianshangmingcheng
                    })
                }
				var option = {};
                option = {
                    title: {
                        left: 'left'
                    },
                    legend: {
                        data: [
                            '友善',
                            '诚信',
                            '敬业',
                            '爱国',
                            '自由',
                            '平等',
                            '公正',
                            '法治',
                            '富强',
                            '民主',
                            '文明',
                            '和谐',
                        ]
                    },
                    tooltip: {
                      trigger: 'axis',
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis1,
                        axisLabel : {
                            rotate:40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
// 1 [友善, 诚信, 敬业, 爱国, 自由, 平等, 公正, 法治, 富强, 民主, 文明, 和谐]
                    {
                        data: yAxis1,
                        type: 'line',
                        name: '友善',
                    },
                    {
                        data: yAxis2,
                        type: 'line',
                        name: '诚信',
                    },
                    {
                        data: yAxis3,
                        type: 'line',
                        name: '敬业',
                    },
                    {
                        data: yAxis4,
                        type: 'line',
                        name: '爱国',
                    },
                    {
                        data: yAxis5,
                        type: 'line',
                        name: '自由',
                    },
                    {
                        data: yAxis6,
                        type: 'line',
                        name: '平等',
                    },
                    {
                        data: yAxis7,
                        type: 'line',
                        name: '公正',
                    },
                    {
                        data: yAxis8,
                        type: 'line',
                        name: '法治',
                    },
                    {
                        data: yAxis9,
                        type: 'line',
                        name: '富强',
                    },
                    {
                        data: yAxis10,
                        type: 'line',
                        name: '民主',
                    },
                    {
                        data: yAxis11,
                        type: 'line',
                        name: '文明',
                    },
                    {
                        data: yAxis12,
                        type: 'line',
                        name: '和谐',
                    },
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                dianshangmingchengEchart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dianshangmingchengEchart1.resize();
                };
			})
		})
	}

	//统计图2
	const echartActive = ref('1')
	const echartTabClick = () =>{
		if(echartActive.value==1){
			echartClick1()
		}
		else if(echartActive.value==2){
			echartClick2()
		}
	}
	const echartClick2 = ()=>{
		echartActive.value = '2'
		echartVisible.value = true
		nextTick(()=>{
			var zongdefenEchart2 = echarts.init(document.getElementById("zongdefenEchart2"),'macarons');
			context?.$http({
				url: `dianshangdefen/value/dianshangmingcheng/zongdefen`,
				method: 'get'
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let pArray = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].dianshangmingcheng);
				    yAxis.push(parseFloat((obj[i].total)));
				    pArray.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].dianshangmingcheng
				    })
				}
				var option = {};
                option = {
                    title: {
                        text: '责任得分',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel : {
                            rotate:40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
				// 使用刚指定的配置项和数据显示图表。
				zongdefenEchart2.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    zongdefenEchart2.resize();
				};
			})
		})
	}

	//初始化
	const init = () => {
		getList()
	}
	init()
</script>
<style lang="scss" scoped>
	
	// 操作盒子
	.list_search_view {
		margin: 0 0 20px;
		// 搜索盒子
		.search_form {
			display: flex;
			align-items: center;
			// 子盒子
			.search_view {
				margin: 0 10px 0 0;
				display: flex;
				align-items: center;
				// 搜索label
				.search_label {
					margin: 0 10px 0 0;
					color: #666;
					font-weight: 500;
					display: none;
					font-size: 14px;
					line-height: 40px;
					height: 40px;
				}
				// 搜索item
				.search_box {
					display: flex;
					width: calc(100% - 100px);
					// 输入框
					:deep(.search_inp) {
						border: 1px solid #ddd;
						padding: 0 10px;
						background: #fff;
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
							padding: 0;
						}
						.is-focus {
							box-shadow: none !important;
						}
					}
				}
			}
			// 搜索按钮盒子
			.search_btn_view {
				width: 20%;
				display: flex;
				padding: 0 20px;
				// 搜索按钮
				.search_btn {
					border: 1px solid #aaa;
					cursor: pointer;
					border-radius: 0;
					padding: 0 16px;
					outline: none;
					color: #666;
					background: #f5f5f5;
					width: auto;
					font-size: 14px;
					height: 36px;
				}
				// 搜索按钮-悬浮
				.search_btn:hover {
					box-shadow: inset 0 4px 24px 6px rgba(255,255,255,.3);
					background: #ddd;
				}
			}
		}
		//头部按钮盒子
		.btn_view {
			margin: 20px 0;
			display: flex;
			// 其他
			:deep(.el-button--default){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 其他-悬浮
			:deep(.el-button--default:hover){
				background: rgba(85, 170, 127, 0.5);
			}
			// 新增
			:deep(.el-button--success){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 新增-悬浮
			:deep(.el-button--success:hover){
				background: rgba(85, 255, 127, 0.5);
			}
			// 修改
			:deep(.el-button--primary){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 修改-悬浮
			:deep(.el-button--primary:hover){
				background: rgba(64, 158, 255, 0.5);
			}
			// 详情
			:deep(.el-button--info){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 详情-悬浮
			:deep(.el-button--info:hover){
				background: rgba(85, 85, 127, 0.5);
			}
			// 删除
			:deep(.el-button--danger){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 删除-悬浮
			:deep(.el-button--danger:hover){
				background: rgba(255, 0, 0, 0.5);
			}
			// 统计
			:deep(.el-button--warning){
				border: 1px solid #ddd;
				cursor: pointer;
				border-radius: 0;
				padding: 0 16px;
				margin: 0;
				outline: none;
				color: #333;
				background: #f5f5f5;
				width: auto;
				font-size: 14px;
				height: 32px;
			}
			// 统计-悬浮
			:deep(.el-button--warning:hover){
				background: rgba(255, 128, 0, 0.5);
			}
		}
	}
	// 表格样式
	.el-table {
		padding: 0;
		background: #fff;
		width: 100%;
		border-color: #eee;
		border-width: 1px 0 0 1px;
		border-style: solid;
		:deep(.el-table__header-wrapper) {
			thead {
				color: #999;
				font-weight: 500;
				width: 100%;
				tr {
					background: #fff;
					th {
						padding: 12px 0;
						border-color: #eee;
						border-width: 0 1px 1px 0;
						border-style: solid;
						text-align: center;
						.cell {
							padding: 0 10px;
							word-wrap: normal;
							color: #000;
							word-break: break-all;
							white-space: normal;
							font-weight: bold;
							display: inline-block;
							vertical-align: middle;
							width: 100%;
							line-height: 24px;
							position: relative;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
		:deep(.el-table__body-wrapper) {
			tbody {
				width: 100%;
				tr {
					background: #fff;
					td {
						padding: 12px 0;
						color: #666;
						background: #fff;
						border-color: #eee;
						border-width: 0 1px 1px 0;
						border-style: solid;
						text-align: center;
						.cell {
							padding: 0 10px;
							overflow: hidden;
							word-break: break-all;
							white-space: normal;
							line-height: 24px;
							text-overflow: ellipsis;
							// 编辑
							.el-button--primary {
								border: 0;
								cursor: pointer;
								border-radius: 4px;
								padding: 0 24px;
								margin: 0 10px 0 0;
								outline: none;
								color: #fff;
								background: rgba(1, 145, 92, 1);
								width: auto;
								font-size: 14px;
								height: 32px;
							}
							// 编辑-悬浮
							.el-button--primary:hover {
								background: rgba(1, 145, 92, .5);
							}
							// 详情
							.el-button--info {
								border: 0;
								cursor: pointer;
								border-radius: 4px;
								padding: 0 24px;
								margin: 0 10px 0 0;
								outline: none;
								color: #fff;
								background: rgba(7,174,247,1);
								width: auto;
								font-size: 14px;
								height: 32px;
							}
							// 详情-悬浮
							.el-button--info:hover {
								background: rgba(7,174,247,.5);
							}
							// 删除
							.el-button--danger {
								border: 0;
								cursor: pointer;
								border-radius: 4px;
								padding: 0 24px;
								margin: 0 10px 0 0;
								outline: none;
								color: #fff;
								background: rgba(239, 85, 45, 1);
								width: auto;
								font-size: 14px;
								height: 32px;
							}
							// 删除-悬浮
							.el-button--danger:hover {
								background: rgba(239, 85, 45, .5);
							}
							// 跨表
							.el-button--success {
								border: 0;
								cursor: pointer;
								border-radius: 4px;
								padding: 0 24px;
								margin: 0 10px 0 0;
								outline: none;
								color: #fff;
								background: rgba(255, 85, 255, 1.0);
								width: auto;
								font-size: 14px;
								height: 32px;
							}
							// 跨表-悬浮
							.el-button--success:hover {
								background: rgba(255, 85, 255, 0.5);
							}
							// 操作
							.el-button--warning {
								border: 0;
								cursor: pointer;
								border-radius: 4px;
								padding: 0 24px;
								margin: 0 10px 0 0;
								outline: none;
								color: #fff;
								background: rgba(85, 0, 255, 1.0);
								width: auto;
								font-size: 14px;
								height: 32px;
							}
							// 操作-悬浮
							.el-button--warning:hover {
								background: rgba(85, 0, 255, 0.5);
							}
						}
					}
				}
				tr.el-table__row--striped {
					td {
						background: #FAFAFA;
					}
				}
				tr:hover {
					td {
						padding: 12px 0;
						color: #000;
						background: rgba(123,123,123,.2);
						border-color: #eee;
						border-width: 0 1px 1px 0;
						border-style: solid;
						text-align: center;
					}
				}
			}
		}
	}
	// 分页器
	.el-pagination {
		// 总页码
		:deep(.el-pagination__total) {
			margin: 0 10px 0 0;
			color: #666;
			font-weight: 400;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			height: 28px;
		}
		// 上一页
		:deep(.btn-prev) {
			border: none;
			border-radius: 2px;
			padding: 0;
			margin: 0 5px;
			color: #666;
			background: #f4f4f5;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			min-width: 35px;
			height: 28px;
		}
		// 下一页
		:deep(.btn-next) {
			border: none;
			border-radius: 2px;
			padding: 0;
			margin: 0 5px;
			color: #666;
			background: #f4f4f5;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			min-width: 35px;
			height: 28px;
		}
		// 上一页禁用
		:deep(.btn-prev:disabled) {
			border: none;
			cursor: not-allowed;
			border-radius: 2px;
			padding: 0;
			margin: 0 5px;
			color: #C0C4CC;
			background: #f4f4f5;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			height: 28px;
		}
		// 下一页禁用
		:deep(.btn-next:disabled) {
			border: none;
			cursor: not-allowed;
			border-radius: 2px;
			padding: 0;
			margin: 0 5px;
			color: #C0C4CC;
			background: #f4f4f5;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			height: 28px;
		}
		// 页码
		:deep(.el-pager) {
			padding: 0;
			margin: 0;
			display: inline-block;
			vertical-align: top;
			// 数字
			.number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
			// 数字悬浮
			.number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #409EFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: rgba(52,136,192,1);
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
			// 选中
			.number.is-active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: rgba(52,136,192,1);
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
		}
		// sizes
		:deep(.el-pagination__sizes) {
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			height: 28px;
			.el-select {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
		}
		// 跳页
		:deep(.el-pagination__jump) {
			margin: 0 0 0 24px;
			color: #606266;
			display: inline-block;
			vertical-align: top;
			font-size: 13px;
			line-height: 28px;
			height: 28px;
			// 输入框
			.el-input {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
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
	}
</style>
