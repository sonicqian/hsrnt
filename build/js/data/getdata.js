		
 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart'),'zdy');
        // 指定图表的配置项和数据
         myChart.setOption({
             tooltip: {},
		grid: {
		top:'12%',
		left: '1%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
             legend: {
				 //selectedMode:'single',
                 data:['温度','湿度','光照','CO2','土壤温度','土壤湿度','EC值','PH值']
				 
             },
             xAxis: {
                 data: []
             },
             yAxis: {},
             series: [{
                 name: '温度',
                 type: 'bar',
                 data: []
             },{
                 name: '湿度',
                 type: 'bar',
                 data: []
             },{
                 name: '光照',
                 type: 'line',
                 data: []
             },{
                 name: 'CO2',
                 type: 'line',
                 data: []
             },{
                 name: '土壤温度',
                 type: 'line',
                 data: []
             },{
                 name: '土壤湿度',
                 type: 'line',
                 data: []
             },{
                 name: 'EC值',
                 type: 'line',
                 data: []
             },{
                 name: 'PH值',
                 type: 'line',
                 data: []
             }],
			 color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ]
         });
var dl7hart1 = echarts.init(document.getElementById('7dl'),'shine');
        // 指定图表的配置项和数据
    dl7hart1.setOption({
    title:{
		text: '一周光照时长统计'
	},
	tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top:'15%',
		left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: []
    },
    series: [
        {
            name: '光照时数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
					textStyle:{
						fontSize:20
					}
                }
            },			
            data: []
        }
    ],
	color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ]
         });
	var piehart = echarts.init(document.getElementById('piehart'),'shine');
        // 指定图表的配置项和数据
    piehart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{c} ({d}%)"
    },
	    grid: {
        top:'3%'
    },
    series: [
        {
            name:'有效积温',
            type:'pie',
            radius: ['50%', '90%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        }
    ],
	color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ]
         }); 
	var radarhart = echarts.init(document.getElementById('radarhart'),'shine');
        // 指定图表的配置项和数据
    radarhart.setOption({
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '有效积温', max: 210},
           { name: '光照时数', max: 15},
           { name: '平均温度', max: 40},
           { name: '平均湿度', max: 100},
           { name: '土壤温度', max: 40},
           { name: '二氧化碳', max: 800}
        ]
    },
    series: [{
        name: '一周环境参数',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : []
            }
        ]
    }],
	color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ]
         }); 		 
         //myChart.showLoading(); 
         //dl7hart1.showLoading(); 
        // 使用刚指定的配置项和数据显示图表。
