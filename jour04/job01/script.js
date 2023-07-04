document.addEventListener("DOMContentLoaded", () => {
  let text = "expression.txt";
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    fetch(text)
      .then((response) => response.text())
      .then((text) => {
        paragraph.innerHTML = text;
        document.body.appendChild(paragraph);
      });
  });
});
