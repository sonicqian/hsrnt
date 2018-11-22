<?php
$xuhao=$_GET['xuhao'];

if($xuhao>7){
	$sst=1;
}else{
	$sst=$xuhao+1;
}
date_default_timezone_set('PRC');
function get_weeks($time = '', $format='m-d'){
  $time = $time != '' ? $time : time();
  //组合数据
  $date = [];
  for ($i=1; $i<=7; $i++){
    $date[] = date($format ,strtotime( '+' . $i-7 .' days', $time));
  }
  return $date;
}
$yzsj=get_weeks(); 
$sjc=time();
$rqbjd=substr($sjc,strlen($sjc)-2,2);
$bjtps=substr($sjc,strlen($sjc)-1,1);
$bjtp_name="zhongjian".$bjtps.".jpg";
$xgbjd=substr($sjc,strlen($sjc)-3,2);
$xgr=rand(40,60);
if($rqbjd>50){
	$rqbjd1=100;
	$rqbjd2=$rqbjd*2-50;
}else{
	$rqbjd1=$rqbjd*2;
	$rqbjd2=0;
}

if($xgbjd>50){
	$xgbjd1=100;
	$xgbjd2=$xgbjd*2-50;
}else{
	$xgbjd1=$xgbjd*2;
	$xgbjd2=0;
}

if($xgr>50){
	$xgr1=100;
	$xgr2=$xgr*2-50;
}else{
	$xgr1=$xgr*2;
	$xgr2=0;
}
$sj1=rand(20,40);
$sj1s=100-$sj1;
$sj2=rand(10,40);
$sj2s=100-$sj2;
$sj3=rand(20,50);
$sj3s=100-$sj3;
$sj4=rand(10,30);
$sj4s=100-$sj4;
$sj5=rand(20,50);
$sj5s=100-$sj5;
$jsonrow=['yzsj'=>$yzsj,'rqbjd'=>$rqbjd,'xgbjd'=>$xgbjd,'xgr'=>$xgr,'rqbjd1'=>$rqbjd1,'rqbjd2'=>$rqbjd2,'xgbjd1'=>$xgbjd1,'xgbjd2'=>$xgbjd2,'xgr1'=>$xgr1,'xgr2'=>$xgr2,'sj1'=>$sj1,'sj2'=>$sj2,'sj3'=>$sj3,'sj4'=>$sj4,'sj5'=>$sj5,'sj1s'=>$sj1s,'sj2s'=>$sj2s,'sj3s'=>$sj3s,'sj4s'=>$sj4s,'sj5s'=>$sj5s,'bjtp_name'=>$bjtp_name,'sst'=>$sst];
$rowjson=json_encode($jsonrow);
echo $rowjson;




?>