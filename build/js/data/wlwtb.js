// 入侵报警
var rqbj = echarts.init(document.getElementById('rqbj')); 
 
var spirit = 'path://M465 1395 c-30 -30 -31 -54 -4 -89 l20 -26 394 0 394 0 21 27 c25 32 20 69 -12 96 -18 16 -53 17 -405 17 l-384 0 -24 -25z,M552 1003 c3 -226 3 -229 31 -285 32 -65 90 -121 156 -151 66 -31 187 -30 256 1 65 30 128 92 157 156 21 48 23 66 26 279 l3 227 -316 0 -317 0 4 -227z';
var baojing = 'path://M470 1400 c-26 -26 -26 -81 -2 -103 17 -15 59 -17 405 -17 374 0 388 1 407 20 27 27 25 66 -5 95 l-24 25 -381 0 c-367 0 -381 -1 -400 -20z,M562 993 l3 -238 30 -54 c33 -60 104 -122 162 -142 49 -17 167 -17 216 0 58 20 129 82 162 142 l30 54 3 238 3 237 -306 0 -306 0 3 -237z,M340 769 c-77 -13 -107 -61 -57 -93 19 -12 35 -12 109 -1 48 7 91 16 96 19 15 9 20 40 11 64 -7 19 -15 22 -56 21 -26 -1 -73 -5 -103 -10z,M531 488 c-64 -70 -81 -95 -81 -122 0 -30 38 -54 63 -40 31 17 127 138 127 159 0 58 -55 59 -109 3z,M1092 508 c-23 -23 -12 -56 44 -127 46 -60 60 -71 85 -71 22 0 32 7 41 25 9 21 7 30 -16 64 -76 110 -121 142 -154 109z,M826 414 c-12 -12 -16 -37 -16 -109 0 -99 10 -125 50 -125 35 0 50 38 50 125 0 57 -5 87 -16 103 -18 26 -46 28 -68 6z';
var maxData = 100;

rqbj.setOption({
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
                axisLine: {
            
            show: false,
        },
        axisTick:{
            show: false,
        },
        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        data: ['', '', '', ''],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 10
            }
        }
    },
    grid: {
        top: 'center',
        height: 95,
        left: 0,
        right: 10
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbolClip: true,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
        itemStyle:{
            color: '#fe0046'
        },
        data: [0, 0],
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbol: spirit,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
		itemStyle:{
            color: '#3068b8'
        },
        data: [0, 0],
        z: 5
    }]
});

//折线图

var qiri = echarts.init(document.getElementById('qiri'));
qiri.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[{
               name:'A区',
               textStyle: {
                    color: '#8de25e'          // 图例文字颜色
               }
           },{
               name:'B区',
               textStyle: {
                    color: '#dc59fe'          // 图例文字颜色
               }
           },{
               name:'C区',
               textStyle: {
                    color: '#00ebff'          // 图例文字颜色
               }
           },{
               name:'D区',
               textStyle: {
                    color: '#e5fe00'          // 图例文字颜色
               }
           },{
               name:'E区',
               textStyle: {
                    color: '#fd0145'          // 图例文字颜色
               }
           }],
        itemWidth:6,
        itemHeight:6,
        textStyle:{
            fontSize:10
        }
    },
    grid: {
	    top:'25%',
        left: '1%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{
		   fontSize:10,
           color:'#00ebff'		
		}
    },
    yAxis: {
	type: 'value',
		splitLine: {
                show: false
        },
		axisLabel:{
		   fontSize:10,
           color:'#fff'		
		}
    },
    series: [
        {
            name:'A区',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'B区',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'C区',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'D区',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'E区',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
	color:['#8de25e','#dc59fe','#00ebff','#e5fe00','#fd0145']
});


//巡更报警

var xgbj = echarts.init(document.getElementById('xgbj')); 
 
