 
  
    <?php
    include "../connections.php";
    
    ?>
    
    
<?php
$_POST = json_decode(file_get_contents("php://input"));
 
@$Visitor_Num=$_POST->Visitor_Num ;
 

if(isset($Visitor_Num) ){
    $Query="UPDATE  visitor_tb  SET  visitor_num = {$Visitor_Num}  WHERE id=1";
  
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