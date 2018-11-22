var jznhpm = echarts.init(document.getElementById('jznhpm')); 
jznhpm.setOption({
    legend: {
        data: ['2018', '2017'],
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
        data: ['A区','B区','C区','D区','E区','总能耗'],
        axisLine:{
            lineStyle:{
                color:'#0572bd'
            }
        }
    },
    series: [
        {
            name: '2018',
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
            name: '2017',
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

var ydljnh = echarts.init(document.getElementById('ydljnh')); 

ydljnh.setOption(
{
    legend: {
        data: ['增加', '减少'],
        itemWidth:8,
        itemHeight:8,
		right:10,
		top:7,
        textStyle:{
            color:'#fff',
			fontSize:8
        }
    },
    xAxis: {
        data: [],
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false},
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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'12%',
        containLabel: true
    },
    series: [
        {
            name: '增加',
            type: 'bar',
            stack: 'one',
            itemStyle: {
normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#fe4a76'},
                                {offset: 1, color: '#f60437'}

                            ]
                        )
                    }
},
            data: [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16]
        },
        {
            name: '减少',
            type: 'bar',
            stack: 'two',
            itemStyle: {
normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 1,
                            [
                                {offset: 0, color: '#6b4df0'},
                                {offset: 1, color: '#3d9ff4'}

                            ]
                        )
                    }
},
            data: [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
        }
    ]
});

var hdzytj = echarts.init(document.getElementById('hdzytj')); 
hdzytj.setOption({
    legend: {
        data: ['自用', '总量'],
        right:10,
        itemWidth:8,
        itemHeight:8,
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
				fontSize:8
           }
        },
		radius: '70%',
        axisLine:{
            lineStyle:{
                color:'#36abf5',
                opacity:0.5
            }
        },
        splitLine:{
            lineStyle:{
                color:'#36abf5',
                opacity:0.5
            }
        },
        splitArea:{
            areaStyle:{
                color:'#36abf5',
                opacity:0.2
            }
        },
        indicator: [
           { name: '照明', max: 6500},
           { name: '空调', max: 16000},
           { name: '机房', max: 30000},
           { name: '办公', max: 38000},
           { name: '其他', max: 52000}
        ]
    },
    series: [{
        name: '自用 vs 总量）',
        type: 'radar',
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '自用',
                lineStyle:{
                    color:'#fa2857',
                    opacity:0.6
                },
                areaStyle:{
                    color:'#fa2857',
                    opacity:0.4
                }
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '总量',
                lineStyle:{
                    color:'#36abf5',
                    opacity:0.6
                },
                areaStyle:{
                    color:'#36abf5',
                    opacity:0.4
                }
            }
        ]
    }]
});

var zxtnhdb = echarts.init(document.getElementById('zxtnhdb')); 

zxtnhdb.setOption(
{

    legend: {
        x : 'center',
        y : 20,
        data:['消防','视频分析','信息发布','停车场','一卡通','给排水','楼宇自控'],
		right:10,
        itemWidth:8,
        itemHeight:8,
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['55%', '32%'],
            roseType : 'area',
            startAngle:'0',
            avoidLabelOverlap:false,
            data:[
                {value:10, name:'消防',
                itemStyle:{
                    normal:{
                        color:'#5045f6'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:20, name:'视频分析',
                itemStyle:{
                    normal:{
                        color:'#4777f5'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:30, name:'信息发布',
                itemStyle:{
                    normal:{
                        color:'#44aff0'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:40, name:'停车场',
                itemStyle:{
                    normal:{
                        color:'#45dbf7'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:50, name:'一卡通',
                itemStyle:{
                    normal:{
                        color:'#f6d54a'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:60, name:'给排水',
                itemStyle:{
                    normal:{
                        color:'#f69846'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:70, name:'楼宇自控',
                itemStyle:{
                    normal:{
                        color:'#ff4343'
                    }
                },
                label:{
                    formatter:'{c}%'
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose7',labelLine:{
                    show:false
                },label:{
                    show:false
                }},
                {value:0, name:'rose8',labelLine:{
                    show:false
                },label:{
                    show:false
                }}
            ]
        }
    ]
});

var rytbfx = echarts.init(document.getElementById('rytbfx'));
rytbfx.setOption({

    legend: {
        data:['自用','总体'],
        right:10,
        itemWidth:8,
        itemHeight:8,
		top:8,
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
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月','一月']
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
            name:'自用',
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
            data:[120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 101, 134]
        },
        {
            name:'总体',
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
            data:[220, 182, 191, 234, 290, 330, 310,232, 201, 154, 190, 330, 410]
        }
    ]
});

var byydzl = echarts.init(document.getElementById('byydzl'));
byydzl.setOption(
{

    legend: {
        data:['自用','总体'],
        right:10,
        itemWidth:8,
        itemHeight:8,
		top:8,
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    grid: {
        left: '2%',
        right: '6%',
        bottom: '8%',
		top:'18%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
                        axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
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
            name:'自用',
            type:'bar',
            stack: '总量',
            symbol:'none',
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#36abf5'},
                                {offset: 1, color: '#6c4cf0'}

                            ]
                        )
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 101, 134, 132, 101, 134, 90, 230, 210, 134, 90, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210]
        },
        {
            name:'总体',
            type:'line',
            stack: '总量',
			symbol: 'circle', 
            symbolSize:6,
            itemStyle:{
                normal:{
                    color:'#fd4470',
                    lineStyle:{
                        color:'#fd4470',
                        opacity:0.5
                    }
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310,232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330, 310,232, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410, 182]
        }
    ]
});



var bnydzl = echarts.init(document.getElementById('bnydzl'));
bnydzl.setOption(
{

    legend: {
        data:['自用','总体'],
        right:10,
        itemWidth:8,
        itemHeight:8,
		top:8,
        textStyle:{
            color:'#fff',
            fontSize:8
        }
    },
    grid: {
        left: '2%',
        right: '6%',
        bottom: '10%',
		top:'18%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
                        axisLine:{
        lineStyle:{
            color:'#0572bd'
        }},
		axisLabel:{
			fontSize:10,
		},
		
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月','一月']
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
            name:'自用',
            type:'bar',
            stack: '总量',
            symbol:'none',
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#36abf5'},
                                {offset: 1, color: '#6c4cf0'}

                            ]
                        )
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 101, 134]
        },
        {
            name:'总体',
            type:'line',
            stack: '总量',
			symbol: 'circle', 
            symbolSize:6,
            itemStyle:{
                normal:{
                    color:'#fd4470',
                    lineStyle:{
                        color:'#fd4470',
                        opacity:0.5
                    }
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310,232, 201, 154, 190, 330, 410]
        }
    ]
});