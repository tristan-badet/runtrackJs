document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("keylogger");
  document.addEventListener("keydown", function (event) {
    const isLetter = event.key.match(/^[a-z]$/i);
    const focus = document.activeElement === textarea;

    if (isLetter) {
      if (focus) {
        textarea.value += event.key.repeat(1);
      } else {
        textarea.value += event.key;
      }
    }
  });
});
