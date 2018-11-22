<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>高铁新城物联网展示</title>

    <!-- Bootstrap -->
    <link href="./vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="./vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="./vendors/nprogress/nprogress.css" rel="stylesheet">
    
    <!-- Custom styling plus plugins -->
    <link href="./build/css/custom.min.css" rel="stylesheet">
    <link href="./css/dp/dp.css" rel="stylesheet">
    <script src="./build/js/prefixfree.min.js"></script>
  </head>

  <body class="nav-md" >
    <div class="container body">
	<!-- 叠加图层 -->
    <div class="daping" style="background-image:url(images/wlw.jpg);background-position:center top; background-repeat: no-repeat; background-attachment: scroll;background-size:100%;width:1920px;height:480px">
	<!-- <img src="images/qj.jpg" alt="Profile Image" style="max-width: 100%;height: auto;display: block;"/> -->
	<!-- 左侧部分 -->
				<div class="zuoping" >
			  <div class="dp"> 
		        <div  id="playercontainer1">
                </div>
			  </div>
              <div class="dp"> 			  
				<div class="dp" id="playercontainer2">
                </div>
			  </div>
			  <div class="dp">
				<div id="playercontainer3">
                </div>
			  </div>
			  <div class="dp">
				<div id="playercontainer4">
                </div>
			  </div>
			  <div class="dp">
				<div id="playercontainer5">
                </div>
			  </div>
			  <div class="dp">
				<div id="playercontainer6">
                </div>
			  </div>
			  <div class="dp">
				<div id="playercontainer7">
                </div>
			  </div>
			  <div class="dp">
			  
				<div id="playercontainer8">
                </div>
			   </div>	
		    </div>
	<!-- 左侧图表 -->
	
	<div class="danlie">
	   <div style="background-image:url(images/wlw_03.png);background-position:center top; background-repeat: no-repeat; background-attachment: scroll;background-size:100%;width:213px;height:240px;margin-top:27px;">
	    <div ><p id="rqbjd" style="margin-left:50px;">报警点4个</p></div>
		<div id="rqbj" class="dp"></div>
	   </div>
	</div>
	
	<!-- 中间部分 -->
	
	<!-- 右边部分 -->
	

	<!-- 右边部分结束 -->
	
	<!-- 叠加图层结束 -->
    </div>
	
	<!-- 闪烁图标 -->

    <!-- jQuery -->
    <script src="./vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="./vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="./vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="./vendors/nprogress/nprogress.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="./build/js/custom.min.js"></script>
	<script type="text/javascript" src="./build/js/player/cyberplayer.js"></script>
	<script src="./build/js/echarts/echarts.js"></script>

<script type="text/javascript">
	// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('rqbj')); 
 
var spirit = 'path://M465 1395 c-30 -30 -31 -54 -4 -89 l20 -26 394 0 394 0 21 27 c25 32 20 69 -12 96 -18 16 -53 17 -405 17 l-384 0 -24 -25z,M552 1003 c3 -226 3 -229 31 -285 32 -65 90 -121 156 -151 66 -31 187 -30 256 1 65 30 128 92 157 156 21 48 23 66 26 279 l3 227 -316 0 -317 0 4 -227z';
var baojing = 'path://M470 1400 c-26 -26 -26 -81 -2 -103 17 -15 59 -17 405 -17 374 0 388 1 407 20 27 27 25 66 -5 95 l-24 25 -381 0 c-367 0 -381 -1 -400 -20z,M562 993 l3 -238 30 -54 c33 -60 104 -122 162 -142 49 -17 167 -17 216 0 58 20 129 82 162 142 l30 54 3 238 3 237 -306 0 -306 0 3 -237z,M340 769 c-77 -13 -107 -61 -57 -93 19 -12 35 -12 109 -1 48 7 91 16 96 19 15 9 20 40 11 64 -7 19 -15 22 -56 21 -26 -1 -73 -5 -103 -10z,M531 488 c-64 -70 -81 -95 -81 -122 0 -30 38 -54 63 -40 31 17 127 138 127 159 0 58 -55 59 -109 3z,M1092 508 c-23 -23 -12 -56 44 -127 46 -60 60 -71 85 -71 22 0 32 7 41 25 9 21 7 30 -16 64 -76 110 -121 142 -154 109z,M826 414 c-12 -12 -16 -37 -16 -109 0 -99 10 -125 50 -125 35 0 50 38 50 125 0 57 -5 87 -16 103 -18 26 -46 28 -68 6z';
var maxData = 100;

