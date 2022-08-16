<?php
    $fd = fopen("hello.txt", 'w') or die("не удалось создать файл");
    $str = implode($_POST, ",");
    fwrite($fd, $str);
    fclose($fd);
?>