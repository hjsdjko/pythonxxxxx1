<template>
	<div class="home_view">
		<div class="projectTitle">欢迎使用 {{projectName}}</div>
		<div class="count_list">
			<el-collapse-transition v-if="btnAuth('dianshangdefen','首页总数')">
				<el-card v-show="countTypeList.closedianshangdefenCountType" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								电商得分
							</div>
							<div class="card_head_right">
								<el-icon @click="countTypeClick('hiddendianshangdefenCountType')" class="showIcons"
									:class="countTypeList.hiddendianshangdefenCountType?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="countTypeClick('closedianshangdefenCountType')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
							
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddendianshangdefenCountType">
							<div class="count_title">电商得分总数</div>
							<div class="count_num">{{dianshangdefenCount}}</div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>
		<div class="card_list">
			<el-collapse-transition v-if="btnAuth('dianshangdefen','首页统计')">
				<el-card v-show="cardTypeList.closedianshangdefenChartType1" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								电商得分
							</div>
							<div class="card_head_right">
								<el-icon @click="cardTypeClick('hiddendianshangdefenChartType1')" class="showIcons"
									:class="cardTypeList.hiddendianshangdefenChartType1?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="cardTypeClick('closedianshangdefenChartType1')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddendianshangdefenChartType1">
							<div id="dianshangdefendianshangmingchengEchart1" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('dianshangdefen','首页统计')">
				<el-card v-show="cardTypeList.closedianshangdefenChartType2" class="card_view">
					<template #header>
						<div class="index_card_head">
							<div class="card_head_title">
								电商得分
							</div>
							<div class="card_head_right">
								<el-icon @click="cardTypeClick('hiddendianshangdefenChartType2')" class="showIcons"
									:class="cardTypeList.hiddendianshangdefenChartType2?'showIcons1':''">
									<ArrowUpBold />
								</el-icon>
								<el-icon @click="cardTypeClick('closedianshangdefenChartType2')" class="closeIcons">
									<CloseBold />
								</el-icon>
							</div>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddendianshangdefenChartType2">
							<div id="dianshangdefenzongdefenEchart2" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>
	</div>
</template>

