<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));

@$book_number = $_POST->book_number ;  
 
$Query="SELECT * FROM  collages  WHERE typestu='ادبي' and  min_Avarage BETWEEN {$limiteDeg} and {$book_number}  ORDER BY  min_Avarage  DESC ";
$result = mysqli_query( $connect , $Query );
$data = array();

if ($result) { 
    while ( $row = mysqli_fetch_assoc($result) ) {
        $data[] = $row;
    }
    echo json_encode($data);
}
  
?>
 

<?php
mysqli_close($connect);
?>