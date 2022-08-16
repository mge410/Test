<?php
    $path = $_SERVER['DOCUMENT_ROOT'];
    $db = new SQLite3($path . "/db/guestbook.db");

    $results = $db->query('SELECT name, text, data FROM book');
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        echo "<div class='title'><div>author - {$row['name']}</div><div>data - {$row['data']}</div></div>
        <div class='text'>{$row[text]}</div>";
    }
    $db->close();
?>
