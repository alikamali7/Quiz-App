const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreEle = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");

scoreEle.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("invalid username or score");
  } else {
    const finalScore = { name: input.value, score };
    highScores.push(finalScore);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score");
    window.location.assign("/")
  }
};

button.addEventListener("click", saveHandler);