var spirit = 'path://M465 1395 c-30 -30 -31 -54 -4 -89 l20 -26 394 0 394 0 21 27 c25 32 20 69 -12 96 -18 16 -53 17 -405 17 l-384 0 -24 -25z,M552 1003 c3 -226 3 -229 31 -285 32 -65 90 -121 156 -151 66 -31 187 -30 256 1 65 30 128 92 157 156 21 48 23 66 26 279 l3 227 -316 0 -317 0 4 -227z';
var baojing = 'path://M470 1400 c-26 -26 -26 -81 -2 -103 17 -15 59 -17 405 -17 374 0 388 1 407 20 27 27 25 66 -5 95 l-24 25 -381 0 c-367 0 -381 -1 -400 -20z,M562 993 l3 -238 30 -54 c33 -60 104 -122 162 -142 49 -17 167 -17 216 0 58 20 129 82 162 142 l30 54 3 238 3 237 -306 0 -306 0 3 -237z,M340 769 c-77 -13 -107 -61 -57 -93 19 -12 35 -12 109 -1 48 7 91 16 96 19 15 9 20 40 11 64 -7 19 -15 22 -56 21 -26 -1 -73 -5 -103 -10z,M531 488 c-64 -70 -81 -95 -81 -122 0 -30 38 -54 63 -40 31 17 127 138 127 159 0 58 -55 59 -109 3z,M1092 508 c-23 -23 -12 -56 44 -127 46 -60 60 -71 85 -71 22 0 32 7 41 25 9 21 7 30 -16 64 -76 110 -121 142 -154 109z,M826 414 c-12 -12 -16 -37 -16 -109 0 -99 10 -125 50 -125 35 0 50 38 50 125 0 57 -5 87 -16 103 -18 26 -46 28 -68 6z';
var maxData = 100;

xgbj.setOption({
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
                axisLine: {
            
            show: false,
        },
        axisTick:{
            show: false,
        },
        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        data: ['', '', '', ''],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 10
            }
        }
    },
    grid: {
        top: 'center',
        height: 95,
        left: 0,
        right: 10
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbolClip: true,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
        itemStyle:{
            color: '#fe0046'
        },
        data: [0, 0],
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbol: spirit,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
		itemStyle:{
            color: '#3068b8'
        },
        data: [0, 0],
        z: 5
    }]
});

//巡更人数
var xgrs = echarts.init(document.getElementById('xgrs')); 
 
var xgrstb = 'path://M353 1002 c-172 -72 -253 -112 -253 -122 0 -9 13 -49 29 -90 l28 -75 371 -3 371 -2 56 105 c32 59 59 114 62 124 4 15 -25 30 -186 95 -105 42 -199 76 -209 76 -9 0 -131 -49 -269 -108z,M184 595 c-4 -8 -4 -68 -2 -132 3 -104 7 -126 32 -181 37 -80 114 -152 194 -182 82 -31 215 -25 290 14 103 53 180 160 190 268 l4 47 61 3 60 3 -74 87 -74 87 -338 1 c-291 0 -338 -2 -343 -15z';


xgrs.setOption({
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
                axisLine: {
            
            show: false,
        },
        axisTick:{
            show: false,
        },
        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        data: ['', '', '', ''],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 10
            }
        }
    },
    grid: {
        top: 'center',
        height: 95,
        left: 0,
        right: 10
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: xgrstb,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbolClip: true,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
        itemStyle:{
            color: '#8fe65e'
        },
        data: [0, 0],
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '50%',
        symbol: xgrstb,
        symbolSize: ['50%', '50%'],
        symbolBoundingData: maxData,
		itemStyle:{
            color: '#3068b8'
        },
        data: [0, 0],
        z: 5
    }]
});

