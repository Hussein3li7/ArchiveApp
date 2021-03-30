<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));
$Query="SELECT * FROM  cites ";
$result = mysqli_query( $connect , $Query );
$data = array();


if ($result) {
    // add result in the page
    while ( $row = mysqli_fetch_assoc($result) ) {
        $data[] = $row;
    }
    echo json_encode($data);
}
  
?>
 

<?php
mysqli_close($connect);
?>