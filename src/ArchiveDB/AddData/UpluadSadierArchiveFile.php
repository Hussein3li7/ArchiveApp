 
    <?php
    include "../connections.php";
    
    ?>

<?php
$_POST = json_decode(file_get_contents("php://input")); 
@$sadir_number=$_POST->sadir_number;
@$sadir_date  =$_POST->sadir_date;
@$paper_code  =$_POST->paper_code;
@$notes       =$_POST->notes;
@$sadir_subjec=$_POST->sadir_subject;
@$sadir_base  =$_POST->sadir_base; 
@$fileUrl     =$_POST-> fileUrl;
if(isset($sadir_number) && isset($sadir_date)){
 
    $Query="INSERT INTO  add_sader_tb ( sader_number ,  sader_date ,  sader_code ,  sader_notes ,  sader_subjects ,  sader_base ,  sader_url ) VALUES ('{$sadir_number}' , '{$sadir_date}' ,'{$paper_code}' ,'{$notes}', '{$sadir_subjec}' , '{$sadir_base}' , '{$fileUrl}'  )";
 
$result = mysqli_query( $connect , $Query );
if($result){
    ?>
   { "sucess": true }
    <?php
}
else{
    ?>
     { "sucess": false }
      <?php
}
}else {
    
    echo " No Data";
}
?>


<?php
mysqli_close($connect);
?>