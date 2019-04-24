<?php
class Car
{
    public function type_car()
    {
        require_once 'connect.php';
        $sql_car = "SELECT
        car_type.car_type_id,
        car_type.t_name,
        car_type.eng_name,
        car_type.nick_name,
        car_type.active,
        car_type.img
        FROM
        car_type
        WHERE
        active = '1'";

        $run = $connect->prepare($sql_car);
        $run->execute();
        while ($show = $run->fetch()) {
            $show_sub = [];
            $sql_sub = "SELECT
            car_type_spec.spec_name,
            car_type_spec.spec_name_th,
            car_type_spec.car_type_spec_id
            FROM
                car_type_spec
            WHERE
                active = '1'
            AND car_type = '$show[0]'";
            $run_sub = $connect->prepare($sql_sub);
            $run_sub->execute();
            while ($sub = $run_sub->fetch()) {
                $show_sub[] = array("spec_name" => $sub[0], "spec_name_th" => $sub[1], "car_type_spec_id" => $sub[2]);
            }
            $data[] = array("car_type_id" => $show[0], "t_name" => $show[1], "eng_name" => $show[2], "nick_name" => $show[3], "active" => $show[4], "img" => $show[5], "sub" => $show_sub);
        }

        echo json_encode($data);
    }
}
$x = new Car();
$x->type_car();
