 
    <?php
    include "../connections.php";
    
    ?>

<?php
$_POST = json_decode(file_get_contents("php://input")); 
 
@$ward_number  =$_POST->ward_number  ;
@$paper_number =$_POST->paper_number ;
@$ward_date    =$_POST->ward_date    ;
@$paper_code   =$_POST->paper_code   ;
@$book_number  =$_POST->book_number  ;
@$book_Date    =$_POST->book_Date    ;
@$paper_action =$_POST->paper_action ;
@$book_subject =$_POST->book_subject ;
@$ward_base    =$_POST->ward_base    ;
@$fileUrl    =$_POST->fileUrl    ;

if(isset($ward_number) && isset($paper_number)){
 
    $Query="INSERT INTO  add_new_file_db ( ward_date ,  paper_num ,  ward_number ,  book_date ,  book_num ,  paper_code ,  book_subjects ,  book_action ,  ward_base ,  file_url )VALUES ('{$ward_date}' , '{$paper_number}' ,'{$ward_number}' ,'{$book_Date}', '{$book_number}' , '{$paper_code}' , '{$book_subject}' , '{$paper_action}' , '{$ward_base}' ,'{$fileUrl}')";
 
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