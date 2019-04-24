<?php
class Selects
{
    function select_item()
    {
        require("connect.php");
        $input = json_decode(file_get_contents("php://input"));
        $object_item = $input;
        $object_type = $input->type;
        switch ($object_type) {
            case 'brandCar':
                //echo "brandCar";
                $sql = "SELECT * FROM product_brand";
                $run = $connect->prepare($sql);
                $run->execute();
                while ($row = $run->fetch()) {
                    $show[] = $row;
                }
                echo json_encode($show);
                break;
            case 'serie':
                //echo "serie";
                $sql = "SELECT * FROM product_serie";
                $run = $connect->prepare($sql);
                $run->execute();
                while ($row = $run->fetch()) {
                    $show[] = $row;
                }
                echo json_encode($show);
                break;
            case 'serieType':
                //echo "serieType";
                $sql = "SELECT * FROM product_serie_type";
                $run = $connect->prepare($sql);
                $run->execute();
                while ($row = $run->fetch()) {
                    $show[] = $row;
                }
                echo json_encode($show);
                break;
            case 'serieDescription':
                //echo "serieDescription";
                $sql = "SELECT * FROM product_serie_description";
                $run = $connect->prepare($sql);
                $run->execute();
                while ($row = $run->fetch()) {
                    $show[] = $row;
                }
                echo json_encode($show);
                break;
            case 'gear':
                //echo "gear";
                $sql = "SELECT * FROM product_gear";
                $run = $connect->prepare($sql);
                $run->execute();
                while ($row = $run->fetch()) {
                    $show[] = $row;
                }
                echo json_encode($show);
                break;
            default:
                # code...
                break;
        }
    }
}
$r = new Selects();
$r->select_item();
?>