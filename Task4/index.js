const body = document.body;

const mainBlock = document.createElement("div");
const block1 = document.createElement("div");
const block2 = document.createElement("div");
const block3 = document.createElement("div");
const block4 = document.createElement("div");
const block5 = document.createElement("div");
const block6 = document.createElement("div");
const block7 = document.createElement("div");

mainBlock.classList.add("mainBlock");
block1.classList.add("block1");
block2.classList.add("block2");
block3.classList.add("block3");
block4.classList.add("block4");
block5.classList.add("block5");
block6.classList.add("block6");
block7.classList.add("block7");

let block1Count = 0;
let block3Count = 0;
let block4Count = 0;
let block5Count = 0;
let block6Count = 0;
let block7Count = 0;

block1.textContent = block1Count;
block3.textContent = block3Count;
block4.textContent = block4Count;
block5.textContent = block5Count;
block6.textContent = block6Count;
block7.textContent = block7Count;

body.insertAdjacentElement("afterbegin", mainBlock);
mainBlock.append(block1, block2);
block2.append(block3, block4, block5, block6, block7);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

mainBlock.addEventListener("click", event => {
  const color = getRandomHexColor();

  console.log("event.target: ", event.target.classList[0]);
  console.log("event.currentTarget: ", event.currentTarget);

  event.target.style.backgroundColor = color;

  switch (event.target.classList[0]) {
    case "block1":
      block1Count += 1;
      block1.textContent = block1Count;
      break;
    case "block3":
      block3Count += 1;
      block3.textContent = block3Count;
      break;
    case "block4":
      block4Count += 1;
      block4.textContent = block4Count;
      break;
    case "block5":
      block5Count += 1;
      block5.textContent = block5Count;
      break;
    case "block6":
      block6Count += 1;
      block6.textContent = block6Count;
      break;
    case "block7":
      block7Count += 1;
      block7.textContent = block7Count;
      break;
  }
});
