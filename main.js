var counterVh = 10;

document.body.innerHTML += `<button id="startBtn">click here to start</button>`;
document.body.innerHTML += `<button id="stopBtn">click here to stop</button>`;
var interval;
function growHeight() {
  document.getElementById("elemq1").style.height = `${counterVh++}vh`;
}
document.getElementById("startBtn").addEventListener("click", function () {
  interval = setInterval(growHeight, 500);
});
document.getElementById("stopBtn").addEventListener("click", function () {
  clearInterval(interval);
});
document.body.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    clearInterval(interval);
  }
});
