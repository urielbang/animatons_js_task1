var counterVh = 10;
document.body.innerHTML += `<button id="startBtn">click here to start</button>`;
function growHeight() {
  document.getElementById("elemq1").style.height = `${counterVh++}vh`;
}
document.getElementById("startBtn").addEventListener("click", function () {
  setInterval(growHeight, 1000);
});
