document.addEventListener("DOMContentLoaded", () => {
  const url = "jsonString.json";
  const key = "name";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const test = jsonValueKey(data, key);
      displayValue(test);
      console.log(test);
    });

  function jsonValueKey(jsonData, key) {
    if (key in jsonData) {
      return jsonData[key];
    } else {
      console.log("erreur");
    }
  }

  function displayValue(value) {
    const display = document.getElementById("display");
    display.textContent = value;
  }
});
