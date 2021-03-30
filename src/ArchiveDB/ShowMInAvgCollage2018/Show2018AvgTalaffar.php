<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));
 

$Query="SELECT * FROM  avg2018 where university_id=31 ORDER BY  min_Avarage  DESC";
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