const rock = document.querySelector(".ROCK");
const paper = document.querySelector(".PAPER");
const scissors = document.querySelector(".SCISSORS");
const startGameSection = document.querySelector(".game-start");
const resultDisplay = document.querySelector(".result-display");
const app = document.querySelector(".app-background");
const rulesPage = document.querySelector('.rules-background')
const backdrop = document.querySelector('.backdrop')
let housePick;
let userPick;
const userScore = document.querySelector(".user-score__score");
let score = 0;

const computerSelection = () => {
  const computerPick = Math.random() * 10;
  if (computerPick < 2) {
    housePick = "ROCK";
  } else if (computerPick > 2 && computerPick < 6) {
    housePick = "PAPER";
  } else if (computerPick > 6 && computerPick < 10) {
    housePick = "SCISSORS";
  }
};

const winMessage = () => {
  const winMessage = document.createElement("div");
  winMessage.className = "result-message";
  const header = document.createElement("h2");
  header.className = "result-message__header";
  header.textContent = "YOU WIN";
  const restartBtn = document.createElement("a");
  restartBtn.className = "restart-button";
  restartBtn.textContent = "play again";
  restartBtn.style.color = "blue";
  winMessage.append(header);
  winMessage.append(restartBtn);
  restartBtn.addEventListener("click", () => {
    resultDisplay.style.display = "none";
    startGameSection.style.display = "block";
    resultDisplay.innerHTML = "";
  });
  return winMessage;
};

const drawMessage = () => {
  const loseMessage = document.createElement("div");
  loseMessage.className = "result-message";
  const header = document.createElement("h2");
  header.className = "result-message__header";
  header.textContent = "YOU DREW";
  const restartBtn = document.createElement("a");
  restartBtn.className = "restart-button";
  restartBtn.textContent = "play again";
  restartBtn.style.color = "black";
  loseMessage.append(header);
  loseMessage.append(restartBtn);
  restartBtn.addEventListener("click", () => {
    resultDisplay.style.display = "none";
    startGameSection.style.display = "block";
    resultDisplay.innerHTML = "";
  });
  return loseMessage;
};

const loseMessage = () => {
  const drawMessage = document.createElement("div");
  drawMessage.className = "result-message";
  const header = document.createElement("h2");
  header.className = "result-message__header";
  header.textContent = "YOU LOSE";
  const restartBtn = document.createElement("a");
  restartBtn.className = "restart-button";
  restartBtn.textContent = "play again";
  restartBtn.style.color = "red";
  drawMessage.append(header);
  drawMessage.append(restartBtn);
  restartBtn.addEventListener("click", () => {
    resultDisplay.style.display = "none";
    startGameSection.style.display = "block";
    resultDisplay.innerHTML = "";
  });
  return drawMessage;
};

const gameLogic = () => {
  if (housePick === "ROCK" && userPick === "PAPER") {
    score ++;
    resultDisplay.append(winMessage());
  } else if (housePick === "SCISSORS" && userPick === "ROCK") {
    scoreStatus = 'WIN'
    score ++;
    resultDisplay.append(winMessage());
  } else if (housePick === "PAPER" && userPick === "SCISSORS") {
    score ++;
    resultDisplay.append(winMessage());
  } else if (housePick === "SCISSORS" && userPick === "SCISSORS") {
    score += 0
    resultDisplay.append(drawMessage());
  } else if (housePick === "PAPER" && userPick === "PAPER") {
    score += 0
    resultDisplay.append(drawMessage());
  } else if (housePick === "ROCK" && userPick === "ROCK") {
    score += 0
    resultDisplay.append(drawMessage());
  } else {
    score --;
    resultDisplay.append(loseMessage());
  }
};

const resultDisplays = () => {
  const userResult = document.createElement("div");
  userResult.className = "user-side";
  userResult.innerHTML = `
    <h2 class="result-display__heading">YOU PICKED</h2>
    <div class="${userPick}-result">
        <div class="${userPick.toLowerCase()}">
            <img src="images/icon-${userPick.toLowerCase()}.svg" alt="" />
        </div>
    </div>
    `;
  const computerResult = document.createElement("div");
  computerResult.className = "computer-side";
  computerResult.innerHTML = `
    <h2 class="result-display__heading">THE HOUSE PICKED</h2>
    <div class="${housePick}-result">
        <div class="${housePick.toLowerCase()}">
            <img src="images/icon-${housePick.toLowerCase()}.svg" alt="" />
        </div>
    </div>
    `;
  resultDisplay.append(userResult);
  resultDisplay.append(computerResult);
};

rock.addEventListener("click", () => {
  userPick = "ROCK";
  resultDisplay.style.display = "block";
  startGameSection.style.display = "none";
  computerSelection();
  gameLogic();
  resultDisplays();
  userScore.textContent = score;
});
paper.addEventListener("click", () => {
  userPick = "PAPER";
  resultDisplay.style.display = "block";
  startGameSection.style.display = "none";
  computerSelection();
  gameLogic();
  resultDisplays();
  userScore.textContent = score;
});
scissors.addEventListener("click", () => {
  userPick = "SCISSORS";
  resultDisplay.style.display = "block";
  startGameSection.style.display = "none";
  computerSelection();
  gameLogic();
  resultDisplays();
  userScore.textContent = score;
});

const rulesBtnHandler = () => {
  const rulesBtn = document.querySelector('.rules-button')
  rulesBtn.addEventListener('click', () => {
    rulesPage.style.display = 'block'
    backdrop.style.display = 'block'
  })
}

const cancelRulesPageHandler = () => {
  const cancelRulesPageBtn = document.querySelector('.rules-background__cancel')
  cancelRulesPageBtn.addEventListener('click', () => {
    rulesPage.style.display = 'none'
    backdrop.style.display = 'none'
  })

}
rulesBtnHandler()
cancelRulesPageHandler()
