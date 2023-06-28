document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  function addone() {
    count += 1;
    document.getElementById("compteur").innerHTML = count;
  }
  var btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    addone();
  });
});
