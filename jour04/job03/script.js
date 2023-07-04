document.addEventListener("DOMContentLoaded", () => {
  const filtrer = document.getElementById("button");

  filtrer.addEventListener("click", () => {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    const pokemons = "pokemon.json";

    fetch(pokemons)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let displayResults = document.getElementById("displayResults");
        displayResults.innerHTML = "";

        if (data.length > 0) {
          for (var x = 0; x < data.length; x++) {
            var obj = data[x];

            if (
              (id == "" || obj.id === parseInt(id)) &&
              (name == "" ||
                obj.name.english.toLowerCase().includes(name.toLowerCase())) &&
              (type == "" || obj.type.includes(type))
            ) {
              let results = document.createElement("p");
              results.innerHTML =
                "ID :" +
                obj.id +
                "<br>Nom :" +
                obj.name.english +
                "<br>Type :" +
                obj.type;
              displayResults.appendChild(results);
            }
          }
        } else {
          let noResults = document.createElement("p");
          noResults.innerHTML = "Pas de résultat.";
          displayResults.appendChild(noResults);
        }
      });
  });
});
