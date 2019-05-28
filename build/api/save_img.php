<?php
class Save
{
    function save_img()
    {
        require("connect.php");
        $descr = $_REQUEST['car_id'];
        $direact = "img/";
        $file = $_FILES['files']['name'];
        $tmp = $_FILES['files']['tmp_name'];
        foreach ($tmp as $key => $value) {
            $file_name = $_FILES['files']['name'][$key];
            $tmp_name = $_FILES['files']['tmp_name'][$key];
            $img_type = explode(".", $file_name)[1];
            $sql_name = "SELECT
            max(product_img.img_name::NUMERIC)
            FROM product_img
            ";
            $run_name = $connect->prepare($sql_name);
            $run_name->execute();
            $img_id = $run_name->fetch();
            $img_name = $img_id[0] + 1;
            $sql_img = "INSERT INTO product_img (img_car_id, img_name,img_type) VALUES ('$descr', '$img_name','.$img_type')";
            $run_img = $connect->prepare($sql_img);
            $run_img->execute();
            move_uploaded_file($tmp_name, $direact . $img_name . "." . $img_type);
        }
    }
}
$r = new Save();
$r->save_img();