<script setup>
	import {
		inject,
		nextTick,
		ref,
		getCurrentInstance
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
	const countTypeList = ref({
	})
	const getCountList=()=>{
		countTypeList.value.closedianshangdefenCountType = true
		countTypeList.value.hiddendianshangdefenCountType = true
		if(btnAuth('dianshangdefen','首页总数')){
			getdianshangdefenCount()
		}
	}
	const dianshangdefenCount = ref(0)
	const getdianshangdefenCount = () => {
		context?.$http({
			url:'dianshangdefen/count',
			method: 'get'
		}).then(res=>{
			dianshangdefenCount.value = res.data.data
		})
	}
	const countTypeClick = (e) => {
		countTypeList.value[e] = !countTypeList.value[e]
	}
	const init=()=>{
		getCountList()
		getCardList()
	}
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	let echarts = inject("echarts")
	const cardTypeClick = (e) =>{
		cardTypeList.value[e] = !cardTypeList.value[e]
		setTimeout(()=>{
			getCardList()
		},1000)
	}
	const cardTypeList = ref({
		closedianshangdefenChartType1: true,
		hiddendianshangdefenChartType1: true,
		closedianshangdefenChartType2: true,
		hiddendianshangdefenChartType2: true,
	})
	const getCardList = () => {
		if(btnAuth('dianshangdefen','首页统计')){
			getdianshangdefenChart1()
		}
		if(btnAuth('dianshangdefen','首页统计')){
			getdianshangdefenChart2()
		}
	}
	const getdianshangdefenChart1 = () => {
		nextTick(()=>{
			var dianshangmingchengEchart1 = echarts.init(document.getElementById("dianshangdefendianshangmingchengEchart1"),'macarons');
			context?.$http({
				url: `dianshangdefen/valueMul/dianshangmingcheng?yColumnNameMul=youshan,chengxin,jingye,aiguo,ziyou,pingdeng,gongzheng,fazhi,fuqiang,minzhu,wenming,hexie`,
				method: "get",
			}).then(obj=>{
				let res = obj.data.data
                let xAxis1 = [];
                let yAxis1 = [];
                let pArray1 = []
                for(let i=0;i<res[0].length;i++){
                    xAxis1.push(res[0][i].dianshangmingcheng);
                    yAxis1.push(parseFloat((res[0][i].total)));
                    pArray1.push({
                        value: parseFloat((res[0][i].total)),
                        name: res[0][i].dianshangmingcheng
                    })
                }
                let xAxis2 = [];
                let yAxis2 = [];
                let pArray2 = []
                for(let i=0;i<res[1].length;i++){
                    xAxis2.push(res[1][i].dianshangmingcheng);
                    yAxis2.push(parseFloat((res[1][i].total)));
                    pArray2.push({
                        value: parseFloat((res[1][i].total)),
                        name: res[1][i].dianshangmingcheng
                    })
                }
                let xAxis3 = [];
                let yAxis3 = [];
                let pArray3 = []
                for(let i=0;i<res[2].length;i++){
                    xAxis3.push(res[2][i].dianshangmingcheng);
                    yAxis3.push(parseFloat((res[2][i].total)));
                    pArray3.push({
                        value: parseFloat((res[2][i].total)),
                        name: res[2][i].dianshangmingcheng
                    })
                }
                let xAxis4 = [];
                let yAxis4 = [];
                let pArray4 = []
                for(let i=0;i<res[3].length;i++){
                    xAxis4.push(res[3][i].dianshangmingcheng);
                    yAxis4.push(parseFloat((res[3][i].total)));
                    pArray4.push({
                        value: parseFloat((res[3][i].total)),
                        name: res[3][i].dianshangmingcheng
                    })
                }
                let xAxis5 = [];
                let yAxis5 = [];
                let pArray5 = []
                for(let i=0;i<res[4].length;i++){
                    xAxis5.push(res[4][i].dianshangmingcheng);
                    yAxis5.push(parseFloat((res[4][i].total)));
                    pArray5.push({
                        value: parseFloat((res[4][i].total)),
                        name: res[4][i].dianshangmingcheng
                    })
                }
                let xAxis6 = [];
                let yAxis6 = [];
                let pArray6 = []
                for(let i=0;i<res[5].length;i++){
                    xAxis6.push(res[5][i].dianshangmingcheng);
                    yAxis6.push(parseFloat((res[5][i].total)));
                    pArray6.push({
                        value: parseFloat((res[5][i].total)),
                        name: res[5][i].dianshangmingcheng
                    })
                }
                let xAxis7 = [];
                let yAxis7 = [];
                let pArray7 = []
                for(let i=0;i<res[6].length;i++){
                    xAxis7.push(res[6][i].dianshangmingcheng);
                    yAxis7.push(parseFloat((res[6][i].total)));
                    pArray7.push({
                        value: parseFloat((res[6][i].total)),
                        name: res[6][i].dianshangmingcheng
                    })
                }
                let xAxis8 = [];
                let yAxis8 = [];
                let pArray8 = []
                for(let i=0;i<res[7].length;i++){
                    xAxis8.push(res[7][i].dianshangmingcheng);
                    yAxis8.push(parseFloat((res[7][i].total)));
                    pArray8.push({
                        value: parseFloat((res[7][i].total)),
                        name: res[7][i].dianshangmingcheng
                    })
                }
                let xAxis9 = [];
                let yAxis9 = [];
                let pArray9 = []
                for(let i=0;i<res[8].length;i++){
                    xAxis9.push(res[8][i].dianshangmingcheng);
                    yAxis9.push(parseFloat((res[8][i].total)));
                    pArray9.push({
                        value: parseFloat((res[8][i].total)),
                        name: res[8][i].dianshangmingcheng
                    })
                }
                let xAxis10 = [];
                let yAxis10 = [];
                let pArray10 = []
                for(let i=0;i<res[9].length;i++){
                    xAxis10.push(res[9][i].dianshangmingcheng);
                    yAxis10.push(parseFloat((res[9][i].total)));
                    pArray10.push({
                        value: parseFloat((res[9][i].total)),
                        name: res[9][i].dianshangmingcheng
                    })
                }
                let xAxis11 = [];
                let yAxis11 = [];
                let pArray11 = []
                for(let i=0;i<res[10].length;i++){
                    xAxis11.push(res[10][i].dianshangmingcheng);
                    yAxis11.push(parseFloat((res[10][i].total)));
                    pArray11.push({
                        value: parseFloat((res[10][i].total)),
                        name: res[10][i].dianshangmingcheng
                    })
                }
                let xAxis12 = [];
                let yAxis12 = [];
                let pArray12 = []
                for(let i=0;i<res[11].length;i++){
                    xAxis12.push(res[11][i].dianshangmingcheng);
                    yAxis12.push(parseFloat((res[11][i].total)));
                    pArray12.push({
                        value: parseFloat((res[11][i].total)),
                        name: res[11][i].dianshangmingcheng
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
                        axisLabel: {
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
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
				dianshangmingchengEchart1.clear()
                dianshangmingchengEchart1.setOption(option);
                //根据窗口的大小变动图表
                dianshangmingchengEchart1.resize();
			})
		})
	}
	const getdianshangdefenChart2 = () => {
		nextTick(()=>{
			var zongdefenEchart2 = echarts.init(document.getElementById("dianshangdefenzongdefenEchart2"),'macarons');
			context?.$http({
				url: `dianshangdefen/value/dianshangmingcheng/zongdefen`,
				method: "get",
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let pArray = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].dianshangmingcheng);
				    yAxis.push(parseFloat((res[i].total)));
				    pArray.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].dianshangmingcheng
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
                        axisLabel: {
                            rotate: 40
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
				zongdefenEchart2.clear()
				zongdefenEchart2.setOption(option);
				//根据窗口的大小变动图表
				zongdefenEchart2.resize();
			})
		})
	}
	init()
</script>
<style lang="scss">
	.projectTitle{
		padding: 0 0 20px;
		font-weight: bold;
		display: flex;
		width: 100%;
		font-size: 30px;
		justify-content: center;
		align-items: center;
		height: 50%;
	}

	.showIcons {
		transition: transform 0.3s;
		margin-right: 10px;
	}

	.showIcons1 {
		transform: rotate(-180deg);
	}
	
	// 总数盒子
	.count_list{
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		// 总数card
		.card_view {
			border: 1px solid #e4e7ed;
			box-shadow: 0px 0px 12px rgba(0,0,0,.12);
			padding: 0 0 50px;
			margin: 0 10px 10px;
			flex: 1;
			background: rgba(0,123,213,1);
			width: 100%;
			position: relative;
			box-sizing: border-box;
			height: auto;
			// card头部
			.el-card__header {
				border: 1px solid #e4e7ed;
				padding: 10px;
				left: 0;
				bottom: 0;
				width: 100%;
				border-width: 1px 0 0;
				position: absolute;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					// 标题
					.card_head_title {
						color: #fff;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon {
							cursor: pointer;
							color: #fff;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.count_item{
					padding: 30px;
					display: flex;
					align-items: center;
					text-align: center;
					// 总数标题
					.count_title{
						padding: 0 10px 0 0;
						color: #fff;
						font-weight: bold;
						font-size: 20px;
						line-height: 3;
					}
					// 总数数字
					.count_num{
						color: #fff;
						font-weight: bold;
						font-size: 24px;
						line-height: 3;
					}
				}
			}
		}
	}
	// 首页盒子
	.home_view {
		padding: 30px 0;
	}
	// 统计图盒子
	.card_list {
		padding: 0 0 20px;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		// 统计图card
		.card_view {
			border: 0px solid #e4e7ed;
			box-shadow: none;
			margin: 0 10px 10px;
			background: transparent;
			width: 25%;
			box-sizing: border-box;
			height: auto;
			// 头部
			.el-card__header {
				border: 1px solid #e4e7ed;
				display: none;
				width: 100%;
				border-width: 0 0 1px;
				// 头部盒子
				.index_card_head {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					// 标题
					.card_head_title {
						color: #f00;
						font-size: 14px;
					}
					// 按钮盒子
					.card_head_right {
						display: flex;
						align-items: center;
						// 按钮
						.el-icon{
							cursor: pointer;
							color: #aaa;
							font-size: 20px;
						}
					}
				}
			}
			// body
			.el-card__body {
				padding: 0;
				// body盒子
				.card_item{
					padding: 30px;
					text-align: center;
				}
			}
		}
	}
</style>
