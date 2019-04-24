<?php
class Save
{
    function save_car()
    {
        require("connect.php");
        $input = json_decode(file_get_contents("php://input"));
        $data = $input->data;
        foreach ($data as $a) {
            $sql = "INSERT INTO product (
                car_product_type,
                brand_product_number,
                serie_number,
                serie_type_number,
                serie_description,
                year_product,
                engine,
                gear_number,
                seat,
                mileage,
                color,
                price,
                img
            )
            VALUES
                (
                    '$a->type_car',
                    '$a->brand',
                    '$a->serie',
                    '$a->serie_types',
                    '$a->serie_descriptions',
                    '$a->year',
                    '$a->engine',
                    '$a->gear',
                    '$a->seat',
                    '$a->mile',
                    '$a->color',
                    '$a->price',
                    '1'
                )";
            $run = $connect->prepare($sql);
            $run->execute();
            $sql_id = "SELECT max(car_product_id) FROM product";
            $run_id = $connect->prepare($sql_id);
            $run_id->execute();
            $show = $run_id->fetch();
            $id =  $show[0];
        }

        $mess[] = array("stat" => "200", "message" => "บันทึกสำเร็จ", "car_id" => $id);
        echo json_encode($mess);
    }
}
$r = new Save();
$r->save_car();
