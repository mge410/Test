<?php
    $name = $_POST["name"];
    $text = $_POST["text"];
    $data = date('Y-m-d H:i');
    $array = [
        'name' => "$name",
        'text' => "$text",
        'data' => "$data"
    ];

    if ($text == ""){
        header('Location: /');
    }else {
        if (!$name){
            $name = "Анонимно";
        }
        $path = $_SERVER['DOCUMENT_ROOT'];
        $db = new SQLite3($path . "/db/guestbook.db");

        $sqlAdd = "INSERT INTO book (name, text, data) VALUES (:name, :text, :data)";
        $stmt = $db->prepare($sqlAdd);

        $stmt->bindParam(':name',$name);
        $stmt->bindParam(':text',$text);
        $stmt->bindParam(':data',$data);

        $result = $stmt->execute();
        header('Location: /');
    }
?>