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
        <h1>Гостевая книга</h1>
        <div class="conteiner-record">
            <?php
                include './php/adddb.php'
            ?>
        </div>
        <form action="./php/handler.php" class="form" method="post">
            <div class="form__conteiner">
                <input type="text" placeholder="name" name="name" class="form__name">
                <input type="text" placeholder="text" name="text" class="form__text">
            </div>
            <button type="submit">Отправить</button>
        </form>
    </div>
    <script src="/js/script.js"></script>
</body>
</html>