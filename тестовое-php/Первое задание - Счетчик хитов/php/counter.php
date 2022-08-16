<?php
    $file = file("text.txt");
    $count = implode("", $file);
    $count++;
    $myfile = fopen("text.txt","w");
    fputs($myfile,$count);
    fclose($myfile);
?>