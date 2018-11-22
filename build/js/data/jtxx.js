var tcctjpm = echarts.init(document.getElementById('tcctjpm')); 
tcctjpm.setOption({
    legend: {
        data: ['停车数', '停车总数'],
        itemWidth:8,
        itemHeight:8,
		right:10,
		top:7,
        textStyle:{
            color:'#fff',
			fontSize:8
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'12%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
		splitLine:{
            lineStyle:{
                type:'dotted',
                opacity:0.5
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['A库','B库','C库','D库','E库','F库'],
        axisLine:{
            lineStyle:{
                color:'#0572bd'
            }
        }
    },
    series: [
        {
            name: '停车数',
            type: 'bar',
			itemStyle: {
                       normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#3d9ff4'},
                                {offset: 1, color: '#6b4df0'}

                            ]
                        )
                    } },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '停车总数',
            type: 'bar',
			itemStyle: {
                       normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#f60337'},
                                {offset: 1, color: '#fe4c77'}

                            ]
                        )
                    } },
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
});


var drtcfz = echarts.init(document.getElementById('drtcfz'));
drtcfz.setOption ({
	grid: {
	    top:'25%',
        left: '1%',
        right: '5%',
        bottom: '1%',
        containLabel: true
    },
    series: [
	    {
    name: '刻度',
    type: 'gauge',
	center: ['50%', '40%'],
    radius: '70%',
    min:0,//最小刻度
    max:100,//最大刻度
    splitNumber: 10, //刻度数量
    startAngle: 180,
    endAngle: 0,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线/刻度标签。
    axisTick: {
      show: true,
       splitNumber: 7,
      lineStyle: {
        // color: '#fff',
        width: 1,
      },
      length: 5
    },//刻度样式
	axisLabel: {
      show: true,
      color:'#fff',
	  fontSize:8
    },
    splitLine: {
      show: true,
      length: 8,
      lineStyle: {
        color: '#fff'
      }
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
        {
            name: '业务指标',
            type: 'gauge',
            startAngle:180,
			center: ['50%', '40%'],
            endAngle:0,
						detail : {
			   show: true,
			   offsetCenter:[0,'5%'],
			   fontSize:16,
			   color:'#fff',
			   formatter: function (value) {
                         return value+'%';
}
			   
			},
        axisLine: {
        show: true,
        lineStyle: {
          width: 3,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
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
			axisTick: { 
                show:false,	// 坐标轴小标记
                length: 8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff'
                }
            },
			
            splitLine: {
				show:false,
                length: 12,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#fff'
                }
            },
			axisLabel: {
                show:false,
                fontSize:8,
                color: '#eee'
              
            },
			pointer:{
                length: '80%',
                width:3,
            },
            data: [{value: 78.29, name: ''}]
        },
		{
    name: '刻度1',
    type: 'gauge',
	center: ['50%', '90%'],
    radius: '70%',
    min:0,//最小刻度
    max:16,//最大刻度
    splitNumber: 8, //刻度数量
    startAngle: 180,
    endAngle: 0,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线/刻度标签。
    axisTick: {
      show: true,
       splitNumber: 7,
      lineStyle: {
        // color: '#fff',
        width: 1,
      },
	  
      length: 5
    },//刻度样式
		axisLabel: {
      show: true,
      color:'#fff',
	  fontSize:8
    },
    splitLine: {
      show: true,
      length: 8,
      lineStyle: {
        color: '#fff'
      }
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
        {
            name: '业务指标1',
            type: 'gauge',
            startAngle:180,
			center: ['50%', '90%'],
            endAngle:0,
			detail : {
			   show: true,
			   offsetCenter:[0,'5%'],
			   fontSize:16,
			   color:'#fff',
			   formatter: function (value) {
                         return value+'%';
}
			   
			},
        axisLine: {
        show: true,
        lineStyle: {
          width: 3,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
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
			axisTick: { 
                show:false,	// 坐标轴小标记
                length: 8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff'
                }
            },
			
            splitLine: {
				show:false,
                length: 12,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#fff'
                }
            },
			axisLabel: {
                show:false,
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

var tcccqsfx = echarts.init(document.getElementById('tcccqsfx'));
tcccqsfx.setOption({

    legend: {
        data:['地上停车场','地下停车场'],
        right:10,
        itemWidth:8,
        itemHeight:8,
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
		top:'18%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
		axisLabel:{
			fontSize:10,
		},
            data : ['11:00','12:00','13:00','14:00','15:00','16:00','17:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
        splitLine:{
            lineStyle:{
                type:'dotted',
                opacity:0.5
            }
        },
		axisLabel:{
			color:'#fff'
		}
        }
    ],
    series : [
        {
            name:'地上停车场',
            type:'line',
            stack: '总量',
            symbol:'none',
            areaStyle: {
                color:'#26b9ff',
                opacity:0.2
            },
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#26b9ff',
                        opacity:0.5
                    }
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'地下停车场',
            type:'line',
            stack: '总量',
            symbol:'none',
            areaStyle: {
                 color:'#fd4470',
                 opacity:0.2
            },
                        itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#fd4470',
                        opacity:0.5
                    }
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
});


var tcccqsfx1 = echarts.init(document.getElementById('tcccqsfx1'));
tcccqsfx1.setOption({

    legend: {
        data:['地上停车场','地下停车场'],
        right:10,
        itemWidth:8,
        itemHeight:8,
		
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
		top:'18%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
		axisLabel:{
			fontSize:10,
		},
            data : ['周一','周二','周三','周四','周五','周六','周七']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
        splitLine:{
            lineStyle:{
                type:'dotted',
                opacity:0.5
            }
        },
		axisLabel:{
			color:'#fff'
		}
        }
    ],
    series : [
        {
            name:'地上停车场',
            type:'line',
            stack: '总量',
            symbol:'none',
            areaStyle: {
                color:'#26b9ff',
                opacity:0.2
            },
            itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#26b9ff',
                        opacity:0.5
                    }
                }
            },
            data:[210, 134, 90, 230, 210, 101, 134]
        },
        {
            name:'地下停车场',
            type:'line',
            stack: '总量',
            symbol:'none',
            areaStyle: {
                 color:'#fd4470',
                 opacity:0.2
            },
                        itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#fd4470',
                        opacity:0.5
                    }
                }
            },
            data:[310,232, 201, 154, 190, 330, 410]
        }
    ]
});

