const answers = [
  "Olive Garden",
  "Pho Station",
  "Oozo Ramen",
  "Kungfu BBQ",
  "Kungfu Tea",
  "Kungfu Station",
  "PuYueXiang",
  "DongHai YuCun",
  "Szechuan Hotpot",
  "Star Karaoke",
  "Szechuan Restaurant",
  "MaiXiangCun",
  "Yogi",
  "Sticky Rice",
  "Texas Roadhouse",
  "Cravings",
  "Moki Sushi",
  "Lao Szechuan",
];

const count = answers.length;
const viewBtn = document.getElementById("answer");
const resetBtn = document.getElementById("reset");
let answer = "View the Answer";
viewBtn.innerHTML = answer;

viewBtn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * count);
  answer = answers[index];
  viewBtn.innerHTML = answer;
});

resetBtn.addEventListener("click", function () {
  viewBtn.innerHTML = "View the Answer";
});
