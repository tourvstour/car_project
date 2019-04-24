<?php
require_once 'connect.php';
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$sql = "SELECT
 car_type_spec.spec_name,
 car_type_spec.spec_name_th,
 car_type_spec.car_type_spec_id
 FROM
     car_type_spec
 WHERE
     active = '1'
 AND car_type = '$id' ";
$run = $connect->prepare($sql);
$run->execute();
while ($show = $run->fetch()) {
    $rs[] = $show;
}
echo json_encode($rs);
