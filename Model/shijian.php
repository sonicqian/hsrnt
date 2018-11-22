<?php
date_default_timezone_set('PRC');

$riqi=date('Y年m月d日 H:i:s', time());
$shijian=date('H:i:s', time());
$jsonrow=['riqi'=>$d,'shijian'=>$shijian];
$rowjson=json_encode($jsonrow);
echo $rowjson;

?>