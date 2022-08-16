<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
        <form id="form" action="" class="form">
            <select name="city" id="city" form__select>
                <?php 
                    $filename = "./php/hello.txt";
                    if (file_exists($filename)){
                        $updata = date("F d Y", filemtime($filename));
                        $datanow = date("F d Y");
                        if ($updata !== $datanow){
                            ?><script src="./js/script.js"></script><?
                        }
                    } else {
                        ?><script src="./js/script.js"></script><?
                    }
                ?>
                <?php
                    include("./php/oction.php")
                ?>
            </select>
            <br>
            <input id="value" name="value" type="text" class="input" placeholder="вес кг">
            <button type="submit">Отправить</button>
            <div class="text"></div>
            <script src="./js/getresponse.js"></script>
        </form>
    </div>
</body>
</html>