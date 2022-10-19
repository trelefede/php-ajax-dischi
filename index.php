<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/style.css">
    <title>PHP DISCS</title>
</head>
<body>

<?php

include __DIR__ . '/data.php';

foreach ($albums as $album){
    echo $album['title'];
}

?>


    
</body>
</html>