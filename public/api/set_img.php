<?php
class Img
{
    function select_img()
    {
        require_once("connect.php");
        $input = json_decode(file_get_contents("php://input"));
        $id = $input->id;
        $sql = "SELECT
        product_img.img_car_id,
        product_img.img_name,
        product_img.img_type
        FROM product_img
        WHERE img_car_id ='18'
        ";
        $run = $connect->prepare($sql);
        $run->execute();
        while ($show = $run->fetch()) {
            $data[] = $show;
        }
        echo json_encode($data);
    }
}
$r = new Img();
$r->select_img();
