<?php
date_default_timezone_set('PRC');
$address_arr=['滨海公园','爱情海商城','高铁大厦','万达广场','希尔顿酒店'];
$cheku_arr=['地上车库','地下车库'];
$crk_arr=['出库','入库'];
$chepai_arr=['贵C 69U87','贵C 789OP','贵C 66965','贵C KJ876','贵C PIU87','贵C NJ908','贵C 8U8I8','贵C 1W4E5','贵C 78UJ6'];
$sj1=rand(0,4);
$sj2=rand(0,1);
$sj5=rand(0,1);
$sj3=rand(0,8);
$sj4=rand(0,8);

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
$riqi=date('Y年m月d日', time());
$shijian=date('H:i:s', time());

$ckdz=$address_arr[$sj1]." ".$cheku_arr[$sj2];
$xzcp=$chepai_arr[$sj3];
$ckcp=$chepai_arr[$sj4];
$crk=$crk_arr[$sj5];

$disfz=rand(80,100);
$dxfz=rand(60,90);

$ckpm=[rand(100,300),rand(100,300),rand(100,300),rand(100,300),rand(100,300),rand(100,300)];
$ckpm1=[rand(100,300),rand(100,300),rand(100,300),rand(100,300),rand(100,300),rand(100,300)];

$jsonrow=['yzsj'=>$yzsj,'riqi'=>$riqi,'shijian'=>$shijian,'ckdz'=>$ckdz,'xzcp'=>$xzcp,'ckcp'=>$ckcp,'crk'=>$crk,'disfz'=>$disfz,
          'dxfz'=>$dxfz,'ckpm'=>$ckpm,'ckpm1'=>$ckpm];

$rowjson=json_encode($jsonrow);
echo $rowjson;




















?>