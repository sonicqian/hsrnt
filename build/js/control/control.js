
    var msg = document.getElementById("msg");
    var wsServer = 'ws://221.226.102.18:9501';
    //调用websocket对象建立连接：
    //参数：ws/wss(加密)：//ip:port （字符串）
    var websocket = new WebSocket(wsServer);
    //onopen监听连接打开
    websocket.onopen = function (evt) {
        //websocket.readyState 属性：
        /*
        CONNECTING    0    The connection is not yet open.
        OPEN    1    The connection is open and ready to communicate.
        CLOSING    2    The connection is in the process of closing.
        CLOSED    3    The connection is closed or couldn't be opened.
        */
		var chaxunzt="000000000006010200000020";
    websocket.send(chaxunzt);
        msg.empty().innerHTML = websocket.readyState;
    };

    function song(){
        var text = document.getElementById('text').value;
        document.getElementById('text').value = '';
        //向服务器发送数据
        websocket.send(text);
    }
      //监听连接关闭
//    websocket.onclose = function (evt) {
//        console.log("Disconnected");
//    };
    // var chaxunzt="000000000006010200000020";
    // websocket.send(chaxunzt);
    //onmessage 监听服务器数据推送
    websocket.onmessage = function (evt) {
		
		var canshu=evt.data;
		var ordertype=canshu.substring(11,12);
		if(ordertype=="7"){
			var t=$('#controllog').DataTable();
	   t.row.add([
            "1",
            "1",
            "1",
            "1",
            '成功',
            '管理员'
            
            
        ]).draw( false );
// $('#wzy').bootstrapSwitch('state',false);	
		}else if(ordertype=="6"){
		var bianhao=canshu.substring(19,20);
        if (bianhao=="0"){
			shebei="外遮阳";
		}else if(bianhao=="1"){
			shebei="外遮阳";
		}else if(bianhao=="2"){
			shebei="补光灯";
		}else if(bianhao=="3"){
			shebei="电磁阀";
		}else if(bianhao=="4"){
			shebei="风机";
		}else if(bianhao=="5"){
			shebei="天窗";
		}else if(bianhao=="6"){
			shebei="天窗";
		}else if(bianhao=="7"){
			shebei="水泵";
		}else{
			shebei="未知设备";
		}
		var mingling=canshu.substring(20,22);
		var myDate = new Date();
		if (mingling=="ff"){
			ml="开启";
		}else{
			ml="关闭";
		}
       var t=$('#controllog').DataTable();
	   t.row.add([
            bianhao,
            myDate.toLocaleString(),
            ml,
            shebei,
            '成功',
            '管理员'
            
            
        ]).draw( false );
		
		}
//        console.log('Retrieved data from server: ' + evt.data);
    };	  
	  
	  
$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
	var a=$(this).val()
  if (state == true)
              {
                 var order="";
				 order+="0000000000060105000";
				 order+=a;
				 order+="ff00";
				 // alert(order);
				 websocket.send(order);
              }
             else
              {
               var order="";
				 order+="0000000000060105000";
				 order+=a;
				 order+="0000";
				 // alert(order);
				 websocket.send(order);
             }
 // $('#wzy').bootstrapSwitch('State', false);
});
$("l#123").click(function(){
	alert ("123");
	
})