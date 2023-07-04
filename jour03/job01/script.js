document.addEventListener("DOMContentLoaded", () => {
  var buttonText = document.getElementById("buttonText");
  var buttonDisplay = document.getElementById("buttonDisplay");
  var text = document.getElementById("text");
  var body = document.getElementById("body");

  buttonText.addEventListener("click", () => {
    text.style.display = "block";
  });

  buttonDisplay.addEventListener("click", () => {
    body.style.display = "none";
  });
});
