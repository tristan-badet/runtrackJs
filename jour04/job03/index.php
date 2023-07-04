<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <title>Index</title>
</head>
<body>
    <form id="form">
        <label for="id">ID : </label>
        <input type="text" name="id" id="id">
        <br>

        <label for="name">Nom : </label>
        <input type="text" name="name" id="name">
        <br>

        <label for="type">Type : </label>
        <select name="type" id="type">
            <option value="">Choisissez un type</option>
            <option value="Bug">Bug</option>
            <option value="Dragon">Dragon</option>
            <option value="Electric">Electric</option>
            <option value="Fighting">Fighting</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Ghost">Ghost</option>
            <option value="Grass">Grass</option>
            <option value="Ground">Ground</option>
            <option value="Ice">Ice</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Water">Water</option>
        </select>
        <br>

        <input type="button" name="button" id="button" value="filtrer">
    </form>

    <article id="displayResults"></article>
</body>
</html>