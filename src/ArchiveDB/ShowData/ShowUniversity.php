<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));

@$id = $_POST->id;

$Query="SELECT * FROM  universites  WHERE uuversity_city_id='{$id}' ";
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