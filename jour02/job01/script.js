document.addEventListener("DOMContentLoaded", function () {
  function citation() {
    const text = document.getElementById("citation").innerHTML;
    console.log(text);
  }

  const btn = document.getElementById("button");
  btn.addEventListener("click", () => {
    citation();
  });
});
