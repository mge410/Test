<?php
    $file = fopen("./php/hello.txt", 'r') or die("не удалось создать файл");
    $filestr = fgets($file);
    $array = explode(",", $filestr);
    foreach ($array as $key => $value){
        echo "<option value='${value}'>${value}</option>";
    }
?>