document.addEventListener("DOMContentLoaded", function () {
  var footer = document.getElementById("footer");
  window.addEventListener("scroll", () => {
    var scrollFromTop = document.documentElement.scrollTop;
    var totalScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var actualScroll = (scrollFromTop / totalScroll) * 100;
    footer.style.backgroundColor = "hsl(" + actualScroll + ", 100%, 50%)";
  });
});
