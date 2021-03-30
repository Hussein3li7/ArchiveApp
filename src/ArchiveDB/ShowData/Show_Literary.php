<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));

@$deg = $_POST->deg ; 
@$limiteDeg=$deg-10;
 
$Query="SELECT * FROM  collages  WHERE typestu='ادبي' and  min_Avarage BETWEEN {$limiteDeg} and {$deg}  ORDER BY  min_Avarage  DESC ";
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