//巡更完成度
var xgwcd = echarts.init(document.getElementById('xgwcd'));
xgwcd.setOption ({
	grid: {
	    top:'25%',
        left: '1%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            startAngle:180,
            endAngle:0,
			detail : {
			   show: false
			},
        axisLine: {
        show: true,
        lineStyle: {
          width: 5,
          color: [
            [
              0.9, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#5c53de'
            },
              {
                offset: 1,
                color: '#18c8ff'
              }
            ]
              )
            ],
            [
              1, '#413e54'
            ]
          ]
        }
      },
			axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
			
            splitLine: {
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
			axisLabel: {
                
                fontSize:8,
                color: '#eee'
              
            },
			pointer:{
                length: '80%',
                width:3,
            },
            data: [{value: 78.29, name: ''}]
        }
    ]
});


var pwlyqiri = echarts.init(document.getElementById('pwlyqiri'));
pwlyqiri.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[{
               name:'A区',
               textStyle: {
                    color: '#8de25e'          // 图例文字颜色
               }
           },{
               name:'B区',
               textStyle: {
                    color: '#dc59fe'          // 图例文字颜色
               }
           },{
               name:'C区',
               textStyle: {
                    color: '#00ebff'          // 图例文字颜色
               }
           },{
               name:'D区',
               textStyle: {
                    color: '#e5fe00'          // 图例文字颜色
               }
           },{
               name:'E区',
               textStyle: {
                    color: '#fd0145'          // 图例文字颜色
               }
           }],
        itemWidth:6,
        itemHeight:6,
        textStyle:{
            fontSize:10
        }
    },
    grid: {
	    top:'25%',
        left: '1%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{
		   fontSize:10,
           color:'#00ebff'		
		}
    },
    yAxis: {
	type: 'value',
		splitLine: {
                show: false
        },
		axisLabel:{
		   fontSize:10,
           color:'#fff'		
		}
    },
    series: [
        {
            name:'A区',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'B区',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'C区',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'D区',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'E区',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
	color:['#8de25e','#dc59fe','#00ebff','#e5fe00','#fd0145']
});

var radius = [25, 30];
var tkbt=echarts.init(document.getElementById('tkbt'));
tkbt.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            type : 'pie',
            center : ['20%', '60%'],
            radius : radius,
            data : [
                {name:'other', 
				 value:30,
				 hover:true,
				 label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        },
				 itemStyle:{
					 color:'#21dcff',
					 opacity :1
				 }},
                {name:'GoogleMaps', value:80,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        },
				 itemStyle:{
					 color:'#21dcff',
					 opacity :0.4
				 }}
            ],
			color:['#2b4d9e','#25bbfe']
        },
        {
            type : 'pie',
            center : ['50%', '60%'],
            radius : radius,
            x:'90%', // for funnel
            data : [
                {name:'other', value:56,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'Facebook', value:44,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ],
			color:['#256670','#54fb98']
        },
        {
            type : 'pie',
            center : ['80%', '60%'],
            radius : radius,
            x:'90%', // for funnel
            data : [
                {name:'other', value:65,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'Youtube', value:35,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ],
			color:['#692c63','#fd4671']
        }
    ]
});

var xxfb=echarts.init(document.getElementById('xxfb'));
xxfb.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
	
	
    series : [
        {
            type : 'pie',
            center : ['30%', '60%'],
            radius : radius,
			label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:56,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'Facebook', value:44,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ],
			color:['#267173','#55fd9d']
        }
    ]
});
var yxztjk=echarts.init(document.getElementById('yxztjk'));
yxztjk.setOption({
	
	
    series : [
        {
            type : 'pie',
            center : ['5.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['15.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['25.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['40%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['50%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['60%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['74.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['84.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', 
				value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        },{
            type : 'pie',
            center : ['94.5%', '60%'],
            radius : radius,
            data : [
                {name:'other', value:46,label:{
                            show:false,
                            position:'inner',
							formatter:'{c}'
                        }},
                {name:'GoogleMaps', value:54,label:{
                            show:true,
                            position:'center',
							formatter:'{c}'
                        }}
            ]
        }
        ,
    ]
});