 
  
    <?php
    include "../connections.php";
    
    ?>
    
    
<?php
$_POST = json_decode(file_get_contents("php://input"));

@$name=$_POST->name;
@$email=$_POST->email;
@$notes=$_POST->notes;

 
if(isset($name) && isset($notes)){
    $Query="INSERT INTO  feedback ( full_name ,  email ,  notes ) VALUES ( '{$name}' , '{$email}' , '{$notes}' )  ";
 
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