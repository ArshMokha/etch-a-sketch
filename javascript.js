const sketchSize = prompt("What size would you like?: ", 64);

const container = document.querySelector(".container");

function setSize() {
  const size = sketchSize * 16;

  container.style.width = size + "px";
  container.style.height = size + "px";
}

function createPixels() {
  for (let i = 0; i < sketchSize*sketchSize; i++) {
    const div = document.createElement("div");
    div.classList.toggle("pixel");
    container.appendChild(div);
  }
}

function createSketch() {
  const pixels = container.querySelectorAll(".pixel");

  for (let pixel of pixels) {
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = "red";
    })
  }
}

setSize();
createPixels();
createSketch();
