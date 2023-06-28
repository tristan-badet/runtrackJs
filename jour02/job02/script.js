document.addEventListener("DOMContentLoaded", function () {
  var article = document.getElementById("article");

  function showhide() {
    if (article.style.display === "none") {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  }
  var btn = document.getElementById("button");
  btn.addEventListener("click", () => {
    showhide();
  });
});
