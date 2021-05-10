<?php
include "../connections.php";
?>

<?php
$_POST = json_decode(file_get_contents("php://input"));

@$book_number = $_POST->book_number ;  
@$table_name = $_POST->table_name ;  
 //$Query="SELECT * FROM `add_new_file_db` WHERE id LIKE '1%' ";

$Query="SELECT * FROM {$table_name} WHERE book_num = '{$book_number}' ORDER BY '{$book_number}' DESC ";
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