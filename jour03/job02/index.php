<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div id="container">
        <img src="assets/arc1.png" id="arc1" draggable="true">
        <img src="assets/arc2.png" id="arc2" draggable="true">
        <img src="assets/arc3.png" id="arc3" draggable="true">
        <img src="assets/arc4.png" id="arc4" draggable="true">
        <img src="assets/arc5.png" id="arc5" draggable="true">
        <img src="assets/arc6.png" id="arc6" draggable="true">
    </div>
    <div id="emptyContainer" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
        <button id="random">Mélanger</button>
        <p id="result"></p>
</body>
</html>