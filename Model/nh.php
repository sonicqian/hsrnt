<?php
date_default_timezone_set('PRC');
$riqi=date('Y年m月d日', time());
$shijian=date('H:i:s', time());
$sjc=time();
$yiwei=intval(substr($sjc,strlen($sjc)-2,2));
$brzgnh=number_format(589+$yiwei*2);
$brznh=number_format(256+$yiwei);
$brzgzj=round($yiwei*2/589,2);
$brzyzj=round($yiwei/256,2);

$byzgnh=number_format(2598+$yiwei*2);
$byznh=number_format(1652+$yiwei);
$byzgzj=round($yiwei*2/2598,2);
$byzyzj=round($yiwei/1652,2);

$bnzgnh=number_format(582739+$yiwei*2);
$bnznh=number_format(255436+$yiwei);
$bnzgzj=round($yiwei*2/582739,2);
$bnzyzj=round($yiwei/255436,2);

$rtbz=134+$yiwei;
$rtb=410+$yiwei*2;

$yydz=182+$yiwei;
$yyd=210+$yiwei*2;

$nydz=134+$yiwei;
$nyd=410+$yiwei*2;

$jsonrow=['riqi'=>$riqi,'shijian'=>$shijian,'brzgnh'=>$brzgnh,'brznh'=>$brznh,'brzgzj'=>$brzgzj,'brzyzj'=>$brzyzj,'byzgnh'=>$byzgnh,
'byznh'=>$byznh,'byzgzj'=>$byzgzj,'byzyzj'=>$byzyzj,'bnzgnh'=>$bnzgnh,'bnznh'=>$bnznh,'bnzgzj'=>$bnzgzj,'bnzyzj'=>$bnzyzj,
'rtbz'=>$rtbz,'rtb'=>$rtb,'yydz'=>$yydz,'yyd'=>$yyd,'nydz'=>$nydz,'nyd'=>$nyd];
$rowjson=json_encode($jsonrow);
echo $rowjson;					

?>