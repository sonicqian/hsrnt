<?php	
$Tb=15;
$Tob=25;
$Tou=30;
$Tm=35;
$RTE=null;
$sensordata_t=null;
$sensordata_RH=null;
$sensordata_ot=null;
$sensordata_oRH=null;
$sensordata_L=null;
$sensordata_co2=null;
$t_max=null;//最高温
$t_max_time_key=null;
$t_max_time=null;//高温出现时间
$t_avg=null;//平均温度
$t_min=null;//最低温
$t_min_time_key=null;
$t_min_time=null;
$GD=null;
$L_max=null;//最强光照
$L_begin_time=null;
$L_end_time=null;
$hisdata_t=null;
$hisrevTime=null;
$L_max_time_key=null;
$L_max_time=null;//最强光照出现时间
$L_avg=null;//平均光照
$L_long=null;
$co2_max=null;//最高值
$co2_max_time_key=null;
$co2_max_time=null;//高值出现时间
$co2_avg=null;//平均浓度
$co2_min=null;//最低值
$co2_min_time_key=null;
$co2_min_time=null;
$Qp=null;//光合有效辐射
$hisdata_RH=null;
$hisdata_L=null;
$hisdata_co2=null;
$day_L_long=null;
$daay=null;
$SGD=null;
$day_tt_avg=null;
$SL_long=null;
$day_RH_avg=null;
$day_Ot_avg=null;
$day_CO2_avg=null;
$hisdata_oRH=null;
$hisdata_ot=null;

include("./config.php");
$mysqli->query('set names utf8' );
	//$name_row[]=$listrow[1];
//echo "<li>".$id_row. "</li>";
// print_r($dept_row); 
// print_r($name_row);

 //echo $rowjson;
//print_r($row);

$sensor_id=$_GET['sensor_id'];
$sensordatasql="select * from sensordata where equipmentId=$sensor_id and to_days(revTime)=to_days(NOW())";
$sensordataresult=$mysqli->query($sensordatasql);
// var_dump($sensordataresult);
if(mysqli_num_rows($sensordataresult)==0 || $sensordataresult==false){
$jsonrow=['hisdata_oRH'=>0,'hisdata_ot'=>0,'day_L_long'=>0,'daay'=>0,'SGD'=>0,'day_tt_avg'=>0,'SL_long'=>0,'day_RH_avg'=>0,'day_Ot_avg'=>0,'day_CO2_avg'=>0,'sensordata_t'=>0,'sensordata_RH'=>0,'sensordata_ot'=>0,'sensordata_oRH'=>0,'sensordata_L'=>0,'sensordata_co2'=>0,'RTE'=>0,'GD'=>0,'Qp'=>0,'hisdata_t'=>0,'hisrevTime'=>0,'hisdata_RH'=>0,'hisdata_L'=>0,'hisdata_co2'=>0];
$rowjson=json_encode($jsonrow);
echo $rowjson;	
	exit;
}
$sensordatarow =$sensordataresult->fetch_all(MYSQLI_NUM);
//实时数据
$sensordata_t=$sensordatarow[0][2];
// echo $sensordata_t;
$sensordata_RH=$sensordatarow[0][3];
$sensordata_ot=$sensordatarow[0][4];
$sensordata_oRH=$sensordatarow[0][5];
$sensordata_L=$sensordatarow[0][6];  //
$sensordata_co2=$sensordatarow[0][15];
if($sensordata_L<363){
	$Qp=0;
}else{
	$Qp=number_format(($sensordata_L-362.649)/255.613,1);
}


$hisdatasql="select * from today_data where equipmentId=$sensor_id and to_days(revTime)=to_days(NOW())";
$hisdataresult=$mysqli->query($hisdatasql);
if(mysqli_num_rows($sensordataresult)==0|| $hisdataresult==false){
$jsonrow=['hisdata_oRH'=>$hisdata_oRH,'hisdata_ot'=>$hisdata_ot,'day_L_long'=>$day_L_long,'daay'=>$daay,'SGD'=>$SGD,'day_tt_avg'=>$day_tt_avg,'SL_long'=>$SL_long,'day_RH_avg'=>$day_RH_avg,'day_Ot_avg'=>$day_Ot_avg,'day_CO2_avg'=>$day_CO2_avg,'sensordata_t'=>$sensordata_t,'sensordata_RH'=>$sensordata_RH,'sensordata_ot'=>$sensordata_ot,'sensordata_oRH'=>$sensordata_oRH,'sensordata_L'=>$sensordata_L,'sensordata_co2'=>$sensordata_co2,'RTE'=>$RTE,'GD'=>$GD,'Qp'=>$Qp,'hisdata_t'=>$hisdata_t,'hisrevTime'=>$hisrevTime,'hisdata_RH'=>$hisdata_RH,'hisdata_L'=>$hisdata_L,'hisdata_co2'=>$hisdata_co2];
$rowjson=json_encode($jsonrow);
echo $rowjson;
	exit;
}
$hisdatarow =$hisdataresult->fetch_all(MYSQLI_NUM);
// var_dump($hisdatarow);
$n=0;
while ($n<mysqli_num_rows($hisdataresult)){
	$hisdata_t[]=$hisdatarow[$n][2];
	$hisdata_RH[]=$hisdatarow[$n][3];
    $hisdata_ot[]=$hisdatarow[$n][4];
    $hisdata_oRH[]=$hisdatarow[$n][5];
    $hisdata_L[]=$hisdatarow[$n][6];
    $hisdata_co2[]=$hisdatarow[$n][15];
    $hisrevTime[]=date("H:i",strtotime($hisdatarow[$n][32]));
	$n++;
}
 //温度参数
 //echo $t_max_time;
 $t_avg=number_format(array_sum($hisdata_t)/count($hisdata_t),1);//平均温度
 // if (10>$t_avg ||40<$t_avg){
	 // $GD=0;
 // }else{
	 // $GD=number_format(($t_avg-10),1);
 // }//有效积温
