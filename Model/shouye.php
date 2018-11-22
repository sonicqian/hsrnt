<?php
date_default_timezone_set('PRC');
$ys=time(); 
$d=date('Y年m月d日 H:i:s', time());
// var_dump( time());
$yye=number_format($ys);
$nh=intval(substr($ys,strlen($ys)-4,4));
$sanwei=substr($ys,strlen($ys)-3,3);
$liangwei=substr($ys,strlen($ys)-2,2);
$yiwei=substr($ys,strlen($ys)-1,1);
$sst=intval($yiwei);
$kcw=1000-$sanwei;
$cc=number_format($sanwei+1323);
$rc=number_format($sanwei+5678);
$ccjd=$liangwei;
$rcjd=$liangwei+13;
$cws=intval($sanwei/2.5);
if($cws>300){
	$dsil=$cws-300;
	$dsl=100;
	$del=100;
	$dyl=100;
}elseif($cws>200 && $cws<=300){
	$dsil=0;
	$dsl=$cws-200;
	$del=100;
	$dyl=100;
}elseif($cws>100 && $cws<=200){
	$dsil=0;
	$dsl=0;
	$del=$cws-100;
	$dyl=100;
}elseif($cws>0 && $cws<=100){
	$dsil=0;
	$dsl=0;
	$del=0;
	$dyl=$cws;
}
$pie1=rand(20, 80);
$pie2=rand(20, 80);
$pie3=rand(20, 80);
$pie4=rand(20, 80);
$pie5=rand(20, 80);
$pie5=rand(20, 80);
$pie6=rand(20, 80);

$jsonrow=['yye'=>$yye,'d'=>$d,'nh'=>$nh,'kcw'=>$kcw,'cc'=>$cc,'rc'=>$rc,'ccjd'=>$ccjd,'rcjd'=>$rcjd,'dyl'=>$dyl,'del'=>$del,'dsl'=>$dsl,'dsil'=>$dsil,'sst'=>$sst,'pie1'=>$pie1,'pie2'=>$pie2,'pie3'=>$pie3,'pie4'=>$pie4,'pie5'=>$pie5,'pie6'=>$pie6];
$rowjson=json_encode($jsonrow);
echo $rowjson;
?>