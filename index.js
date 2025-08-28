// love btn

// function getCount(id) {
//   let countElement = document.getElementById(id);
//   let countValue = Number(countElement.innerText) || 0;
//   let totalCount = countValue + 1;
//   countElement.innerText = totalCount;
// }
// document.getElementById("love-btn-1").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-2").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-3").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-4").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-5").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-6").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-7").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-8").addEventListener("click", function () {
//   getCount("count-element");
// });
// document.getElementById("love-btn-9").addEventListener("click", function () {
//   getCount("count-element");
// });

let count = 0;
const loveBtns = document.getElementsByClassName("love-btn");
let countElement = document.getElementById("count-element");
for (let loveBtn of loveBtns) {
  loveBtn.addEventListener("click", function () {
    count++;
    countElement.innerText = count;
  });
}

// call btn
let coins = 100;
const callBtns = document.getElementsByClassName("call-btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const callerName =
      callBtn.parentNode.parentNode.children[0].children[0].children[1]
        .innerText;
    const callerNumber =
      callBtn.parentNode.parentNode.children[0].children[0].children[3]
        .innerText;
    if (coins >= 20) {
      coins -= 20;
      document.getElementById("coin-element").innerText = coins;

      alert("calling " + callerName + " : " + callerNumber);

      // call history
      const newTime = new Date().toLocaleTimeString();
      const callHistoryContainer = document.getElementById(
        "call-history-container"
      );
      const newEl = document.createElement("div");
      newEl.innerHTML = `
    <div class="flex justify-between items-center bg-slate-100 p-3 rounded-lg shadow-md">
          <div>
            <h1 class="text-[18px]">${callerName}</h1>
            <p class="text-[#5c5c5c]">${callerNumber}</p>
          </div>
          <div>${newTime}</div>
        </div>
    `;
      callHistoryContainer.appendChild(newEl);
    } else {
      alert("আপনার কাছে পর্যাপ্ত coins নেই কল করার জন্য!");
    }
  });
}

// clear btn
document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryContainer = document.getElementById(
    "call-history-container"
  );
  callHistoryContainer.innerHTML = "";
});

// copy btn
let copyCount = 0;

const copyBtns = document.getElementsByClassName("copy-btn");
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const copyCountEl = document.getElementById("copy-count");
    copyCount++;
    copyCountEl.innerText = copyCount;
    alert("Number copied!");
  });
}
