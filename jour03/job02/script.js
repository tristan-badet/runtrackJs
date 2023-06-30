document.addEventListener("DOMContentLoaded", () => {
  var container = document.getElementById("container");
  var random = document.getElementById("random");
  var resultMessage = document.getElementById("result");
  var emptyContainer = document.getElementById("emptyContainer");
  const winningOrder = Array.from(container.children);

  function shuffle() {
    for (var x = winningOrder.length; x >= 0; x--) {
      container.appendChild(container.children[(Math.random() * x) | 0]);
    }
  }

  random.addEventListener("click", shuffle);

  function victoryVerification() {
    var actualImage = Array.from(emptyContainer.children);
    var winningImage = actualImage.every(
      (img, index) => img.id === `arc${index + 1}`
    );

    if (winningImage) {
      resultMessage.textContent = "Vous avez gagné !";
      resultMessage.style.color = "green";
      resultMessage.style.fontSize = "25px";
    } else {
      resultMessage.textContent = "C'est perdu !";
      resultMessage.style.color = "red";
      resultMessage.style.fontSize = "25px";
    }
  }

  function checkAllPiecesPlaced() {
    var emptyContainerChildren = Array.from(emptyContainer.children);
    var allPiecesPlaced = emptyContainerChildren.length === winningOrder.length;

    if (allPiecesPlaced) {
      victoryVerification();
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const draggedImage = document.getElementById(imageId);
    emptyContainer.appendChild(draggedImage);

    checkAllPiecesPlaced();
  }

  const arcImages = Array.from(container.children);
  arcImages.forEach((image) => {
    image.draggable = true;
    image.addEventListener("dragstart", dragStart);
  });

  emptyContainer.addEventListener("dragover", allowDrop);
  emptyContainer.addEventListener("drop", drop);
});