if ($t_avg<$Tb||$t_avg>$Tm){
	$RTE=0;
}elseif($t_avg>=$Tb & $t_avg<$Tob){
	$RTE=number_format(($t_avg-$Tb)/($Tob-$Tb),1);
}elseif($t_avg>=$Tob & $t_avg<=$Tou){
	$RTE=1;
}elseif($t_avg>$Tou & $t_avg<=$Tm){
	$RTE=number_format(($Tm-$t_avg)/($Tm-$Tou),1);
}
//相对热效应
//echo $RTE.'<br>';
 //光照参数
$n=0;
$daysql="select * from day_data where equipmentId=$sensor_id and date_sub(curdate(), INTERVAL 7 DAY) <= date(riqi) ORDER BY riqi LIMIT 7";
$daydataresult=$mysqli->query($daysql);
if(mysqli_num_rows($daydataresult)==0|| $daydataresult==false){
$jsonrow=['hisdata_oRH'=>$hisdata_oRH,'hisdata_ot'=>$hisdata_ot,'day_L_long'=>$day_L_long,'daay'=>$daay,'SGD'=>$SGD,'day_tt_avg'=>$day_tt_avg,'SL_long'=>$SL_long,'day_RH_avg'=>$day_RH_avg,'day_Ot_avg'=>$day_Ot_avg,'day_CO2_avg'=>$day_CO2_avg,'sensordata_t'=>$sensordata_t,'sensordata_RH'=>$sensordata_RH,'sensordata_ot'=>$sensordata_ot,'sensordata_oRH'=>$sensordata_oRH,'sensordata_L'=>$sensordata_L,'sensordata_co2'=>$sensordata_co2,'RTE'=>$RTE,'GD'=>$GD,'Qp'=>$Qp,'hisdata_t'=>$hisdata_t,'hisrevTime'=>$hisrevTime,'hisdata_RH'=>$hisdata_RH,'hisdata_L'=>$hisdata_L,'hisdata_co2'=>$hisdata_co2];
$rowjson=json_encode($jsonrow);
echo $rowjson;
	exit;
}
$daydatarow =$daydataresult->fetch_all(MYSQLI_NUM);
 // var_dump($daydatarow);
// echo mysqli_num_rows($daydataresult);
$n=0;
while ($n<mysqli_num_rows($daydataresult)){
	$day_L_long[]=$daydatarow[$n][7];
	$daay[]=date("m-d",strtotime($daydatarow[$n][2]));
    $day_T_avg[]=$daydatarow[$n][4];
    $day_RH[]=$daydatarow[$n][13];
    $day_ot[]=$daydatarow[$n][16];
    $day_co2[]=$daydatarow[$n][10];
	$n++;
};
foreach($day_T_avg as $avgvalue){
 if (10>$avgvalue ||40<$avgvalue){
	 $GDn=0;
 }else{
	 $GDn=number_format(($avgvalue-10),1);
 }//有效积温
 $GD[]=$GDn;
}
 //温度参数
 // var_dump($GD);
 
 $day_tt_avg=number_format(array_sum($day_T_avg)/count($day_T_avg),1);//平均温度
 $day_RH_avg=number_format(array_sum($day_RH)/count($day_RH),1);//平均湿度
 $day_Ot_avg=number_format(array_sum($day_ot)/count($day_ot),1);//平均土壤湿度
 $day_CO2_avg=number_format(array_sum($day_co2)/count($day_co2),1);//平均co2
 $SGD=number_format(array_sum($GD),1);
 //有效积温
$SL_long=number_format(array_sum($day_L_long)/7,1); 
 // echo $day_tt_avg;
 
$jsonrow=['hisdata_oRH'=>$hisdata_oRH,'hisdata_ot'=>$hisdata_ot,'day_L_long'=>$day_L_long,'daay'=>$daay,'SGD'=>$SGD,'day_tt_avg'=>$day_tt_avg,'SL_long'=>$SL_long,'day_RH_avg'=>$day_RH_avg,'day_Ot_avg'=>$day_Ot_avg,'day_CO2_avg'=>$day_CO2_avg,'sensordata_t'=>$sensordata_t,'sensordata_RH'=>$sensordata_RH,'sensordata_ot'=>$sensordata_ot,'sensordata_oRH'=>$sensordata_oRH,'sensordata_L'=>$sensordata_L,'sensordata_co2'=>$sensordata_co2,'RTE'=>$RTE,'GD'=>$GD,'Qp'=>$Qp,'hisdata_t'=>$hisdata_t,'hisrevTime'=>$hisrevTime,'hisdata_RH'=>$hisdata_RH,'hisdata_L'=>$hisdata_L,'hisdata_co2'=>$hisdata_co2];
$rowjson=json_encode($jsonrow);
echo $rowjson;

$mysqli->close();

?>