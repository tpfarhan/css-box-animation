function createBoxes() {
  var box = document.createElement("div");
  box.classList.add("box");
  return box;
}

export default function initApp(elementId) {
  var applicationRoot = document.querySelector(elementId);
  if (applicationRoot) {
    for (var i = 0; i < 10; i++) {
      applicationRoot.appendChild(createBoxes());
    }
  }
}
