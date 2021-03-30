 
  
    <?php
    include "../connections.php";
    
    ?>
    
    
<?php
$_POST = json_decode(file_get_contents("php://input"));
@$University= $_POST->university_name  ;
@$collage= $_POST->collage_name ;
@$gender =$_POST->gender ;
@$min_deg=$_POST->min_Avarage ;
@$type = $_POST->typestu ;
@$University_id=$_POST->University_id ;
 

if(isset($University) && isset($collage)){
    $Query="INSERT INTO  avg2016 (  collage_name ,  gender ,  min_Avarage ,  typestu ,  university_id ,  university_name  ) VALUES ('{$collage}' , '{$gender}' ,'{$min_deg}' ,'{$type}', '{$University_id}' , '{$University}'    )";
 

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