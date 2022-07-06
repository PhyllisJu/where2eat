const answers = [
  "Olive Garden",
  "Pho Station",
  "Oozu Ramen",
  "Kungfu BBQ",
  "Kungfu Tea",
  "Mid Summer Lounge",
  "Mandarin Wok",
  "Shiquan Hotpot",
  "Star Karaoke",
  "Shiquan Wonton",
  "Golden Wheat",
  "Yogi Korean",
  "Sticky Rice",
  "Texas Roadhouse",
  "Cravings",
  "Moki Sushi",
  "Lao Sze Chuan",
  "Szechuan Taste",
  "Perkins",
];

const count = answers.length;
const viewBtn = document.getElementById("answer");
const resetBtn = document.getElementById("reset");
const linkEle = document.getElementById("link");
let answer = "View the Answer";
viewBtn.innerHTML = answer;

viewBtn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * count);
  answer = answers[index];
  viewBtn.innerHTML = answer;
  const link = queryGoogleMap(answer);
  linkEle.setAttribute("href", link);
  linkEle.innerHTML = "View on GoogleMap";
  linkEle.classList.remove("hidden");
});

resetBtn.addEventListener("click", function () {
  viewBtn.innerHTML = "View the Answer";
  linkEle.setAttribute("href", "");
  linkEle.innerHTML = "";
  linkEle.classList.add("hidden");
});

// google query
// https://google.com/maps/search/word+word
function queryGoogleMap(str) {
  const regex = /\w+/gi;
  const words = str.match(regex); // an array of words
  let baseQuery = "https://google.com/maps/search/";
  for (let i = 0; i < words.length; i++) {
    baseQuery = baseQuery + words[i] + "+";
  }
  const finalQuery = baseQuery.slice(0, -1); // remove last '+'
  return finalQuery;
}