option = {
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
        symbol: baojing,
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
};





// Make dynamic data.
    var dyl=1;
    var del=0;
    var dsl=0;
    var dsil=0;
	
	//三位加逗号
	function toThousands(num) {
     return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
 }
 
 //数字变幻
 
    var nh = 131;
    var cw = 1327;
    var cc = 1327;
    var ccjd = 30;
    var rc = 1327;
    var rcjd = 15;
    var yye = 13558759;
	var sst=1;
	
var	dingshi=setInterval(Method, 1000);
var Method=function () {


	
   $.ajax({
                    type: "get",
                    url: "./Model/shouye.php?v="+(new Date()).valueOf(), 
                    data: {},					
                    dataType: "json",
                    success: function(data) {				
									
					
					$("#yye").empty().append(data.yye);
					$("#d").empty().append(data.d);
				
                    $("#cc").empty().append(data.cc);
                    $("#rc").empty().append(data.rc);
                    $("#nh").empty().append(data.nh);
	                $("#ccjd").attr("style", "width:"+data.ccjd+"%");
	                $("#rcjd").attr("style", "width:"+data.rcjd+"%");
					$("#kcw").empty().append(data.kcw);
					
					myChart.setOption({
                            series: [{
                                     data: [data.dyl,data.del]
                                    }]
                                    });
					
					
					var sst=data.sst;
					<!-- alert(sst); -->

					
					
					
					
					
					
					
					
                    }
                });
};
clearInterval(dingshi);
dingshi=setInterval(Method,1000);
	
	// 为echarts对象加载数据         
	myChart.setOption(option); 
		
</script>
<script>
var pai = echarts.init(document.getElementById('chart1')); 
pai.setOption ({


    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:30, name:'商务体量',itemStyle:{color:"#f0583c"}},
                {value:25, name:'住宅体量',itemStyle:{color:"#fe7e2e"}},
                {value:15, name:'商业体量',itemStyle:{color:"#feb500"}},
                {value:10, name:'公园体量',itemStyle:{color:"#00bfcc"}},
                {value:5, name:'学校体量',itemStyle:{color:"#9977be"}},
                 {value:5, name:'医疗体量',itemStyle:{color:"#3a4242"}}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#a3d9f8'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#757b84',
						fontSize:2
                    },
                    smooth: 0.2,
                    length: 1,
                    length2: 3
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
    
});

</script>
<script>
var rarda = echarts.init(document.getElementById('chart2'));
rarda.setOption ({
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            startAngle:180,
            endAngle:0,
			detail : {
			   formatter:'{value}%',
			   fontFamily:'impact',
			   fontSize:20,
			   offsetCenter:[0,'25%']
			},
            axisLine: {
                lineStyle: {
                    width: 5,
                    color: [[0.0, '#684cec'], [0.1, '#7156ff'], [0.2, '#5d57ef'], [0.3, '#5a5af1'], [0.3, '4e69f6'], [0.4, '#436ff3'], [0.5, '#436ff3'], [0.6, '#3776f1'], [0.7, '#3288ff'], [0.8, '#218df4'], [0.9, '1c94f9'],[1, '#19b9ff']]
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

</script>
	<script type="text/javascript">
		var player = cyberplayer("playercontainer1").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/104.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		var player = cyberplayer("playercontainer2").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/105.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		
		var player = cyberplayer("playercontainer3").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/106.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		
		var player = cyberplayer("playercontainer4").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/107.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		
		var player = cyberplayer("playercontainer5").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/hd108.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		
		var player = cyberplayer("playercontainer6").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/hd108.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
		
		var player = cyberplayer("playercontainer7").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/hd108.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });var player = cyberplayer("playercontainer8").setup({
        width : 213,
        height : 120,
        backcolor : "#FFFFFF",
        stretching : "uniform",

        file : "http://221.226.43.62:9502/hd108.m3u8",
        ak : "4286fc4b17bc430dad04a9e2f4917316",
        autoStart : true,
        repeat : false,
        volume : 100,
        controls : "none"
        });
			
			
	</script>
  </body>
</html>