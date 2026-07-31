const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
const buttonTexts = [
    "Generate Again 🎨",
    "New Color 🌈",
    "Randomize 🎲",
    "Try Another ✨",
    "Change Color 🚀",
    "Magic Color 🪄",
    "Surprise Me 😍"
];
const copyBtn = document.getElementById("copyBtn");
const historyList = document.getElementById("historyList");

function addToHistory(color){
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;
    box.title = color;
    box.addEventListener("click", ()=>{
        document.body.style.backgroundColor = color;
        colorCode.textContent = color;
    });
    historyList.prepend(box);
    if(historyList.children.length>5){
        historyList.removeChild(historyList.lastChild);

    }
}

btn.addEventListener("click", () => {

    const color = randomColor();
    const btnColor = randomColor();

    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
    addToHistory(color);

    btn.style.backgroundColor = btnColor;
    btn.style.color = "white";

    btn.textContent =
    buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

});

copyBtn.addEventListener("click", ()=>{
      navigator.clipboard.writeText(colorCode.textContent);
   copyBtn.textContent = `${colorCode.textContent} copied`;

   setTimeout(()=>{
 copyBtn.textContent = "Copy color";
   },2000);
});

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

