const container = document.querySelector(".container");

const resize = document.querySelector(".sketch-size");

resize.addEventListener("click", () => {
  sketchSize = prompt("What size would you like?: ", 64);
  if (sketchSize <= 100) {
    setSize();
    deletePixels();
    createPixels();
    createSketch();
  } else {
    container.innerText = "Size too large";
  }
})

let sketchSize;

function setSize() {
    const size = sketchSize * 16;

    container.style.width = size + "px";
    container.style.height = size + "px";
}

function deletePixels() {
  const pixels = document.querySelectorAll(".pixel");

  for (let pixel of pixels) {
    pixel.remove();
  }
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
